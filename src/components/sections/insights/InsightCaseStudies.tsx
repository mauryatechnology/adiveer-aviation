"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { Presentation } from "lucide-react";
import { caseStudies } from "@/data/insights";

export function InsightCaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-card/50 scroll-mt-32">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Impact" title="Mission Case Studies" />
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-3xl p-10 border border-border/60 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Presentation className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Technical Analysis</span>
                </div>
                <h3 className="font-heading font-black text-3xl text-foreground tracking-tight leading-tight">{r.title}</h3>
                <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">{r.desc}</p>
                <button className="self-start px-8 py-3 border border-primary/30 text-primary font-black uppercase tracking-widest text-xs rounded-xl hover:bg-primary hover:text-white transition-all">
                  Access Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
