import PageHero from "@/components/common/PageHero";
import * as motion from "framer-motion/client";
import { Plane, Brain, Bot, Shield, Leaf, Cog, GraduationCap, Headphones, CheckCircle2 } from "lucide-react";

import { services } from "@/data/services";

export default function ProductsPage() {
  return (
    <>
      <PageHero 
        tag="Products & Services" 
        title="Full-Spectrum Deep-Tech Solutions" 
        description="From concept to deployment — end-to-end capabilities across aerospace, AI, robotics, defense, and environmental technology." 
      />
      
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div 
                key={s.title} 
                id={s.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05, duration: 0.5 }} 
                className="bg-card rounded-3xl p-10 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group scroll-mt-32 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shadow-inner">
                    <s.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50 select-none">Vertical {String(i + 1).padStart(2, '0')}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading font-black text-3xl text-foreground mb-4 group-hover:text-primary transition-colors tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-light">{s.desc}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                    {s.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 p-3 bg-background border border-border/40 rounded-xl group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border/50">
                  <button className="text-sm font-heading font-black uppercase tracking-[0.2em] text-primary hover:gap-3 flex items-center gap-2 transition-all group-hover:underline underline-offset-8">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Banner */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight">"We don't just build technology. We build India's future self-reliance."</h2>
            <p className="text-primary-foreground/70 text-lg md:text-xl font-light italic">— Our Engineering Philosophy</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
