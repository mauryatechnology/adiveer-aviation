"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  highlight?: string;
  highlightClass?: string;
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
  highlight,
  highlightClass = "text-primary",
}: AnimatedTextProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, i) => {
        const isHighlight = highlight && text.indexOf(highlight) !== -1 &&
          text.split(" ").indexOf(word) >= text.substring(0, text.indexOf(highlight)).split(" ").length - 1 &&
          text.split(" ").indexOf(word) < text.substring(0, text.indexOf(highlight)).split(" ").length - 1 + highlight.split(" ").length;
        
        return (
          <motion.span
            key={`${word}-${i}`}
            variants={child}
            className={`inline-block mr-[0.3em] ${isHighlight ? highlightClass : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
