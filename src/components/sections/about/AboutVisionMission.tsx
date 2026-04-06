"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { Eye, Target } from "lucide-react";
import { vision, mission } from "@/data/about";

export function AboutVisionMission() {
  return (
    <section id="vision" className="py-24 bg-card/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Purpose" title="Vision & Mission" />
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-background rounded-3xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-24 h-24 text-primary" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-black text-3xl text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg font-light italic">&quot;{vision}&quot;</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-10 bg-background rounded-3xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-24 h-24 text-primary" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-black text-3xl text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed text-base font-light">&quot;{mission}&quot;</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
