"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import { TeamCarousel } from "@/components/common/TeamCarousel";
import { coreTeam } from "@/data/team";

export function TeamLeadership() {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 w-full overflow-hidden">
        <SectionHeading tag="Leadership" title="Core Visionary Unit" description="Driven by a singular mission to indigenize India's defense and aerospace technology." />
        <TeamCarousel members={coreTeam} />
      </div>
    </section>
  );
}
