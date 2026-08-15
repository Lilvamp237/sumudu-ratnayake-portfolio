export type Route = { path: string; segments: string[] };

// Vite bakes this in at build time: '/' on Vercel, '/sumudu-ratnayake-portfolio/' on GitHub Pages.
const BASE = import.meta.env.BASE_URL;
const BASE_PATH = BASE.replace(/\/+$/, ''); // '' for root base, '/sumudu-ratnayake-portfolio' for the subpath

export function readRoute(pathname = window.location.pathname): Route {
  let relative = pathname;
  if (BASE_PATH && relative.startsWith(BASE_PATH)) relative = relative.slice(BASE_PATH.length);
  const path = `/${relative.replace(/^\/+|\/+$/g, '')}`.replace('//', '/');
  return { path, segments: path.split('/').filter(Boolean) };
}

export function pageHref(path: string) {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return (BASE + clean).replace(/\/{2,}/g, '/') || BASE;
}

export function asset(path: string) {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return (BASE + clean).replace(/\/{2,}/g, '/');
}

// `href` is expected to already be a real href (e.g. from an anchor's
// `href` attribute, which was itself built via `pageHref`) — do not run it
// through `pageHref` again here, or the base path gets applied twice.
export function navigate(href: string) {
  if (href === window.location.pathname) return;
  window.history.pushState(null, '', href);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function scrollToPageTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}
