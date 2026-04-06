import PageHero from "@/components/common/PageHero";
import { CareerRoleList } from "@/components/sections/careers/CareerRoleList";
import { CareerPerks } from "@/components/sections/careers/CareerPerks";

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
