import { LucideIcon } from 'lucide-react';

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  details?: string;
  courses?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ProjectOrInterest {
  title: string;
  description: string;
  tags: string[];
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  url: string;
  citations?: string;
}