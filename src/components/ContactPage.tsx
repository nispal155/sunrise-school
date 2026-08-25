"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    <div className="min-h-screen bg-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="Contact Us"
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          />
          <ScrollReveal delay={3} direction="up">
            <p className="text-lg text-text">
              We&apos;d love to hear from you. Reach out for admissions, inquiries, or any other information.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <ScrollReveal direction="left" delay={4} className="w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  variants={formContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                  onSubmit={handleSubmit}
                  className="bg-bg-alt p-8 md:p-10 rounded-2xl shadow-sm border border-border"
                >
                  <h3 className="text-2xl font-semibold text-primary mb-8">
                    Send us a Message
                  </h3>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+977 9800000000"
                    />
                  </motion.div>

                  <motion.div variants={inputVariants} className="mb-8">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={inputVariants}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-primary text-white py-4 rounded-xl font-medium text-lg hover:bg-primary-light transition-colors shadow-sm"
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="bg-bg-alt p-12 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Thank You!
                  </h3>
                  <p className="text-text-muted text-lg">
                    Your message has been sent successfully. We will get back to
                    you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-8 text-primary font-medium hover:text-accent transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>

          {/* Right Column: Contact Info & Map */}
          <ScrollReveal direction="right" delay={4} className="w-full h-full flex flex-col">
            <div className="space-y-6 mb-8">
              {/* Location Card */}
              <div className="bg-bg-alt rounded-xl p-6 flex items-start group hover:-translate-y-1 transition-transform border border-border/50">
                <div className="bg-white p-3 rounded-full mr-5 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Our Location</h4>
                  <p className="text-text-muted">Itahari-3, Baukajhoda<br />Itahari, Nepal</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-bg-alt rounded-xl p-6 flex items-start group hover:-translate-y-1 transition-transform border border-border/50">
                <div className="bg-white p-3 rounded-full mr-5 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Email Us</h4>
                  <a href="mailto:sunriseschool076@gmail.com" className="text-text-muted hover:text-accent transition-colors">
                    sunriseschool076@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-bg-alt rounded-xl p-6 flex items-start group hover:-translate-y-1 transition-transform border border-border/50">
                <div className="bg-white p-3 rounded-full mr-5 shadow-sm group-hover:shadow-md transition-shadow">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-1">Call Us</h4>
                  <a href="tel:+9779862058749" className="text-text-muted hover:text-accent transition-colors">
                    986-2058749
                  </a>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="flex-grow min-h-[300px] rounded-xl overflow-hidden border border-border shadow-sm">
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
    </div>
  );
}
