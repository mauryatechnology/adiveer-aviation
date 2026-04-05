"use client";

import { motion } from "framer-motion";
import { Plane, Brain, Bot, Shield, Leaf, Cog } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";

import { services } from "@/data/services";

const verticals = services.slice(0, 6);

export function HomeVerticals() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          tag="What We Do" 
          title="Six Technology Verticals" 
          description="Integrated capabilities across aerospace, AI, robotics, defense, environment, and manufacturing." 
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.12}>
          {verticals.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              className="p-8 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <v.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
