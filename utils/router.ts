export type Route = { path: string; segments: string[] };

export function readRoute(hash = window.location.hash): Route {
  const raw = hash.replace(/^#/, '') || '/';
  const path = `/${raw.replace(/^\/+|\/+$/g, '')}`.replace('//', '/');
  return { path, segments: path.split('/').filter(Boolean) };
}

export function pageHref(path: string) {
  return `#${path.startsWith('/') ? path : `/${path}`}`;
}

export function scrollToPageTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}
