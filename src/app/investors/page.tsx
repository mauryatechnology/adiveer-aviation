"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, TrendingUp, Cpu, Workflow, Globe, Zap, Search, Shield, ChevronRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { investmentThesis, marketOpportunity, revenueStreamsArr, growthRoadmap, regulatoryFramework, investorContact } from "@/data/investors";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function InvestorRelationsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-primary/2 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-heading font-black uppercase tracking-widest mb-8"
          >
            Investor Relations
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-black text-foreground mb-8 tracking-tighter leading-tight"
          >
            Invest in India&apos;s <br /><span className="text-primary italic">Deep-Tech Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light"
          >
             Adiveer Aviation is building the next generation of India&apos;s aerospace, AI, and autonomous 
             systems capability from the ground up. We are at the intersection of Aatmanirbhar Bharat, a $90 
             Billion global drone market, and India&apos;s accelerating defense modernization.
          </motion.p>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="py-24 bg-background" id="thesis">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="Why Adiveer" 
            title="Investment Thesis" 
            description="Five reasons sophisticated investors are paying attention to India's deep-tech aerospace sector — and to Adiveer Aviation specifically." 
          />
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentThesis.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-black text-foreground mb-4">{item.pillar}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-24 bg-card/50" id="market">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="The Opportunity" 
            title="A Market at the Tipping Point" 
            description="Massive tailwinds in India's drone and deep-tech ecosystem are creating unprecedented growth opportunities." 
          />
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border bg-background shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-primary/5 text-primary-foreground/0 border-b border-border">
                  <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">Market Segment</th>
                  <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">2024 Value</th>
                  <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">2030 Projected</th>
                  <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">CAGR</th>
                </tr>
              </thead>
              <tbody>
                {marketOpportunity.map((m, idx) => (
                  <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="px-8 py-6 font-heading font-bold text-foreground text-sm">{m.segment}</td>
                    <td className="px-8 py-6 text-muted-foreground text-sm">{m.value2024}</td>
                    <td className="px-8 py-6 text-foreground font-black text-sm">{m.projected2030}</td>
                    <td className="px-8 py-6 text-emerald-500 font-black text-sm">{m.cagr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-muted-foreground mt-6 text-center italic">
            Source: MoCA Drone Policy, FICCI Drone Report, RedSeer, internal analysis.
          </p>
        </div>
      </section>

      {/* Revenue Streams Section */}
      <section className="py-24 bg-background" id="revenue">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="Business Model" 
            title="Diversified Revenue Streams" 
            description="Seven distinct revenue channels engineered for long-term scalability and capital efficiency." 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {revenueStreamsArr.map((s, idx) => (
              <motion.div
                key={idx}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 p-6 md:p-8 bg-card rounded-2xl border border-border/60 hover:bg-muted/50 transition-all border-l-4 border-l-primary"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-heading font-black text-foreground mb-2">{s.stream}</h4>
                  <p className="text-xs text-muted-foreground mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-border mt-auto">
                    <div>
                      <span className="block text-[8px] uppercase tracking-widest text-primary font-bold mb-1">Target Clients</span>
                      <span className="text-[10px] text-foreground font-medium">{s.target}</span>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="block text-[8px] uppercase tracking-widest text-primary font-bold mb-1">Pricing Model</span>
                      <span className="text-[10px] text-foreground font-medium uppercase italic">{s.model}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Roadmap Section */}
      <section className="py-24 bg-card/30" id="roadmap">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading 
            tag="The Path Ahead" 
            title="Growth Roadmap" 
            description="Our strategic phase-wise approach to becoming India's deep-tech champion." 
          />
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto relative mt-16 text-left">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[2.2rem] left-0 right-0 h-px bg-primary/20 z-0" />
            
            {growthRoadmap.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-sm mb-6 shadow-xl shadow-primary/30 mx-auto lg:mx-0">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-heading font-black text-foreground mb-2">{p.phase}</h4>
                <div className="text-primary font-black uppercase text-[10px] tracking-widest mb-6">{p.timeline}</div>
                <ul className="space-y-4">
                  {p.milestones.map((m, mIdx) => (
                    <li key={mIdx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed font-light">
                      <div className="min-w-[4px] h-4 mt-1 bg-primary/30 rounded-full" />
                      {m}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework Section */}
      <section className="py-24 bg-background" id="regulatory">
        <div className="container mx-auto px-6">
          <SectionHeading 
            tag="Compliance" 
            title="Built for Regulatory-First Scale" 
            description="A rigorous adherence to national and international frameworks ensures long-term operational stability." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regulatoryFramework.map((item, idx) => (
              <motion.div
                key={idx}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-card rounded-2xl border border-border flex flex-col gap-4"
              >
                <div className="text-xs uppercase tracking-widest text-primary font-black">{item.domain}</div>
                <div className="text-sm font-heading font-bold text-foreground lead-tight">{item.regulation}</div>
                <div className="mt-auto pt-4 border-t border-border flex items-start gap-2">
                  <div className="p-1 bg-emerald-500/10 rounded-full">
                    <Shield className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-[10px] text-muted-foreground leading-tight italic">{item.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-primary relative overflow-hidden" id="enquiry">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[4rem] shadow-2xl"
          >
            <SectionHeading 
              tag="Investor Contact" 
              title={investorContact.headline} 
              description={investorContact.subtext} 
              light
            />
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              {investorContact.details.map((detail, idx) => (
                <div key={idx} className="text-center group">
                  <h5 className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 mb-3">{detail.type}</h5>
                  <p className="text-white font-heading font-bold text-xl md:text-2xl mb-1 group-hover:text-white transition-colors">{detail.content}</p>
                  <p className="text-white/60 text-[10px] italic">{detail.sub}</p>
                </div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16"
            >
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-foreground transition-all group shadow-2xl"
              >
                Start a Conversation <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 bg-card">
         <div className="container mx-auto px-6 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] font-black mb-12">Institutional Grade Deep-Tech</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
               <div>
                  <div className="text-3xl font-heading font-black text-foreground mb-1">50+</div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Systems Deployed</p>
               </div>
               <div>
                  <div className="text-3xl font-heading font-black text-foreground mb-1">6</div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Tech Verticals</p>
               </div>
               <div>
                  <div className="text-3xl font-heading font-black text-foreground mb-1">200k+</div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Engineering Hours</p>
               </div>
               <div>
                  <div className="text-3xl font-heading font-black text-foreground mb-1">IP-Moat</div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Defensible Tech</p>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
