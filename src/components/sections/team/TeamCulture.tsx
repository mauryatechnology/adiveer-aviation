"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { teamCulture } from "@/data/team";

export function TeamCulture() {
  return (
    <section id="culture" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <SectionHeading
          tag="Culture"
          title="Built for Builders"
          description="We're not a typical corporate environment. We're a mission-driven engineering lab where builders have the freedom to execute on ideas that matter."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {teamCulture.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", damping: 20, stiffness: 150 }}
              className="p-6 bg-card rounded-2xl border border-border/60 hover:bg-primary/5 hover:border-primary/20 hover:shadow-lg transition-colors duration-300 group"
            >
              <span className="text-[10px] font-heading font-black uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
