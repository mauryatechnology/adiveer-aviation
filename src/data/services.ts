import { ServiceVertical } from "@/types";
import { Plane, Brain, Bot, Shield, Leaf, Cog, GraduationCap, Headphones } from "lucide-react";

export const services: ServiceVertical[] = [
  { 
    id: "drones", 
    icon: Plane, 
    title: "Drone Systems", 
    desc: "Custom-designed UAVs for surveillance, mapping, delivery, and defense. Multi-rotor, fixed-wing, and VTOL platforms engineered for extreme conditions.", 
    features: ["Long-endurance platforms", "Heavy-lift cargo drones", "Swarm-capable systems", "Custom payload integration"] 
  },
  { 
    id: "ai", 
    icon: Brain, 
    title: "AI Solutions", 
    desc: "Edge AI, computer vision, NLP, and autonomous decision-making systems for real-world deployment.", 
    features: ["Edge AI inference", "Computer vision", "Predictive analytics", "Autonomous navigation"] 
  },
  { 
    id: "robotics", 
    icon: Bot, 
    title: "Robotics Platforms", 
    desc: "Ground, aerial, and marine autonomous platforms for hazardous, remote, and complex environments.", 
    features: ["UGV platforms", "Robotic arms", "Autonomous navigation", "Sensor integration"] 
  },
  { 
    id: "defense", 
    icon: Shield, 
    title: "Defense Technology", 
    desc: "Mission-critical systems for national security, border protection, and tactical operations.", 
    features: ["Surveillance systems", "Counter-drone tech", "Secure communications", "Tactical platforms"] 
  },
  { 
    id: "environmental", 
    icon: Leaf, 
    title: "Environmental Tech", 
    desc: "Technology-driven solutions for climate monitoring, conservation, and ecological intelligence.", 
    features: ["Forest monitoring", "Water quality sensing", "Wildlife tracking", "Carbon mapping"] 
  },
  { 
    id: "custom", 
    icon: Cog, 
    title: "Custom Solutions", 
    desc: "Bespoke engineering for unique requirements — from concept through deployment.", 
    features: ["Requirements analysis", "Custom R&D", "System integration", "Field deployment"] 
  },
  { 
    id: "consulting", 
    icon: Headphones, 
    title: "Consulting", 
    desc: "Strategic technology consulting for organizations adopting autonomous and AI systems.", 
    features: ["Technology roadmap", "Feasibility studies", "Vendor assessment", "Integration strategy"] 
  },
  { 
    id: "training", 
    icon: GraduationCap, 
    title: "Training Programs", 
    desc: "Comprehensive training in drone operations, AI, robotics, and emerging technologies.", 
    features: ["Drone piloting", "AI/ML workshops", "Robotics labs", "Certification programs"] 
  },
];
