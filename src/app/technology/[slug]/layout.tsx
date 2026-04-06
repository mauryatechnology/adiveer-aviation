import { buildMetadata, BreadcrumbSchema, ArticleSchema } from "@/lib/seo";
import { techStacks, rdLabsFull } from "@/data/technology";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const tech = techStacks.find((t) => t.id === slug) || rdLabsFull.find((r) => (r as any).id === slug || r.title.toLowerCase().replace(/\s+/g,"-") === slug);
  
  if (!tech) {
    return buildMetadata({
      title: "Technology Not Found",
      description: "The requested technology details could not be found.",
    });
  }

  return buildMetadata({
    title: tech.title,
    description: tech.desc,
    path: `/technology/${resolvedParams.slug}`,
    customKeywords: [tech.title, "Adiveer Technology", "Aerospace Innovation"],
  });
}

export default async function TechnologyDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const tech = techStacks.find((t) => t.id === slug) || rdLabsFull.find((r) => (r as any).id === slug || r.title.toLowerCase().replace(/\s+/g,"-") === slug);

  return (
    <>
      {tech && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              BreadcrumbSchema([
                { name: "Home", item: "" },
                { name: "Technology", item: "/technology" },
                { name: tech.title, item: `/technology/${slug}` },
              ]),
              ArticleSchema({
                title: tech.title,
                description: tech.desc,
                url: `/technology/${slug}`,
                datePublished: new Date().toISOString(),
              })
            ]),
          }}
        />
      )}
      {children}
    </>
  );
}
