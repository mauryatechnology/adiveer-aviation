"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroDrone from "@/assets/hero-drone.jpg";
import MagneticButton from "@/components/animations/MagneticButton";
import CountUp from "@/components/animations/CountUp";

const heroWordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.4 + i * 0.1, type: "spring", damping: 20, stiffness: 100 },
  }),
};

const stats = [
  { value: "50+", label: "Deployed Systems" },
  { value: "6", label: "Tech Verticals" },
  { value: "200,000+", label: "Hours of Engineering" },
  { value: "#1", label: "India's Deep Tech Vanguard" },
];

export function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const headlineWords = ["We", "Build", "What", "Others"];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: heroImgY, scale: heroImgScale }}>
        <Image
          src={heroDrone}
          alt="UAV drone in flight over mountains"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      {/* Grid Overlay */}
      <motion.div
        className="absolute inset-0 grid-overlay z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      {/* Hero Content */}
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="inline-block px-4 py-1.5 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full mb-8 bg-primary/5 backdrop-blur-sm"
          >
            India's Deep Tech Vanguard
          </motion.span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-foreground mb-6">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                custom={i}
                variants={heroWordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.9, type: "spring", damping: 15 }}
              className="inline-block text-primary"
            >
              Only Imagine.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
          >
            From autonomous drones to AI-driven defense systems, Adiveer Aviations engineers the technologies that shape tomorrow's world. India-born. Globally deployed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Link href="/technology" className="px-7 py-3.5 bg-primary text-primary-foreground font-heading font-semibold uppercase tracking-wider rounded-lg hover:bg-primary/85 transition-all inline-flex items-center gap-2 group shadow-lg shadow-primary/20">
                Explore Our Technologies
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/about" className="px-7 py-3.5 border border-primary/30 text-primary font-heading font-semibold rounded-lg hover:bg-primary/5 transition-all backdrop-blur-sm">
                Our Story ▶
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.15 }}
              className="text-center md:text-left"
            >
              <CountUp value={stat.value} className="text-3xl font-heading font-bold text-primary" />
              <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
