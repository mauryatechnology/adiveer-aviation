import PageHero from "@/components/common/PageHero";
import { PartnerIndustries } from "@/components/sections/partnerships/PartnerIndustries";
import { PartnerModels } from "@/components/sections/partnerships/PartnerModels";
import { PartnerGlobalBanner } from "@/components/sections/partnerships/PartnerGlobalBanner";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partnerships",
  description: "Collaborate with AdiVeer Aviations. Discover our strategic alliances and partnership programs for advancing defense and space technologies.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        tag="Partnerships"
        title="Collaborate With Us"
        description="We partner with governments, enterprises, and research institutions to deploy deep-tech solutions at scale."
      />
      <PartnerIndustries />
      <PartnerModels />
      <PartnerGlobalBanner />
    </>
  );
}
