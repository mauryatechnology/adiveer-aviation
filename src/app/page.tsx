import { HomeHero } from "@/components/sections/home/HomeHero";
import { HomeVerticals } from "@/components/sections/home/HomeVerticals";
import { HomeOfferings } from "@/components/sections/home/HomeOfferings";
import { HomeWhyUs } from "@/components/sections/home/HomeWhyUs";
import { HomeFeaturedProject } from "@/components/sections/home/HomeFeaturedProject";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomeVerticals />
      <HomeOfferings />
      <HomeWhyUs />
      <HomeFeaturedProject />
      <HomeCTA />
    </div>
  );
}
