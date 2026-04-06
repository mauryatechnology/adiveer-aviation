"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { revenueStreamsArr } from "@/data/investors";

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function InvestorRevenue() {
  return (
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
              className="flex gap-6 p-6 md:p-8 bg-card rounded-2xl border border-border/60 hover:bg-muted/50 transition-colors border-l-4 border-l-primary"
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
  );
}
