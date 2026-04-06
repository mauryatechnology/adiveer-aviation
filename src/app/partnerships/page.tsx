import PageHero from "@/components/common/PageHero";
import { PartnerIndustries } from "@/components/sections/partnerships/PartnerIndustries";
import { PartnerModels } from "@/components/sections/partnerships/PartnerModels";
import { PartnerGlobalBanner } from "@/components/sections/partnerships/PartnerGlobalBanner";

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
