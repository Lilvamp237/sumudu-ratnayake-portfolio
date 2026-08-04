# Sumudu Ratnayake — Portfolio

A content-focused personal site for Sumudu Ratnayake: software engineer, researcher, and curious builder working across AI, intelligent agents, semantic systems, HCI, XR, accessibility, and real-world software.

Live site: <https://lilvamp237.github.io/sumudu-ratnayake-portfolio/>

## Design and architecture

The redesign follows a “modern research lab meets startup studio” direction: warm editorial light mode, deep charcoal dark mode, a muted violet accent, serif-led display typography, and restrained system/diagram details.

The application uses React, TypeScript, and Vite. Views are linkable through hash routes so direct links continue to work on GitHub Pages without server rewrite rules. Personal content is separated into `content/site.ts`; shared chrome and content renderers live in `components/`; route-level views live in `pages/`.

The pre-redesign audit and migration decisions are documented in [`docs/REDESIGN_AUDIT.md`](docs/REDESIGN_AUDIT.md).

## Run locally

Requirements: Node.js 18 or later and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL. Because the GitHub Pages base path is preserved, it normally ends in `/sumudu-ratnayake-portfolio/`.

Useful checks:

```bash
npm run typecheck
npm run validate
npm run build
npm run check
```

`npm run check` runs TypeScript validation, site/content checks, and the production build.

## Add a project

1. Open `content/site.ts`.
2. Add a new object to the `projects` array using the `CaseStudy` structure from `types.ts`.
3. Use a unique lowercase `slug` with hyphens.
4. Put an approved screenshot in `public/projects/` and reference it as `projects/filename.ext`.
5. Add only verified details. Put unknown information in the `needs` array so the page labels it clearly.
6. Set `featured: true` only when the project should be considered for the homepage.

Project detail URLs are generated automatically at `#/projects/<slug>`.

## Add a publication

1. Open `content/site.ts`.
2. Add a `ResearchEntry` object to the `publications` array.
3. Include the exact title, authors, venue, year, and status only after verification.
4. Add paper, proceedings, presentation, project, and citation links when available.
5. Keep missing metadata in `needs`; do not use invented placeholder facts.

## Add a blog post

1. Open `content/site.ts`.
2. Add a `WritingPost` object to the `writing` array with a unique slug, excerpt, category, tags, date, reading time, and status.
3. Add article content through `blocks`. Supported block types are `paragraph`, `heading`, `quote`, `code`, and `image`.
4. Use an `outline` while a post is planned. The individual article page will show a polished, explicitly labelled preview until `blocks` are supplied.
5. Update `public/rss.xml` when publishing a post.

Individual article URLs are generated automatically at `#/writing/<slug>`.

## Update “Currently”

Edit only the `currently` object in `content/site.ts`. Update the `updated` value and the text for Building, Researching, Writing, Learning, Reading, and Working on. No component changes are needed.

## Deployment

The existing GitHub Pages deployment is preserved. First run the complete check, then deploy the built `dist/` directory to the `gh-pages` branch:

```bash
npm run check
npm run deploy
```

The Vite base path is configured in `vite.config.ts` as `/sumudu-ratnayake-portfolio/`. Keep it aligned with the GitHub repository name. The source branch can remain separate until reviewed; `npm run deploy` updates the deployment branch only when intentionally run.

## Known content placeholders

- Complete public-safe case-study details for the ontology-driven VR tutoring system and SNOMED CT/FHIR terminology-server work.
- Athena repository, role, process, lessons, and approved screenshot.
- Professional experience, startup work, open source, volunteering, leadership, and talks.
- Complete author, paper, presentation, proceeding, and citation metadata for publications.
- Full article bodies, dates, and reading times for the four planned posts.
- Current-status date plus the Building, Learning, Reading, and Working on entries.

Placeholders are intentionally visible in the interface and should be replaced only with verified information.
