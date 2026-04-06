import { TechStack } from "@/types";
import { Brain, Cpu, Cog, CircuitBoard } from "lucide-react";

export const techStacks: TechStack[] = [
  { 
    id: "ai-ml", 
    slug: "ai-ml-stack",
    icon: Brain, 
    title: "AI/ML Stack", 
    desc: "Custom neural networks, edge inference engines, computer vision pipelines, and reinforcement learning systems.", 
    fullDesc: "Our AI/ML stack is engineered for 'Intelligence at the Edge'. We bypass the limitations of cloud-dependent robotics by architecting hardware-accelerated neural networks that run directly on-platform. This enables zero-latency perception and autonomous decision-making in communication-denied environments.",
    techs: ["TensorFlow / PyTorch", "Edge TPU / NVIDIA Jetson", "Custom ONNX models", "Real-time inference", "Federated learning", "Sensor fusion AI"],
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
    desc: "Full-stack robotics framework: perception, planning, control, and actuation for autonomous machines.", 
    fullDesc: "The YantraQ Robotics Framework (YRF) is an integrated OS for autonomous machines. It provides a standardized, high-performance middleware that handles the translation from high-level AI intent to low-level motor actuation, ensuring fluid and safe robotic behavior.",
    techs: ["ROS2 framework", "SLAM navigation", "Motion planning", "Force/torque control", "Computer vision", "Autonomous behavior"],
    architecture: [
      { component: "Middleware", role: "Secure, low-latency communication between robot subsystems." },
      { component: "SLAM Core", role: "Precise localization without relying on external GPS signals." },
      { component: "Actuation Driver", role: "Fine-grained control of brushless motors and actuators." }
    ],
    benefits: ["Modular hardware support", "Self-healing navigation", "Millimeter-level precision"]
  },
  { 
    id: "manufacturing", 
    slug: "advanced-manufacturing",
    icon: Cog, 
    title: "Manufacturing Tech", 
    desc: "Advanced manufacturing capabilities including rapid prototyping, 3D printing, and precision engineering.", 
    fullDesc: "We control the full production lifecycle through our in-house advanced manufacturing facilities. By integrating 3D metal printing with traditional precision CNC machining, we can move from concept to field-ready hardware in record time.",
    techs: ["3D metal printing", "CNC machining", "Composite fabrication", "PCB design & fab", "Quality assurance", "Rapid prototyping"],
    architecture: [
      { component: "Rapid Deck", role: "Industrial-grade additive manufacturing for complex geometries." },
      { component: "Precision Cell", role: "Sub-micron CNC machining for critical mechanical components." },
      { component: "Material Lab", role: "Testing of advanced composites and aerospace-grade alloys." }
    ],
    benefits: ["Atomic speed prototyping", "Complex geometry execution", "Military-grade durability"]
  }
];

export const rdLabs = [
  "Silicon Fab", 
  "Flight Test Range", 
  "AI Compute Cluster", 
  "RF Testing"
];
