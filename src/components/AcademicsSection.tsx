"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

const ACADEMIC_PROGRAMS = [
  {
    icon: "fi fi-rr-pencil",
    title: "Primary School",
    grades: "Grades 1-5",
    features: [
      "Foundation in Core Subjects",
      "Interactive Learning",
      "Character Development"
    ]
  },
  {
    icon: "fi fi-rr-microscope",
    title: "Middle School",
    grades: "Grades 6-8",
    features: [
      "Advanced Core Subjects",
      "STEAM Programs",
      "Leadership Development"
    ]
  },
  {
    icon: "fi fi-rr-award",
    title: "Secondary School",
    grades: "Grades 8-10",
    features: [
      "College Preparation",
      "Advanced Examination Preparation",
      "Career Guidance"
    ]
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

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal delay={0}>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Academics
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Academic Programs
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-text-muted text-lg leading-relaxed">
              Discover our comprehensive educational programs designed to nurture young minds and foster academic excellence.
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
          {ACADEMIC_PROGRAMS.map((program, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-primary rounded-2xl p-8 shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <i className={`${program.icon} text-3xl text-accent`}></i>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{program.title}</h4>
                <div className="mb-6">
                  <span className="text-sm font-semibold text-primary bg-accent px-3 py-1 rounded">{program.grades}</span>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
