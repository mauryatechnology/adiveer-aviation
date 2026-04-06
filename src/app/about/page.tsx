import PageHero from "@/components/common/PageHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutVisionMission } from "@/components/sections/about/AboutVisionMission";
import { AboutCoreValues } from "@/components/sections/about/AboutCoreValues";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutProblemSolution } from "@/components/sections/about/AboutProblemSolution";
import { AboutLegalIdentity } from "@/components/sections/about/AboutLegalIdentity";

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Adiveer Aviation"
        title="Who We Are"
        description="From a vision of technological self-reliance to engineering systems that protect borders, feed communities, and connect India — this is the story of Adiveer Aviation."
      />
      <AboutStory />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutPhilosophy />
      <AboutProblemSolution />
      <AboutLegalIdentity />
    </>
  );
}
