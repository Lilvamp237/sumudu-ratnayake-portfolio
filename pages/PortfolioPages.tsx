import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { achievements, currently, education, projects, publications, researchInterests, site, writing } from '../content/site';
import { ContentBlocks } from '../components/ContentBlocks';
import { PageIntro, SectionHeading } from '../components/SiteChrome';
import { pageHref } from '../utils/router';
import type { CaseStudy, WritingPost } from '../types';

const linkIcon = <ArrowUpRight size={15} aria-hidden="true" />;

function PlaceholderNote({ items, compact = false }: { items?: string[]; compact?: boolean }) {
  if (!items?.length) return null;
  return <aside className={compact ? 'placeholder-note compact' : 'placeholder-note'}><p>Details to add</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></aside>;
}

function ProjectVisual({ project, priority = false }: { project: CaseStudy; priority?: boolean }) {
  if (!project.image) return <div className="project-visual project-visual-fallback" aria-label={`${project.title} image placeholder`}><span>{project.label}</span><strong>{project.title.slice(0, 2).toUpperCase()}</strong></div>;
  return <div className="project-visual"><img src={project.image} alt={`${project.title} project preview`} loading={priority ? 'eager' : 'lazy'} /></div>;
}

export function HomePage() {
  const selected = projects.filter((project) => project.featured).slice(0, 4);
  return <>
    <section className="hero reveal">
      <div className="hero-copy"><p className="eyebrow">Sumudu Ratnayake · Software engineer & researcher</p><h1>{site.headline}</h1><p className="hero-subhead">{site.subhead}</p>
        <div className="button-row"><a className="button primary" href={pageHref('/projects')}>Explore selected work <ArrowRight size={17} /></a><a className="button" href={pageHref('/research')}>Read the research</a></div>
        <div className="hero-links" aria-label="Profile links"><a href={pageHref('/writing')}>Writing</a><a href={site.github} target="_blank" rel="noreferrer">GitHub {linkIcon}</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn {linkIcon}</a><a href={site.cv} target="_blank" rel="noreferrer">CV {linkIcon}</a></div>
      </div>
      <div className="hero-diagram" aria-hidden="true"><div className="diagram-orbit orbit-one"><span>research</span></div><div className="diagram-orbit orbit-two"><span>software</span></div><div className="diagram-core">idea<br />→<br />system</div><p>Questions connect.<br />Prototypes reveal.<br />Systems matter.</p></div>
    </section>
    <section className="home-intro section-pad reveal"><SectionHeading index="01" title="A short introduction" /><div className="split-copy"><h2>I enjoy the moment an idea becomes something real.</h2><div><p>I work across software engineering and research, particularly where AI, intelligent agents, semantic systems, HCI, and immersive technology meet real human problems.</p><p>The domain changes. The common thread is curiosity: understand the problem, make the idea concrete, and learn from the system that emerges.</p><a className="text-link" href={pageHref('/about')}>Read my story <ArrowRight size={15} /></a></div></div></section>
    <section className="section-pad reveal"><SectionHeading index="02" title="Selected work" link={{ label: 'All projects', href: pageHref('/projects') }} /><div className="featured-grid">{selected.map((project, index) => <article className={`featured-project featured-${index + 1}`} key={project.slug}><a href={pageHref(`/projects/${project.slug}`)} aria-label={`View ${project.title} case study`}><ProjectVisual project={project} /></a><p className="eyebrow">{project.label}</p><h3><a href={pageHref(`/projects/${project.slug}`)}>{project.title}</a></h3><p>{project.summary}</p><a className="text-link" href={pageHref(`/projects/${project.slug}`)}>View case study <ArrowRight size={15} /></a></article>)}</div></section>
    <section className="section-pad reveal"><SectionHeading index="03" title="Research & publications" link={{ label: 'Research archive', href: pageHref('/research') }} /><div className="research-home"><div className="research-statement"><BookOpen size={24} /><p>Interested in intelligent systems that can explain themselves, work with people, and make knowledge useful.</p></div><div className="publication-list compact-list">{publications.slice(0, 3).map((publication) => <article key={publication.slug}><span>{publication.year}</span><div><p className="eyebrow">{publication.status} · {publication.venue}</p><h3>{publication.title}</h3></div></article>)}</div></div></section>
    <section className="section-pad reveal"><SectionHeading index="04" title="Latest writing" link={{ label: 'Writing archive', href: pageHref('/writing') }} /><div className="writing-grid">{writing.slice(0, 3).map((post) => <PostPreview key={post.slug} post={post} />)}</div></section>
    <section className="home-current section-pad reveal"><SectionHeading index="05" title="Currently" link={{ label: 'Full update', href: pageHref('/currently') }} /><div className="current-strip">{currently.items.slice(0, 3).map((item) => <div key={item.label}><p className="eyebrow">{item.label}</p><p>{item.text}</p></div>)}</div></section>
    <section className="section-pad reveal"><SectionHeading index="06" title="A few markers along the way" /><div className="achievement-strip">{achievements.slice(0, 4).map((item) => <div key={`${item.title}-${item.year}`}><span>{item.year}</span><p>{item.title}</p><strong>{item.result}</strong></div>)}</div></section>
    <ContactCallout />
  </>;
}

export function AboutPage() {
  return <>
    <PageIntro eyebrow="About · The path so far" title="The common thread is building to understand."><p>I came to computer science through mathematics, data, AI, and the possibility of making an idea behave in the real world.</p></PageIntro>
    <section className="story-layout section-pad reveal"><aside className="story-margin"><img src={site.avatar} alt="Sumudu Ratnayake" /><p><MapPin size={15} /> {site.location}</p><p>Software engineer<br />Researcher<br />Curious builder</p></aside><div className="story prose">
      <p>I began programming after my A/Ls because I wanted to study Computer Science. What drew me in was the mix: mathematics and data, artificial intelligence and research, but also the practical satisfaction of building.</p>
      <p>I started with HTML, CSS, and PHP, then found Python. Even small Python programs could turn an idea into something visible and useful—a terminal application, a point-of-sale system, a working answer to a question I had only just learned how to ask.</p>
      <p>This was before generative AI tools became part of everyday development. I learned from books, documentation, articles, YouTube, Stack Overflow, experiments, and plenty of debugging. When AI tools became common around the middle of university, I deliberately kept them out of my early work on object-oriented programming and data structures in Java. I wanted those foundations to be mine.</p>
      <blockquote>Understanding still comes first. The tools simply help me explore further and build larger systems.</blockquote>
      <p>As the work grew—from machine-learning pipelines to intelligent agents, research prototypes, and production software—I began using AI as both a development tool and a way to learn. The principle stayed the same: know what the system is doing, question its output, and remain responsible for the result.</p>
      <p>Research began for a surprisingly practical reason: I wanted to present at the KDU International Research Conference. That goal became a genuine interest in investigating difficult questions, publishing, presenting, and finding better ways to explain an idea.</p>
      <p>Since then, I have worked across AI, agents, explainability, HCI, VR/XR, accessibility, education, healthcare systems, sustainability, knowledge graphs, and software engineering. I am not defined by one industry or technology. I am most interested in understanding meaningful problems and turning ideas into working systems.</p>
    </div></section>
    <section className="section-pad reveal"><SectionHeading index="01" title="Education" /><div className="timeline">{education.map((item) => <article key={item.period}><span>{item.period}</span><div><h3>{item.title}</h3><p className="eyebrow">{item.place}</p><p>{item.detail}</p></div></article>)}</div></section>
    <section className="section-pad reveal"><SectionHeading index="02" title="Experience, community & leadership" /><div className="empty-state"><p className="eyebrow">Content placeholder</p><h2>This section is ready for the work beyond the project list.</h2><p>Add public-safe professional experience, startup work, open-source contributions, volunteering, talks, society roles, and leadership details here.</p></div></section>
    <section className="section-pad reveal"><SectionHeading index="03" title="Achievements" /><div className="achievement-list">{achievements.map((item) => <article key={`${item.title}-${item.year}`}><span>{item.year}</span><h3>{item.title}</h3><p>{item.result}</p></article>)}</div></section><ContactCallout />
  </>;
}

export function ProjectsPage() {
  const filters = ['All', 'AI systems', 'Research', 'Full-stack', 'Competition', 'Needs details'];
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => projects.filter((project) => {
    if (filter === 'All') return true;
    const haystack = `${project.label} ${project.technologies.join(' ')} ${project.status}`.toLowerCase();
    return haystack.includes(filter.toLowerCase().replace('ai systems', 'ai'));
  }), [filter]);
  return <><PageIntro eyebrow="Projects · Selected systems" title="Case studies, not a wall of cards."><p>Research prototypes, competition builds, semantic systems, and software products. Verified details are carried over; gaps are labelled instead of guessed.</p></PageIntro><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map((item) => <button type="button" key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><section className="case-study-list reveal">{visible.map((project, index) => <article className="case-study-row" key={project.slug}><a className="case-visual-link" href={pageHref(`/projects/${project.slug}`)}><ProjectVisual project={project} priority={index < 2} /></a><div className="case-index">{String(index + 1).padStart(2, '0')}</div><div className="case-copy"><p className="eyebrow">{project.label} · {project.status}</p><h2><a href={pageHref(`/projects/${project.slug}`)}>{project.title}</a></h2><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><a className="text-link" href={pageHref(`/projects/${project.slug}`)}>Open case study <ArrowRight size={15} /></a></div></article>)}</section>{visible.length === 0 && <div className="empty-state"><h2>No projects match this filter yet.</h2><button className="button" type="button" onClick={() => setFilter('All')}>Show all projects</button></div>}</>;
}

export function ProjectPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return <article className="detail-page"><a className="back-link" href={pageHref('/projects')}><ArrowLeft size={16} /> All projects</a><header className="detail-hero"><div><p className="eyebrow">{project.label} · {project.status}</p><h1>{project.title}</h1><p>{project.summary}</p></div><ProjectVisual project={project} priority /></header><div className="detail-grid"><aside><p className="eyebrow">Built with</p><div className="tag-list vertical">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="detail-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer"><Github size={16} /> Repository {linkIcon}</a>}{project.publication && <a href={project.publication} target="_blank" rel="noreferrer">Publication {linkIcon}</a>}{project.presentation && <a href={project.presentation} target="_blank" rel="noreferrer">Presentation {linkIcon}</a>}</div></aside><div className="case-sections">
    {project.problem && <section><p className="eyebrow">The problem</p><h2>What needed to change?</h2><p>{project.problem}</p></section>}{project.context && <section><p className="eyebrow">Context</p><h2>Where this work began</h2><p>{project.context}</p></section>}{project.role && <section><p className="eyebrow">My role</p><p>{project.role}</p></section>}{project.process && <section><p className="eyebrow">Process</p><ol>{project.process.map((step) => <li key={step}>{step}</li>)}</ol></section>}{project.implementation && <section><p className="eyebrow">Implementation</p><h2>How the system works</h2><p>{project.implementation}</p></section>}{project.outcome && <section><p className="eyebrow">Outcome</p><h2>What came from it</h2><p>{project.outcome}</p></section>}{project.lessons && <section><p className="eyebrow">Lessons</p><p>{project.lessons}</p></section>}<PlaceholderNote items={project.needs} />
  </div></div><ContactCallout /></article>;
}

export function ResearchPage() {
  return <><PageIntro eyebrow="Research · Questions in progress" title="Intelligent systems should be useful, understandable, and built around people."><p>My interests sit between AI, semantic knowledge, interaction, accessibility, and immersive systems—with research as a way to ask better questions and prototypes as a way to test them.</p></PageIntro><section className="section-pad reveal"><SectionHeading index="01" title="Research interests" /><div className="interest-cloud">{researchInterests.map((interest, index) => <span key={interest}><sup>{String(index + 1).padStart(2, '0')}</sup>{interest}</span>)}</div></section><section className="section-pad reveal"><SectionHeading index="02" title="Publications & proceedings" /><div className="publication-list">{publications.map((publication) => <article key={publication.slug}><span>{publication.year}</span><div><p className="eyebrow">{publication.status} · {publication.venue}</p><h2>{publication.title}</h2>{publication.authors && <p>{publication.authors}</p>}<p>{publication.summary}</p><div className="inline-links">{publication.paper && <a href={publication.paper}>Paper {linkIcon}</a>}{publication.proceeding && <a href={publication.proceeding} target="_blank" rel="noreferrer">Proceedings {linkIcon}</a>}{publication.presentation && <a href={publication.presentation}>Presentation {linkIcon}</a>}</div><PlaceholderNote items={publication.needs} compact /></div></article>)}</div></section><section className="section-pad reveal"><SectionHeading index="03" title="Ongoing research & conference activity" /><div className="two-column-placeholders"><div className="empty-state"><p className="eyebrow">Ongoing work</p><h2>Ready for active studies and research projects.</h2><p>Add titles, collaborators, short summaries, status, and links when they are public.</p></div><div className="empty-state"><p className="eyebrow">Presentations & conferences</p><h2>Ready for talks, posters, and conference activity.</h2><p>Add event, date, presentation title, format, and material links.</p></div></div></section><ContactCallout /></>;
}

function PostPreview({ post }: { post: WritingPost; key?: string }) {
  return <article className="post-preview"><div><p className="eyebrow">{post.category} · {post.status}</p><h2><a href={pageHref(`/writing/${post.slug}`)}>{post.title}</a></h2><p>{post.excerpt}</p></div><div className="post-meta"><span>{post.date || 'Date to add'}</span><span>{post.readingTime || 'Reading time to add'}</span></div><a className="text-link" href={pageHref(`/writing/${post.slug}`)}>View preview <ArrowRight size={15} /></a></article>;
}

export function WritingPage() {
  const categories = ['All', ...Array.from(new Set(writing.map((post) => post.category)))];
  const [category, setCategory] = useState('All');
  const visible = category === 'All' ? writing : writing.filter((post) => post.category === category);
  return <><PageIntro eyebrow="Writing · Notes from the work" title="Build logs, research rabbit holes, and honest reflections."><p>A home for thinking in public about how systems get built, how research changes the questions, and what I learn along the way.</p></PageIntro><div className="filter-bar" role="group" aria-label="Filter writing">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={category === item ? 'active' : ''}>{item}</button>)}</div><section className="writing-list reveal">{visible.map((post) => <PostPreview key={post.slug} post={post} />)}</section><aside className="content-guide"><p className="eyebrow">Publishing system</p><p>Post records support tags, dates, reading time, featured status, headings, paragraphs, pull quotes, code blocks, and responsive images. RSS and social metadata are prepared; these four entries intentionally remain previews until full articles are supplied.</p></aside></>;
}

export function PostPage({ slug }: { slug: string }) {
  const post = writing.find((item) => item.slug === slug);
  if (!post) return <NotFoundPage />;
  const related = writing.filter((item) => item.slug !== slug && (item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))).slice(0, 2);
  return <article className="article-page"><a className="back-link" href={pageHref('/writing')}><ArrowLeft size={16} /> All writing</a><header><p className="eyebrow">{post.category} · {post.status}</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><div className="article-meta"><span>{post.date || 'Publication date to add'}</span><span>{post.readingTime || 'Reading time to add'}</span><span>{post.tags.join(' · ')}</span></div></header>{post.blocks?.length ? <ContentBlocks blocks={post.blocks} /> : <div className="draft-outline"><p className="eyebrow">Planned article · Content not yet supplied</p><h2>Draft outline</h2><ol>{post.outline.map((item) => <li key={item}>{item}</li>)}</ol><p>This page is intentionally a polished preview rather than a fictional article. Add the finished body in the writing content collection when it is ready.</p></div>}{related.length > 0 && <section className="related-posts"><SectionHeading index="→" title="Related notes" /><div className="writing-grid">{related.map((item) => <PostPreview key={item.slug} post={item} />)}</div></section>}</article>;
}

export function CurrentlyPage() {
  return <><PageIntro eyebrow="Currently · A lightweight status page" title="What has my attention right now."><p>A small, deliberately low-maintenance snapshot. Last updated: {currently.updated}.</p></PageIntro><section className="currently-grid reveal">{currently.items.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><p className="eyebrow">{item.label}</p><h2>{item.text}</h2></article>)}</section><aside className="content-guide"><p className="eyebrow">Easy to update</p><p>Every item on this page lives in one object in <code>content/site.ts</code>. Update the date and text there—no component changes required.</p></aside></>;
}

export function ContactPage() {
  return <><PageIntro eyebrow="Contact · Start a conversation" title="Have an interesting problem, question, or system to build?"><p>I am open to conversations about research, software, intelligent agents, semantic systems, accessibility, open source, and thoughtful startup work.</p></PageIntro><section className="contact-grid reveal"><a href={`mailto:${site.email}`}><Mail size={22} /><div><p className="eyebrow">Email</p><h2>{site.email}</h2><p>Best for project and research enquiries.</p></div>{linkIcon}</a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22} /><div><p className="eyebrow">LinkedIn</p><h2>Connect professionally</h2><p>Experience, updates, and conversation.</p></div>{linkIcon}</a><a href={site.github} target="_blank" rel="noreferrer"><Github size={22} /><div><p className="eyebrow">GitHub</p><h2>@Lilvamp237</h2><p>Repositories and experiments.</p></div>{linkIcon}</a><a href={site.cv} target="_blank" rel="noreferrer"><Download size={22} /><div><p className="eyebrow">CV</p><h2>View the current résumé</h2><p>Public PDF from this portfolio.</p></div>{linkIcon}</a></section></>;
}

function ContactCallout() {
  return <section className="contact-callout reveal"><p className="eyebrow">A useful conversation can start small.</p><h2>Research question, product idea, open-source problem, or something not yet neatly defined?</h2><a className="button primary" href={pageHref('/contact')}>Let’s talk <ArrowRight size={17} /></a></section>;
}

export function NotFoundPage() {
  return <section className="not-found"><p className="eyebrow">404 · Unmapped territory</p><h1>This page is not part of the system yet.</h1><p>The link may be old, or the idea may still be waiting to become real.</p><a className="button primary" href={pageHref('/')}>Return home <ArrowRight size={17} /></a></section>;
}
