import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work & Case Studies",
  description: "Review our portfolio of deployed defense and civilian solutions. Dive deep into real-world case studies showcasing our technology in action.",
  path: "/work",
});

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
