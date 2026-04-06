import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Investor Relations",
  description: "Explore investment opportunities with AdiVeer Aviations. Access our executive summaries, market milestones, and strategic growth documentation.",
  path: "/investors",
});

export default function InvestorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
