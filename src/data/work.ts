import { WorkProject } from "@/types";
import { Plane, Zap, Bot, Shield, Leaf, Target } from "lucide-react";

export const workCategories = ["All", "Aerospace", "AI Systems", "Robotics", "Defense", "Environmental"];

export const projects: WorkProject[] = [
  {
    id: "v-8-surveillance",
    slug: "v-8-surveillance",
    name: "V-8 Long Range Surveillance",
    category: "Aerospace",
    icon: Plane,
    desc: "Autonomous aerial monitoring system with persistent loitering capabilities for border security and environment mapping.",
    fullDesc: "The V-8 is an advanced autonomous aerial platform designed for persistent, long-range surveillance in extreme environments. Built for scalability and reliability, it enables round-the-clock monitoring of critical borders and vast ecological corridors with minimal human intervention.",
    tech: ["Carbon Fiber Composites", "Edge AI Processing", "Thermal Imaging", "LTE-M Integration"],
    stat: "24h Flight Endurance",
    impact: "Secured over 500km of porous border territory.",
    challenge: "Traditional platforms lacked the endurance for truly persistent 24/7 monitoring in high-altitude environments.",
    solution: "Developed a custom composite airframe capable of modular battery swapping and integrated a proprietary low-power edge AI for real-time threat detection.",
    features: [
      "Custom carbon fiber airframe",
      "Cloud-synced telemetry dashboard",
      "Automated take-off and landing",
      "Night-vision thermal mapping"
    ],
    milestones: [
      { label: "Range", value: "80km" },
      { label: "Deployment", value: "3 States" },
      { label: "Accuracy", value: "99.8%" }
    ]
  },
  {
    id: "agri-stack-ai",
    slug: "agri-stack-ai",
    name: "Agri-Stack AI Hub",
    category: "AI Solutions",
    icon: Bot,
    desc: "Predictive analytics platform for large-scale agricultural yield optimization and disease detection.",
    fullDesc: "Agri-Stack is a comprehensive intelligence hub that leverages satellite imagery and on-ground sensor data to provide farmers and agro-enterprises with clear, actionable insights into crop health and soil quality.",
    tech: ["PyTorch", "Rust", "PostgreSQL", "React", "Tanzu Cloud"],
    stat: "15% Yield Increase",
    impact: "Enabled precision farming for 10,000+ farmers in MH.",
    challenge: "Farmers struggled with unpredictable weather patterns and late-stage disease detection, leading to multi-billion dollar losses.",
    solution: "Architected a distributed satellite-data pipeline that processes spectral signatures to identify disease outbreaks 14 days before human visibility.",
    features: [
      "Real-time spectral analysis",
      "Localized weather forecasting",
      "WhatsApp-based alert systems",
      "Soil moisture heatmaps"
    ],
    milestones: [
      { label: "Users", value: "10k+" },
      { label: "Savings", value: "$2.4M" },
      { label: "Alerts Sent", value: "12M" }
    ]
  },
  {
    id: "swarm-defense-net",
    slug: "swarm-defense-net",
    name: "Swarm Defense Net",
    category: "Defense",
    icon: Shield,
    desc: "Decentralized swarm intelligence platform for coordinated drone defense and tactical response.",
    fullDesc: "Swarm Defense Net is a secure, mesh-networked system allowing hundreds of independent robotic units to communicate and coordinate in real-time, creating a robust shield for sensitive installations.",
    tech: ["LoRa Mesh", "C++", "ROS2", "Decentralized AI"],
    stat: "Sub-50ms Response",
    impact: "Neutralized 100% of simulator intrusions.",
    challenge: "Centralized command-and-control systems are vulnerable to single-point failures and electronic warfare jamming.",
    solution: "Implemented a peer-to-peer swarm algorithm where each node makes autonomous tactical decisions based on global swarm intent.",
    features: [
      "Self-healing mesh network",
      "Zero-trust communication",
      "Tactical path planning",
      "Jamming-resistant protocols"
    ],
    milestones: [
      { label: "Latency", value: "42ms" },
      { label: "Units", value: "500+" },
      { label: "Reliability", value: "99.99%" }
    ]
  },
  {
    id: "eco-monitor-mesh",
    slug: "eco-monitor-mesh",
    name: "Eco-Monitor Mesh",
    category: "Environmental",
    icon: Leaf,
    desc: "Low-power sensor mesh for real-time forest fire detection and air quality monitoring.",
    fullDesc: "Eco-Monitor is a massive-scale sensor deployment system designed for remote, power-constrained environments to prevent catastrophic environmental events through early detection.",
    tech: ["Low-Power WAN", "Solar Charging", "Arduino Pro", "Node.js"],
    stat: "Zero False Alarms",
    impact: "Saved 2,000 hectares during '23 fire season.",
    challenge: "Remote forest regions lack power and connectivity, making real-time fire detection nearly impossible for vast territories.",
    solution: "Engineered ultra-low-power nodes with a 5-year battery life, using solar harvesting and long-range radio to bypass cellular requirements.",
    features: [
      "5-year node longevity",
      "Chemical gas signature detection",
      "Solar energy harvesting",
      "Public alerting API"
    ],
    milestones: [
      { label: "Nodes", value: "5,000" },
      { label: "Hectares", value: "50k+" },
      { label: "Uptime", value: "100%" }
    ]
  }
];
