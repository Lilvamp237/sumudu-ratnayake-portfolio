export type Route = { path: string; segments: string[] };

export function readRoute(pathname = window.location.pathname): Route {
  const path = `/${pathname.replace(/^\/+|\/+$/g, '')}`.replace('//', '/');
  return { path, segments: path.split('/').filter(Boolean) };
}

export function pageHref(path: string) {
  return path.startsWith('/') ? path : `/${path}`;
}

export function navigate(path: string) {
  const href = pageHref(path);
  if (href === window.location.pathname) return;
  window.history.pushState(null, '', href);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function scrollToPageTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}
