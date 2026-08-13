
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  skillsEarned?: string[];
  techStack: string[];
  github: string;
  demo?: string;
  image?: string;
  categories: ('AI/ML' | 'Web & Full-Stack' | 'Data Science' | 'Healthcare Tech' | 'Mobile & Desktop' | 'Agent Systems')[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Experience {
  title: string;
  role: string;
  date: string;
  description: string;
}

export interface Publication {
  title: string;
  conference: string;
  date: string;
  description: string;
  link?: string;
  status: 'Published' | 'Under Review' | 'Ongoing';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  date: string;
  badgeUrl: string;
  verificationLink?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export enum Section {
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  PROJECTS = 'PROJECTS',
  PUBLICATIONS = 'PUBLICATIONS',
  EDUCATION = 'EDUCATION',
  ACHIEVEMENTS = 'ACHIEVEMENTS',
  CONTACT = 'CONTACT',
  AI_CHAT = 'AI_CHAT'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type ProjectStatus = 'Active' | 'Completed' | 'Research' | 'Needs details';

export interface CaseStudy {
  slug: string;
  title: string;
  label: string;
  summary: string;
  problem?: string;
  context?: string;
  role?: string;
  process?: string[];
  implementation?: string;
  technologies: string[];
  categories?: string[];
  outcome?: string;
  lessons?: string;
  team?: string[];
  image?: string;
  repository?: string;
  publication?: string;
  presentation?: string;
  status: ProjectStatus;
  featured?: boolean;
  needs?: string[];
}

export interface ResearchEntry {
  slug: string;
  title: string;
  authors?: string;
  venue: string;
  year: string;
  date?: string;
  typeNote?: string;
  status: 'Published' | 'Accepted' | 'Ongoing' | 'Needs review';
  summary: string;
  paper?: string;
  presentation?: string;
  project?: string;
  proceeding?: string;
  citation?: string;
  needs?: string[];
}

export type PostBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'image'; src: string; alt: string };

export interface WritingPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Journey' | 'Build Logs' | 'Research Rabbit Holes' | 'Reflections' | 'AI' | 'Open Source' | 'Startups';
  tags: string[];
  date?: string;
  readingTime?: string;
  featured?: boolean;
  status: 'Planned' | 'Draft' | 'Published';
  outline: string[];
  blocks?: PostBlock[];
}
