"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import { motion } from "motion/react";
import Link from "next/link";

const features = [
  {
    icon: "fi fi-rr-book-open-reader",
    title: "Quality Education",
    description:
      "Rigorous academic programs designed to nurture critical thinking and lifelong learning in a supportive environment.",
  },
  {
    icon: "fi fi-rr-users",
    title: "Dedicated Faculty",
    description:
      "Experienced and qualified teachers committed to mentoring and guiding every student toward their highest potential.",
  },
  {
    icon: "fi fi-rr-leaf",
    title: "Holistic Growth",
    description:
      "Beyond academics — we focus on arts, sports, and character-building to ensure well-rounded student development.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent"></div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">
                Why Choose Us
              </h2>
              <div className="w-12 h-px bg-accent"></div>
            </div>
          </ScrollReveal>
          <TextReveal 
            text="Commitment to Excellence" 
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          />
          <ScrollReveal delay={2}>
            <p className="text-text-muted text-lg leading-relaxed">
              At Sunrise English Boarding School, we believe in authentic learning.
              Our mission is to provide an educational foundation that empowers students
              to thrive academically, socially, and emotionally.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(30,58,95,0.08)] group relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                
                <div className="relative z-10 mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <i className={`${feature.icon} text-3xl transition-transform duration-500 group-hover:scale-110`}></i>
                </div>
                
                <h4 className="relative z-10 text-xl md:text-2xl font-bold text-primary mb-4 transition-colors duration-300">{feature.title}</h4>
                
                <p className="relative z-10 text-text-muted leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
