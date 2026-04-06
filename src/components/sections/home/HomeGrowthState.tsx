"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ArrowUpRight, ArrowRight } from "lucide-react";
import { growthMilestones, currentStatus } from "@/data/home";
import Link from "next/link";
import MagneticButton from "@/components/animations/MagneticButton";

export function HomeGrowthState() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 w-full max-w-2xl">
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full mb-4">Real-Time Progression</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">Growth Milestones & Vision</h2>
              <p className="text-muted-foreground text-sm lg:text-base font-light max-w-xl mx-auto lg:mx-0">
                A transparent view into our technical roadmap and strategic scaling from pre-seed to national-scale deployment.
              </p>
            </div>
            
            <div className="space-y-4">
              {growthMilestones.map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between p-4 bg-background border border-border rounded-2xl group hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    {item.status === "Done" ? (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                         <CheckCircle2 className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:animate-spin-slow">
                         <Loader2 className="w-4 h-4" />
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.date}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md ${item.status === 'Done' ? 'text-emerald-500 bg-emerald-500/5' : 'text-primary bg-primary/5 animate-pulse'}`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 bg-primary p-10 rounded-[3rem] text-primary-foreground relative shadow-2xl shadow-primary/20 group hover:-translate-y-2 transition-transform duration-500">
             <div className="absolute top-0 right-0 p-8">
                <ArrowUpRight className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
             </div>
             <h3 className="text-2xl font-heading font-black mb-6 leading-tight">Investor Enquiry & Future Scale</h3>
             <p className="text-primary-foreground/80 font-light text-sm mb-10 leading-relaxed italic">
                &quot;We are currently at the pre-seed scaling phase, aiming to consolidate our deep-tech stack and move towards wide-scale border and civilian surveillance deployment.&quot;
             </p>
             <div className="space-y-6">
                {currentStatus.metrics.map(m => (
                  <div key={m.label}>
                     <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest mb-1.5 opacity-60">
                        <span>{m.label}</span>
                        <span>{m.value}</span>
                     </div>
                     <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: m.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-white"
                        />
                     </div>
                  </div>
                ))}
             </div>
             
             <MagneticButton>
               <Link 
                 href="/investors"
                 className="mt-12 w-full flex items-center justify-center py-5 bg-white text-primary rounded-2xl font-heading font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all shadow-xl"
               >
                  Invest in Adiveer <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
             </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
}
