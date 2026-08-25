"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    id: 1,
    name: "Srijal Gharti",
    role: "Current Student (Class 10)",
    text: "The teachers here are incredibly supportive. I've not only improved my grades but also built the confidence to participate in extracurricular activities. This school truly feels like a second home.",
    image: "/srijal.png",
  },
  {
    id: 2,
    name: "Jatin Ghale",
    role: "Parent",
    text: "As a parent, seeing my child grow academically and morally gives me immense peace of mind. Sunrise English Boarding School provides a perfectly balanced environment for holistic development.",
    image: "/jatin.png",
  },
  {
    id: 3,
    name: "Niyog Khadka",
    role: "Alumni (Batch 2080)",
    text: "The foundation I received at Sunrise was instrumental in my success in higher education. The discipline, values, and quality education equipped me for all the challenges ahead.",
    image: "/niyog.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What People Say</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-text-muted text-lg">
              Hear from our students, parents, and alumni about their experiences
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col"
              >
                <div className="mb-6 text-accent">
                  <i className="fi fi-rr-quote-right text-4xl opacity-50"></i>
                </div>
                
                <p className="text-text-muted italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary relative overflow-hidden">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={`${testimonial.name} Avatar`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <i className="fi fi-rr-user text-xl"></i>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
