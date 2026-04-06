"use client";

import { motion } from "framer-motion";

export function TeamJoinCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-24 p-12 bg-primary rounded-[3rem] text-center shadow-2xl shadow-primary/20"
    >
      <h3 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mb-6">Want to be part of the mission?</h3>
      <p className="text-primary-foreground/80 text-xl font-light mb-10 max-w-2xl mx-auto">
        We&apos;re looking for the best deep-tech talent in India. High stress, planetary impact, engineer-first environment.
      </p>
      <button className="px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-foreground/90 transition-colors shadow-xl">
        Join the Hangar
      </button>
    </motion.div>
  );
}
