# Personal Web

Static personal website for Gonzalo Mellizo-Soto Díaz.

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

## Deployment

The GitHub Pages workflow is defined at:

```txt
.github/workflows/deploy.yml
```

To deploy:

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages.
3. Set the Pages source to **GitHub Actions**.
4. Push to `main`.

The workflow builds the app and publishes the `dist/` directory.

## Routing

The app uses hash routing so routes work reliably on GitHub Pages:

```txt
/#/projects
/#/experience
/#/about
```
