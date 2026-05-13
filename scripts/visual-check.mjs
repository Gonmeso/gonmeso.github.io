import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'artifacts', 'visual-check', 'latest');
const projectContentPath = path.join(rootDir, 'src', 'content', 'projects.ts');

const viewports = [
  { name: 'wide', width: 1920, height: 1200 },
  { name: 'desktop', width: 1440, height: 1100 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

const staticRoutes = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/#/projects' },
  { name: 'experience', path: '/#/experience' },
  { name: 'ai', path: '/#/ai' },
  { name: 'about', path: '/#/about' },
];

const options = parseArgs(process.argv.slice(2));
const baseUrl = trimTrailingSlash(options.baseUrl ?? '');

async function main() {
  const routes = [...staticRoutes, ...(await projectRoutes())];
  await resetOutputDir();

  let server;
  let browser;
  const issues = [];

  try {
    server = baseUrl ? null : await startPreviewServer();
    const targetBaseUrl = baseUrl || server.url;
    browser = await chromium.launch();

    for (const viewport of viewports) {
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1,
      });

      for (const route of routes) {
        const pageIssues = [];
        const page = await context.newPage();

        page.on('console', (message) => {
          if (message.type() === 'error') {
            pageIssues.push(`console error: ${message.text()}`);
          }
        });

        page.on('pageerror', (error) => {
          pageIssues.push(`page error: ${error.message}`);
        });

        page.on('requestfailed', (request) => {
          pageIssues.push(`request failed: ${request.url()} (${request.failure()?.errorText ?? 'unknown error'})`);
        });

        const url = new URL(route.path, `${targetBaseUrl}/`).toString();
        await page.goto(url, { waitUntil: 'networkidle' });
        await page.locator('#root').waitFor({ state: 'visible', timeout: 10_000 });

        const rootText = (await page.locator('#root').innerText()).trim();
        if (rootText.length < 20) {
          pageIssues.push('root content is empty or unexpectedly short');
        }

        const horizontalOverflow = await page.evaluate(() => {
          const pageWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
          return pageWidth - window.innerWidth;
        });
        if (horizontalOverflow > 1) {
          pageIssues.push(`page has horizontal overflow of ${horizontalOverflow}px`);
        }

        const screenshotPath = path.join(outputDir, `${viewport.name}-${route.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        await page.close();

        if (pageIssues.length > 0) {
          issues.push({
            route: route.path,
            viewport: viewport.name,
            details: pageIssues,
          });
        }
      }

      await context.close();
    }
  } finally {
    await browser?.close();
    await server?.stop();
  }

  if (issues.length > 0) {
    console.error('\nVisual check failed:');
    for (const issue of issues) {
      console.error(`- ${issue.viewport} ${issue.route}`);
      for (const detail of issue.details) {
        console.error(`  ${detail}`);
      }
    }
    process.exitCode = 1;
    return;
  }

  console.log(`Visual check passed for ${routes.length} routes across ${viewports.length} viewports.`);
  console.log(`Screenshots written to ${path.relative(rootDir, outputDir)}`);
}

function parseArgs(args) {
  const parsed = {};

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--base-url') {
      const value = args[index + 1];
      if (!value) {
        throw new Error('--base-url requires a value');
      }
      parsed.baseUrl = value;
      index += 1;
    }
  }

  return parsed;
}

async function projectRoutes() {
  const source = await readFile(projectContentPath, 'utf8');
  const slugs = [...source.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);

  if (slugs.length === 0) {
    throw new Error(`No project slugs found in ${path.relative(rootDir, projectContentPath)}`);
  }

  return slugs.map((slug) => ({
    name: `project-${slug}`,
    path: `/#/projects/${slug}`,
  }));
}

async function resetOutputDir() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
}

async function startPreviewServer() {
  const port = await getAvailablePort();
  let stopping = false;
  const child = spawn(
    'npm',
    ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(port), '--strictPort'],
    {
      cwd: rootDir,
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  );

  child.stdout.on('data', (chunk) => process.stdout.write(chunk));
  child.stderr.on('data', (chunk) => process.stderr.write(chunk));

  child.on('exit', (code) => {
    if (!stopping && code !== null && code !== 0) {
      process.stderr.write(`Preview server exited with code ${code}\n`);
    }
  });

  const url = `http://127.0.0.1:${port}`;
  await waitForHttp(url);

  return {
    url,
    stop: () =>
      new Promise((resolve) => {
        stopping = true;
        child.once('exit', resolve);
        child.kill('SIGTERM');
        setTimeout(resolve, 1000);
      }),
  };
}

async function getAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForHttp(url) {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < 15_000) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Preview server did not become ready at ${url}: ${lastError?.message ?? 'unknown error'}`);
}

function trimTrailingSlash(value) {
  return value.endsWith('/') ? value.slice(0, -1) : value;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
