"use client";

import { useState } from "react";
import PageHero from "@/components/common/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Target, Shield, Leaf, Bot, Plane } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Aerospace", "AI Systems", "Robotics", "Defense", "Environmental"];

const projects = [
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

export default function WorkPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero 
        tag="Our Work" 
        title="Projects That Define Us" 
        description="From autonomous surveillance to environmental intelligence — explore the systems we've engineered and deployed." 
      />
      
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-8 py-3 text-sm font-heading font-black uppercase tracking-[0.2em] rounded-2xl border transition-all duration-300",
                  active === cat 
                    ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105" 
                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <p.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">Status</span>
                      <span className="text-sm text-foreground font-heading font-bold">{p.stat}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-heading font-black text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight">{p.name}</h3>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">{p.category}</span>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed mb-8 font-light">{p.desc}</p>
                    
                    <div className="space-y-4 pt-6 border-t border-border/50">
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1.5">Technology Stack</span>
                        <p className="text-sm text-foreground font-medium">{p.tech}</p>
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1.5">Operational Impact</span>
                        <p className="text-sm font-heading font-bold text-foreground italic">"{p.impact}"</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 flex items-center justify-end">
                    <div className="flex items-center gap-3 text-sm font-heading font-black uppercase tracking-widest text-primary group-hover:gap-5 transition-all">
                      Case Study <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Partners/Clients Section - Deriving from user request for industry level */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 block">In Partnership With</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Dummy partners for premium look */}
            <div className="text-2xl font-heading font-black tracking-tighter">DEFENSE LABS</div>
            <div className="text-2xl font-heading font-black tracking-tighter">AGRI-TEK</div>
            <div className="text-2xl font-heading font-black tracking-tighter">AERO-GLOBAL</div>
            <div className="text-2xl font-heading font-black tracking-tighter">ECO-WATCH</div>
          </div>
        </div>
      </section>
    </>
  );
}
