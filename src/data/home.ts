import { Zap, Globe, Wrench, Target } from "lucide-react";
import { services } from "./services";
import { projects } from "./work";

export const whyUs = [
  { icon: Zap, title: "Deep Engineering DNA", desc: "We build proprietary tech from scratch — hardware + software." },
  { icon: Globe, title: "India-Born, Global Mindset", desc: "Designed for India's challenges, scalable globally." },
  { icon: Wrench, title: "End-to-End Execution", desc: "We design, build, and deploy — full control over performance and security." },
  { icon: Target, title: "Mission-Driven Innovation", desc: "We solve real-world, high-impact problems — not just theoretical tech." },
];

export const heroHeadline = {
  tag: "India's Deep Tech Vanguard",
  words: ["We", "Build", "What", "Others"],
  highlight: "Only Imagine.",
  description: "From autonomous drones to AI-driven defense systems, Adiveer Aviations engineers the technologies that shape tomorrow's world. India-born. Globally deployed."
};

// Derived stats for the Hero section
export const heroStats = [
  { value: "50+", label: "Field Deployments" },
  { value: services.length.toString(), label: "Innovation Verticals" },
  { value: "200k+", label: "R&D Man-Hours" },
  { value: "#1", label: "Deep-Tech Excellence" },
];

// Featured project sync with actual collection
const mainProject = projects[0];
export const featuredProject = {
  id: mainProject.id,
  slug: mainProject.slug,
  name: mainProject.name,
  category: mainProject.category,
  desc: mainProject.desc,
  tech: mainProject.tech.join(" · "),
  metrics: mainProject.milestones,
  cta: {
    label: "Analyze Case Study",
    href: `/work/${mainProject.slug}`
  }
};

export const homeOfferings = services.slice(0, 4).map((s, i) => ({
  num: `0${i + 1}`,
  title: s.title,
  desc: s.desc,
  href: `/products/${s.slug}`
}));

export const homeMetrics = [
  { label: "Engineering Verticals", value: `${services.length}`, sub: "Domain Areas" },
  { label: "Deployed Systems", value: "50+", sub: "Scalable Units" },
  { label: "IP Assets", value: "12+", sub: "Proprietary IP" },
  { label: "Strategic Projects", value: `${projects.length}`, sub: "High-Imapct" },
];
