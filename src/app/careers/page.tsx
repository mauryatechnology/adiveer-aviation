import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import * as motion from "framer-motion/client";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

import { roles, perks } from "@/data/careers";

export default function CareersPage() {
  return (
    <>
      <PageHero
        tag="Careers"
        title="Build What Matters"
        description="Join a team of engineers, scientists, and operators solving civilization-scale problems with technology."
      />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading tag="Open Positions" title="Current Openings" />
          <div className="grid gap-6 max-w-5xl mx-auto">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.05,
                  type: "spring",
                  damping: 25,
                  stiffness: 120
                 }}
                className="bg-card rounded-2xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-md">{r.dept}</span>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                    <span className="flex items-center gap-2 group-hover:text-foreground transition-colors"><Briefcase className="w-4 h-4 text-primary" />{r.dept}</span>
                    <span className="flex items-center gap-2 group-hover:text-foreground transition-colors"><MapPin className="w-4 h-4 text-primary" />{r.location}</span>
                    <span className="px-2 py-1 border border-border rounded-lg group-hover:border-primary transition-colors">{r.type}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionHeading tag="Why Join Us" title="Life at AdiVeer" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {perks.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: i * 0.1,
                  type: "spring",
                  damping: 20,
                  stiffness: 100
                 }}
                className="flex items-center gap-4 p-6 bg-background rounded-2xl border border-border/60 text-left hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-base text-muted-foreground font-medium leading-tight">{p}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-12 bg-primary rounded-3xl text-center shadow-2xl shadow-primary/20"
          >
            <h3 className="text-3xl font-heading font-black text-primary-foreground mb-4">Don't See a Perfect Fit?</h3>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              We're always looking for brilliant minds. Send us your CV and we'll keep you in mind for future roles.
            </p>
            <Link
              href="mailto:connect@adiveeraviations.com"
              className="px-10 py-5 bg-primary-foreground text-primary font-heading font-black uppercase tracking-wider rounded-2xl hover:bg-white transition-all inline-flex items-center gap-3 group text-lg"
            >
              Send Your CV <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
