import { buildMetadata, BreadcrumbSchema, ArticleSchema } from "@/lib/seo";
import { projects } from "@/data/work";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const project = projects.find((p) => p.slug === slug || p.id === slug);
  
  if (!project) {
    return buildMetadata({
      title: "Project Not Found",
      description: "The requested case study could not be found.",
    });
  }

  return buildMetadata({
    title: project.name,
    description: project.desc,
    path: `/work/${resolvedParams.slug}`,
    customKeywords: [project.name, project.category, "Adiveer Projects", "Case Study"],
  });
}

export default async function WorkDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const project = projects.find((p) => p.slug === slug || p.id === slug);

  return (
    <>
      {project && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              BreadcrumbSchema([
                { name: "Home", item: "" },
                { name: "Work", item: "/work" },
                { name: project.name, item: `/work/${slug}` },
              ]),
              ArticleSchema({
                title: project.name,
                description: project.desc,
                url: `/work/${slug}`,
                datePublished: new Date().toISOString(), // Mocking date
              })
            ]),
          }}
        />
      )}
      {children}
    </>
  );
}
