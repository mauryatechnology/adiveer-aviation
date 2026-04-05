import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { Linkedin, Github, Twitter } from "lucide-react";

import { leadership, coreTeam } from "@/data/team";
export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Our Team"
        title="The People Behind the Technology"
        description="A team of engineers, scientists, and operators united by a shared mission — building India's deep-tech future."
      />

      <section id="leadership" className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Leadership" title="Founders & Leadership" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {leadership.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.7,
                  type: "spring",
                  damping: 25,
                  stiffness: 100
                 }}
                className="bg-card rounded-3xl p-10 border border-border/60 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-8">
                  <div className="absolute inset-0 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 overflow-hidden">
                    {l.image ? (
                      <img
                        src={l.image}
                        alt={l.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <span className="text-5xl font-heading font-black text-primary select-none">{l.name.charAt(0)}</span>
                    )}
                  </div>
                </div>
                <h3 className="font-heading font-black text-3xl text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">{l.name}</h3>
                <p className="text-primary text-sm font-black uppercase tracking-[0.2em] mb-6">{l.role}</p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light italic">"{l.desc}"</p>

                <div className="flex justify-center gap-4 border-t border-border/50 pt-8">
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="core" className="py-24 bg-card/50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading tag="Core Team" title="Engineering Excellence" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {coreTeam.map((m, i) => (
              <motion.div
                key={m.name}
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
                className="bg-background rounded-2xl p-8 border border-border/60 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="font-heading font-black text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight mb-1">{m.name}</h3>
                <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-4">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{m.desc}</p>

                <div className="mt-8 pt-6 border-t border-border/30 flex justify-end">
                  <Linkedin className="w-4 h-4 text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <SectionHeading
            tag="Culture"
            title="Built for Builders"
            description="We're not a typical corporate environment. We're a mission-driven lab where engineers have the freedom to explore, experiment, and execute on ideas that matter."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {["Hack Days", "Open Source", "Field Trips", "Tech Talks"].map((item, i) => (
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
                <span className="text-sm font-heading font-black uppercase tracking-[0.2em] text-foreground group-hover:text-primary transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-primary rounded-3xl text-center shadow-2xl shadow-primary/20"
          >
            <h3 className="text-3xl md:text-5xl font-heading font-black text-primary-foreground mb-6">Want to be part of the mission?</h3>
            <p className="text-primary-foreground/80 text-xl font-light mb-10 max-w-2xl mx-auto">
              We're looking for the best deep-tech talent in India. High stress, high impact, higher reward.
            </p>
            <button className="px-12 py-5 bg-white text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-primary-foreground/90 transition-all shadow-xl text-lg">
              Check Open Roles
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
