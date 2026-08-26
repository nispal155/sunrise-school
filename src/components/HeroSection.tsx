"use client";

import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing.jpeg"
          alt="Sunrise English Boarding School Campus"
          fill
          className="object-cover"
          priority
        />
        {/* Premium gradient overlay for depth */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-10">


        {/* Massive Bold Motto */}
        <div className="max-w-4xl mx-auto mb-6">
          <AnimatedText
            text="Our endeavor is to serve a quality education."
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg"
          />
        </div>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium"
        >
          Empowering students with knowledge, character, and vision for a brighter tomorrow in a nurturing environment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#admissions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-white rounded-full shadow-xl hover:bg-bg-alt transition-colors duration-300"
            >
              <i className="fi fi-rr-document-signed text-lg leading-none"></i>
              Admissions Open
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-accent rounded-full shadow-lg hover:bg-accent-light border border-transparent transition-colors duration-300"
            >
              <i className="fi fi-rr-headset text-lg leading-none"></i>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Glassmorphic Stats/Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="hidden md:flex flex-row items-center justify-center gap-10 px-10 py-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <i className="fi fi-rr-graduation-cap text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="text-white font-bold leading-tight text-lg">Quality</p>
              <p className="text-white/70 text-sm">Education</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <i className="fi fi-rr-users text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="text-white font-bold leading-tight text-lg">Holistic</p>
              <p className="text-white/70 text-sm">Growth</p>
            </div>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <i className="fi fi-rr-building text-2xl"></i>
            </div>
            <div className="text-left">
              <p className="text-white font-bold leading-tight text-lg">Modern</p>
              <p className="text-white/70 text-sm">Facilities</p>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
