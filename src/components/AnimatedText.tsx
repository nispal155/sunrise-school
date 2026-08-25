"use client";

import { motion } from "motion/react";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
  delay?: number;
}

const defaultContainer = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: custom * 0.1 },
  }),
};

const defaultWord = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 },
  },
};

export default function AnimatedText({
  text,
  className = "",
  el: Wrapper = "p",
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <Wrapper className={className}>
      <motion.span
        variants={defaultContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={delay}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap">
            <motion.span
              variants={defaultWord}
              className="inline-block"
            >
              {word}
            </motion.span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
      <span className="sr-only">{text}</span>
    </Wrapper>
  );
}
