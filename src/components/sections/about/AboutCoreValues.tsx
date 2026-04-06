"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { values } from "@/data/about";

export function AboutCoreValues() {
  return (
    <section id="values" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Principles" title="Core Values" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed md:text-base font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
