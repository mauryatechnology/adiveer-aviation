"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { pillars } from "@/data/about";

export function AboutPhilosophy() {
  return (
    <section id="philosophy" className="py-24 bg-card/50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Mindset" title="Our Philosophy" />
        <div className="max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mb-12 pb-12 border-b border-border last:border-0"
            >
              <div className="flex items-start gap-8">
                <span className="text-6xl font-heading font-black text-primary/10 flex-shrink-0 select-none">{String(i + 1).padStart(2, '0')}</span>
                <div className="pt-2">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg italic font-light">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
