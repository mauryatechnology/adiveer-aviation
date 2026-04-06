import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeGrowthState } from "@/components/sections/home/HomeGrowthState";
import { HomeVerticals } from "@/components/sections/home/HomeVerticals";
import { HomeOfferings } from "@/components/sections/home/HomeOfferings";
import { HomeStages } from "@/components/sections/home/HomeStages";
import { HomeWhyUs } from "@/components/sections/home/HomeWhyUs";
import { HomeFeaturedProject } from "@/components/sections/home/HomeFeaturedProject";
import { HomeLeadership } from "@/components/sections/home/HomeLeadership";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Home", // the template "%s | AdiVeer Aviations" handles the suffix
  description: "AdiVeer Aviations leads the deep tech revolution in India. Explore our AI-driven defense systems, aerospace engineering, and autonomous drone technology.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      {/* <HomeGrowthState /> */}
      <HomeVerticals />
      <HomeOfferings />
      <HomeStages />
      <HomeWhyUs />
      <HomeFeaturedProject />
      <HomeLeadership />
      <HomeCTA />
    </div>
  );
}
