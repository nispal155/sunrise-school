"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";
import { BookOpen, Users, Sprout } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Rigorous academic programs designed to nurture critical thinking and lifelong learning in a supportive environment.",
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description:
      "Experienced and qualified teachers committed to mentoring and guiding every student toward their highest potential.",
  },
  {
    icon: Sprout,
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
    <section className="py-24 md:py-32 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-bg-alt rounded-2xl p-10 border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-text mb-3">{feature.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm">
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
