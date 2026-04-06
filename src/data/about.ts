import { TimelineEvent, CoreValue, PhilosophyPillar } from "@/types";
import { Lightbulb, Shield, Ruler, Landmark, Leaf, Users } from "lucide-react";

export const timeline: TimelineEvent[] = [
  { year: "2020–22", title: "The Vision", desc: "Founder Aditya Veer Shrivastava begins foundational R&D in autonomous drone systems and AI from Bhopal, Madhya Pradesh — driven by India's deep-tech gap in indigenous aerospace." },
  { year: "2022", title: "First Systems", desc: "Early autonomous drone platforms developed for terrain mapping and surveillance use cases. Edge AI integration achieved without cloud dependency." },
  { year: "2023", title: "Scale & Validation", desc: "Expanded to 6 technology verticals. 50+ systems engineered. Defense and infrastructure use cases validated in field conditions." },
  { year: "2024", title: "Formal Incorporation", desc: "Adiveer Aviation (OPC) Private Limited incorporated under Companies Act, 2013. Registered in Madhya Pradesh. IP strategy and regulatory compliance framework established." },
  { year: "2025–26", title: "Growth Stage", desc: "First institutional partnerships, government program participation, and international market development. Pathway to Pvt. Ltd. conversion initiated." },
];

export const values: CoreValue[] = [
  { icon: Lightbulb, title: "Innovation First", desc: "We invest in R&D and breakthrough technologies before market pressure demands it. We don't follow trends — we define them." },
  { icon: Shield, title: "Integrity", desc: "We operate with the highest standards of legal, ethical, and regulatory compliance — in every contract, every system, every interaction." },
  { icon: Ruler, title: "Precision", desc: "We engineer to aerospace-grade standards. Zero tolerance for mediocrity, because our systems operate where failure is not an option." },
  { icon: Landmark, title: "Sovereignty", desc: "We are committed to indigenous technology and Aatmanirbhar Bharat. Every system we build is one less import India needs." },
  { icon: Leaf, title: "Sustainability", desc: "We build solutions that are environmentally responsible, energy-efficient, and long-term viable." },
  { icon: Users, title: "Collaboration", desc: "The best deep-tech emerges from partnerships — with institutions, government, and industry. We amplify impact through the ecosystem." },
];

export const pillars: PhilosophyPillar[] = [
  { title: "Build, Don't Buy", desc: "We develop proprietary technology from scratch. Every algorithm, every circuit, every airframe is conceived, designed, and tested in-house." },
  { title: "Field-First Engineering", desc: "Our systems are designed for the real world: dust, heat, altitude, and hostile environments. Lab prototypes don't impress us. Field-proven systems do." },
  { title: "Vertical Integration", desc: "From chip-level embedded systems to cloud-level SaaS analytics, we own the entire stack. This gives us unmatched control, security, and performance." },
  { title: "India's Technology Sovereignty", desc: "We believe India must build its own critical technology infrastructure. We are committed to reducing dependency on foreign tech in defense and strategic sectors." },
];

export const vision = "To be India's most innovative aerospace and autonomous systems company — engineering the future of flight, intelligence, and automation from the heartland of India.";

export const mission = "To design, develop, and deploy world-class unmanned aerial systems, AI-powered autonomous technologies, and aerospace solutions that empower India's defence, agriculture, logistics, and smart infrastructure sectors — creating sustainable economic value and advancing India's position as a global aerospace manufacturing nation.";

export const problemsList = [
  "India imports 60%+ of its defense and surveillance technology — creating strategic vulnerability and economic drain.",
  "Critical infrastructure monitoring relies on manual, error-prone, human-dependent systems with no 24/7 capability.",
  "India's agricultural sector loses 15–30% of potential yield annually to delayed detection of crop diseases and water stress.",
  "Autonomous systems remain inaccessible to most Indian industries due to import cost, regulatory complexity, and service gaps.",
  "Counter-drone and anti-UAS capability in India is critically underdeveloped versus evolving threat landscapes.",
];

export const solutionsList = [
  "100% indigenous deep-tech IP in drone hardware, AI, robotics, and embedded systems — designed to replace imports.",
  "AI-powered autonomous monitoring systems that operate 24/7, self-report anomalies, and require zero manual intervention.",
  "Precision agriculture AI platforms that detect crop disease, water stress, and nutrient deficiency from drone imagery in real time.",
  "Affordable, field-ready autonomous platforms designed specifically for India's operating conditions and regulatory framework.",
  "Counter-UAS systems and tactical defense platforms developed under DAP 2020 and iDEX programme frameworks.",
];

export const legalIdentity = [
  { field: "Legal Name", detail: "Adiveer Aviation (OPC) Private Limited" },
  { field: "Corporate Type", detail: "One Person Company (OPC) under Companies Act, 2013" },
  { field: "CIN", detail: "[To be updated upon allotment by ROC, Madhya Pradesh]" },
  { field: "Registered State", detail: "Madhya Pradesh, India" },
  { field: "Registered Office", detail: "1, Adi Parisar, Bagsewaniya, Bhopal, Madhya Pradesh 462026" },
  { field: "Founder & Sole Director", detail: "Aditya Veer Shrivastava" },
  { field: "Authorized Share Capital", detail: "₹10,00,000 (10 Lakh) — 1,00,000 Equity Shares @ ₹10" },
  { field: "Paid-Up Capital", detail: "₹1,00,000 (1 Lakh) — 10,000 Equity Shares @ ₹10" },
  { field: "Regulatory Compliance", detail: "Drone Rules 2021, DGCA Civil Aviation Requirements, Companies Act 2013" },
];
