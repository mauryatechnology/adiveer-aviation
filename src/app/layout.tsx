import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../index.css"; // Global styles

const inter = Inter({ subsets: ["latin"] });

import { buildMetadata, OrganizationSchema } from "@/lib/seo";

const baseMetadata = buildMetadata({
  title: "AdiVeer Aviations | Engineering the Future",
  description: "AdiVeer Aviations engineers the technologies that shape tomorrow's world. From autonomous drones to AI-driven defense systems.",
  path: "/",
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL("https://adiveeraviations.com"),
  title: {
    default: "AdiVeer Aviations | Engineering the Future",
    template: "%s | AdiVeer Aviations",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema()) }}
        />
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
