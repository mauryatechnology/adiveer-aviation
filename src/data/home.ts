import { Zap, Shield, Globe, Target, Cpu, Cloud, Settings, Workflow, Briefcase, FileText } from "lucide-react";
import { services } from "./services";
import { projects } from "./work";

export const whyUs = [
  { icon: Cpu, title: "Proprietary Engineering DNA", desc: "We build from scratch — every algorithm, airframe, and circuit is conceived, designed, and tested in-house. No white-labeling. Full IP ownership." },
  { icon: Settings, title: "Vertically Integrated Stack", desc: "From chip-level embedded systems to cloud-level SaaS analytics — we own the entire stack. This gives unmatched control, security, and cost efficiency." },
  { icon: Shield, title: "Regulatory-Ready", desc: "Designed for compliance from Day 1 — DGCA Drone Rules 2021, NPNT, DigitalSky, DAP 2020, and IDR Act. Our systems are built to pass certification, not just fly." },
  { icon: Target, title: "Aatmanirbhar by Design", desc: "Every component we don't build, we indigenize. We are committed to reducing India's 60%+ import dependency in surveillance and defense technology." },
  { icon: Briefcase, title: "B2G Track Record", desc: "Government and defense procurement requires proven performance. We build to procurement standards before the tender is issued." },
  { icon: Zap, title: "Mission-Driven", desc: "We solve real-world, high-impact problems — protecting borders, feeding India with precision agriculture, and building the autonomous logistics backbone of tomorrow." },
];

export const heroHeadline = {
  tag: "India's Deep-Tech Vanguard",
  words: ["We", "Build", "What", "Others"],
  highlight: "Only Imagine.",
  description: "From autonomous drones to AI-driven defense systems, Adiveer Aviation engineers technologies that shape tomorrow's world — India-born, globally deployable, and built to last."
};

export const heroStats = [
  { value: "50+ Systems", label: "Deployed / Engineered", tooltip: "Specify if deployed in field or total engineered; use 'Engineered' if not all field-deployed." },
  { value: "6 Verticals", label: "Core Technology Areas", tooltip: "Drone Systems, AI, Robotics, Defense, Embedded Systems, SaaS Platforms." },
  { value: "200,000+", label: "Engineering Hours", tooltip: "Cumulative across R&D, prototyping, and field operations." },
  { value: "#1 Deep-Tech", label: "Startup, MP", tooltip: "Specific, defensible market position in Madhya Pradesh." },
];

export const stages = [
  { id: "01", title: "R&D & Prototyping", desc: "Rapid ideation and engineering cycles turning concepts into working prototypes in weeks.", icon: FileText },
  { id: "02", title: "Systems Integration", desc: "Combining hardware, AI, sensors, and communication systems into unified, field-ready solutions.", icon: Workflow },
  { id: "03", title: "Field Deployment", desc: "Real-world deployment in extreme environments: borders, coastal zones, agriculture, and smart cities.", icon: Globe },
  { id: "04", title: "Training & Consulting", desc: "Upskilling operators, defense personnel, and enterprise teams in drones, AI, and autonomous systems.", icon: Target },
];

export const featuredProjects = projects.slice(0, 3);

export const homeOfferings = services.map((s, i) => ({
  num: `0${i + 1}`,
  title: s.title,
  desc: s.desc,
  href: `/products#${s.id}`
}));

export const growthMilestones = [
  { label: "Startup India Registration", status: "Done", date: "2023" },
  { label: "DIC (MSME) Registration", status: "Done", date: "2023" },
  { label: "V-8 Tech Validation", status: "Done", date: "2024" },
  { label: "Seed Funding Phase", status: "In Progress", date: "Active" },
  { label: "Go-to-Market (Surveillance)", status: "Active", date: "2024" },
];

export const currentStatus = {
  phase: "Pre-Seed / Growth",
  tagline: "India's next-gen deep-tech ecosystem.",
  metrics: [
    { label: "Regulatory Compliance", value: "95%" },
    { label: "IP Ownership", value: "100%" },
    { label: "Tech Verticals", value: "6" }
  ]
};
