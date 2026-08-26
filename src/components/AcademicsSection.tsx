"use client";

import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
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
    <section id="academics" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal delay={0}>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Academics
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TextReveal 
              text="Academic Programs" 
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            />
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
                className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(30,58,95,0.08)] group relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                
                <div className="relative z-10 mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-accent transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <i className={`${program.icon} text-3xl transition-transform duration-500 group-hover:scale-110`}></i>
                </div>
                
                <h4 className="relative z-10 text-2xl font-bold text-primary mb-3 transition-colors duration-300">{program.title}</h4>
                <div className="relative z-10 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-accent/20 px-3 py-1.5 rounded-full border border-accent/30">{program.grades}</span>
                </div>
                
                <ul className="relative z-10 space-y-3 flex-grow">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
