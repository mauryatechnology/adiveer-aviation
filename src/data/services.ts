import { ServiceVertical } from "@/types";
import { Plane, Brain, Bot, Shield, Cpu, Cloud } from "lucide-react";

export const services: ServiceVertical[] = [
  { 
    id: "drones", 
    slug: "drone-systems",
    icon: Plane, 
    title: "Drone Systems", 
    desc: "Custom-designed UAVs for surveillance, mapping, delivery, and defense. Multi-rotor, fixed-wing, and VTOL platforms, Nano to Large category.", 
    fullDesc: "Custom-designed UAVs and unmanned aircraft systems for surveillance, precision agriculture, cargo delivery, mapping, and defense. Our drone platforms span Nano to Large categories as defined under DGCA Drone Rules 2021, covering multi-rotor, fixed-wing, and VTOL configurations. All platforms are designed for DGCA Type Certification from the ground up.",
    features: [
      "Long-endurance surveillance platforms (24h+ continuous operation)",
      "Heavy-lift cargo and logistics drones",
      "Swarm-capable multi-drone systems",
      "Custom payload integration (thermal, LiDAR, multispectral, EO/IR)",
      "BVLOS (Beyond Visual Line of Sight) capable architectures",
      "Agricultural spraying UAVs — precision dosing, autonomous route planning"
    ],
    capabilities: [
      { title: "Industries Served", desc: "Defence, Agriculture, Logistics, Infrastructure, Smart Cities, Disaster Management" },
      { title: "Revenue Models", desc: "Platform sales, fleet leasing, government procurement, export contracts" }
    ],
    useCases: ["Border Surveillance", "Medical Supply Delivery", "Large-scale Mapping"],
    results: [
      { label: "Endurance", value: "24h+" },
      { label: "Payload", value: "Custom" },
      { label: "Compliance", value: "DGCA 2021" }
    ],
    revenueModel: "Platform Sales & Leasing",
    compliance: "DGCA Rules 2021 / NPNT"
  },
  { 
    id: "ai", 
    slug: "ai-solutions",
    icon: Brain, 
    title: "AI & Computer Vision", 
    desc: "Edge AI, computer vision, NLP, and autonomous decision-making systems. Proprietary models trained for aerial and ground deployment.", 
    fullDesc: "Proprietary AI and machine learning systems developed entirely in-house — from model architecture to edge deployment. Our AI systems are purpose-built for aerial and autonomous platforms, delivering real-time intelligence without cloud dependency.",
    features: [
      "Edge AI inference engines (NVIDIA Jetson, custom TPU-optimized models)",
      "Computer vision: object detection, classification, tracking, and anomaly detection",
      "Real-time drone data analytics and 3D mapping from aerial imagery",
      "Natural Language Processing for operational command interfaces",
      "Predictive maintenance AI for UAV fleet health monitoring",
      "AI-powered UTM (Unmanned Traffic Management) decision systems",
      "Federated learning architectures for privacy-preserving defense AI"
    ],
    capabilities: [
      { title: "Revenue Models", desc: "AI platform licensing, API monetization, government AI contracts, bundled hardware+software solutions" }
    ],
    useCases: ["Autonomous Navigation", "Threat Detection", "Predictive Maintenance"],
    results: [
      { label: "Latency", value: "<25ms" },
      { label: "Compute", value: "Edge-only" }
    ],
    revenueModel: "IP Licensing & ML-as-a-Service",
    compliance: "Data Privacy & Security Norms"
  },
  { 
    id: "robotics", 
    slug: "robotics-platforms",
    icon: Bot, 
    title: "Robotics Platforms", 
    desc: "Ground, aerial, and marine autonomous robots for hazardous, remote, and complex environments. Full RaaS model available.", 
    fullDesc: "Full-stack autonomous robotics for hazardous, remote, and complex environments. Our robotics systems span ground, aerial, and marine domains, built on ROS2 middleware with proprietary perception and planning stacks.",
    features: [
      "UGV (Unmanned Ground Vehicles) for inspection, patrol, and logistics",
      "Robotic arms and end-effectors for industrial automation",
      "SLAM-based autonomous navigation without GPS dependency",
      "Collaborative robots (cobots) for manufacturing environments",
      "Bomb disposal and hazardous environment robots",
      "Robotics-as-a-Service (RaaS) model for enterprise and government"
    ],
    capabilities: [
      { title: "Revenue Models", desc: "Product sale, system integration, service contracts, government tenders, RaaS subscriptions" }
    ],
    useCases: ["Hazardous Material Disposal", "Search and Rescue", "Warehouse Automation"],
    results: [
      { label: "Middleware", value: "ROS2" },
      { label: "Navigation", value: "SLAM" }
    ],
    revenueModel: "Unit Sales & RaaS Model",
    compliance: "ISO Robotics Standards"
  },
  { 
    id: "defense", 
    slug: "defense-tech",
    icon: Shield, 
    title: "Defense Technology", 
    desc: "Mission-critical ISR, counter-UAS, and tactical platforms for national security. Aligned with DAP 2020 and iDEX programmes.", 
    fullDesc: "Mission-critical systems for national security, border protection, and tactical operations. Developed under the Aatmanirbhar Bharat framework and aligned with DAP 2020, iDEX, and DRDO Technology Development Fund programmes.",
    features: [
      "ISR (Intelligence, Surveillance, Reconnaissance) drone platforms",
      "Counter-UAS / Anti-drone detection and neutralization systems",
      "Loitering munitions and tactical UAV platforms",
      "Secure, encrypted communications and ground control stations",
      "Border surveillance and coastal monitoring systems",
      "Electronic warfare payload integration"
    ],
    capabilities: [
      { title: "Procurement Alignment", desc: "DAP 2020, iDEX Challenge Programmes, DRDO TDF, MoD Make-I/Make-II categories" },
      { title: "Clients", desc: "Indian Armed Forces, BSF, CRPF, State Police, DRDO, BEL, HAL ecosystem" }
    ],
    useCases: ["Border Protection", "Sensitive Asset Security", "Counter-UAS"],
    results: [
      { label: "Compliance", value: "DAP 2020" },
      { label: "Encryption", value: "Military" }
    ],
    revenueModel: "Govt. Procurement (DAP 2020)",
    compliance: "iDEX / iDEX-Prime / DAP 2020"
  },
  { 
    id: "embedded", 
    slug: "embedded-systems",
    icon: Cpu, 
    title: "Embedded Systems & Electronics", 
    desc: "Custom flight controllers, PCB design, SoC solutions, firmware, and sensor fusion for UAV and robotic platforms.", 
    fullDesc: "Vertically integrated electronics design — from schematic to production-ready hardware. We design, prototype, and manufacture custom embedded systems that power our own platforms and are available as standalone OEM components to the aerospace and defense ecosystem.",
    features: [
      "Custom flight controllers and autopilot firmware",
      "PCB design, fabrication, and system-on-chip (SoC) solutions",
      "FPGA-based real-time processing systems",
      "Sensor fusion algorithms: IMU, GPS/RTK, LiDAR, barometer, magnetometer",
      "MAVLink, CAN bus, UART, SPI, I2C protocol stacks",
      "Edge inference hardware modules and development kits"
    ],
    capabilities: [
      { title: "Revenue Models", desc: "Hardware product sales, IP core licensing, contract electronics manufacturing, OEM supply" }
    ],
    useCases: ["Avionics Design", "Sensor Fusion", "Real-time Control"],
    results: [
      { label: "Integration", value: "SoC" },
      { label: "Protocol", value: "MAVLink" }
    ],
    revenueModel: "OEM Sales & IP Licensing",
    compliance: "AEC-Q / ISO 26262 Alignment"
  },
  { 
    id: "saas", 
    slug: "saas-platforms",
    icon: Cloud, 
    title: "SaaS & Data Platforms", 
    desc: "Cloud-native drone fleet management, UTM software, agricultural intelligence, and geospatial analytics dashboards.", 
    fullDesc: "Cloud-native, subscription-based software products for drone operators, enterprises, and government agencies. Our platforms turn raw drone and sensor data into actionable intelligence.",
    features: [
      "Drone Fleet Management Platform — real-time telemetry, mission planning, maintenance tracking for 50+ drone fleets",
      "UTM Intelligence Suite — airspace deconfliction, zone compliance, NPNT integration",
      "AgroSense — agricultural drone data analytics: crop disease detection, NDVI mapping, irrigation intelligence",
      "InfraView — infrastructure inspection analytics with automated defect detection",
      "Pilot Training Simulator — regulatory-compliant RPAS operator training and assessment platform"
    ],
    capabilities: [
      { title: "Revenue Models", desc: "Monthly/annual SaaS subscriptions, per-drone licensing fees, enterprise contracts, white-label API licensing" }
    ],
    useCases: ["Fleet Operations", "Agricultural Intelligence", "Infrastructure Monitoring"],
    results: [
      { label: "Deployment", value: "Cloud" },
      { label: "Analytics", value: "Al-driven" }
    ],
    revenueModel: "Subscription (SaaS) Model",
    compliance: "DigitalSky / SOC2 Standard"
  }
];

export const serviceOfferings = [
  {
    service: "R&D & Prototyping",
    desc: "Rapid concept-to-prototype engineering in aerospace, AI, and robotics",
    target: "DRDO, Startups, PSUs, iDEX",
    pricing: "Project-based"
  },
  {
    service: "Systems Integration",
    desc: "End-to-end integration of hardware, AI, sensors, and comms",
    target: "OEMs, Defense, Smart Cities",
    pricing: "Fixed fee + retainer"
  },
  {
    service: "Field Deployment",
    desc: "Turnkey deployment in extreme environments with operator training",
    target: "Government, Infrastructure",
    pricing: "Day-rate + support contract"
  },
  {
    service: "Drone Delivery Operations",
    desc: "Contracted drone logistics for pharma, e-commerce, government",
    target: "Healthcare, FMCG, Government",
    pricing: "Per-delivery / subscription"
  },
  {
    service: "Training & Consulting",
    desc: "Remote Pilot Licence training, enterprise AI/drone upskilling",
    target: "Corporates, Government, DGCA schools",
    pricing: "Per-seat / course fee"
  },
  {
    service: "IP Licensing",
    desc: "Patent licensing, technology transfer, white-label platform licensing",
    target: "Industry partners, OEMs, Overseas",
    pricing: "Royalty / upfront fee"
  }
];
