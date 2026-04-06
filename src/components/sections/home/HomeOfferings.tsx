"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

import { homeOfferings as offerings } from "@/data/home";

export function HomeOfferings() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <SectionHeading tag="Key Offerings" title="From Concept to Deployment" />
        <ParallaxSection speed={0.15}>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.15}>
            {offerings.map((o) => (
              <Link key={o.num} href={o.href}>
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                  className="p-8 bg-card rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-400 group h-full"
                >
                  <div className="flex flex-col gap-4 h-full">
                    <motion.span
                      className="text-5xl font-heading font-black text-primary/10 transition-colors group-hover:text-primary/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {o.num}
                    </motion.span>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{o.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">{o.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/10 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                      Learn More &rarr;
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </StaggerContainer>
        </ParallaxSection>
      </div>
    </section>
  );
}
