"use client";

import { motion } from "framer-motion";

export function InsightNewsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Stay at the Vanguard</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 font-light">
            Join our private intelligence briefing for updates on India&apos;s deep-tech evolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl focus:outline-none focus:bg-white focus:text-primary transition-all placeholder:text-primary-foreground/40"
            />
            <button className="px-10 py-4 bg-white text-primary font-black uppercase tracking-wider rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-xl">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
