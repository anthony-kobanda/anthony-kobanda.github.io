export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  location: string;
  year: string;
  details: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}