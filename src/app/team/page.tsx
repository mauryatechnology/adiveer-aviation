import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { Linkedin, Github, Twitter } from "lucide-react";
import { TeamCarousel } from "@/components/common/TeamCarousel";

import { coreTeam } from "@/data/team";
export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Our Team"
        title="The People Behind the Technology"
        description="A team of engineers, scientists, and operators united by a shared mission — building India's deep-tech future."
      />

      <section id="core" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 w-full overflow-hidden">
          <SectionHeading tag="Our Team" title="Engineering & Visionary Excellence" />
          <TeamCarousel members={coreTeam} />
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
