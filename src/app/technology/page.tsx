import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { CheckCircle2, ShieldCheck, FileText, Globe, Zap, Cpu, Search, Landmark } from "lucide-react";
import Link from "next/link";
import { techStacks, rdLabsFull, ipStrategyArr } from "@/data/technology";

export default function TechnologyPage() {
  return (
    <>
      <PageHero 
        tag="Technology Portfolio" 
        title="Our Technology Stack" 
        description="The deep-tech engineering backbone behind every autonomous system we build — from proprietary firmware to AI-driven fleet management." 
      />
      
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Deep-Tech Stack" title="Core Engineering Domains" description="Five integrated technology layers that define our systems' intelligence and resilience." />
          <div className="space-y-12 max-w-6xl mx-auto">
            {techStacks.map((s, i) => (
              <motion.div 
                key={s.title} 
                id={s.id} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring", damping: 20 }} 
                className="bg-card rounded-3xl p-10 md:p-14 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group scroll-mt-32"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                      <s.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <h3 className="font-heading font-black text-4xl text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8 italic">{s.desc}</p>
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl border border-border/50 text-[10px] font-heading font-black uppercase tracking-widest text-primary w-fit">
                      <ShieldCheck className="w-3.5 h-3.5" /> Proprietary Tech
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-px bg-primary/30 flex-1" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Integrated Capabilities</span>
                      <div className="h-px bg-primary/30 flex-1" />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {s.techs.map((t, j) => (
                        <motion.div 
                          key={t}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.05 }}
                          className="flex items-center gap-3 px-5 py-4 bg-background border border-border/40 rounded-2xl shadow-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300 group/item"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm font-bold text-muted-foreground group-hover/item:text-foreground transition-colors">{t}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Lab Section */}
      <section id="rd-labs" className="py-32 bg-primary relative overflow-hidden">
         <div className="absolute inset-0 grid-overlay opacity-10" />
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-heading font-black uppercase tracking-widest mb-6"
                >
                  Engineering Infrastructure
                </motion.span>
                <h2 className="text-4xl md:text-7xl font-heading font-black text-primary-foreground mb-10 tracking-tight leading-tight">Advanced R&D Labs</h2>
                <p className="text-primary-foreground/80 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
                  Our technology is forged in vertically integrated labs from hardware prototyping to deep-AI training environments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {rdLabsFull.map((lab, idx) => (
                   <motion.div 
                    key={lab.title} 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 group hover:bg-white/10 transition-all"
                   >
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <lab.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-heading font-black text-white mb-4">{lab.title}</h4>
                      <p className="text-white/60 text-sm font-light leading-relaxed">{lab.desc}</p>
                   </motion.div>
                 ))}
              </div>

              <div className="mt-20 text-center">
                 <button className="px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-2xl text-lg">
                    Partnership & Lab Access Enquiry
                 </button>
              </div>
            </div>
         </div>
      </section>

      {/* IP Strategy Section (NEW) */}
      <section id="ip-strategy" className="py-32 bg-card/30 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="Moat" 
            title="IP Strategy" 
            description="Our technological edge is protected by a multi-layered intellectual property framework." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {ipStrategyArr.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-background rounded-3xl border border-border shadow-md flex flex-col gap-6 group hover:border-primary/40 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-black text-foreground mb-2 group-hover:text-primary transition-colors">{item.layer}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20 max-w-2xl mx-auto text-center italic text-sm text-muted-foreground">
             &quot;Total internal ownership of hardware schematics, source code, and AI training datasets ensures Adiveer Aviation is immune to retroactive supply chain weaponization and patent trolls.&quot;
          </div>
        </div>
      </section>
    </>
  );
}
