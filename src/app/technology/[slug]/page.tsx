"use client";

import { useParams } from "next/navigation";
import { techStacks } from "@/data/technology";
import PageHero from "@/components/common/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Cpu, LineChart, Code, Cog } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";

export default function TechnologyPage() {
  const params = useParams();
  
  if (!params || !params.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const slug = params.slug as string;
  const tech = techStacks.find((t) => t.slug === slug);

  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black text-foreground mb-4">Technology Not Found</h1>
          <Link href="/technology" className="text-primary hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Tech
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        tag="Engineering Pillar" 
        title={tech.title} 
        description={tech.desc} 
      />

      {/* Tech Architecture Overview */}
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
                <SectionHeading tag="The Architecture" title="Systems Core" align="left" />
                <p className="text-muted-foreground text-lg leading-relaxed font-light mt-6">
                  {tech.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 bg-card rounded-3xl p-8 border border-border/50">
                 <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center gap-3">
                   <Code className="w-6 h-6 text-primary" /> Component Ecosystem
                 </h3>
                 <div className="space-y-6">
                   {tech.architecture.map((a) => (
                     <div key={a.component} className="group">
                       <h4 className="text-primary text-sm font-black uppercase tracking-widest mb-1 group-hover:text-foreground transition-colors">{a.component}</h4>
                       <p className="text-muted-foreground text-sm leading-relaxed">{a.role}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Stack Detail */}
              <div className="space-y-8">
                <SectionHeading tag="Components" title="Technology Stack" align="left" />
                <div className="flex flex-wrap gap-3">
                  {tech.techs.map((t) => (
                    <span key={t} className="px-4 py-2 bg-background border border-border/50 rounded-xl text-sm font-medium text-foreground/80 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <SectionHeading tag="Inherent Value" title="Key Architectural Benefits" align="left" />
                <ul className="space-y-4">
                  {tech.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span className="text-muted-foreground leading-tight text-lg">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
         <div className="container mx-auto px-6 text-center relative z-10">
           <LineChart className="w-16 h-16 text-primary-foreground/40 mx-auto mb-8" />
           <h2 className="text-4xl md:text-5xl font-heading font-black text-primary-foreground mb-12 tracking-tighter">Engineered for absolute performance.</h2>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link 
               href="/work" 
               className="px-10 py-5 bg-primary-foreground text-primary font-heading font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all shadow-2xl"
             >
               View Related Projects
             </Link>
             <Link 
               href="/technology" 
               className="px-10 py-5 bg-transparent border border-primary-foreground/30 text-primary-foreground font-heading font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all"
             >
               All Tech Pillars
             </Link>
           </div>
         </div>
      </section>
    </>
  );
}
