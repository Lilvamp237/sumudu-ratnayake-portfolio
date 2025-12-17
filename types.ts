
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
  category: 'AI/ML' | 'Game Dev' | 'XR' | 'Web';
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
