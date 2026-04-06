"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { industries } from "@/data/partnerships";

export function PartnerIndustries() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Industries" title="Sectors We Serve" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring", damping: 30, stiffness: 100 }}
              className="bg-card rounded-3xl p-10 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-colors duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                {ind.icon && <ind.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />}
              </div>
              <h3 className="font-heading font-black text-2xl text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{ind.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed font-light">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
