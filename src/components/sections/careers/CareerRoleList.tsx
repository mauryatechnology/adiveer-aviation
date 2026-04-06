"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { roles } from "@/data/careers";

export function CareerRoleList() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading tag="Open Positions" title="Current Openings" />
        <div className="grid gap-6 max-w-5xl mx-auto">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, type: "spring", damping: 25, stiffness: 120 }}
              className="bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-xl transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">{r.dept}</span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">{r.desc}</p>
                <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                  <span className="flex items-center gap-2 group-hover:text-foreground transition-colors"><Briefcase className="w-4 h-4 text-primary" />{r.dept}</span>
                  <span className="flex items-center gap-2 group-hover:text-foreground transition-colors"><MapPin className="w-4 h-4 text-primary" />{r.location}</span>
                  <span className="px-2 py-1 border border-border rounded-lg group-hover:border-primary transition-colors">{r.type}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
