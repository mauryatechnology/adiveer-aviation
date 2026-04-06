import { TechStack } from "@/types";
import { Brain, Cpu, Plane, CircuitBoard, Cog, Shield, Zap, Search, Landmark } from "lucide-react";

export const techStacks: TechStack[] = [
  { 
    id: "ai-ml", 
    slug: "ai-ml-stack",
    icon: Brain, 
    title: "AI / ML Stack", 
    desc: "Custom neural network architectures, edge inference engines, computer vision pipelines, and reinforcement learning systems.", 
    fullDesc: "Custom neural network architectures, edge inference engines, computer vision pipelines, and reinforcement learning systems trained on proprietary datasets from real-world aerial operations.",
    techs: ["Custom ONNX models", "Edge TPU / NVIDIA Jetson deployment", "Federated learning", "Real-time sensor fusion AI", "Autonomous navigation AI"],
    architecture: [
      { component: "Inference Engine", role: "Real-time processing of multispectral data streams." },
      { component: "Sensor Fusion", role: "Unifying LiDAR, Radar, and Optical data for 360° awareness." },
      { component: "Strategic Layer", role: "High-level mission planning and autonomous goal-setting." }
    ],
    benefits: ["Zero-latency decisions", "Bandwidth independence", "High-consequence reliability"]
  },
  { 
    id: "robotics", 
    slug: "robotics-framework",
    icon: Cpu, 
    title: "Robotics Platform", 
    desc: "Full-stack robotics framework — perception, planning, control, and actuation — for autonomous machines.", 
    fullDesc: "Full-stack robotics framework — perception, planning, control, and actuation — for autonomous machines operating in structured and unstructured environments.",
    techs: ["ROS2 middleware", "SLAM navigation", "Motion planning", "Force/torque control", "Autonomous behavior trees"],
    architecture: [
      { component: "Middleware", role: "Secure, low-latency communication between robot subsystems." },
      { component: "SLAM Core", role: "Precise localization without relying on external GPS signals." },
      { component: "Actuation Driver", role: "Fine-grained control of brushless motors and actuators." }
    ],
    benefits: ["Modular hardware support", "Self-healing navigation", "Millimeter-level precision"]
  },
  { 
    id: "drone-hardware", 
    slug: "drone-hardware",
    icon: Plane, 
    title: "Drone Hardware Engineering", 
    desc: "End-to-end drone platform engineering from airframe structural analysis to propulsion and avionics integration.", 
    fullDesc: "End-to-end drone platform engineering from airframe structural analysis to propulsion, avionics integration, and DGCA type certification preparation.",
    techs: ["Carbon fiber composite airframes", "Custom flight controllers", "Payload interface systems", "Thermal and multi-spectral integration", "BVLOS communication systems"],
    architecture: [
      { component: "Airframe", role: "Carbon fiber composite structures for high strength-to-weight ratio." },
      { component: "Avionics", role: "Proprietary flight control and power management systems." },
      { component: "Comms", role: "Long-range, secure, and redundant communication links." }
    ],
    benefits: ["High endurance", "Extreme environment flight", "Military-grade durability"]
  },
  { 
    id: "embedded", 
    slug: "embedded-electronics",
    icon: CircuitBoard, 
    title: "Embedded Systems & Electronics", 
    desc: "Silicon-level design capability for custom flight controllers, SoC solutions, PCB fabrication, and firmware.", 
    fullDesc: "Silicon-level design capability for custom flight controllers, SoC solutions, PCB fabrication, and firmware — powering our own platforms and available as OEM components.",
    techs: ["Custom autopilot firmware", "FPGA-based real-time systems", "Sensor fusion stacks", "Communication protocol libraries (MAVLink, CAN, UART)"],
    architecture: [
      { component: "Processor", role: "High-performance SoC and FPGA-based processing cores." },
      { component: "Sensor Suite", role: "Advanced IMU, GPS/RTK, and environmental sensor integration." },
      { component: "Firmware", role: "Real-time, safety-critical embedded operating systems." }
    ],
    benefits: ["Hardware-level security", "Ultra-low power consumption", "Optimized performance"]
  },
  { 
    id: "manufacturing", 
    slug: "advanced-manufacturing",
    icon: Cog, 
    title: "Advanced Manufacturing", 
    desc: "Aerospace-grade manufacturing capabilities covering additive manufacturing, composite fabrication, and precision CNC.", 
    fullDesc: "Aerospace-grade manufacturing capabilities covering additive manufacturing, composite fabrication, precision CNC, and PCB production — all in-house.",
    techs: ["CFRP / PEEK / titanium additive manufacturing", "Selective Laser Sintering (SLS)", "Direct Metal Laser Sintering (DMLS)", "Rapid prototyping", "Quality assurance per AS9100 roadmap"],
    architecture: [
      { component: "Rapid Deck", role: "Industrial-grade additive manufacturing for complex geometries." },
      { component: "Precision Cell", role: "Sub-micron CNC machining for critical mechanical components." },
      { component: "Material Lab", role: "Testing of advanced composites and aerospace-grade alloys." }
    ],
    benefits: ["Atomic speed prototyping", "Complex geometry execution", "Military-grade precision"]
  }
];

export const rdLabsFull = [
  { 
    title: "AI Compute Cluster", 
    desc: "High-density GPU nodes for training custom computer vision models and autonomous navigation neural networks.",
    icon: Brain
  },
  { 
    title: "Electronics Lab", 
    desc: "Equipped for PCB design, FPGA prototyping, EMI/EMC pre-compliance, and signal integrity analysis.",
    icon: CircuitBoard
  },
  { 
    title: "Composite Cell", 
    desc: "Climate-controlled layup for carbon fiber (CFRP) and advanced polymer fabrication for aerospace-grade structures.",
    icon: Cog
  },
  { 
    title: "Flight Test Range", 
    desc: "Instrumented range for real-world UAV telemetry validation, payload stress testing, and autonomous mission execution.",
    icon: Plane
  },
  { 
    title: "HIL Simulation", 
    desc: "Hardware-in-the-loop simulation suite for zero-risk validation of flight control firmware and mission logic.",
    icon: Cpu
  },
  { 
    title: "Cyber-Physical Lab", 
    desc: "Testing ground for sensor fusion, SLAM navigation, and multi-robot coordination algorithms.",
    icon: Shield
  }
];

export const ipStrategyArr = [
  { 
    layer: "Patent Portfolio", 
    detail: "Filing with Indian Patent Office and PCT — priority: UAV designs, AI navigation, LiDAR-camera fusion, additive manufacturing.",
    icon: Landmark 
  },
  { 
    layer: "Brand Protection", 
    detail: "'ADIVEER' and 'ADIVEER AVIATION' registered under Trade Marks Act, Classes 9, 12, and 42.",
    icon: Shield 
  },
  { 
    layer: "Trade Secrets", 
    detail: "AI training datasets, source code, manufacturing processes, and technical drawings protected by NDA/IP assignment.",
    icon: Search 
  },
  { 
    layer: "IP Licensing", 
    detail: "Strategic technology licensing to domestic and international partners as a core revenue stream.",
    icon: Zap 
  }
];
