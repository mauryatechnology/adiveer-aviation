"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import MagneticButton from "@/components/animations/MagneticButton";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

import { featuredProjects as projects } from "@/data/home";

export function HomeFeaturedProject() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          tag="Field Results" 
          title="Projects That Define Us" 
          description="A showcase of mission-critical systems deployed across borders, farms, and cities."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="bg-background rounded-3xl border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-colors duration-500 group flex flex-col h-full overflow-hidden"
            >
              <div className="p-8 pb-4 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-emerald-500">
                    <ShieldCheck className="w-3.5 h-3.5" /> 
                    <span>Validated</span>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-foreground mb-4 group-hover:text-primary transition-colors italic leading-tight">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 font-light italic">
                  &quot;{project.desc}&quot;
                </p>

                <div className="space-y-4 pt-6 border-t border-border/50">
                   <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-primary/60 mb-2">Primary Impact</span>
                      <p className="text-xs font-bold text-foreground leading-snug">{project.impact}</p>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 pt-2">
                      {project.milestones.slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-muted px-4 py-3 rounded-2xl border border-border/30">
                           <span className="block text-2xl font-heading font-black text-primary">{m.value}</span>
                           <span className="text-[8px] uppercase tracking-widest text-muted-foreground font-black">{m.label}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Link 
                  href={`/work/${project.slug}`}
                  className="w-full flex items-center justify-between py-4 px-6 bg-muted hover:bg-primary hover:text-primary-foreground transition-all rounded-2xl text-[10px] font-heading font-black uppercase tracking-widest group-hover:scale-[1.02]"
                >
                  Analyze Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <MagneticButton>
            <Link 
              href="/work" 
              className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-105 transition-all inline-flex items-center gap-3 shadow-xl shadow-primary/20"
            >
              Explore Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
