import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { FileText, ArrowRight, BookOpen, Presentation, Newspaper } from "lucide-react";

import { reports, caseStudies, blogTopics } from "@/data/insights";

export default function InsightsPage() {
  return (
    <>
      <PageHero 
        tag="Insights" 
        title="Research, Reports & Perspectives" 
        description="Deep dives into the technologies, strategies, and ideas shaping aerospace, AI, and autonomous systems." 
      />

      <section id="reports" className="py-24 scroll-mt-32">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Knowledge" title="Research & Whitepapers" />
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reports.map((r, i) => (
              <motion.div 
                key={r.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-card rounded-3xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 flex items-start gap-6 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-inner">
                  <FileText className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 block">{r.type}</span>
                  <h3 className="font-heading font-black text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight leading-snug">{r.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base mt-4 font-light leading-relaxed">{r.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Download Full PDF <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-24 bg-card/50 scroll-mt-32">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Impact" title="Mission Case Studies" />
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((r, i) => (
              <motion.div 
                key={r.title} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-background rounded-3xl p-10 border border-border/60 hover:border-primary/30 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Presentation className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Technical Analysis</span>
                  </div>
                  <h3 className="font-heading font-black text-3xl text-foreground tracking-tight leading-tight">{r.title}</h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">{r.desc}</p>
                  <button className="self-start px-8 py-3 border border-primary/30 text-primary font-black uppercase tracking-widest text-xs rounded-xl hover:bg-primary hover:text-white transition-all">
                    Access Case Study
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 scroll-mt-32">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Perspective" title="The AdiVeer Notebook" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogTopics.map((b, i) => (
              <motion.div 
                key={b.title} 
                initial={{ opacity: 0, y: 10 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }} 
                className="bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded">{b.tag}</span>
                  <span className="text-[10px] font-bold text-muted-foreground/60">{b.date}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors tracking-tight flex-1 mb-6 leading-snug">{b.title}</h3>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                   Read Entry <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter / Subscription */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
         <div className="absolute inset-0 grid-overlay opacity-10" />
         <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Stay at the Vanguard</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 font-light">
                Join our private intelligence briefing for updates on India's deep-tech evolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="flex-1 px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl focus:outline-none focus:bg-white focus:text-primary transition-all placeholder:text-primary-foreground/40"
                 />
                 <button className="px-10 py-4 bg-white text-primary font-black uppercase tracking-wider rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-xl">
                   Subscribe
                 </button>
              </div>
            </motion.div>
         </div>
      </section>
    </>
  );
}
