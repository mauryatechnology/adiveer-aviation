"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { FileText, ArrowRight } from "lucide-react";
import { reports } from "@/data/insights";

export function InsightReports() {
  return (
    <section id="reports" className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Knowledge" title="Research & Whitepapers" />
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reports.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-colors duration-300 flex items-start gap-6 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-inner">
                <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">{r.type}</span>
                <h3 className="font-heading font-black text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">{r.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base mt-4 font-light leading-relaxed">{r.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Download Full PDF <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
