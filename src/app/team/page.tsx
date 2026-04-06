import PageHero from "@/components/common/PageHero";
import { TeamLeadership } from "@/components/sections/team/TeamLeadership";
import { TeamCulture } from "@/components/sections/team/TeamCulture";
import { TeamJoinCTA } from "@/components/sections/team/TeamJoinCTA";

import { buildMetadata, PersonSchema, BreadcrumbSchema } from "@/lib/seo";
import { coreTeam } from "@/data/team";

export const metadata = buildMetadata({
  title: "Leadership & Team",
  description: "Meet the visionary leaders and brilliant engineers driving AdiVeer Aviations forward in the deep tech and aerospace industries.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              BreadcrumbSchema([
                { name: "Home", item: "" },
                { name: "Team", item: "/team" },
              ]),
              ...coreTeam.map((member) =>
                PersonSchema({
                  name: member.name,
                  jobTitle: member.role,
                  url: member.links?.linkedin,
                })
              ),
            ]),
          }}
        />
      </head>
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
