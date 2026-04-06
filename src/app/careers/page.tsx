import PageHero from "@/components/common/PageHero";
import { CareerRoleList } from "@/components/sections/careers/CareerRoleList";
import { CareerPerks } from "@/components/sections/careers/CareerPerks";

import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description: "Join AdiVeer Aviations. We are looking for passionate engineers, designers, and innovators to shape the future of aerospace and deep tech.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        tag="Careers"
        title="Build What Matters"
        description="Join a team of engineers, scientists, and operators solving civilization-scale problems with technology."
      />
      <CareerRoleList />
      <CareerPerks />
    </>
  );
}
