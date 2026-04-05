"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  tag?: string;
  title: string;
  description: string;
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.2 + i * 0.07, type: "spring", damping: 20, stiffness: 100 },
  }),
};

const PageHero = ({ tag, title, description }: PageHeroProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const words = title.split(" ");

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden grid-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          {tag && (
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-block px-3 py-1 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full mb-6"
            >
              {tag}
            </motion.span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground mb-6">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default PageHero;
