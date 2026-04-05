"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";

export function HomeFeaturedProject() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Featured Work" title="Projects That Define Us" />
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="max-w-4xl mx-auto bg-card rounded-3xl p-10 md:p-14 border border-border shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle Glow Effect On Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 text-xs font-heading font-black uppercase tracking-[0.2em] text-primary border border-primary/20 rounded-full mb-6"
            >
              Aerospace
            </motion.span>
            <h3 className="font-heading font-black text-3xl md:text-5xl text-foreground mt-2 mb-6 tracking-tight leading-tight">Project Aether</h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-light">
              A high-altitude autonomous surveillance drone for border monitoring, designed for extreme durability and real-time AI processing at the edge.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div className="space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-primary/70">Technology Stack</span>
                <p className="text-base text-foreground font-medium leading-relaxed">
                  Custom carbon-fiber frame · Solar-hybrid power · Edge AI · Encrypted MAVLink communication
                </p>
              </div>
              <div className="flex gap-10">
                <div className="space-y-1">
                  <CountUp value="500+" className="text-3xl md:text-4xl font-heading font-black text-primary" />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Terrain Monitored (KM)</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline">
                    <CountUp value="72" className="text-3xl md:text-4xl font-heading font-black text-primary" />
                    <span className="text-2xl font-heading font-bold text-primary ml-1">h</span>
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Continuous Flight</div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton>
                <Link href="/work" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-heading font-black uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-all group shadow-xl shadow-primary/20">
                  Project Details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <MagneticButton>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors group">
              Explore Portfolio <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
