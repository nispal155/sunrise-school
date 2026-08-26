"use client";

import ScrollReveal from "./ScrollReveal";
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
          <ScrollReveal delay={0}>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Why Choose Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Commitment to Excellence
            </h3>
          </ScrollReveal>
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
                className="bg-primary rounded-2xl p-8 shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <i className={`${feature.icon} text-3xl text-accent`}></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-white/80 leading-relaxed text-sm flex-grow">
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
