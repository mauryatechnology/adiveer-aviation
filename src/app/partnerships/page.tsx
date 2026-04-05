import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { Building2, Shield, Leaf, Landmark, Factory, ArrowRight, Handshake } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/animations/MagneticButton";

import { industries, partnershipModels, partnerTypes } from "@/data/partnerships";

export default function PartnershipsPage() {
  return (
    <>
      <PageHero 
        tag="Partnerships" 
        title="Collaborate With Us" 
        description="We partner with governments, enterprises, and research institutions to deploy deep-tech solutions at scale." 
      />
      
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Industries" title="Sectors We Serve" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  damping: 30,
                  stiffness: 100
                 }} 
                className="bg-card rounded-3xl p-10 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 shadow-inner">
                  <ind.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-black text-2xl text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{ind.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Models" title="Partnership Models" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {partnershipModels.map((m, i) => (
              <motion.div 
                key={m.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ 
                  delay: i * 0.05, 
                  duration: 0.6,
                  type: "spring",
                  damping: 25,
                  stiffness: 120
                 }} 
                className="bg-background rounded-3xl p-10 border border-border/60 hover:border-primary/20 transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors">Model 0{i+1}</span>
                  <h3 className="font-heading font-black text-3xl text-foreground mb-2 group-hover:text-primary transition-colors tracking-tight">{m.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <MagneticButton>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-heading font-black uppercase tracking-wider rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all group shadow-xl">
                Initiate Partnership <Handshake className="w-6 h-6 transition-transform group-hover:scale-110" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
      
      {/* Global Presence Banner */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
           >
             <h2 className="text-4xl md:text-7xl font-heading font-black text-primary-foreground mb-8 tracking-tighter leading-tight">Scale From India <br/> To The World.</h2>
             <p className="text-primary-foreground/80 text-xl font-light mb-12 max-w-2xl mx-auto">
               We're building an international network of technology partners and ecosystem catalysts. Join the vanguard of the deep-tech revolution.
             </p>
             <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
               {partnerTypes.map((partner) => (
                 <span key={partner} className="text-sm font-black uppercase tracking-widest text-primary-foreground">{partner}</span>
               ))}
             </div>
           </motion.div>
        </div>
      </section>
    </>
  );
}
