import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation, site } from '../content/site';
import { pageHref } from '../utils/router';

type Theme = 'light' | 'dark';

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
  return { theme, setTheme };
}

export function Header({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const activeRoot = `/${activePath.split('/').filter(Boolean)[0] || ''}`;
  useEffect(() => setOpen(false), [activePath]);
  return (
    <header className="site-header">
      <a className="brand" href={pageHref('/')} aria-label="Sumudu Ratnayake — home"><span className="brand-mark" aria-hidden="true">SR</span><span>Sumudu Ratnayake</span></a>
      <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label="Toggle navigation">{open ? <X size={20} /> : <Menu size={20} />}</button>
      <nav id="site-navigation" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        {navigation.map((item) => {
          const isActive = item.path === '/' ? activePath === '/' : activeRoot === item.path;
          return <a key={item.path} href={pageHref(item.path)} aria-current={isActive ? 'page' : undefined}>{item.label}</a>;
        })}
      </nav>
      <button className="icon-button theme-button" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div><p className="footer-line">Ideas are better when they become things.</p><p className="muted">Designed and built by Sumudu Ratnayake.</p></div>
      <div className="footer-links">
        <a href={site.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
        <a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </footer>
  );
}

export function Layout({ activePath, children }: { activePath: string; children: ReactNode }) {
  return <div className="site-frame"><a className="skip-link" href="#main-content">Skip to content</a><Header activePath={activePath} /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></div>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <header className="page-intro reveal"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-lede">{children}</div></header>;
}

export function SectionHeading({ index, title, link }: { index?: string; title: string; link?: { label: string; href: string } }) {
  return <div className="section-heading"><p>{index && <span>{index}</span>} {title}</p>{link && <a className="text-link" href={link.href}>{link.label} <ArrowUpRight size={15} /></a>}</div>;
}
