"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { marketOpportunity } from "@/data/investors";

export function InvestorMarket() {
  return (
    <section className="py-24 bg-card/50" id="market">
      <div className="container mx-auto px-6">
        <SectionHeading
          tag="The Opportunity"
          title="A Market at the Tipping Point"
          description="Massive tailwinds in India's drone and deep-tech ecosystem are creating unprecedented growth opportunities."
        />
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-border bg-background shadow-xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-primary/5 text-primary-foreground/0 border-b border-border">
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">Market Segment</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">2024 Value</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">2030 Projected</th>
                <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-primary">CAGR</th>
              </tr>
            </thead>
            <tbody>
              {marketOpportunity.map((m, idx) => (
                <tr key={idx} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-8 py-6 font-heading font-bold text-foreground text-sm">{m.segment}</td>
                  <td className="px-8 py-6 text-muted-foreground text-sm">{m.value2024}</td>
                  <td className="px-8 py-6 text-foreground font-black text-sm">{m.projected2030}</td>
                  <td className="px-8 py-6 text-emerald-500 font-black text-sm">{m.cagr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted-foreground mt-6 text-center italic">
          Source: MoCA Drone Policy, FICCI Drone Report, RedSeer, internal analysis.
        </p>
      </div>
    </section>
  );
}
