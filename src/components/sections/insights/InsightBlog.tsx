"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";
import { blogTopics } from "@/data/insights";

export function InsightBlog() {
  return (
    <section id="blog" className="py-24 scroll-mt-32">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Perspective" title="The AdiVeer Notebook" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogTopics.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/20 hover:shadow-xl transition-colors duration-300 group cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded">{b.tag}</span>
                <span className="text-[10px] font-bold text-muted-foreground/60">{b.date}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors tracking-tight flex-1 mb-6 leading-snug">{b.title}</h3>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                Read Entry <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
