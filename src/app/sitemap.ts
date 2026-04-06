import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adiveeraviations.com";

  // Base routes
  const mainRoutes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/insights",
    "/investors",
    "/partnerships",
    "/products",
    "/team",
    "/technology",
    "/work",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // In a real database, you'd fetch slugs here.
  // For static SEO max level, we can map common paths.

  return [...mainRoutes];
}
