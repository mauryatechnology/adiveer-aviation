"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  gradient?: boolean;
}

const titleWordVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, type: "spring", damping: 20, stiffness: 120 },
  }),
};

const SectionHeading = ({ tag, title, description, align = "center", gradient = false }: SectionHeadingProps) => {
  const words = title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {tag && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150 }}
          className="inline-block px-3 py-1 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full mb-4"
        >
          {tag}
        </motion.span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight ${gradient ? 'text-gradient' : 'text-foreground'}`}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            variants={titleWordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
