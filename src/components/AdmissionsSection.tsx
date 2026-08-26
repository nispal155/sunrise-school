"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function AdmissionsSection() {
  const [step, setStep] = useState(1);
  
  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };
  
  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  return (
    <section id="admissions" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <TextReveal 
              text="Admissions Open 2081/82" 
              className="text-3xl md:text-5xl font-bold mb-4"
            />
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join the Sunrise family. Fill out the application form below and our admissions team will contact you.
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-white text-text p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="min-h-[300px] flex flex-col items-center justify-center text-center p-8"
            >
              <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Application Submitted!</h3>
              <p className="text-text-muted text-lg max-w-md mx-auto mb-8">
                Thank you for applying to Sunrise English Boarding School. Our admissions team will review your application and contact you shortly.
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setStep(1); }}
                className="px-8 py-3 rounded-xl font-semibold bg-bg-alt text-text hover:bg-border transition-colors shadow-sm"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="flex justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((step - 1) / 2) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                {[1, 2, 3].map((num) => (
                  <div 
                    key={num} 
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                      step >= num ? "bg-accent text-white shadow-md" : "bg-bg-alt text-text-muted"
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              <form className="min-h-[300px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-6">Student Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Student's Full Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt" placeholder="Enter full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Date of Birth</label>
                          <input type="date" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-6">Parent/Guardian Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Parent's Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt" placeholder="Enter parent name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Contact Number</label>
                          <input type="tel" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt" placeholder="e.g. 9800000000" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      variants={formVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-primary mb-6">Academic Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Applying for Class</label>
                          <select className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt">
                            <option value="">Select Class</option>
                            <option value="Nursery">Nursery</option>
                            <option value="LKG">LKG</option>
                            <option value="UKG">UKG</option>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text mb-2">Previous School (if any)</label>
                          <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-bg-alt" placeholder="Enter school name" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Controls */}
                <div className="mt-10 flex justify-between pt-6 border-t border-border/50">
                  {step > 1 ? (
                    <button 
                      onClick={prevStep}
                      className="px-6 py-3 rounded-xl font-semibold text-text hover:bg-bg-alt transition-colors"
                    >
                      Back
                    </button>
                  ) : <div></div>}

                  {step < 3 ? (
                    <MagneticButton strength={0.2}>
                      <button 
                        onClick={nextStep}
                        className="px-8 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary-light transition-colors shadow-lg"
                      >
                        Next Step
                      </button>
                    </MagneticButton>
                  ) : (
                    <MagneticButton strength={0.2}>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSubmitted(true);
                        }}
                        className="px-8 py-3 rounded-xl font-semibold bg-accent text-white hover:opacity-90 transition-colors shadow-lg shadow-accent/20"
                      >
                        Submit Application
                      </button>
                    </MagneticButton>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
