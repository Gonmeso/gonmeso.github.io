# Personal Web

Static personal website for myself.

The site is a personal profile and resume-style portfolio focused on backend development. It includes a clean homepage, professional experience, project writeups, and an about/contact section.

It is built as a static site so it can run on GitHub Pages without a backend service.

## Stack

- Vite
- React
- TypeScript
- Material UI
- React Router with hash routing
- GitHub Pages deployment through GitHub Actions

## Project Structure

```txt
src/
  assets/        Static visual assets
  components/    Shared layout and UI components
  content/       Editable profile, skills, experience, and project data
  pages/         Route-level pages
```

Most website content lives in `src/content/`, so profile information and project text can be updated without changing the page components.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Install the browser used for visual checks:

```bash
npm run check:visual:setup
```

Run the local development visual check before committing:

```bash
npm run check:visual:local
```

This builds the site from your local working tree, serves the generated `dist/` output, checks every route at desktop and mobile sizes, fails on browser console errors or blank content, and writes screenshots to:

```txt
artifacts/visual-check/latest/
```

Check the deployed GitHub Pages site after committing and deploying:

```bash
npm run check:visual:github
```

`npm run check:visual` is an alias for the local check. `npm run check:visual:live` is kept as an alias for the GitHub Pages check.

## Deployment

The GitHub Pages workflow is defined at:

```txt
.github/workflows/deploy.yml
```

To deploy:

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages.
3. Set the Pages source to **GitHub Actions**.
4. Push to `master`.

The workflow builds the app and publishes the `dist/` directory.

## Routing

The app uses hash routing so routes work reliably on GitHub Pages:

```txt
/#/projects
/#/experience
/#/ai
/#/about
```
