import PageHero from "@/components/common/PageHero";
import { InsightReports } from "@/components/sections/insights/InsightReports";
import { InsightCaseStudies } from "@/components/sections/insights/InsightCaseStudies";
import { InsightBlog } from "@/components/sections/insights/InsightBlog";
import { InsightNewsletter } from "@/components/sections/insights/InsightNewsletter";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        tag="Insights"
        title="Research, Reports & Perspectives"
        description="Deep dives into the technologies, strategies, and ideas shaping aerospace, AI, and autonomous systems."
      />
      <InsightReports />
      <InsightCaseStudies />
      <InsightBlog />
      <InsightNewsletter />
    </>
  );
}
