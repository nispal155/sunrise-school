"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Award, HeartHandshake, Trophy } from "lucide-react";

const SCHOLARSHIPS = [
  {
    title: "Merit-Based Scholarship",
    icon: Award,
    description: "Awarded to students demonstrating exceptional academic excellence. Requires a minimum GPA and top class standing.",
  },
  {
    title: "Need-Based Financial Aid",
    icon: HeartHandshake,
    description: "Designed to support deserving students from economically disadvantaged backgrounds. Covers up to 100% of tuition.",
  },
  {
    title: "Sports & Extracurricular",
    icon: Trophy,
    description: "For students who excel at district, regional, or national level sports, arts, or other extracurricular activities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ScholarshipPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    category: "",
    parentName: "",
    contactNumber: "",
    statement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormData({
      fullName: "",
      grade: "",
      category: "",
      parentName: "",
      contactNumber: "",
      statement: "",
    });
  };

  return (
    <div className="min-h-[100dvh] bg-white pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Scholarship Programs
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Empowering deserving students to achieve their academic dreams through recognition and support.
          </p>
        </motion.div>

        {/* Scholarship Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {SCHOLARSHIPS.map((scholarship, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <scholarship.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {scholarship.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {scholarship.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Apply for a Scholarship</h2>
            <p className="text-slate-500">Please fill out the form below to submit your application.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Student Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-slate-700 mb-2">Current/Applying Grade</label>
                <input
                  type="text"
                  id="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                  placeholder="e.g. Class 8"
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">Scholarship Category</label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all appearance-none"
              >
                <option value="" disabled>Select a category</option>
                {SCHOLARSHIPS.map((s, i) => (
                  <option key={i} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name</label>
                <input
                  type="text"
                  id="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  required
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all"
                  placeholder="+977-XXXXXXXXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="statement" className="block text-sm font-medium text-slate-700 mb-2">Statement of Purpose</label>
              <textarea
                id="statement"
                required
                value={formData.statement}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all min-h-[150px] resize-none"
                placeholder="Briefly explain why you deserve this scholarship..."
              ></textarea>
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-blue-900 text-white rounded-xl font-medium hover:bg-blue-800 transition-colors shadow-sm"
              >
                Submit Application
              </motion.button>
            </div>

          </form>
        </motion.div>

      </div>
    </div>
  );
}
