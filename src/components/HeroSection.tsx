"use client";

import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing.jpeg"
          alt="Sunrise English Boarding School Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-primary/80 md:bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated Main Title */}
        <div className="mb-2">
          <AnimatedText
            text="Sunrise English"
            el="h1"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2"
            delay={0}
          />
          <AnimatedText
            text="Boarding School"
            el="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 mt-2"
            delay={0.5}
          />
        </div>

        {/* Gold Divider Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="h-1 bg-accent rounded-full mb-8"
        />

        {/* Animated Motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-10 italic"
        >
          &quot;Our endeavor is to serve a quality education.&quot;
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 md:py-4 md:px-10 text-base md:text-lg font-medium text-primary bg-white rounded-full shadow-lg hover:bg-accent-light hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
