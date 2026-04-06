"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Link from "next/link";
import { Handshake } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";
import { partnershipModels } from "@/data/partnerships";

export function PartnerModels() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Models" title="Partnership Models" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {partnershipModels.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.6, type: "spring", damping: 25, stiffness: 120 }}
              className="bg-background rounded-3xl p-10 border border-border/60 hover:border-primary/20 transition-colors duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors">Model 0{i + 1}</span>
                <h3 className="font-heading font-black text-3xl text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">{m.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <MagneticButton>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-wider rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all group shadow-xl">
              Initiate Partnership <Handshake className="w-6 h-6 transition-transform group-hover:scale-110" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
