"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import MagneticButton from "@/components/animations/MagneticButton";
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
                
                <div className="mt-auto pt-4 border-t border-border/10 flex justify-end">
                  <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 px-4 py-2 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Details <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
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
          <MagneticButton>
            <Link 
              href="/products"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              Explore All Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
