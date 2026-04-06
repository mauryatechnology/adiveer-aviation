"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import MagneticButton from "@/components/animations/MagneticButton";
import { coreTeam } from "@/data/team";

export function HomeLeadership() {
  const founder = coreTeam[0];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 font-heading">
        <SectionHeading 
          tag="Leadership" 
          title="The Visionary Behind Adiveer Aviation" 
          description="Led by industry veterans committed to building India's next-generation deep-tech infrastructure."
        />

        <div className="mt-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-card/30 border border-border/60 rounded-[3rem] p-8 md:p-16 backdrop-blur-sm hover:shadow-2xl hover:border-primary/20 transition-all group"
          >
            {/* Image Column */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500 z-10" />
              {founder.image ? (
                <Image 
                  src={founder.image} 
                  alt={founder.name} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                 <div className="w-full h-full bg-primary/20 flex items-center justify-center text-7xl font-black text-primary">
                    {founder.name.charAt(0)}
                 </div>
              )}
            </div>

            {/* Content Column */}
            <div className="flex flex-col">
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {founder.name}
                </h3>
                <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-6">
                  {founder.role}
                </p>
                <div className="h-px w-24 bg-primary/30 mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed font-light italic">
                  &quot;{founder.desc}&quot;
                </p>
              </div>

              <div className="flex items-center flex-wrap gap-8">
                 <div className="flex gap-4">
                    {founder.links?.linkedin && (
                      <Link 
                        href={founder.links.linkedin} 
                        target="_blank"
                        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    )}
                    {founder.links?.twitter && (
                      <Link 
                        href={founder.links.twitter} 
                        target="_blank"
                        className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      >
                        <Twitter className="w-5 h-5" />
                      </Link>
                    )}
                 </div>

                 <MagneticButton>
                    <Link 
                      href="/team" 
                      className="px-10 py-5 bg-white text-primary font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-xl group/btn inline-flex items-center gap-3 border border-border/50"
                    >
                      Meet the Full Team
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                 </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
