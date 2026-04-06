"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { TeamMember } from "@/types";

interface TeamCarouselProps {
  members: TeamMember[];
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 1 },
      "(min-width: 1024px)": { slidesToScroll: 1 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;
    
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="relative group px-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {members.map((m, i) => (
            <div key={m.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 py-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (i % 4) * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  damping: 25,
                  stiffness: 120
                }}
                className="bg-card rounded-3xl p-10 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-colors duration-500 group text-center flex flex-col h-full"
              >
                <div className="relative w-32 h-32 mx-auto mb-8 flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 overflow-hidden">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-4xl font-heading font-black text-primary select-none">{m.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                
                <h3 className="font-heading font-black text-2xl text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">{m.name}</h3>
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light italic flex-1">"{m.desc}"</p>

                <div className="flex justify-center gap-4 border-t border-border/50 pt-8 mt-auto">
                  <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Desktop only) */}
      <div className="hidden lg:block">
        <button
          onClick={scrollPrev}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border shadow-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-20"
          aria-label="Previous slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border shadow-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all z-20"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination indicators (Mobile) */}
      <div className="flex justify-center gap-2 mt-8 lg:hidden">
        {members.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
        ))}
      </div>
    </div>
  );
}
