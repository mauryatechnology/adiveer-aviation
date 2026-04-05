"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxSection from "@/components/animations/ParallaxSection";
import MagneticButton from "@/components/animations/MagneticButton";

export function HomeCTA() {
  return (
    <ParallaxSection speed={0.2} className="bg-primary relative overflow-hidden">
      {/* Dynamic Background Blur Effects */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-background/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary-foreground/5 rounded-full blur-[120px] pointer-events-none" />

      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", damping: 15 }}
          >
            <motion.h2
              className="text-4xl md:text-7xl font-heading font-black text-primary-foreground mb-10 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Explore <br/> The Next Frontier?
            </motion.h2>
            <motion.p
              className="text-primary-foreground/80 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Partner with India's leading deep-tech vanguard for your next mission-critical aerospace or AI project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <MagneticButton>
                <Link href="/contact" className="px-10 py-5 bg-primary-foreground text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-white transition-all inline-flex items-center gap-3 group shadow-2xl shadow-black/20 text-lg">
                  Start a Conversation <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ParallaxSection>
  );
}
