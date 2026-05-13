# AGENTS.md

Guidance for AI agents working on this repository.

## What This Site Is

This is a static personal webpage for Gonzalo Mellizo-Soto Diaz. The audience is technical people: engineers, hiring managers, founders, and platform/ML infrastructure teams who want to understand what Gonzalo has built and how he thinks.

Keep the site practical and specific. It should read like a technical portfolio, not a generic landing page or personal brand campaign.

## Product Direction

- Focus on backend engineering, platform work, MLOps, cloud infrastructure, and production ownership.
- Prefer concrete project context: problem, constraints, role, architecture, decisions, and impact.
- Keep a first-person but clean tone. It should feel personal without becoming casual filler.
- Write for technical readers who want to evaluate judgment, scope, and system understanding.
- Avoid over-commercial language such as "unlock", "world-class", "seamless", "cutting-edge", or vague claims without evidence.
- Do not add email/contact references. The site currently uses GitHub and LinkedIn only.

## App Structure

The app is a Vite + React + TypeScript static site using Material UI and hash routing for GitHub Pages.

Important files:

- `src/App.tsx`: route definitions.
- `src/components/SiteShell.tsx`: header, navigation, footer, dark-mode toggle.
- `src/components/Section.tsx`: shared section wrapper.
- `src/components/ProjectCard.tsx`: clickable project cards used on the projects page.
- `src/components/ArchitectureFlow.tsx`: compact generated architecture summary on project detail pages.
- `src/pages/HomePage.tsx`: homepage composition and featured project cards.
- `src/pages/ProjectsPage.tsx`: project grid.
- `src/pages/ProjectDetailPage.tsx`: detail view for each project.
- `src/pages/ExperiencePage.tsx`: work history and education.
- `src/pages/AiPage.tsx`: how Gonzalo uses AI.
- `src/pages/AboutPage.tsx`: working style and external links.
- `src/content/`: most editable content.
- `src/assets/`: local image assets used by pages and projects.
- `src/styles.css`: global layout and custom class styling.
- `src/theme.ts`: Material UI theme.
- `scripts/visual-check.mjs`: Playwright-based route screenshot and console check.

## Content Model

Most changes should start in `src/content/`:

- `profile.ts`: homepage/about profile copy, focus areas, impact highlights.
- `experience.ts`: work history, periods, responsibilities, technologies.
- `projects.ts`: project writeups, cards, detail pages, optional diagrams.
- `skills.ts`: skill lists used outside the homepage.
- `ai.ts`: AI usage page copy.

The `Project` type in `src/content/projects.ts` drives both project cards and detail pages. When adding or editing a project, keep these fields coherent:

- `title`: concrete project name.
- `eyebrow`: short category/company context.
- `jobTag`: one of the supported company tags.
- `period`: match the corresponding experience period.
- `role`, `systemType`, `scale`: appear in cards and the detail page "At a glance" section.
- `summary`: short project overview.
- `problem`: narrative description of the problem and context.
- `diagram`: optional image asset for the detail page.
- `built`, `architecture`, `decisions`, `impact`: detail page sections.
- `technologies`: shown as chips.

When a project has a user-provided diagram, use the original image as-is. Copy it into `src/assets/` and reference it from `projects.ts`; do not recreate or reinterpret it unless explicitly requested.

## Routing

The app uses React Router with hash routing for GitHub Pages. Routes are defined in `src/App.tsx`:

- `/`
- `/experience`
- `/projects`
- `/projects/:slug`
- `/ai`
- `/about`

Do not switch to browser routing unless the deployment strategy is changed.

## Design Guidelines

- Keep layouts dense, clear, and technical. Avoid marketing hero patterns, decorative fluff, and vague visual sections.
- Use Material UI components and the existing theme before introducing new UI libraries.
- Cards should stay at `8px` radius or less and should not be nested inside other cards.
- Project cards are clickable surfaces. Preserve keyboard focus, hover affordance, and the visible action row.
- Keep text readable on mobile. If a label can grow, make it wrap or constrain it instead of letting it overflow.
- Use existing CSS variables in `src/styles.css` for colors and surfaces.
- Keep dark mode working when adding custom styles.

## Copy Guidelines

Preferred tone:

- Direct, first-person, technical.
- Specific about what was built and why.
- Honest about role and seniority.
- Focused on tradeoffs, maintainability, reliability, and user/team value.

Examples of good phrasing:

- "I helped define..."
- "The problem was..."
- "The architecture allowed..."
- "This made it easier for data scientists to..."
- "I was more junior here, and my contribution focused on..."

Avoid:

- Generic marketing copy.
- Unsupported metrics.
- Inflated ownership claims.
- Repeating the same idea in summary, problem, and impact.
- Adding contact/email references.

## Assets

- Store committed site assets in `src/assets/`.
- Use descriptive lowercase filenames, for example `bbva-ai-platform.png`.
- For uploaded diagrams, preserve the original image content.
- Keep `alt` text in `projects.ts` meaningful and concise.

## Verification

Use these commands:

```bash
npm run build
```

```bash
npm run check:visual
```

`npm run build` may print a Vite warning if the local Node version is below Vite's preferred range, but the command can still complete successfully. Report the warning if it appears.

`npm run check:visual` builds the app, serves the generated site, checks every route at multiple viewport sizes, and writes screenshots to:

```txt
artifacts/visual-check/latest/
```

When only editing Markdown documentation, a build is usually not necessary. For content, layout, routing, asset, or CSS changes, run at least `npm run build`; run the visual check when layout or rendered content could change.

## Working Safely

- The worktree may contain user changes. Do not revert unrelated edits.
- Keep changes scoped to the user request.
- Prefer editing content files over hardcoding copy inside components.
- If changing project data, confirm cards and detail pages still have the fields they expect.
- If adding a new route, update `src/App.tsx`, `SiteShell.tsx`, and the visual check route expectations if needed.
- Do not remove existing assets unless they are no longer referenced and the user asked for cleanup.
