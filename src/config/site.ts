export const siteConfig = {
  name: "Adiveer Aviation (OPC) Private Limited",
  description: "Engineering the future of aerospace, AI, and autonomous systems. India-born. Globally deployable.",
  url: "https://adiveeraviations.com",
  ogImage: "https://adiveeraviations.com/og.jpg",
  links: {
    twitter: "https://twitter.com/adiveer",
    github: "https://github.com/adiveer",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
      items: [
        { title: "Company Story", href: "/about#story" },
        { title: "Vision & Mission", href: "/about#vision" },
        { title: "Our Philosophy", href: "/about#philosophy" },
        { title: "Leadership & Team", href: "/team" },
        { title: "Legal Identity", href: "/about#legal-identity" },
      ],
    },
    {
      title: "Solutions",
      href: "/products",
      items: [
        { title: "Drone Systems", href: "/products#drones" },
        { title: "AI & Computer Vision", href: "/products#ai" },
        { title: "Robotics Platforms", href: "/products#robotics" },
        { title: "Defense Technology", href: "/products#defense" },
        { title: "Embedded & Electronics", href: "/products#embedded" },
        { title: "SaaS & Intelligence", href: "/products#saas" },
      ],
    },
    {
      title: "Technology",
      href: "/technology",
      items: [
        { title: "Core Technology Stacks", href: "/technology#stacks" },
        { title: "R&D Lab Facilities", href: "/technology#labs" },
        { title: "IP Strategy & Moat", href: "/technology#ip-strategy" },
      ],
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Insights",
      href: "/insights",
      items: [
        { title: "Research & Reports", href: "/insights#reports" },
        { title: "Whitepapers", href: "/insights#whitepapers" },
        { title: "Case Studies", href: "/work" },
        { title: "News & Media", href: "/insights#news" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
