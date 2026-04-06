"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { growthRoadmap } from "@/data/investors";

export function InvestorRoadmap() {
  return (
    <section className="py-24 bg-card/30" id="roadmap">
      <div className="container mx-auto px-6 text-center">
        <SectionHeading
          tag="The Path Ahead"
          title="Growth Roadmap"
          description="Our strategic phase-wise approach to becoming India's deep-tech champion."
        />
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative mt-16 text-left">
          <div className="hidden lg:block absolute top-[2.2rem] left-0 right-0 h-px bg-primary/20 z-0" />
          {growthRoadmap.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-sm mb-6 shadow-xl shadow-primary/30 mx-auto lg:mx-0">
                {idx + 1}
              </div>
              <h4 className="text-xl font-heading font-black text-foreground mb-2">{p.phase}</h4>
              <div className="text-primary font-black uppercase text-[10px] tracking-widest mb-6">{p.timeline}</div>
              <ul className="space-y-4">
                {p.milestones.map((m, mIdx) => (
                  <li key={mIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed font-light">
                    <div className="min-w-[4px] h-4 mt-1 bg-primary/30 rounded-full" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
