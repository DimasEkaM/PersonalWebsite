export interface Profile {
  name: string;
  title: string;
  shortSummary: string;
  longBio: string;
  location: string;
  phone: string;
  email: string;
  linkedIn: string;
  github: string;
  website?: string;
  availability: "open" | "open-to-offers" | "not-open";
  photo?: string;
  resumePdf?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyShort?: string;
  location?: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  currentlyWorking?: boolean;
  summary?: string;
  bullets: string[];
  tech?: string[];
  order: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "web" | "mobile" | "fullstack" | "cms";
  technologies: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  highlights?: string[];
  order: number;
}

export interface Skill {
  name: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
  order: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number;
  gpa?: number;
  achievements?: string[];
  order: number;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  url: string;
  category?: string;
  order: number;
}
