export const baseKeywords = [
  // Primary Exact Match
  "Adiveer Aviation",
  "Adiveer Aviations",
  "Adiveer Aviation OPC",
  "Adiveer Aviation Private Limited",

  // Core Merged Variations
  "adiveeraviations", "adiveeraviation", "adiveer aviations",
  "adi veer aviation", "aadi veer aviation", "aadiveer aviation", "aadiveer aviations",

  // Misspellings of 'Adiveer'
  "adeveer aviation", "adiver aviation", "addiveer aviation", "adiveaer aviation", 
  "adaveer aviation", "adivyr aviation", "adivvir aviation", "adievre aviation", 
  "adavir aviation", "adveer aviation", "adiver aviations", "adbiveer aviation",
  "advier aviation", "adivaar aviation", "adviere aviation", "aadiver aviation",
  "addiver aviation", "adevier aviation", "adivier aviation", "adiiver aviation",
  "adeever aviation", "adiveera aviation", "ahdiveer aviation", "adibyr aviation",
  "advyr aviation", "adivier aviations", "adiveree aviation", "adviire aviation",

  // Typos & Keyboard slips for 'Aviation'
  "adiveer avation", "adiveer avations", "adiveer aviatoin", "adiveer aviaton", 
  "adiveer eviation", "adiveer aviatios", "adiveer abiation", "adiveer avaiation",
  "adiveer avitiation", "adiveer evaition", "adiveer aaviation", "adiveer qviation",
  "adiveer avuation", "adiveer aviatiom", "adiveer aviatiin", "adiveer aviaiton",
  "adiveer abaiation", "adiveer avaition", "adiveer viation", "adiveer sviation",
  "adiveer avition", "adiveer avaitions", "adiveer abiyation", "adiveer abhation",

  // Double Misspellings (Both Brand and Industry spelled wrong)
  "adiver avation", "adeveer eviation", "addiveer aviaton", "adaveer abiation",
  "adivyr viation", "aadiver avation", "adveer aviatoin", "adivier aviaiton",
  "adiveara aaviation", "adeever aviaition", "adiiver aviatiom", "adbiveer avaiation",
  
  // No-Space Typos
  "adiveeravation", "adiveraviation", "adeveeraviation", "addiveeraviation",
  "adiveereviation", "adivraviation", "advearaviation", "aadiveraviation",
  "adiveeraviatiom", "adiveeraviatoin", "adiveraviations", "adiveerabiation",

  // Phonetic & Hindi/Regional Sounding Spellings
  "aadivir aviation", "adiwira aviation", "adivir avieshan", "adivir avieshon",
  "adi veer avieshan", "adiveer udan", "adiveer drones", "adiveer aerospace",
  "aadi veer eaviation", "adi veer abieshan", "adeveer avyeshan"
];

export const generateKeywords = () => {
  const base = [
    "Adiveer", "Adi veer", "Aadi veer", "Aadiveer", "Adeveer", "Adevir", "Adiver", "Adivyr", "Adivir",
    "Addiveer", "Adivear", "Adiveere", "Adiveire", "Adiveer's", "Adivreer", "Adbiveer", "Aediveer"
  ];
  const aviation = [
    "Aviation", "Aviations", "Avation", "Avations", "Aviatoin", "Aviaton", "Aviatons", "Eviation",
    "Aiviation", "Abiation", "Avaiation", "Aviaiton", "Avitiation"
  ];

  const keywords = new Set<string>();

  // Cross product
  base.forEach(b => {
    aviation.forEach(a => {
      keywords.add(`${b} ${a}`);
      keywords.add(`${b}${a}`);
      keywords.add(`${b.toLowerCase()}${a.toLowerCase()}`);
      keywords.add(`${b.toLowerCase()} ${a.toLowerCase()}`);
    });
  });

  // Services
  const services = [
    "Drones", "UAV", "Autonomous Drones", "AI Drones", "Defense Technology", "Robotics",
    "Deep Tech", "DeepTech", "Aerospace Engineering", "Drone Swarms", "Drone Mapping",
    "Surveillance Drones", "Military Drones", "Space Tech", "Artificial Intelligence",
    "Computer Vision", "Flight Simulation"
  ];

  services.forEach(s => {
    keywords.add(`Adiveer Aviation ${s}`);
    keywords.add(`${s} by Adiveer`);
    keywords.add(`Adiveer ${s}`);
    keywords.add(`India ${s} Adiveer`);
  });

  // Team
  const team = [
    "Ayushmaan Singh", "Ayushmaan Adiveer", "Founder of Adiveer", "Adiveer CEO",
    "Adiveer Aviation Team", "Adiveer Core Team", "Adiveer Leadership"
  ];

  team.forEach(t => {
    keywords.add(t);
    keywords.add(`${t} Adiveer Aviation`);
  });

  const exacts = [
    "adiveeraviations", "adiveeraviation", "adiveer aviations",
    "AdiVeer Aviations", "AdiVeer Aviation",
    "best drone startup india", "defense tech startup india",
    "adiveer aviation opc private limited",
    "advanced robotics adiveer", "adiveer aviation careers",
    "adiveer aviation investors", "adiveer aviation funding"
  ];
  exacts.forEach(e => keywords.add(e));

  // Add another 500 combinations programmatically
  const randomSuffixes = ["India", "Delhi", "Startups", "Tech", "Innovations", "OPC", "Pvt Ltd", "Company", "Services", "Products"];
  let count = 0;
  base.forEach(b => {
    if (count > 500) return;
    randomSuffixes.forEach(s => {
      keywords.add(`${b} Aviation ${s}`);
      keywords.add(`${b.toLowerCase()}aviation${s.toLowerCase()}`);
      count++;
    });
  });

  return Array.from(keywords);
};

export const globalKeywords = generateKeywords();

export const buildMetadata = ({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  customKeywords = []
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  customKeywords?: string[];
}) => {
  const url = `https://adiveeraviations.com${path}`;

  return {
    title,
    description,
    keywords: [...customKeywords, title, ...globalKeywords.slice(0, 500)], // Google limits but we'll include a bunch. 
    // Usually meta keywords is ignored by Google but can be relevant for some other engines. We inject up to 500 of the 1000+ we generated.
    authors: [{ name: "AdiVeer Aviations" }],
    creator: "AdiVeer Aviations",
    publisher: "AdiVeer Aviations OPC",
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title,
      description,
      siteName: "AdiVeer Aviations",
      images: [
        {
          url: image, // You should replace /og-image.jpg with your actual OG image url
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@adiveeraviation",
    },
  };
};

export function OrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdiVeer Aviations",
    alternateName: ["Adiveer Aviation", "Adiveer", "Adiveeraviations", "Aadiveer Aviation"],
    url: "https://adiveeraviations.com",
    logo: "https://adiveeraviations.com/logo.jpeg",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Ayushmaan Singh"
    },
    description: "AdiVeer Aviations engineers technologies that shape tomorrow's world. From autonomous drones to AI-driven defense systems.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@adiveeraviations.com",
      areaServed: "IN",
      availableLanguage: "en" // We can build a robust list
    },
    sameAs: [
      "https://www.linkedin.com/company/adiveer-aviations",
      "https://twitter.com/adiveeraviation"
    ]
  };
}

export function BreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://adiveeraviations.com${item.item}`,
    })),
  };
}

export function ProductSchema({ name, description, image, url }: { name: string; description: string; image?: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image ? `https://adiveeraviations.com${image}` : "https://adiveeraviations.com/og-image.jpg",
    brand: {
      "@type": "Brand",
      name: "AdiVeer Aviations"
    },
    offers: {
      "@type": "Offer",
      url: `https://adiveeraviations.com${url}`,
      availability: "https://schema.org/InStock"
    }
  };
}

export function PersonSchema({ name, jobTitle, url }: { name: string; jobTitle: string; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "AdiVeer Aviations"
    },
    ...(url ? { sameAs: [url] } : {})
  };
}

export function ArticleSchema({ title, description, url, datePublished }: { title: string; description: string; url: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image: "https://adiveeraviations.com/og-image.jpg",
    datePublished,
    author: [{
      "@type": "Organization",
      name: "AdiVeer Aviations",
      url: "https://adiveeraviations.com"
    }],
    publisher: {
      "@type": "Organization",
      name: "AdiVeer Aviations",
      logo: {
        "@type": "ImageObject",
        url: "https://adiveeraviations.com/logo.jpeg"
      }
    }
  };
}
