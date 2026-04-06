"use client";

import { useParams } from "next/navigation";
import { services } from "@/data/services";
import PageHero from "@/components/common/PageHero";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, LayoutGrid, Zap, Target, Activity } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-black text-foreground mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        tag="Engineering Vertical" 
        title={service.title} 
        description={service.desc} 
      />

      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <SectionHeading tag="Strategic Focus" title="Visionary Engineering" align="left" />
                <p className="text-muted-foreground text-lg leading-relaxed font-light mt-6 italic">
                  {service.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.results?.map((r) => (
                  <div key={r.label} className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:border-primary/20 transition-all">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{r.label}</p>
                    <p className="text-xl font-heading font-black text-foreground">{r.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-foreground mb-8 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-primary" /> Core Capabilities
                </h3>
                <div className="space-y-6">
                  {service.capabilities.map((c) => (
                    <div key={c.title} className="group border-l-2 border-primary/20 pl-4 py-1 hover:border-primary transition-all">
                      <h4 className="text-primary text-xs font-black uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">{c.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" /> Strategic Use-Cases
                </h3>
                <ul className="grid grid-cols-1 gap-4">
                   {service.useCases.map((u) => (
                     <li key={u} className="flex items-center gap-3 text-muted-foreground group">
                       <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" /> {u}
                     </li>
                   ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-card relative overflow-hidden border-t border-border/50">
         <div className="container mx-auto px-6 text-center relative z-10 w-full overflow-hidden">
           <div className="max-w-4xl mx-auto">
             <LayoutGrid className="w-20 h-20 text-primary/10 mx-auto mb-10" />
             <h2 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-12 tracking-tighter leading-tight">Ready to integrate our {service.title}?</h2>
             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <Link 
                 href="/contact" 
                 className="px-12 py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-widest rounded-2xl hover:bg-primary/90 hover:scale-105 transition-all shadow-2xl shadow-primary/30"
               >
                 Consult Our Engineers
               </Link>
               <Link 
                 href="/products" 
                 className="px-12 py-5 bg-background border border-border text-foreground font-heading font-black uppercase tracking-widest rounded-2xl hover:bg-card transition-all"
               >
                 View All Verticals
               </Link>
             </div>
           </div>
         </div>
      </section>
    </>
  );
}
