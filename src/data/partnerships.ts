import { Partnership } from "@/types";
import { Shield, Landmark, Leaf, Factory, Building2 } from "lucide-react";

export const industries: Partnership[] = [
  { icon: Shield, title: "Defense & Security", desc: "Armed forces, border security agencies, and intelligence organizations." },
  { icon: Landmark, title: "Government & Public Sector", desc: "Smart city initiatives, disaster management, and public infrastructure monitoring." },
  { icon: Leaf, title: "Environment & Conservation", desc: "Wildlife protection, forest monitoring, and environmental compliance." },
  { icon: Factory, title: "Industrial & Manufacturing", desc: "Automation, quality assurance, and predictive maintenance solutions." },
  { icon: Building2, title: "Infrastructure", desc: "Inspection, surveying, and monitoring for energy, transport, and construction." },
];

export const partnershipModels: Partnership[] = [
  { title: "Technology Partnership", desc: "Co-develop and deploy deep-tech solutions combining your domain expertise with our engineering capabilities." },
  { title: "System Integration", desc: "Integrate our autonomous platforms, AI systems, or sensor networks into your existing infrastructure." },
  { title: "Research Collaboration", desc: "Joint R&D programs with academic institutions, defense labs, and industry research centers." },
  { title: "Channel Partnership", desc: "Distribute and deploy AdiVeer solutions in your geography or sector." },
];

export const partnerTypes = [
  "Government Agencies",
  "Global OEMS",
  "Silicon Partners",
  "Research Labs"
];
