"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

const CountUp = ({ value, className = "", duration = 2 }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part
    const match = value.match(/^([#]?)([0-9,]+)(\+?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, plus, suffix] = match;
    const target = parseInt(numStr.replace(/,/g, ""), 10);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      const formatted = current.toLocaleString();
      setDisplay(`${prefix}${formatted}${plus}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: "spring", damping: 15, stiffness: 100 }}
      className={className}
    >
      {display}
    </motion.span>
  );
};

export default CountUp;
