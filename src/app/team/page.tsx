import PageHero from "@/components/common/PageHero";
import { TeamLeadership } from "@/components/sections/team/TeamLeadership";
import { TeamCulture } from "@/components/sections/team/TeamCulture";
import { TeamJoinCTA } from "@/components/sections/team/TeamJoinCTA";

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="Team Adiveer"
        title="The Visionaries & Engineers"
        description="A specialized unit of aerospace engineers, AI researchers, and mission-focused leaders building India's deep-tech IP from the ground up."
      />
      <TeamLeadership />
      <TeamCulture />
      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <TeamJoinCTA />
        </div>
      </section>
    </>
  );
}
