"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/work";
import PageHero from "@/components/common/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Cpu, LineChart, Target, Zap } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black text-foreground mb-4">Project Not Found</h1>
          <Link href="/work" className="text-primary hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        tag={project.category} 
        title={project.name} 
        description={project.desc} 
      />

      {/* Project Overview */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeading tag="The Vision" title="Deep-Tech Execution" align="left" />
                <p className="text-muted-foreground text-lg leading-relaxed font-light mt-6">
                  {project.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 bg-card rounded-3xl p-8 border border-border/50">
                {project.milestones.map((m) => (
                  <div key={m.label}>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">{m.label}</p>
                    <p className="text-2xl font-heading font-black text-foreground">{m.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Challenge vs Solution */}
              <div className="space-y-6">
                <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                   <div className="flex items-center gap-3 mb-4">
                     <Target className="w-6 h-6 text-primary" />
                     <h3 className="font-heading font-bold text-xl text-foreground">Mission Challenge</h3>
                   </div>
                   <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>

                <div className="p-8 bg-card rounded-3xl border border-border/50">
                   <div className="flex items-center gap-3 mb-4">
                     <Zap className="w-6 h-6 text-primary" />
                     <h3 className="font-heading font-bold text-xl text-foreground">Engineering Solution</h3>
                   </div>
                   <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Features */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="space-y-8">
               <SectionHeading tag="Technology" title="The Stack" align="left" />
               <div className="flex flex-wrap gap-3">
                 {project.tech.map((t) => (
                   <span key={t} className="px-4 py-2 bg-background border border-border/50 rounded-xl text-sm font-medium text-foreground/80 flex items-center gap-2">
                     <Cpu className="w-4 h-4 text-primary" /> {t}
                   </span>
                 ))}
               </div>
             </div>

             <div className="space-y-8">
               <SectionHeading tag="Capabilities" title="Key Features" align="left" />
               <ul className="space-y-4">
                 {project.features.map((f) => (
                   <li key={f} className="flex items-start gap-3">
                     <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                     <span className="text-muted-foreground leading-tight">{f}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Final Impact Banner */}
      <section className="py-32 bg-primary relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
           >
             <LineChart className="w-16 h-16 text-primary-foreground/40 mx-auto mb-8" />
             <h2 className="text-4xl md:text-6xl font-heading font-black text-primary-foreground mb-8 tracking-tighter leading-tight">Operational Impact</h2>
             <p className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground italic tracking-tight mb-12">
               "{project.impact}"
             </p>
             <Link 
               href="/work" 
               className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-heading font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-2xl"
             >
               <ArrowLeft className="w-5 h-5" /> All Projects
             </Link>
           </motion.div>
         </div>
      </section>
    </>
  );
}
