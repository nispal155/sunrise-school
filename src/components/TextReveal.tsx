"use client";
import { motion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: delay },
  }),
};

const charVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, damping: 12, stiffness: 100 },
  },
};

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const characters = text.split("");

  return (
    <p className={className} aria-label={text}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
        aria-hidden
      >
        {characters.map((char, i) => (
          <motion.span key={i} variants={charVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </p>
  );
}
