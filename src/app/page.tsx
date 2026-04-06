import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeGrowthState } from "@/components/sections/home/HomeGrowthState";
import { HomeVerticals } from "@/components/sections/home/HomeVerticals";
import { HomeOfferings } from "@/components/sections/home/HomeOfferings";
import { HomeStages } from "@/components/sections/home/HomeStages";
import { HomeWhyUs } from "@/components/sections/home/HomeWhyUs";
import { HomeFeaturedProject } from "@/components/sections/home/HomeFeaturedProject";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeGrowthState />
      <HomeVerticals />
      <HomeOfferings />
      <HomeStages />
      <HomeWhyUs />
      <HomeFeaturedProject />
      <HomeCTA />
    </div>
  );
}
