"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stages } from "@/data/home";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import MagneticButton from "@/components/animations/MagneticButton";

export function HomeStages() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-y-1/2 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          tag="Our Process"
          title="From Concept to Deployment"
          description="A vertically integrated engineering lifecycle that turns ambitious ideas into field-validated autonomous systems."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.id}
              variants={staggerItem}
              className="relative p-10 bg-card rounded-[2.5rem] border border-border shadow-sm group hover:border-primary/30 hover:shadow-xl transition-colors duration-500"
            >
              {/* Connector Ring for large screens */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary/20 z-20 items-center justify-center hidden lg:flex group-last:hidden">
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
              </div>

              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                  <stage.icon className="w-8 h-8" />
                </div>
                <span className="absolute -top-2 -right-2 text-4xl font-heading font-black text-primary/5 select-none transition-colors group-hover:text-primary/10">{stage.id}</span>
              </div>

              <h3 className="font-heading font-black text-xl text-foreground mb-4 group-hover:text-primary transition-colors tracking-tight italic">
                {stage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-4">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-primary/5 border border-primary/10 rounded-[2.5rem] max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-muted flex items-center justify-center overflow-hidden shadow-xl">
                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-black text-primary">S{i}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h4 className="text-xl font-heading font-black text-foreground mb-3 tracking-tight italic">Engineered for speed-to-field</h4>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xl">
              Our vertically integrated engineering lifecycle ensures that critical airborne and AI technologies reach operational environments in record time without compromising safety.
            </p>
          </div>
          <MagneticButton>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20 whitespace-nowrap"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
