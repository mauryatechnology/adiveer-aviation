"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { services } from "@/data/services";

export function HomeVerticals() {
  const verticals = services.slice(0, 6);
  
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          tag="What We Do" 
          title="6 Core Verticals" 
          description="Integrated deep-tech capabilities across six engineering domains — from silicon to sky." 
        />
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8" stagger={0.12}>
          {verticals.map((v) => (
            <Link key={v.title} href={`/products#${v.id}`}>
              <motion.div
                variants={staggerItem}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                className="p-5 md:p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group h-full flex flex-col"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                  <v.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight line-clamp-1">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[13px] md:text-sm font-light line-clamp-3 mb-6">
                  {v.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-border/10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">
                  Details &rarr;
                </div>
              </motion.div>
            </Link>
          ))}
        </StaggerContainer>

        {/* Dynamic CTA */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-16 text-center"
        >
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-heading font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all group"
          >
            Explore All Solutions <div className="w-12 h-px bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
