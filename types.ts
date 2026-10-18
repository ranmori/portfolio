
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  category: 'ai' | 'web';
}

export interface Contribution {
  repo: string;
  title: string;
  prUrl: string;
  status: 'merged' | 'open';
  lang: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  url: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Painting {
  id: number;
  title: string;
  style: string;
  image: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudyNote {
  title: string;
  body: string;
}

export interface CaseStudy {
  name: string;
  pitch: string;
  summary: string;
  tags: string[];
  links: { siteUrl: string; appStoreUrl?: string; playStoreUrl?: string };
  stats: CaseStudyStat[];
  loadTest: { intro: string; findings: CaseStudyNote[]; before: CaseStudyStat[] };
  tradeoffs: CaseStudyNote[];
  constraints: CaseStudyNote[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  coverFile?: string;
}
