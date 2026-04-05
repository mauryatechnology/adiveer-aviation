import { WorkProject } from "@/types";
import { Plane, Zap, Bot, Shield, Leaf, Target } from "lucide-react";

export const workCategories = ["All", "Aerospace", "AI Systems", "Robotics", "Defense", "Environmental"];

export const projects: WorkProject[] = [
  { name: "Project Aether", category: "Aerospace", icon: Plane, desc: "High-altitude, long-endurance autonomous surveillance drone for border terrain monitoring.", tech: "Solar-hybrid power · Edge AI · Encrypted mesh comms", stat: "72h continuous flight", impact: "500+ km border terrain monitored" },
  { name: "TerraAI", category: "AI Systems", icon: Zap, desc: "Real-time environmental topology mapping using multi-spectral drone imagery and satellite data.", tech: "ML pipeline · Multi-spectral imaging · GIS integration", stat: "10M+ data points", impact: "Real-time ecological intelligence" },
  { name: "GhostRunner", category: "Robotics", icon: Bot, desc: "Autonomous UGV platform for hazardous terrain reconnaissance and supply delivery.", tech: "LiDAR nav · Autonomous path planning · Ruggedized chassis", stat: "Zero-operator capable", impact: "Hazardous zone operations" },
  { name: "SkyNet Grid", category: "Defense", icon: Shield, desc: "Distributed drone swarm system for wide-area surveillance and coordinated response.", tech: "Swarm AI · Mesh networking · Real-time coordination", stat: "20+ drone swarm", impact: "360° coverage" },
  { name: "GreenPulse", category: "Environmental", icon: Leaf, desc: "AI-powered afforestation monitoring and ecological health assessment platform.", tech: "Satellite imagery · ML classification · IoT sensors", stat: "50K hectares tracked", impact: "Forest health intelligence" },
  { name: "VayuShield", category: "Aerospace", icon: Plane, desc: "Counter-drone detection and neutralization system for critical infrastructure protection.", tech: "RF detection · AI classification · Directed response", stat: "99.2% detection rate", impact: "Critical asset protection" },
  { name: "MindForge", category: "AI Systems", icon: Zap, desc: "Edge computing platform for real-time sensor fusion and autonomous decision-making.", tech: "Edge AI · Sensor fusion · Low-latency inference", stat: "< 50ms latency", impact: "Real-time field decisions" },
  { name: "TitanArm", category: "Robotics", icon: Bot, desc: "Industrial robotic arm with AI-guided precision for manufacturing and assembly tasks.", tech: "6-axis control · Vision AI · Force feedback", stat: "±0.01mm precision", impact: "Manufacturing automation" },
  { name: "EagleEye", category: "Defense", icon: Target, desc: "Long-range electro-optical surveillance system with AI-powered threat identification.", tech: "Thermal imaging · AI detection · Auto-tracking", stat: "50km detection range", impact: "Border surveillance" },
  { name: "AquaSense", category: "Environmental", icon: Leaf, desc: "Autonomous water quality monitoring system using drone-deployed sensor networks.", tech: "Autonomous drones · Water sensors · Cloud analytics", stat: "24/7 monitoring", impact: "Water ecosystem health" },
];
