import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Eye, Target, Lightbulb, Shield, Ruler, Landmark, Leaf, Users, AlertTriangle, CheckCircle, FileText, BadgeCheck } from "lucide-react";
import * as motion from "framer-motion/client";

import { timeline, values, pillars, problemsList, solutionsList, vision, mission, legalIdentity } from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        tag="About Adiveer Aviation" 
        title="Who We Are" 
        description="From a vision of technological self-reliance to engineering systems that protect borders, feed communities, and connect India — this is the story of Adiveer Aviation." 
      />

      {/* ── Our Story ── */}
      <section id="story" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Journey" title="Our Story" />
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((t, i) => (
              <motion.div 
                key={t.year} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }} 
                className="flex gap-6 pb-12 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <span className="text-[10px] font-heading font-black text-primary text-center leading-tight whitespace-nowrap px-1">{t.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section id="vision" className="py-24 bg-card/50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Purpose" title="Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="p-10 bg-background rounded-3xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Eye className="w-24 h-24 text-primary" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-black text-3xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-light italic">&quot;{vision}&quot;</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15 }} 
              className="p-10 bg-background rounded-3xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Target className="w-24 h-24 text-primary" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-black text-3xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-base font-light">&quot;{mission}&quot;</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section id="values" className="py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Principles" title="Core Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div 
                key={v.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed md:text-base font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section id="philosophy" className="py-24 bg-card/50 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Mindset" title="Our Philosophy" />
          <div className="max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <motion.div 
                key={p.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="mb-12 pb-12 border-b border-border last:border-0"
              >
                <div className="flex items-start gap-8">
                  <span className="text-6xl font-heading font-black text-primary/10 flex-shrink-0 select-none">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pt-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg italic font-light">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem We Solve ── */}
      <section id="problem" className="py-24 scroll-mt-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Why We Exist" title="The Problem We Solve" />
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-heading font-bold text-3xl text-foreground mb-8 flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive" /> The Challenges
              </h3>
              <div className="space-y-6">
                {problemsList.map((p, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-background border border-border rounded-xl group hover:border-destructive/30 transition-colors">
                    <span className="text-destructive font-heading font-bold text-lg mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-light">{p}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/20">
              <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-8 flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-primary-foreground" /> Our Solutions
              </h3>
              <div className="space-y-6">
                {solutionsList.map((s, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl group hover:bg-primary-foreground transition-all duration-300">
                    <span className="text-primary-foreground font-heading font-bold text-lg mt-0.5 group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-base text-primary-foreground/90 leading-relaxed group-hover:text-primary transition-colors font-medium">{s}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Legal Identity (NEW) ── */}
      <section id="legal-identity" className="py-24 bg-card/30 scroll-mt-24">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="Transparency" 
            title="Legal Identity" 
            description="Official corporate and regulatory information for investor confidence." 
          />
          <div className="max-w-4xl mx-auto bg-background rounded-3xl border border-border shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-muted/30">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-black text-2xl text-foreground mb-4">Corporate Info</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-8">
                  Adiveer Aviation (OPC) Private Limited is formally registered and compliant with all Indian corporate laws.
                </p>
                <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-[10px] font-heading font-black uppercase tracking-widest text-emerald-600">Active & Compliant</span>
                </div>
              </div>
              <div className="p-0">
                <div className="divide-y divide-border">
                  {legalIdentity.map((item, idx) => (
                    <div key={idx} className="p-6 hover:bg-muted/50 transition-colors">
                      <span className="block text-[8px] uppercase tracking-[0.2em] font-black text-primary mb-1">{item.field}</span>
                      <span className="text-xs font-medium text-foreground tracking-tight">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
