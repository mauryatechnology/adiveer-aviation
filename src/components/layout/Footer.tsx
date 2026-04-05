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
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8"
        >
          {/* Brand & Address */}
          <motion.div custom={0} variants={footerFade} className="col-span-full lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src={logo} 
                alt={siteConfig.name} 
                width={40} 
                height={40} 
                className="h-10 w-10 rounded-md object-cover shadow-sm" 
              />
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                {siteConfig.name.split(' ')[0]}<span className="text-primary"> {siteConfig.name.split(' ')[1]}</span>
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                {siteConfig.description}
              </p>
              <div className="pt-2">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Headquarters</p>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  1, Adi Parisar, Bagsewaniya,<br />
                  Bhopal, Madhya Pradesh 462026, India
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm font-medium text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">50+</span>
                <span className="text-muted-foreground font-normal">Systems Deployed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">6</span>
                <span className="text-muted-foreground font-normal">Tech Verticals</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div custom={1} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              {siteConfig.mainNav.find(n => n.title === "About")?.items?.map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Team</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Careers</Link></li>
            </ul>
          </motion.div>

          {/* Verticals */}
          <motion.div custom={2} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Verticals</h4>
            <ul className="space-y-3">
              {siteConfig.mainNav.find(n => n.title === "Products & Services")?.items?.slice(0, 5).map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div custom={3} variants={footerFade} className="col-span-full md:col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Contact Us</Link></li>
              <li><Link href="/partnerships" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Partnerships</Link></li>
              {siteConfig.mainNav.find(n => n.title === "Insights")?.items?.slice(0, 2).map((item) => (
                <li key={item.title}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name} Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
