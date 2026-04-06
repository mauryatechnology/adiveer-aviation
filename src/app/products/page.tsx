import PageHero from "@/components/common/PageHero";
import * as motion from "framer-motion/client";
import { CheckCircle2, ShieldCheck, Zap, TrendingUp, Landmark, Award } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ProductsPage() {
  return (
    <>
      <PageHero 
        tag="Products & Verticals" 
        title="Full-Spectrum Engineering" 
        description="Six deep-tech engineering verticals designed for mission-critical reliability, regulatory compliance, and civilian-defense synergy." 
      />
      
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <motion.div 
                key={s.title} 
                id={s.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05, duration: 0.5 }} 
                className="bg-card rounded-3xl p-8 border border-border/60 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group scroll-mt-32 flex flex-col h-full overflow-hidden relative"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500 shadow-inner">
                    <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-muted-foreground/40 select-none mb-1">V-{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                       <ShieldCheck className="w-3 h-3 text-emerald-500/60" />
                       <span className="text-[7px] font-black uppercase tracking-widest text-emerald-600/70">Certified</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="font-heading font-black text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight italic mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light line-clamp-4 italic">
                    &quot;{s.desc}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-1">
                    <span className="text-[7px] font-black uppercase tracking-widest text-primary/50">Revenue</span>
                    <p className="text-[9px] text-foreground font-bold uppercase tracking-tight line-clamp-1">{s.revenueModel}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[7px] font-black uppercase tracking-widest text-primary/50">Status</span>
                    <p className="text-[9px] text-foreground font-bold uppercase tracking-tight line-clamp-1">{s.compliance}</p>
                  </div>
                </div>
                
                <div className="mt-8 relative z-10">
                  <Link 
                    href={`/products/${s.id}`}
                    className="w-full flex items-center justify-between py-4 px-6 bg-muted hover:bg-primary hover:text-primary-foreground transition-all rounded-2xl text-[10px] font-heading font-black uppercase tracking-widest group-hover:scale-[1.02]"
                  >
                    View Vertical Specs &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Banner */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),transparent)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight tracking-tighter italic">
              &quot;Engineering self-reliance through proprietary tech IP, field-validated hardware, and India-first innovation.&quot;
            </h2>
            <div className="flex items-center justify-center gap-4">
               <div className="h-px w-12 bg-primary-foreground/30" />
               <p className="text-primary-foreground/70 text-sm font-black uppercase tracking-[0.3em]">Adiveer Aviation Ethos</p>
               <div className="h-px w-12 bg-primary-foreground/30" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
