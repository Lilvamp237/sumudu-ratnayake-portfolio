import { useMemo, useRef, useState, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { achievements, certifications, community, currently, education, experience, projects, publications, researchInterests, site, techStack, writing } from '../content/site';
import { ContentBlocks } from '../components/ContentBlocks';
import { PageIntro, SectionHeading } from '../components/SiteChrome';
import { asset, pageHref } from '../utils/router';
import type { CaseStudy, WritingPost } from '../types';

const linkIcon = <ArrowUpRight size={15} aria-hidden="true" />;

function PlaceholderNote({ items, compact = false }: { items?: string[]; compact?: boolean }) {
  if (!items?.length) return null;
  return <aside className={compact ? 'placeholder-note compact' : 'placeholder-note'}><p>Details to add</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></aside>;
}

function ProjectVisual({ project, priority = false }: { project: CaseStudy; priority?: boolean }) {
  if (!project.image) return <div className="project-visual project-visual-fallback" aria-label={`${project.title} image placeholder`}><span>{project.label}</span><strong>{project.initials ?? project.title.slice(0, 2).toUpperCase()}</strong></div>;
  return <div className="project-visual"><img src={asset(project.image)} alt={`${project.title} project preview`} loading={priority ? 'eager' : 'lazy'} /></div>;
}

function HeroDiagram() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--tilt-x', `${(py * -12).toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${(px * 12).toFixed(2)}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  };

  return <div className="hero-diagram" aria-hidden="true" ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}>
    <div className="diagram-orbit orbit-one"><span>research</span></div>
    <div className="diagram-orbit orbit-two"><span>software</span></div>
    <div className="diagram-core">idea<br />→<br />system</div>
    <p>Questions connect.<br />Prototypes reveal.<br />Systems matter.</p>
  </div>;
}

export function HomePage() {
  const latestProject = projects[0];
  const latestPublication = publications.find((p) => p.slug === 'inclusive-digital-infrastructure') ?? publications[0];
  const publishedPosts = writing.filter((post) => post.status === 'Published' && post.date);
  const latestPost = publishedPosts.length
    ? publishedPosts.reduce((latest, post) => (new Date(post.date!) > new Date(latest.date!) ? post : latest))
    : writing[0];
  return <>
    <section className="hero reveal">
      <div className="hero-copy"><p className="eyebrow">Sumudu Ratnayake · Software engineer & researcher</p><h1>{site.headline}</h1><p className="hero-subhead">{site.subhead}</p>
        <div className="button-row"><a className="button primary" href={pageHref('/projects')}>Explore selected work <ArrowRight size={17} /></a><a className="button" href={pageHref('/research')}>Read the research</a></div>
        <div className="hero-links" aria-label="Profile links"><a href={pageHref('/writing')}>Blog {linkIcon}</a><a href={site.github} target="_blank" rel="noreferrer">GitHub {linkIcon}</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn {linkIcon}</a><a href={asset(site.cv)} target="_blank" rel="noreferrer">CV {linkIcon}</a></div>
      </div>
      <HeroDiagram />
    </section>
    <section className="home-intro section-pad-quiet reveal"><p className="lede">I follow curious questions into code, research, and rabbit holes, turning the interesting ones into things that exist, especially in Agentic AI and Intelligent systems. <a className="text-link" href={pageHref('/about')}>Read my story <ArrowRight size={15} /></a></p></section>
    <section className="section-pad reveal"><SectionHeading title="What's new" /><div className="whatsnew-grid">
      <article className="whatsnew-card"><p className="eyebrow">Latest project</p><ProjectVisual project={latestProject} /><h3><a href={pageHref(`/projects/${latestProject.slug}`)}>{latestProject.title}</a></h3><p>{latestProject.summary}</p><a className="text-link" href={pageHref(`/projects/${latestProject.slug}`)}>View case study <ArrowRight size={15} /></a></article>
      <article className="whatsnew-card"><p className="eyebrow">Latest publication</p><h3>{latestPublication.title}</h3><p>{latestPublication.venue}</p><a className="text-link" href={pageHref('/research')}>Read the research <ArrowRight size={15} /></a></article>
      <article className="whatsnew-card"><p className="eyebrow">Latest blog post</p><h3>{latestPost.title}</h3><p>{latestPost.excerpt}</p><a className="text-link" href={pageHref(`/writing/${latestPost.slug}`)}>Read more <ArrowRight size={15} /></a></article>
    </div></section>
    <ContactCallout />
  </>;
}

export function AboutPage() {
  return <>
    <PageIntro eyebrow="About · The path so far" title="The common thread is building to understand."><p>I came to computer science through mathematics, data, AI, and the possibility of making an idea behave in the real world.</p></PageIntro>
    <section className="story-layout section-pad reveal"><aside className="story-margin"><img src={asset(site.avatar)} alt="Sumudu Ratnayake" /><p><MapPin size={15} /> {site.location}</p><p>Software engineer<br />Researcher<br />Curious builder</p></aside><div className="story prose">
      <p>My interest in computers goes back to primary school, but I didn't get serious about it until my O/Ls, when I taught myself HTML and CSS. In my A/Ls, I went further, Python, PHP, and SQL, and that is when things clicked: even small programs could turn an idea into something visible and useful, a terminal application, a point-of-sale system, a working answer to a question I had only just learned how to ask.</p>
      <p>What drew me into Computer Science was the mix: mathematics and data, artificial intelligence and research, but also the practical satisfaction of building.</p>
      <p>This was before generative AI tools became part of everyday development. I learned from books, documentation, articles, YouTube, Stack Overflow, experiments, and plenty of debugging. When AI tools became common around the middle of university, I deliberately kept them out of my early work on object-oriented programming and data structures in Java. I wanted those foundations to be mine.</p>
      <blockquote>Understanding still comes first. The tools simply help me explore further and build larger systems.</blockquote>
      <p>As the work grew, from machine-learning pipelines to intelligent agents, research prototypes, and production software, I began using AI as both a development tool and a way to learn. The principle stayed the same: know what the system is doing, question its output, and remain responsible for the result.</p>
      <p>Research began for a surprisingly practical reason: I wanted to present at the KDU International Research Conference. That goal became a genuine interest in investigating difficult questions, publishing, presenting, and finding better ways to explain an idea.</p>
      <p>Since then, I have worked across AI, agents, explainability, HCI, VR/XR, accessibility, education, healthcare systems, sustainability, knowledge graphs, and software engineering. I am not defined by one industry or technology. I am most interested in understanding meaningful problems and turning ideas into working systems.</p>
    </div></section>
    <section className="section-pad reveal"><SectionHeading title="Experience" /><div className="timeline">{experience.map((item) => <article key={item.period}><span>{item.period}</span><div><h3>{item.title}</h3><p className="eyebrow">{item.place}</p>{item.detail && <p>{item.detail}</p>}</div></article>)}</div></section>
    <section className="section-pad reveal"><SectionHeading title="Education" /><div className="timeline">{education.map((item) => <article key={item.period}><span>{item.period}</span><div><h3>{item.title}</h3><p className="eyebrow">{item.place}</p>{item.detail && <p>{item.detail}</p>}</div></article>)}</div></section>
    <section className="section-pad reveal"><SectionHeading title="Achievements" /><div className="achievement-list">{achievements.map((item) => <article key={`${item.title}-${item.year}`}><span>{item.year}</span><div><h3>{item.title}</h3><p className="achievement-result">{item.result}</p>{'description' in item && item.description && <p>{item.description}</p>}</div></article>)}</div></section>
    <section className="section-pad reveal"><SectionHeading title="Community, leadership & volunteering" /><div className="timeline">{community.map((item) => <article key={`${item.period}-${item.title}`}><span>{item.period}</span><div><h3>{item.title}</h3><p className="eyebrow">{item.place}</p>{item.detail && <p>{item.detail}</p>}</div></article>)}</div></section><ContactCallout />
  </>;
}

export function ToolkitPage() {
  return <>
    <PageIntro eyebrow="Toolkit · Skills & certifications" title="What I build with, and what's verified."><p>Languages, frameworks, and tools I use in practice, alongside certifications completed along the way.</p></PageIntro>
    <section className="section-pad reveal"><SectionHeading title="Skills & tools" /><div className="skill-groups">{Object.entries(techStack).map(([category, items]) => <div className="skill-group" key={category}><p className="eyebrow">{category}</p><ul className="interest-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
    <section className="section-pad reveal"><SectionHeading title="Certifications" /><div className="achievement-list">{certifications.map((cert) => <article key={cert.name}><span>{cert.date}</span><div><h3>{cert.name}</h3><p className="achievement-result">{cert.provider}</p>{cert.verify && <a className="text-link" href={cert.verify} target="_blank" rel="noreferrer">Verify {linkIcon}</a>}</div></article>)}</div></section>
    <ContactCallout />
  </>;
}

const CATEGORY_ORDER = ['Passion project', 'Competition', 'Assignment', 'Professional', 'AI/ML', 'Full-stack', 'Data', 'Agent systems', 'Research prototype', 'Computer vision', 'Mobile', 'Java'];

export function ProjectsPage() {
  const present = new Set(projects.flatMap((project) => project.categories ?? []));
  const filters = ['All', ...CATEGORY_ORDER.filter((category) => present.has(category))];
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => projects.filter((project) => filter === 'All' || project.categories?.includes(filter)), [filter]);
  return <><PageIntro eyebrow="Projects · Selected systems" title="Case studies, not a wall of cards."><p>Research prototypes, competition builds, semantic systems, and software products. Verified details are carried over; gaps are labelled instead of guessed.</p></PageIntro><div className="filter-bar" role="group" aria-label="Filter projects">{filters.map((item) => <button type="button" key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><section className="case-study-list reveal">{visible.map((project, index) => <article className="case-study-row" key={project.slug}><a className="case-visual-link" href={pageHref(`/projects/${project.slug}`)}><ProjectVisual project={project} priority={index < 2} /></a><div className="case-copy"><p className="eyebrow">{project.label} · {project.status}</p><h2><a href={pageHref(`/projects/${project.slug}`)}>{project.title}</a></h2><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><a className="text-link" href={pageHref(`/projects/${project.slug}`)}>Open case study <ArrowRight size={15} /></a></div></article>)}</section>{visible.length === 0 && <div className="empty-state"><h2>No projects match this filter yet.</h2><button className="button" type="button" onClick={() => setFilter('All')}>Show all projects</button></div>}</>;
}

export function ProjectPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFoundPage />;
  return <article className="detail-page"><a className="back-link" href={pageHref('/projects')}><ArrowLeft size={16} /> All projects</a><header className="detail-hero"><div><p className="eyebrow">{project.label} · {project.status}</p><h1>{project.title}</h1><p>{project.summary}</p></div><ProjectVisual project={project} priority /></header><div className="detail-grid"><aside><p className="eyebrow">Built with</p><div className="tag-list vertical">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.team && <p className="team-line"><span className="eyebrow">{project.team.length > 1 ? 'Teammates' : 'Teammate'}</span> {project.team.join(', ')}</p>}<div className="detail-links">{project.repository && <a href={project.repository} target="_blank" rel="noreferrer"><Github size={16} /> Repository {linkIcon}</a>}{project.publication && <a href={project.publication} target="_blank" rel="noreferrer">Publication {linkIcon}</a>}{project.presentation && <a href={project.presentation} target="_blank" rel="noreferrer">Presentation {linkIcon}</a>}</div></aside><div className="case-sections">
    {project.problem && <section><p className="eyebrow">The problem</p><h2>What needed to change?</h2><p>{project.problem}</p></section>}{project.context && <section><p className="eyebrow">Context</p><h2>Where this work began</h2><p>{project.context}</p></section>}{project.role && <section><p className="eyebrow">My role</p><p>{project.role}</p></section>}{project.process && <section><p className="eyebrow">Process</p><ol>{project.process.map((step) => <li key={step}>{step}</li>)}</ol></section>}{project.implementation && <section><p className="eyebrow">Implementation</p><h2>How the system works</h2><p>{project.implementation}</p></section>}{project.outcome && <section><p className="eyebrow">Outcome</p><h2>What came from it</h2><p>{project.outcome}</p></section>}{project.lessons && <section><p className="eyebrow">Lessons</p><p>{project.lessons}</p></section>}<PlaceholderNote items={project.needs} />
  </div></div><ContactCallout /></article>;
}

function PublicationGroup({ title, items }: { title: string; items: typeof publications }) {
  if (!items.length) return null;
  return <section className="section-pad reveal"><SectionHeading title={title} /><div className="publication-list">{items.map((publication) => <article key={publication.slug}><span>{publication.date || publication.year}</span><div><p className="eyebrow">{publication.typeNote || publication.venue}</p><h2>{publication.title}</h2><p className="publication-venue">{publication.venue}</p>{publication.authors && <p>{publication.authors}</p>}<p>{publication.summary}</p>{publication.citation && <p className="publication-citation">{publication.citation}</p>}<div className="inline-links">{publication.paper && <a href={publication.paper} target="_blank" rel="noreferrer">Paper {linkIcon}</a>}{publication.proceeding && <a href={publication.proceeding} target="_blank" rel="noreferrer">Proceedings {linkIcon}</a>}{publication.presentation && <a href={publication.presentation} target="_blank" rel="noreferrer">Presentation {linkIcon}</a>}</div><PlaceholderNote items={publication.needs} compact /></div></article>)}</div></section>;
}

export function ResearchPage() {
  const published = publications.filter((p) => p.status === 'Published');
  const accepted = publications.filter((p) => p.status === 'Accepted');
  const underReview = publications.filter((p) => p.status === 'Needs review' || p.status === 'Ongoing');
  return <><PageIntro eyebrow="Research · Questions in progress" title="Intelligent systems should be useful, understandable, and built around people."><p>My interests sit between AI, semantic knowledge, interaction, accessibility, and immersive systems, with research as a way to ask better questions and prototypes as a way to test them.</p></PageIntro>
    <section className="section-pad reveal"><SectionHeading title="Research interests" /><ul className="interest-list">{researchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul></section>
    <PublicationGroup title="Published & presented" items={published} />
    <PublicationGroup title="Accepted, presentation & publication in progress" items={accepted} />
    <PublicationGroup title="Under review & ongoing research" items={underReview} />
    <ContactCallout /></>;
}

function PostPreview({ post }: { post: WritingPost; key?: string }) {
  if (!post.blocks?.length) {
    return <article className="post-preview is-planned"><div><p className="eyebrow">{post.category} · {post.status}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div><p className="coming-soon-tag">Coming soon</p></article>;
  }
  return <article className="post-preview"><div><p className="eyebrow">{post.category} · {post.status}</p><h2><a href={pageHref(`/writing/${post.slug}`)}>{post.title}</a></h2><p>{post.excerpt}</p></div><div className="post-meta"><span>{post.date}</span><span>{post.readingTime}</span></div><a className="text-link" href={pageHref(`/writing/${post.slug}`)}>Read the post <ArrowRight size={15} /></a></article>;
}

export function WritingPage() {
  const categories = ['All', ...Array.from(new Set(writing.map((post) => post.category)))];
  const [category, setCategory] = useState('All');
  const visible = category === 'All' ? writing : writing.filter((post) => post.category === category);
  return <><PageIntro eyebrow="Writing · Notes from the work" title="Build logs, research rabbit holes, and honest reflections."><p>A home for thinking in public about how systems get built, how research changes the questions, and what I learn along the way.</p></PageIntro><div className="filter-bar" role="group" aria-label="Filter writing">{categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={category === item ? 'active' : ''}>{item}</button>)}</div><section className="writing-list reveal">{visible.map((post) => <PostPreview key={post.slug} post={post} />)}</section></>;
}

export function PostPage({ slug }: { slug: string }) {
  const post = writing.find((item) => item.slug === slug);
  if (!post) return <NotFoundPage />;
  const related = writing.filter((item) => item.slug !== slug && (item.category === post.category || item.tags.some((tag) => post.tags.includes(tag)))).slice(0, 2);
  return <article className="article-page"><a className="back-link" href={pageHref('/writing')}><ArrowLeft size={16} /> All writing</a><header><p className="eyebrow">{post.category} · {post.status}</p><h1>{post.title}</h1><p className="article-deck">{post.excerpt}</p><div className="article-meta"><span>{post.date || 'Publication date to add'}</span><span>{post.readingTime || 'Reading time to add'}</span><span>{post.tags.join(' · ')}</span></div></header>{post.blocks?.length ? <ContentBlocks blocks={post.blocks} /> : <div className="coming-soon"><p>Coming soon.</p></div>}{related.length > 0 && <section className="related-posts"><SectionHeading index="→" title="Related notes" /><div className="writing-grid">{related.map((item) => <PostPreview key={item.slug} post={item} />)}</div></section>}</article>;
}

export function CurrentlyPage() {
  return <><PageIntro eyebrow="Currently · A lightweight status page" title="What has my attention right now."><p>A small, deliberately low-maintenance snapshot. Last updated: {currently.updated}.</p></PageIntro><section className="currently-grid reveal">{currently.items.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, '0')}</span><p className="eyebrow">{item.label}</p><h2>{item.text}</h2></article>)}</section><aside className="content-guide"><p className="eyebrow">Easy to update</p><p>Every item on this page lives in one object in <code>content/site.ts</code>. Update the date and text there, no component changes required.</p></aside></>;
}

export function ContactPage() {
  return <><PageIntro eyebrow="Contact · Start a conversation" title="Have an interesting problem, question, or system to build?"><p>I am open to conversations about research, software, intelligent agents, semantic systems, accessibility, open source, and thoughtful startup work.</p></PageIntro><section className="contact-grid reveal"><a href={`mailto:${site.email}`}><Mail size={22} /><div><p className="eyebrow">Email</p><h2>{site.email}</h2><p>Best for project and research enquiries.</p></div>{linkIcon}</a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22} /><div><p className="eyebrow">LinkedIn</p><h2>Connect professionally</h2><p>Experience, updates, and conversation.</p></div>{linkIcon}</a><a href={site.github} target="_blank" rel="noreferrer"><Github size={22} /><div><p className="eyebrow">GitHub</p><h2>@Lilvamp237</h2><p>Repositories and experiments.</p></div>{linkIcon}</a><a href={asset(site.cv)} target="_blank" rel="noreferrer"><Download size={22} /><div><p className="eyebrow">CV</p><h2>Download résumé</h2><p>The full picture, one download away.</p></div>{linkIcon}</a></section></>;
}

function ContactCallout() {
  return <section className="contact-callout reveal"><p className="eyebrow">A useful conversation can start small.</p><h2>Research question, product idea, or something not yet neatly defined?</h2><a className="button primary" href={pageHref('/contact')}>Let’s talk <ArrowRight size={17} /></a></section>;
}

export function NotFoundPage() {
  return <section className="not-found"><p className="eyebrow">404 · Unmapped territory</p><h1>This page is not part of the system yet.</h1><p>The link may be old, or the idea may still be waiting to become real.</p><a className="button primary" href={pageHref('/')}>Return home <ArrowRight size={17} /></a></section>;
}
