export const companyInfo = {
  name: "AdiVeer Aviations",
  tagline: "Engineering the future of aerospace, AI, and autonomous systems.",
  contactEmail: "info@adiveer-aviations.com",
};

export const fetchSiteConfig = async () => {
  // Simulate an API call with proper Next.js data fetching caching behavior
  return companyInfo;
};
