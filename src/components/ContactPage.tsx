"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const inputVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle API submission here
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="Get in Touch"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          />
          <ScrollReveal delay={0.2} direction="up">
            <p className="text-lg text-text-muted">
              We&apos;d love to hear from you. Reach out for any inquiries or information.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Form */}
          <ScrollReveal direction="left" delay={0.3} className="w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  variants={formContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                  onSubmit={handleSubmit}
                  className="bg-bg-alt p-8 md:p-10 rounded-2xl border border-border shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-primary mb-8">
                    Send a Message
                  </h3>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label htmlFor="name" className="block text-sm font-semibold text-text mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label htmlFor="email" className="block text-sm font-semibold text-text mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-semibold text-text mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-8">
                    <label htmlFor="message" className="block text-sm font-semibold text-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={inputVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-md"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-bg-alt p-12 rounded-2xl border border-border flex flex-col items-center justify-center text-center h-full min-h-[450px]"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-muted mb-8">
                    Your message has been sent successfully.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="text-primary font-medium hover:text-accent transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* Right Column: Contact Info & Map */}
          <ScrollReveal direction="right" delay={0.4} className="w-full">
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg text-primary">
                    <i className="fi fi-rr-marker text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Address</h4>
                    <p className="text-text-muted">Itahari-3, Baukajhoda<br/>Itahari, Nepal</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg text-primary">
                    <i className="fi fi-rr-phone-call text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Phone</h4>
                    <a href="tel:+9779862058749" className="text-text-muted hover:text-accent transition-colors">986-2058749</a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg text-primary">
                    <i className="fi fi-rr-envelope text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text mb-1">Email</h4>
                    <a href="mailto:sunriseschool076@gmail.com" className="text-text-muted hover:text-accent transition-colors">sunriseschool076@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-primary mb-6">Office Hours</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-3 text-text font-medium">
                    <i className="fi fi-rr-clock text-xl text-accent"></i>
                    Sunday - Thursday
                  </div>
                  <span className="text-text-muted">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-3 text-text font-medium">
                    <i className="fi fi-rr-clock text-xl text-accent"></i>
                    Friday
                  </div>
                  <span className="text-text-muted">10:00 AM - 1:00 PM</span>
                </li>
                <li className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-3 text-text font-medium">
                    <i className="fi fi-rr-clock text-xl text-accent"></i>
                    Saturday
                  </div>
                  <span className="text-red-500 font-medium">Closed</span>
                </li>
              </ul>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.3856961695469!2d87.29882460407428!3d26.68097300898896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b36fc844ef3%3A0xca75e796eb8e3057!2z4aSb4aSj4aSY4aSg4aSW4aSlIFN1bnJpc2UgRW5nbGlzaCBCb2FyZGluZyBTY2hv!5e0!3m2!1sen!2snp!4v1787639186070!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Sunrise English Boarding School Location"
              ></iframe>
            </div>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
