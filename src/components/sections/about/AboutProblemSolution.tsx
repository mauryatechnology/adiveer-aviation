"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { problemsList, solutionsList } from "@/data/about";

export function AboutProblemSolution() {
  return (
    <section id="problem" className="py-24 scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Why We Exist" title="The Problem We Solve" />
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-8 flex items-center gap-4">
              <AlertTriangle className="w-8 h-8 text-destructive" /> The Challenges
            </h3>
            <div className="space-y-6">
              {problemsList.map((p, i) => (
                <div key={i} className="flex gap-4 p-5 bg-background border border-border rounded-xl group hover:border-destructive/30 transition-colors">
                  <span className="text-destructive font-heading font-bold text-lg mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-light">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/20">
            <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-8 flex items-center gap-4">
              <CheckCircle className="w-8 h-8 text-primary-foreground" /> Our Solutions
            </h3>
            <div className="space-y-6">
              {solutionsList.map((s, i) => (
                <div key={i} className="flex gap-4 p-5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl group hover:bg-primary-foreground transition-colors duration-300">
                  <span className="text-primary-foreground font-heading font-bold text-lg mt-0.5 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-base text-primary-foreground/90 leading-relaxed group-hover:text-primary transition-colors font-medium">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
