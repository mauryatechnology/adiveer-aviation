"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { Shield } from "lucide-react";
import { regulatoryFramework } from "@/data/investors";

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function InvestorRegulatory() {
  return (
    <section className="py-24 bg-background" id="regulatory">
      <div className="container mx-auto px-6">
        <SectionHeading
          tag="Compliance"
          title="Built for Regulatory-First Scale"
          description="A rigorous adherence to national and international frameworks ensures long-term operational stability."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regulatoryFramework.map((item, idx) => (
            <motion.div
              key={idx}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-card rounded-2xl border border-border flex flex-col gap-4"
            >
              <div className="text-xs uppercase tracking-widest text-primary font-black">{item.domain}</div>
              <div className="text-sm font-heading font-bold text-foreground lead-tight">{item.regulation}</div>
              <div className="mt-auto pt-4 border-t border-border flex items-start gap-2">
                <div className="p-1 bg-emerald-500/10 rounded-full">
                  <Shield className="w-3 h-3 text-emerald-500" />
                </div>
                <span className="text-[10px] text-muted-foreground leading-tight italic">{item.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
