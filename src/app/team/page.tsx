import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { Linkedin, Github, Twitter, ShieldCheck } from "lucide-react";
import { TeamCarousel } from "@/components/common/TeamCarousel";

import { leadership, advisors } from "@/data/team";

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Team Adiveer"
        title="The Visionaries & Engineers"
        description="A specialized unit of aerospace engineers, AI researchers, and mission-focused leaders building India's deep-tech IP from the ground up."
      />

      <section id="leadership" className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10 w-full overflow-hidden">
          <SectionHeading tag="Leadership" title="Core Visionary Unit" description="Driven by a singular mission to indigenize India's defense and aerospace technology." />
          <TeamCarousel members={leadership} />
        </div>
      </section>

      {/* Advisory Section */}
      <section id="advisors" className="py-12 relative overflow-hidden bg-card/50">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Strategic Support" title="Advisory & Statutory" description="Guiding our compliance and strategic roadmap in India's regulatory ecosystem." />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
             {advisors.map((member, idx) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-background border border-border rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                >
                   <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-muted overflow-hidden flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for advisor image */}
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center font-heading font-black text-xl text-primary">
                           {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">{member.name}</h4>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{member.role}</p>
                      </div>
                   </div>
                   <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                     {member.bio}
                   </p>
                   {member.note && (
                     <div className="pt-4 border-t border-border flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5" />
                        <p className="text-[10px] text-muted-foreground italic leading-tight">{member.note}</p>
                     </div>
                   )}
                </motion.div>
             ))}
          </div>
          
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20 max-w-2xl mx-auto text-center italic text-[11px] text-muted-foreground leading-relaxed">
             &quot;Adiveer Aviation operates under a rigorous governance framework. Our statutory advisors ensure transparency and compliance with the Companies Act, 2013 and specific defense-sector regulatory mandates.&quot;
          </div>
        </div>
      </section>

      <section id="culture" className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <SectionHeading
            tag="Culture"
            title="Built for Builders"
            description="We're not a typical corporate environment. We're a mission-driven engineering lab where builders have the freedom to execute on ideas that matter."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {["High Ownership", "Deep-Tech First", "Field Tested", "IP Driven"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 150
                 }}
                className="p-6 bg-card rounded-2xl border border-border/60 hover:bg-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-[10px] font-heading font-black uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-primary rounded-[3rem] text-center shadow-2xl shadow-primary/20"
          >
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mb-6">Want to be part of the mission?</h3>
            <p className="text-primary-foreground/80 text-xl font-light mb-10 max-w-2xl mx-auto">
              We&apos;re looking for the best deep-tech talent in India. High stress, planetary impact, engineer-first environment.
            </p>
            <button className="px-10 py-5 bg-white text-primary font-heading font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-xl">
               Join the Hangar
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
