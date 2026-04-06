import { buildMetadata, ProductSchema, BreadcrumbSchema } from "@/lib/seo";
import { services } from "@/data/services";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const product = services.find((s) => s.id === slug || s.slug === slug);
  
  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product or solution could not be found.",
    });
  }

  return buildMetadata({
    title: product.title,
    description: product.desc,
    path: `/products/${resolvedParams.slug}`,
    // add dynamic keywords if possible or use default
    customKeywords: [product.title, "Adiveer Autonomous"],
  });
}

export default async function ProductDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.slug);
  const product = services.find((s) => s.id === slug || s.slug === slug);

  return (
    <>
      <head>
        {product && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                BreadcrumbSchema([
                  { name: "Home", item: "" },
                  { name: "Products", item: "/products" },
                  { name: product.title, item: `/products/${slug}` },
                ]),
                ProductSchema({
                  name: product.title,
                  description: product.desc,
                  url: `/products/${slug}`,
                }),
              ]),
            }}
          />
        )}
      </head>
      {children}
    </>
  );
}
