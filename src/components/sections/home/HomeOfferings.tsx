"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import ParallaxSection from "@/components/animations/ParallaxSection";

const offerings = [
  { num: "01", title: "R&D & Prototyping", desc: "Rapid ideation and engineering cycles turning concepts into working prototypes in weeks." },
  { num: "02", title: "Systems Integration", desc: "Combining hardware, AI, sensors, and communication systems into unified solutions." },
  { num: "03", title: "Field Deployment", desc: "Real-world deployment in extreme environments (borders, coastal zones, etc.)." },
  { num: "04", title: "Training & Consulting", desc: "Upskilling teams in drones, AI, and autonomous systems." },
];

export function HomeOfferings() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading tag="Key Offerings" title="From Concept to Deployment" />
        <ParallaxSection speed={0.15}>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.15}>
            {offerings.map((o) => (
              <motion.div
                key={o.num}
                variants={staggerItem}
                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                className="p-8 bg-card rounded-2xl border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-400 group"
              >
                <div className="flex flex-col gap-4">
                  <motion.span
                    className="text-5xl font-heading font-black text-primary/10 transition-colors group-hover:text-primary/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    {o.num}
                  </motion.span>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary active:text-primary transition-colors">{o.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{o.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </ParallaxSection>
      </div>
    </section>
  );
}
