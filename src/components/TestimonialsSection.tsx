"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

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
  {
    id: 4,
    name: "Sita Sharma",
    role: "Parent",
    text: "The dedication of the staff and the focus on individual student growth is what makes Sunrise English stand out. We are proud to be a part of this community.",
    image: "", // Fallback to icon
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // Swipe left -> next card
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > threshold) {
      // Swipe right -> prev card
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const getCardProps = (index: number) => {
    const isActive = index === activeIndex;
    const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
    const isNext = index === (activeIndex + 1) % testimonials.length;

    let x = 0;
    let scale = 1;
    let zIndex = 0;
    let opacity = 0;
    let rotateY = 0;

    if (isActive) {
      x = 0;
      scale = 1;
      zIndex = 10;
      opacity = 1;
      rotateY = 0;
    } else if (isPrev) {
      x = -150;
      scale = 0.85;
      zIndex = 5;
      opacity = 0.6;
      rotateY = 15;
    } else if (isNext) {
      x = 150;
      scale = 0.85;
      zIndex = 5;
      opacity = 0.6;
      rotateY = -15;
    }

    return { x, scale, zIndex, opacity, rotateY, isActive };
  };

  return (
    <section id="testimonials" className="py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <TextReveal 
              text="What People Say" 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            />
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-text-muted text-lg">
              Hear from our students, parents, and alumni about their experiences
            </p>
          </div>
        </ScrollReveal>

        <div className="relative h-[450px] w-full max-w-4xl mx-auto flex items-center justify-center perspective-1000">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const { x, scale, zIndex, opacity, rotateY, isActive } = getCardProps(index);
              
              if (opacity === 0) return null;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    x,
                    scale,
                    zIndex,
                    opacity,
                    rotateY,
                  }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  drag={isActive ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  className={`absolute w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-border/50 flex flex-col h-[350px] cursor-grab active:cursor-grabbing`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <div className="mb-6 text-accent">
                    <i className="fi fi-rr-quote-right text-5xl opacity-30"></i>
                  </div>
                  
                  <p className="text-text-muted italic mb-8 flex-grow leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary relative overflow-hidden shrink-0">
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
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
          >
            <i className="fi fi-rr-angle-left"></i>
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex ? "w-6 h-2.5 bg-accent" : "w-2.5 h-2.5 bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-sm"
          >
            <i className="fi fi-rr-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
