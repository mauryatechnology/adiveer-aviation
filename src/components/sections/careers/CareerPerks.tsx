"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { perks } from "@/data/careers";

export function CareerPerks() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <SectionHeading tag="Why Join Us" title="Life at AdiVeer" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {perks.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", damping: 20, stiffness: 100 }}
              className="flex items-center gap-4 p-6 bg-background rounded-2xl border border-border/60 text-left hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-base text-muted-foreground font-medium leading-tight">{p}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary rounded-3xl text-center shadow-2xl shadow-primary/20"
        >
          <h3 className="text-3xl font-heading font-black text-primary-foreground mb-4">Don&apos;t See a Perfect Fit?</h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re always looking for brilliant minds. Send us your CV and we&apos;ll keep you in mind for future roles.
          </p>
          <Link
            href="mailto:connect@adiveeraviations.com"
            className="px-10 py-5 bg-primary-foreground text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-white transition-all inline-flex items-center gap-3 group text-lg"
          >
            Send Your CV <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
