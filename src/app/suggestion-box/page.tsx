"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function SuggestionBoxPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Student");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    
    alert("Thank you for your suggestion!");
    
    // Reset form
    setName("");
    setRole("Student");
    setSuggestion("");
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-[100dvh] bg-bg pt-28 pb-24 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Suggestion Box
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            We value your feedback
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <motion.div custom={1} variants={formVariants} initial="hidden" animate="visible">
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                Full Name (optional)
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-alt/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
            </motion.div>

            {/* Role */}
            <motion.div custom={2} variants={formVariants} initial="hidden" animate="visible">
              <label htmlFor="role" className="block text-sm font-medium text-text mb-2">
                Role
              </label>
              <div className="relative">
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 appearance-none rounded-xl border border-border bg-bg-alt/50 text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                >
                  <option value="Student">Student</option>
                  <option value="Parent">Parent</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Suggestion */}
            <motion.div custom={3} variants={formVariants} initial="hidden" animate="visible">
              <label htmlFor="suggestion" className="block text-sm font-medium text-text mb-2">
                Your Suggestion <span className="text-red-500">*</span>
              </label>
              <textarea
                id="suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
                placeholder="Share your thoughts, ideas, or feedback..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-bg-alt/50 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all min-h-[160px] resize-none"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div custom={4} variants={formVariants} initial="hidden" animate="visible" className="pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors shadow-sm"
              >
                Submit Suggestion
              </motion.button>
            </motion.div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
