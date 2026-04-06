"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.jpeg";
import { siteConfig } from "@/config/site";

const footerFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-4 md:py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12"
        >
          {/* Brand & Address */}
          <motion.div custom={0} variants={footerFade} className="col-span-full lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-cover grayscale brightness-110"
              />
              <span className="font-heading font-bold text-lg tracking-tight text-foreground leading-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm italic">
              &quot;Engineering the future of aerospace, AI, and autonomous systems. India-born with a global IP moat.&quot;
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                <address className="text-xs text-foreground/70 not-italic leading-relaxed font-medium">
                  1, Adi Parisar, Bagsewaniya, Bhopal,<br />
                  Madhya Pradesh 462026, India.
                </address>
              </div>
              <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-primary">
                <div className="flex items-center gap-1.5"><span className="opacity-40">●</span> 50+ Deployed</div>
                <div className="flex items-center gap-1.5"><span className="opacity-40">●</span> 12+ Patents Pending</div>
              </div>
            </div>
          </motion.div>

          {/* Platform Column */}
          <motion.div custom={1} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-black text-[10px] uppercase tracking-[0.25em] text-primary mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Our Story</Link></li>
              <li><Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</Link></li>
              <li><Link href="/technology" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Technology</Link></li>
              <li><Link href="/work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Our Work</Link></li>
              <li><Link href="/insights" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Insights</Link></li>
            </ul>
          </motion.div>

          {/* Corporate Column */}
          <motion.div custom={2} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-black text-[10px] uppercase tracking-[0.25em] text-primary mb-6">Corporate</h4>
            <ul className="space-y-4">
              <li><Link href="/investors" className="text-sm font-bold text-foreground hover:text-primary transition-colors">IR Home</Link></li>
              <li><Link href="/team" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Leadership</Link></li>
              <li><Link href="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Legal & Social Column */}
          <motion.div custom={3} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-black text-[10px] uppercase tracking-[0.25em] text-primary mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/partnerships" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Partnerships</Link></li>
            </ul>

            <div className="mt-8 flex gap-4">
              <Link href={siteConfig.links.twitter} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>
              </Link>
              <Link href={siteConfig.links.github} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 text-center md:text-left">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
              © {currentYear} {siteConfig.name}
            </p>
            <p className="text-[9px] text-muted-foreground/40 font-medium tracking-tight uppercase leading-none">
              CIN: [To be updated] | Registered in Madhya Pradesh, India.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">Terms</Link>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}
