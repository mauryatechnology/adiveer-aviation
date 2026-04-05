export const siteConfig = {
  name: "AdiVeer Aviations",
  description: "Engineering the future of aerospace, AI, and autonomous systems. India-born. Globally deployed.",
  url: "https://adiveer-aviations.com",
  ogImage: "https://adiveer-aviations.com/og.jpg",
  links: {
    twitter: "https://twitter.com/adiveer",
    github: "https://github.com/adiveer",
  },
  mainNav: [
    { title: "Home", href: "/" },
    {
      title: "About",
      href: "/about",
      items: [
        { title: "Our Story", href: "/about#story" },
        { title: "Vision & Mission", href: "/about#vision" },
        { title: "Core Values", href: "/about#values" },
        { title: "Our Philosophy", href: "/about#philosophy" },
        { title: "Problem We Solve", href: "/about#problem" },
      ],
    },
    {
      title: "Our Work",
      href: "/work",
    },
    {
      title: "Products & Services",
      href: "/products",
      items: [
        { title: "Drone Systems", href: "/products#drones" },
        { title: "AI Solutions", href: "/products#ai" },
        { title: "Robotics Platforms", href: "/products#robotics" },
        { title: "Defense Technology", href: "/products#defense" },
        { title: "Environmental Tech", href: "/products#environmental" },
        { title: "Custom Solutions", href: "/products#custom" },
        { title: "Consulting", href: "/products#consulting" },
        { title: "Training Programs", href: "/products#training" },
      ],
    },
    {
      title: "Technology",
      href: "/technology",
      items: [
        { title: "AI/ML Stack", href: "/technology#ai-ml" },
        { title: "Robotics Platform", href: "/technology#robotics" },
        { title: "Manufacturing Tech", href: "/technology#manufacturing" },
        { title: "Hardware Integration", href: "/technology#hardware" },
      ],
    },
    {
      title: "Team",
      href: "/team",
      items: [
        { title: "Leadership", href: "/team#leadership" },
        { title: "Core Team", href: "/team#core" },
        { title: "Culture", href: "/team#culture" },
      ],
    },
    {
      title: "Insights",
      href: "/insights",
      items: [
        { title: "Research Reports", href: "/insights#reports" },
        { title: "Whitepapers", href: "/insights#whitepapers" },
        { title: "Blog / Articles", href: "/insights#blog" },
        { title: "Case Studies", href: "/insights#case-studies" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
