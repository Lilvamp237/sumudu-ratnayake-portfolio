import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'index.html',
  'public/favicon.svg',
  'public/og-card.png',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/rss.xml',
  'public/404.html',
  'public/cv/Sumudu Ratnayake - Resume.pdf',
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`Missing required site files: ${missing.join(', ')}`);

const content = readFileSync('content/site.ts', 'utf8');
for (const collection of ['projects', 'publications', 'writing', 'currently']) {
  if (!content.includes(`export const ${collection}`)) throw new Error(`Missing content collection: ${collection}`);
}

const index = readFileSync('index.html', 'utf8');
for (const marker of ['og:title', 'og:image', 'twitter:card', 'canonical', 'application/rss+xml']) {
  if (!index.includes(marker)) throw new Error(`Missing metadata marker: ${marker}`);
}

console.log('Site structure, content collections, public assets, and metadata are present.');
