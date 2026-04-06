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
              <span className="font-heading font-bold text-lg tracking-tight text-foreground leading-tight">
                {siteConfig.name}
              </span>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-medium italic">
                Engineering the future of aerospace, AI, and autonomous systems. India-born. Globally deployable.
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

          {/* Company Column */}
          <motion.div custom={1} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about#story" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Our Story</Link></li>
              <li><Link href="/about#vision" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Vision & Mission</Link></li>
              <li><Link href="/about#values" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Core Values</Link></li>
              <li><Link href="/about#philosophy" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Our Philosophy</Link></li>
              <li><Link href="/about#problem" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Problem We Solve</Link></li>
              <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Founder</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Careers</Link></li>
              <li><Link href="/investors" className="text-sm font-semibold text-foreground hover:text-primary transition-colors inline-block text-nowrap">Investor Relations [NEW]</Link></li>
            </ul>
          </motion.div>

          {/* Verticals Column */}
          <motion.div custom={2} variants={footerFade} className="col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Verticals</h4>
            <ul className="space-y-3">
              <li><Link href="/products#drone-systems" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Drone Systems</Link></li>
              <li><Link href="/products#ai" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">AI & Computer Vision</Link></li>
              <li><Link href="/products#robotics" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Robotics Platforms</Link></li>
              <li><Link href="/products#defense" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap">Defense Technology</Link></li>
              <li><Link href="/products#embedded" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap font-medium">Embedded Systems [NEW]</Link></li>
              <li><Link href="/products#saas" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block text-nowrap font-medium">SaaS & Data [NEW]</Link></li>
            </ul>
          </motion.div>

          {/* Connect Column */}
          <motion.div custom={3} variants={footerFade} className="col-span-full md:col-span-1">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-primary mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Contact Us</Link></li>
              <li><Link href="/investors#enquiry" className="text-sm font-semibold text-foreground hover:text-primary transition-colors inline-block">Investor Enquiry [NEW]</Link></li>
              <li><Link href="/partnerships" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Partnerships</Link></li>
              <li><Link href="/insights#reports" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Research Reports</Link></li>
              <li><Link href="/insights#whitepapers" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block">Whitepapers</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-muted-foreground/60">
              CIN: [To be updated] | Registered in Madhya Pradesh, India.
            </p>
          </div>
          <div className="flex items-center gap-8 text-xs font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
