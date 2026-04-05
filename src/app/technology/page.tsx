import PageHero from "@/components/common/PageHero";
import * as motion from "framer-motion/client";
import { CheckCircle2 } from "lucide-react";
import { techStacks, rdLabs } from "@/data/technology";

export default function TechnologyPage() {
  return (
    <>
      <PageHero 
        tag="Technology" 
        title="Our Technology Stack" 
        description="The engineering backbone behind every system we build — from silicon to sky." 
      />
      
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Decorative Blurs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
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
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">{s.desc}</p>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-px bg-primary/30 flex-1" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">Proprietary IP Stack</span>
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
      <section className="py-32 bg-primary relative overflow-hidden">
         <div className="absolute inset-0 grid-overlay opacity-10" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-7xl font-heading font-black text-primary-foreground mb-10 tracking-tight leading-tight">Advanced R&D Labs</h2>
              <p className="text-primary-foreground/80 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Our technology is forged in state-of-the-art labs equipped with high-speed prototyping, EMI/EMC testing, and flight simulation suites.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                 {rdLabs.map((lab) => (
                   <div key={lab} className="space-y-2">
                      <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-primary-foreground"
                        />
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-primary-foreground/60">{lab}</span>
                   </div>
                 ))}
              </div>
              <button className="px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-2xl text-lg">
                Explore Lab Access
              </button>
            </motion.div>
         </div>
      </section>
    </>
  );
}
