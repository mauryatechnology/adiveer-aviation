import { ServiceVertical } from "@/types";
import { Plane, Brain, Bot, Shield, Leaf, Cog, GraduationCap, Headphones } from "lucide-react";

export const services: ServiceVertical[] = [
  { 
    id: "drones", 
    slug: "drone-systems",
    icon: Plane, 
    title: "Drone Systems", 
    desc: "Custom-designed UAVs for surveillance, mapping, delivery, and defense. Multi-rotor, fixed-wing, and VTOL platforms engineered for extreme conditions.", 
    fullDesc: "Our drone systems represent the pinnacle of Indian aerospace engineering. We specialize in building autonomous platforms that survive where others fail—from the high-altitude borders of the Himalayas to the dense tropical forests of Central India. Every airframe is a result of rigorous R&D, focused on endurance, payload modularity, and encrypted communication.",
    features: ["Long-endurance platforms", "Heavy-lift cargo drones", "Swarm-capable systems", "Custom payload integration"],
    capabilities: [
      { title: "Vertical Take-Off", desc: "Advanced VTOL capabilities allowing deployment from restricted, rugged terrain without runways." },
      { title: "Persistent Loiter", desc: "Optimized power management for 12+ hours of continuous station-keeping and surveillance." },
      { title: "Payload Modularity", desc: "Quick-swap rails for multispectral, thermal, LiDAR, and specialized delivery pods." }
    ],
    useCases: ["Border Surveillance", "Medical Supply Delivery", "Large-scale Mapping"],
    results: [
      { label: "Endurance", value: "18h+" },
      { label: "Payload", value: "45kg" },
      { label: "Range", value: "120km" }
    ]
  },
  { 
    id: "ai", 
    slug: "ai-solutions",
    icon: Brain, 
    title: "AI Solutions", 
    desc: "Edge AI, computer vision, NLP, and autonomous decision-making systems for real-world deployment.", 
    fullDesc: "YantraQ's AI solutions move beyond simple algorithms. we build high-consequence intelligence that powers autonomous systems. Our focus is on 'Small-Box AI'—high-performance inference that runs locally on drones and robots, removing the dependency on cloud connectivity and ensuring zero-latency decision making in tactical environments.",
    features: ["Edge AI inference", "Computer vision", "Predictive analytics", "Autonomous navigation"],
    capabilities: [
      { title: "Edge Inference", desc: "Proprietary model compression allowing complex neural networks to run on low-power ARM architecture." },
      { title: "Vision-based SLAM", desc: "Simultaneous Localization and Mapping for navigation in GPS-denied environments." },
      { title: "Anomaly Detection", desc: "Real-time identification of behavioral or structural anomalies in massive data streams." }
    ],
    useCases: ["Autonomous Navigation", "Threat Detection", "Predictive Maintenance"],
    results: [
      { label: "Latency", value: "<25ms" },
      { label: "Accuracy", value: "99.7%" },
      { label: "Compute", value: "Edge-only" }
    ]
  },
  { 
    id: "robotics", 
    slug: "robotics-platforms",
    icon: Bot, 
    title: "Robotics Platforms", 
    desc: "Ground, aerial, and marine autonomous platforms for hazardous, remote, and complex environments.", 
    fullDesc: "Our robotics division bridges the gap between digital intelligence and physical execution. From rugged UGVs (Unmanned Ground Vehicles) that navigate disaster zones to high-precision robotic arms for specialized payload handling, we build the machines that go where humans cannot.",
    features: ["UGV platforms", "Robotic arms", "Autonomous navigation", "Sensor integration"],
    capabilities: [
      { title: "Terrain Agility", desc: "Multi-modal locomotive systems designed for debris-filled or subterranean environments." },
      { title: "Force Feedback", desc: "Advanced haptic integration for precision manipulation in hazardous material handling." },
      { title: "Swarm Coordination", desc: "Mesh-linked ground units that coordinate search-and-rescue patterns autonomously." }
    ],
    useCases: ["Hazardous Material Disposal", "Subterranean Exploration", "Warehouse Automation"],
    results: [
      { label: "Battery Life", value: "8h" },
      { label: "Torque", value: "120Nm" },
      { label: "Response", value: "Real-time" }
    ]
  },
  { 
    id: "defense", 
    slug: "defense-tech",
    icon: Shield, 
    title: "Defense Technology", 
    desc: "Mission-critical systems for national security, border protection, and tactical operations.", 
    fullDesc: "In the defense sector, reliability is the only metric that matters. YantraQ develops tactical technology that secures high-value assets and protects lives through persistent surveillance, electronic countermeasures, and secure mesh communication networks.",
    features: ["Surveillance systems", "Counter-drone tech", "Secure communications", "Tactical platforms"],
    capabilities: [
      { title: "Jamming Resistance", desc: "Frequency-hopping and signal-hardening techniques for contested electronic environments." },
      { title: "Zero-Trust Mesh", desc: "End-to-end encrypted communication networks that function without centralized infrastructure." },
      { title: "Tactical Overlays", desc: "Real-time GIS and threat data fusion for command-and-control visibility." }
    ],
    useCases: ["Border Protection", "Tactical Mesh Comms", "Sensitive Asset Security"],
    results: [
      { label: "Uptime", value: "100%" },
      { label: "Encryption", value: "AES-256" },
      { label: "Deploy Time", value: "<5m" }
    ]
  }
];
