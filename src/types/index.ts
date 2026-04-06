import { LucideIcon } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  desc: string;
  links?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface InsightItem {
  title: string;
  type?: string;
  desc?: string;
  date?: string;
  tag?: string;
  href?: string;
}

export interface ServiceVertical {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  fullDesc: string;
  features: string[];
  capabilities: { title: string; desc: string }[];
  useCases: string[];
  results?: { label: string; value: string }[];
  revenueModel?: string;
  compliance?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
}

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface PhilosophyPillar {
  title: string;
  desc: string;
}

export interface TechStack {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  fullDesc: string;
  techs: string[];
  architecture: { component: string; role: string }[];
  benefits: string[];
}

export interface CareerRole {
  title: string;
  dept: string;
  location: string;
  type: string;
  desc: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  sub: string;
}

export interface WorkProject {
  id: string;
  slug: string;
  name: string;
  category: string;
  icon: LucideIcon;
  desc: string;
  fullDesc: string;
  tech: string[];
  stat: string;
  impact: string;
  challenge: string;
  solution: string;
  features: string[];
  milestones: { label: string; value: string }[];
}

export interface Partnership {
  icon?: LucideIcon;
  title: string;
  desc: string;
}
