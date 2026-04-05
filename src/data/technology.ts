import { TechStack } from "@/types";
import { Brain, Cpu, Cog, CircuitBoard } from "lucide-react";

export const techStacks: TechStack[] = [
  { 
    id: "ai-ml", 
    icon: Brain, 
    title: "AI/ML Stack", 
    desc: "Custom neural networks, edge inference engines, computer vision pipelines, and reinforcement learning systems.", 
    techs: ["TensorFlow / PyTorch", "Edge TPU / NVIDIA Jetson", "Custom ONNX models", "Real-time inference", "Federated learning", "Sensor fusion AI"] 
  },
  { 
    id: "robotics", 
    icon: Cpu, 
    title: "Robotics Platform", 
    desc: "Full-stack robotics framework: perception, planning, control, and actuation for autonomous machines.", 
    techs: ["ROS2 framework", "SLAM navigation", "Motion planning", "Force/torque control", "Computer vision", "Autonomous behavior"] 
  },
  { 
    id: "manufacturing", 
    icon: Cog, 
    title: "Manufacturing Tech", 
    desc: "Advanced manufacturing capabilities including rapid prototyping, 3D printing, and precision engineering.", 
    techs: ["3D metal printing", "CNC machining", "Composite fabrication", "PCB design & fab", "Quality assurance", "Rapid prototyping"] 
  },
  { 
    id: "hardware", 
    icon: CircuitBoard, 
    title: "Hardware Integration", 
    desc: "End-to-end hardware design — from PCB layout to ruggedized enclosures for field deployment.", 
    techs: ["Custom PCB design", "Power management", "RF & antenna design", "Thermal management", "Ruggedized housing", "EMC compliance"] 
  },
];

export const rdLabs = [
  "Silicon Fab", 
  "Flight Test Range", 
  "AI Compute Cluster", 
  "RF Testing"
];
