import { TimelineEvent, CoreValue, PhilosophyPillar } from "@/types";
import { Lightbulb, Shield, Users, Zap, Heart, Globe } from "lucide-react";

export const timeline: TimelineEvent[] = [
  { year: "2020", title: "The Spark", desc: "Founded with a mission to make India a global leader in deep-tech innovation — starting from a small lab with big dreams." },
  { year: "2021", title: "First Flight", desc: "Successfully deployed our first autonomous drone system for terrain mapping in India's northeastern corridors." },
  { year: "2022", title: "AI Breakthrough", desc: "Developed edge AI systems capable of real-time decision-making without cloud dependency — a game-changer for defense." },
  { year: "2023", title: "Scale & Impact", desc: "Expanded to 6 technology verticals, 50+ deployed systems, and partnerships across defense, environment, and infrastructure." },
  { year: "2024", title: "Global Ambitions", desc: "Engineering systems for international deployments while deepening India's self-reliance in critical technologies." },
];

export const values: CoreValue[] = [
  { icon: Lightbulb, title: "Relentless Innovation", desc: "We don't follow trends — we engineer breakthroughs that define new categories." },
  { icon: Shield, title: "Integrity First", desc: "We operate with transparency, accountability, and unwavering ethical standards." },
  { icon: Users, title: "Collaborative Spirit", desc: "The best solutions emerge when brilliant minds work together across disciplines." },
  { icon: Zap, title: "Execution Excellence", desc: "Ideas are abundant — execution is rare. We ship working systems, not presentations." },
  { icon: Heart, title: "Purpose Over Profit", desc: "Every project must serve a meaningful mission — protecting lives, ecosystems, or sovereignty." },
  { icon: Globe, title: "Global Standards", desc: "India-born, world-class. We build to international benchmarks from day one." },
];

export const pillars: PhilosophyPillar[] = [
  { title: "Build, Don't Buy", desc: "We develop proprietary technology from scratch. Every algorithm, every circuit, every airframe is conceived, designed, and tested in-house." },
  { title: "Field-First Engineering", desc: "Our systems are designed for the real world — dust, heat, altitude, and hostile environments. Lab prototypes don't impress us. Field-proven systems do." },
  { title: "Vertical Integration", desc: "From chip-level hardware to cloud-level analytics, we own the entire stack. This gives us unmatched control, security, and performance." },
  { title: "India's Technology Sovereignty", desc: "We believe India must build its own critical technology infrastructure. We are committed to reducing dependency on foreign tech in defense and strategic sectors." },
];

export const problemsList = [
  "India imports 60%+ of its defense and surveillance technology from foreign vendors.",
  "Critical infrastructure monitoring relies on manual, error-prone human systems.",
  "Environmental degradation accelerates without real-time, technology-driven intelligence.",
  "Autonomous systems remain inaccessible to most Indian industries due to cost and complexity.",
];

export const solutionsList = [
  "Indigenous deep-tech IP that reduces foreign dependency in critical sectors.",
  "AI-powered autonomous monitoring systems that operate 24/7 without human intervention.",
  "Environmental intelligence platforms that turn satellite and drone data into actionable insights.",
  "Affordable, field-ready autonomous platforms designed for India's unique operating conditions.",
];
