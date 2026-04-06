"use client";

import { InvestorHero } from "@/components/sections/investors/InvestorHero";
import { InvestorThesis } from "@/components/sections/investors/InvestorThesis";
import { InvestorMarket } from "@/components/sections/investors/InvestorMarket";
import { InvestorRevenue } from "@/components/sections/investors/InvestorRevenue";
import { InvestorRoadmap } from "@/components/sections/investors/InvestorRoadmap";
import { InvestorRegulatory } from "@/components/sections/investors/InvestorRegulatory";
import { InvestorContact } from "@/components/sections/investors/InvestorContact";
import { InvestorTrustMetrics } from "@/components/sections/investors/InvestorTrustMetrics";

export default function InvestorRelationsPage() {
  return (
    <main className="pt-20">
      <InvestorHero />
      <InvestorThesis />
      <InvestorMarket />
      <InvestorRevenue />
      <InvestorRoadmap />
      <InvestorRegulatory />
      <InvestorContact />
      <InvestorTrustMetrics />
    </main>
  );
}
