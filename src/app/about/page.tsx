import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import { Eye, Target, Lightbulb, Users, Shield, Zap, Heart, Globe, AlertTriangle, CheckCircle } from "lucide-react";
import * as motion from "framer-motion/client";

/* ── Timeline (Story) ── */
const timeline = [
  { year: "2020", title: "The Spark", desc: "Founded with a mission to make India a global leader in deep-tech innovation — starting from a small lab with big dreams." },
  { year: "2021", title: "First Flight", desc: "Successfully deployed our first autonomous drone system for terrain mapping in India's northeastern corridors." },
  { year: "2022", title: "AI Breakthrough", desc: "Developed edge AI systems capable of real-time decision-making without cloud dependency — a game-changer for defense." },
  { year: "2023", title: "Scale & Impact", desc: "Expanded to 6 technology verticals, 50+ deployed systems, and partnerships across defense, environment, and infrastructure." },
  { year: "2024", title: "Global Ambitions", desc: "Engineering systems for international deployments while deepening India's self-reliance in critical technologies." },
];

/* ── Core Values ── */
const values = [
  { icon: Lightbulb, title: "Relentless Innovation", desc: "We don't follow trends — we engineer breakthroughs that define new categories." },
  { icon: Shield, title: "Integrity First", desc: "We operate with transparency, accountability, and unwavering ethical standards." },
  { icon: Users, title: "Collaborative Spirit", desc: "The best solutions emerge when brilliant minds work together across disciplines." },
  { icon: Zap, title: "Execution Excellence", desc: "Ideas are abundant — execution is rare. We ship working systems, not presentations." },
  { icon: Heart, title: "Purpose Over Profit", desc: "Every project must serve a meaningful mission — protecting lives, ecosystems, or sovereignty." },
  { icon: Globe, title: "Global Standards", desc: "India-born, world-class. We build to international benchmarks from day one." },
];

/* ── Philosophy Pillars ── */
const pillars = [
  { title: "Build, Don't Buy", desc: "We develop proprietary technology from scratch. Every algorithm, every circuit, every airframe is conceived, designed, and tested in-house." },
  { title: "Field-First Engineering", desc: "Our systems are designed for the real world — dust, heat, altitude, and hostile environments. Lab prototypes don't impress us. Field-proven systems do." },
  { title: "Vertical Integration", desc: "From chip-level hardware to cloud-level analytics, we own the entire stack. This gives us unmatched control, security, and performance." },
  { title: "India's Technology Sovereignty", desc: "We believe India must build its own critical technology infrastructure. We are committed to reducing dependency on foreign tech in defense and strategic sectors." },
];

/* ── Problems & Solutions ── */
const problemsList = [
  "India imports 60%+ of its defense and surveillance technology from foreign vendors.",
  "Critical infrastructure monitoring relies on manual, error-prone human systems.",
  "Environmental degradation accelerates without real-time, technology-driven intelligence.",
  "Autonomous systems remain inaccessible to most Indian industries due to cost and complexity.",
];

const solutionsList = [
  "Indigenous deep-tech IP that reduces foreign dependency in critical sectors.",
  "AI-powered autonomous monitoring systems that operate 24/7 without human intervention.",
  "Environmental intelligence platforms that turn satellite and drone data into actionable insights.",
  "Affordable, field-ready autonomous platforms designed for India's unique operating conditions.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        tag="About Us" 
        title="Who We Are" 
        description="From a vision of technological self-reliance to engineering systems that protect borders, ecosystems, and human lives — this is the story of AdiVeer Aviations." 
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
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <span className="text-xs font-heading font-bold text-primary">{t.year}</span>
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
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
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="p-10 bg-background rounded-2xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To be the world's most trusted deep-tech engineering company — building autonomous, intelligent, and resilient systems that solve civilization-scale challenges from India to the world.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.15 }} 
              className="p-10 bg-background rounded-2xl border border-border/60 shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To design, build, and deploy advanced aerospace, AI, robotics, and environmental technologies that make the world safer, smarter, and more sustainable — while building India's deep-tech IP ecosystem.</p>
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
                <p className="text-sm text-muted-foreground leading-relaxed md:text-base">{v.desc}</p>
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
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{p}</p>
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
    </>
  );
}
