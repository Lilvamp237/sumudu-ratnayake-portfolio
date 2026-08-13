# Portfolio redesign audit

## Existing application

- **Stack:** React 19, TypeScript, and Vite 6, managed with npm.
- **Architecture:** a single `App.tsx` renders one view at a time from local state. There is no URL-aware router, so sections cannot be linked or revisited with browser navigation.
- **Content:** most personal, project, education, publication, certification, and achievement data lives in `constants.ts`; reusable TypeScript interfaces live in `types.ts`.
- **Components:** project filtering/cards, achievements, skill bars, and an optional Gemini-powered chat are split into `components/`. The remaining page content is embedded in `App.tsx`.
- **Styling:** Tailwind is loaded at runtime from its CDN, with global cyber/game styling embedded in `index.html`. Framer Motion handles most animation. The HTML also requests a missing `/index.css` file.
- **Deployment:** Vite's base is `/sumudu-ratnayake-portfolio/`; `npm run deploy` publishes `dist/` to the `gh-pages` branch. This is compatible with the existing GitHub Pages URL and will be preserved.
- **Assets:** project screenshots, certification badges, two public CV PDFs, and a GitHub-hosted avatar are reusable. Several project records reference images that are not present, and two repository links are explicit placeholders.
- **Baseline validation:** the current development server responds correctly and the production build succeeds, with a warning for the missing stylesheet. The main JavaScript bundle is approximately 446 kB before gzip.

## Useful content to preserve

- Verified project summaries, technologies, repositories, screenshots, competition context, education, certifications, published research summaries, and achievements from `constants.ts`.
- Public contact links and email already present in the repository.
- GitHub Pages deployment path and both CV files.
- Project filtering as a useful interaction, redesigned as accessible filter controls.

## Main usability and design issues

- The game/system language, neon palette, scanlines, boot delay, monospace-heavy typography, and animated effects compete with the work itself.
- The site behaves like a tab panel instead of a portfolio with linkable pages; it lacks dedicated About, Research, Writing, and Currently destinations.
- Major projects are visually identical cards and do not support a case-study narrative.
- Skill percentages imply unsupported precision and the technology grid dominates more meaningful context.
- Content and presentation are only partly separated, while publication/project types are too narrow for future growth.
- Theme choice, SEO/social metadata, sitemap, robots file, RSS, a 404 experience, and maintainable writing content are missing.
- The public AI key architecture would require a browser-exposed credential, so the redesign removes the chat rather than retaining a non-functional or unsafe feature.

## Redesign approach

### Information architecture

- Home
- About
- Projects and project detail views
- Research
- Writing and article views
- Currently
- Contact
- A concise experience/achievements section integrated into About and Home

Hash-based URLs will be used (for example `#/projects` and `#/writing/article-slug`) so every view remains directly linkable without requiring GitHub Pages rewrite rules.

### Visual system

- Warm paper-like light theme and deep charcoal dark theme.
- Muted violet as the single accent, paired with ink, stone, and soft border neutrals.
- Editorial display typography for selected headlines and a clean sans-serif for interface/body copy.
- Generous spacing, restrained note/diagram motifs, fine rules, numbered labels, and asymmetrical case-study layouts.
- Motion limited to small entrance, hover, navigation, and theme transitions, with full reduced-motion support.

### Proposed source structure

```text
components/       shared navigation, layout, cards, filters, and content blocks
content/          projects, research, experience, achievements, currently, and writing
pages/            route-level views
utils/            routing, metadata, and content helpers
public/           existing media plus SEO, feed, and platform files
```

The redesign will retain the current toolchain and deployment target, remove unused heavyweight client features, replace CDN styling with checked-in CSS, and add lightweight validation for routing and structured content.

## Content gaps to preserve as placeholders

- Ontology-driven VR tutoring system for Deaf and Hard of Hearing children: detailed role, process, implementation, outcome, links, and imagery.
- SNOMED CT/FHIR terminology server work: employer/client-safe context, role, implementation, outcome, links, and imagery.
- Athena repository and image.
- Localloop repository and image.
- Professional experience, startup work, volunteering, leadership, talks, and accepted/ongoing paper metadata not present in the repository.
- Complete publication author lists, proceedings/journal links, citation text, presentations, and paper links where absent.
- Dates and full article bodies for the four planned writing entries.
