"use client";

import { motion } from "framer-motion";
import { partnerTypes } from "@/data/partnerships";

export function PartnerGlobalBanner() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-heading font-black text-primary-foreground mb-8 tracking-tighter leading-tight">Scale From India <br />To The World.</h2>
          <p className="text-primary-foreground/80 text-xl font-light mb-12 max-w-2xl mx-auto">
            We&apos;re building an international network of technology partners and ecosystem catalysts. Join the vanguard of the deep-tech revolution.
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {partnerTypes.map((partner) => (
              <span key={partner} className="text-sm font-black uppercase tracking-widest text-primary-foreground">{partner}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
