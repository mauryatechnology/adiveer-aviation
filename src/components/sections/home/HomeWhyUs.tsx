"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Wrench, Target } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

const whyUs = [
  { icon: Zap, title: "Deep Engineering DNA", desc: "We build proprietary tech from scratch — hardware + software." },
  { icon: Globe, title: "India-Born, Global Mindset", desc: "Designed for India's challenges, scalable globally." },
  { icon: Wrench, title: "End-to-End Execution", desc: "We design, build, and deploy — full control over performance and security." },
  { icon: Target, title: "Mission-Driven Innovation", desc: "We solve real-world, high-impact problems — not just theoretical tech." },
];

export function HomeWhyUs() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Why AdiVeer" title="Why Choose AdiVeer Aviations" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" stagger={0.15}>
          {whyUs.map((w) => (
            <motion.div
              key={w.title}
              variants={staggerItem}
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
              className="flex gap-6 p-8 bg-background rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <motion.div
                className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary shadow-inner transition-colors duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <w.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{w.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
