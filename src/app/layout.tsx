import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../index.css"; // Global styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AdiVeer Aviations | Engineering the Future",
    template: "%s | AdiVeer Aviations",
  },
  description: "AdiVeer Aviations engineers the technologies that shape tomorrow's world. From autonomous drones to AI-driven defense systems.",
  keywords: ["Aviation", "Drones", "AI", "Robotics", "Defense", "India", "Deep Tech"],
  authors: [{ name: "AdiVeer Aviations" }],
  creator: "AdiVeer Aviations",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`} suppressHydrationWarning>
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
