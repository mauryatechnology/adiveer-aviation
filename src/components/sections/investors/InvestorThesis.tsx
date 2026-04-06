"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { investmentThesis } from "@/data/investors";

export function InvestorThesis() {
  return (
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
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.detail}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
