import { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Layout } from './components/SiteChrome';
import { AboutPage, ContactPage, CurrentlyPage, HomePage, NotFoundPage, PostPage, ProjectPage, ProjectsPage, ResearchPage, ToolkitPage, WritingPage } from './pages/PortfolioPages';
import { navigate, readRoute, scrollToPageTop } from './utils/router';
import './index.css';

const metadata: Record<string, [string, string]> = {
  '/': ['Sumudu Ratnayake, Software engineer & researcher', 'Curious builder exploring AI, research, and software, turning ideas into systems that matter.'],
  '/about': ['About, Sumudu Ratnayake', 'The story behind Sumudu Ratnayake’s work across software engineering, AI, and research.'],
  '/toolkit': ['Toolkit, Sumudu Ratnayake', 'Skills, tools, and certifications behind Sumudu Ratnayake’s work in AI, software, and research.'],
  '/projects': ['Projects, Sumudu Ratnayake', 'Case studies spanning intelligent systems, semantic technology, full-stack software, and research prototypes.'],
  '/research': ['Research, Sumudu Ratnayake', 'Research interests, publications, proceedings, and ongoing questions across AI, HCI, accessibility, XR, and semantic systems.'],
  '/writing': ['Writing, Sumudu Ratnayake', 'Build logs, research rabbit holes, and reflections on learning through building.'],
  '/currently': ['Currently, Sumudu Ratnayake', 'A lightweight update on what Sumudu is building, researching, writing, and learning.'],
  '/contact': ['Contact, Sumudu Ratnayake', 'Contact Sumudu Ratnayake about research, software, intelligent systems, or collaboration.'],
};

function setMeta(path: string) {
  const rootPath = `/${path.split('/').filter(Boolean)[0] || ''}`;
  const [title, description] = metadata[rootPath] || ['Page not found, Sumudu Ratnayake', 'The requested page could not be found.'];
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
}

export default function App() {
  const [route, setRoute] = useState(() => readRoute());
  const previousPath = useRef(route.path);

  useEffect(() => {
    const onPopState = () => setRoute(readRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement)?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      event.preventDefault();
      navigate(href);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    setMeta(route.path);
    scrollToPageTop();
    if (previousPath.current !== route.path) {
      window.setTimeout(() => document.getElementById('main-content')?.focus({ preventScroll: true }), 120);
    }
    previousPath.current = route.path;
  }, [route.path]);

  const [root, slug] = route.segments;
  let page = <NotFoundPage />;
  if (!root) page = <HomePage />;
  else if (root === 'about' && !slug) page = <AboutPage />;
  else if (root === 'toolkit' && !slug) page = <ToolkitPage />;
  else if (root === 'projects') page = slug ? <ProjectPage slug={slug} /> : <ProjectsPage />;
  else if (root === 'research' && !slug) page = <ResearchPage />;
  else if (root === 'writing') page = slug ? <PostPage slug={slug} /> : <WritingPage />;
  else if (root === 'currently' && !slug) page = <CurrentlyPage />;
  else if (root === 'contact' && !slug) page = <ContactPage />;

  return <><Layout activePath={route.path}>{page}</Layout><Analytics /></>;
}
