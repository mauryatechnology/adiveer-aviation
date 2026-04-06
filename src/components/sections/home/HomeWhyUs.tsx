"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Globe, Wrench, Target, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import MagneticButton from "@/components/animations/MagneticButton";

import { whyUs } from "@/data/home";

export function HomeWhyUs() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Why AdiVeer" title="Why Choose AdiVeer Aviations" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" stagger={0.15}>
          {whyUs.map((w) => (
            <motion.div
              key={w.title}
              variants={staggerItem}
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
              className="flex gap-6 p-8 bg-background rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/30 transition-colors duration-300 group"
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

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-16 text-center"
        >
          <MagneticButton>
            <Link 
              href="/team" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              Meet the Engineering Team <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
