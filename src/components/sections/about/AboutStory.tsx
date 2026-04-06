"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { timeline } from "@/data/about";

export function AboutStory() {
  return (
    <section id="story" className="py-24 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Journey" title="Our Story" />
        <div className="max-w-3xl mx-auto space-y-0">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-6 pb-12 relative"
            >
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <span className="text-[10px] font-heading font-black text-primary text-center leading-tight whitespace-nowrap px-1">{t.year}</span>
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pt-2">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
