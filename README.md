# Sumudu Ratnayake - Portfolio

A content-focused personal site for Sumudu Ratnayake: software engineer, researcher, and curious builder working across AI, intelligent agents, semantic systems, HCI, XR, accessibility, and real-world software.

Live site: <https://sumudu-ratnayake-portfolio.vercel.app/> (primary) / <https://lilvamp237.github.io/sumudu-ratnayake-portfolio/> (mirror)

## Design and architecture

The application uses React, TypeScript, and Vite, with client-side routing on real paths (`/about`, `/projects/<slug>`, etc.) rather than hash fragments. Personal content is separated into `content/site.ts`; shared chrome and content renderers live in `components/`; route-level views live in `pages/`; routing helpers live in `utils/router.ts`.

The pre-redesign audit and migration decisions are documented in [`docs/REDESIGN_AUDIT.md`](docs/REDESIGN_AUDIT.md).

## Run locally

Requirements: Node.js 18 or later and npm.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run validate
npm run build
npm run check
```

`npm run check` runs TypeScript validation, site/content checks, and the production build.

## Deployment

This site deploys to **both** Vercel and GitHub Pages from the same codebase, using a mode-aware Vite `base` path (see `vite.config.ts`).

### Vercel (primary)

Connected via Vercel's GitHub integration. Pushing to whichever branch is set as the project's **Production Branch** (Vercel dashboard, Settings, Git) auto-builds and deploys, using `npm run build`. Preview deployments are created automatically for any other branch or PR. `vercel.json` handles SPA routing (all paths rewrite to `index.html`).

**Web Analytics** is wired in via `@vercel/analytics` (see `App.tsx`) and works with the client-side router out of the box, since Vercel's script tracks `history.pushState` navigation generically, not just full page loads. Page-level breakdowns appear under the project's Analytics tab in the Vercel dashboard.

### GitHub Pages (mirror)

GitHub Pages does not auto-deploy from a push. First run the complete check, then build and publish explicitly:

```bash
npm run check
npm run deploy
```

`npm run deploy` runs `vite build --mode gh-pages` (using the `/sumudu-ratnayake-portfolio/` base path) and pushes the built `dist/` directory to the `gh-pages` branch via the `gh-pages` package. Keep the base path in `vite.config.ts` aligned with the GitHub repository name if it ever changes.

Because GitHub Pages has no server-side rewrite support, `public/404.html` implements the standard SPA-on-GitHub-Pages redirect trick: a direct load of a nested route (e.g. `/sumudu-ratnayake-portfolio/projects/dengue-allocator`) is redirected to `index.html` with the intended path encoded in the query string, which a small inline script in `index.html` decodes before the app boots. This is a no-op on Vercel.
