"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, TrendingUp, Award, Target, Info } from "lucide-react";
import { services } from "@/data/services";
import PageHero from "@/components/common/PageHero";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

export default function ProductDetailPage() {
  const params = useParams();
  
  if (!params || !params.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const id = decodeURIComponent(params.slug as string);
  const product = services.find((s) => s.id === id || s.slug === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-24">
      <div className="pt-10">
        <div className="container mx-auto px-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Solutions
          </Link>
        </div>
        <PageHero 
          tag={`Vertical Specs: V-${id.toUpperCase()}`}
          title={product.title}
          description={product.fullDesc || product.desc}
        />
      </div>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Core Specs & Features */}
            <div className="lg:col-span-2 space-y-16">
              <StaggerContainer className="grid md:grid-cols-2 gap-6">
                {product.features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={staggerItem}
                    className="p-6 bg-card rounded-2xl border border-border/60 flex items-start gap-4 hover:border-primary/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </StaggerContainer>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-heading font-black italic text-foreground tracking-tight">Deployment Use Cases</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.useCases?.map((uc) => (
                    <span key={uc} className="px-6 py-3 bg-muted rounded-2xl border border-border/60 text-xs font-bold text-foreground">
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div className="space-y-8 pt-8">
                <div className="flex items-center gap-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-heading font-black italic text-foreground tracking-tight">Core Capabilities</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.capabilities?.map((cap, i) => (
                    <div key={i} className="group border-l-2 border-primary/20 pl-4 py-1 hover:border-primary transition-all">
                      <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-foreground transition-colors">{cap.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* Right Column: Strategic Alignment & Details */}
            <div className="space-y-8">
              <div className="p-8 bg-card rounded-[2.5rem] border border-border shadow-xl sticky top-32">
                <h3 className="text-xl font-heading font-black mb-8 italic text-primary">Strategic Specs</h3>
                
                <div className="space-y-10">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-primary/60 mb-1">Revenue Stream</span>
                      <p className="text-sm font-bold text-foreground leading-snug">{product.revenueModel}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-emerald-500/60 mb-1">Regulatory Sync</span>
                      <p className="text-sm font-bold text-foreground leading-snug">{product.compliance}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-border/50">
                    {product.results?.map((res, i) => (
                      <div key={i} className="text-center p-4 bg-muted/30 rounded-2xl border border-border/30">
                        <span className="block text-xl font-heading font-black text-primary">{res.value}</span>
                        <span className="text-[7px] uppercase tracking-widest text-muted-foreground font-black">{res.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Link 
                      href="/contact" 
                      className="w-full flex items-center justify-center py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                      Enquire for Vertical &rarr;
                    </Link>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl border border-dashed border-border flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-[9px] text-muted-foreground italic leading-relaxed">
                      Detailed datasheet and engineering reports available upon signing NDA and proof-of-intent. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 border-t border-border/10">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-2xl mx-auto italic text-muted-foreground font-light text-lg">
             &quot;Adiveer Aviation&quot;s engineering philosophy for the {product.title} vertical focuses on high-fidelity, autonomous reliability in extreme operational conditions — from high-altitude borders to mission-critical infrastructure.&quot;
           </div>
        </div>
      </section>
    </main>
  );
}
