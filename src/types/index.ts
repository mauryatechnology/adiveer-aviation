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
  icon: LucideIcon;
  title: string;
  desc: string;
  features?: string[];
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
  icon: LucideIcon;
  title: string;
  desc: string;
  techs: string[];
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
  name: string;
  category: string;
  icon: LucideIcon;
  desc: string;
  tech: string;
  stat: string;
  impact: string;
}

export interface Partnership {
  icon?: LucideIcon;
  title: string;
  desc: string;
}
