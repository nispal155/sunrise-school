"use client";

import { motion } from "motion/react";

const TEACHERS = [
  { name: "Sita Devi", subject: "English" },
  { name: "Hari Prasad", subject: "Mathematics" },
  { name: "Gita Thapa", subject: "Science" },
  { name: "Bikash Rai", subject: "Social Studies" },
  { name: "Sarita Limbu", subject: "Nepali" },
  { name: "Deepak Karki", subject: "Computer Science" },
];

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

export default function TeachersPage() {
  return (
    <div className="min-h-[100dvh] bg-bg pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Teaching Staff
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500">
            Meet the dedicated educators behind our academic excellence.
          </p>
        </div>

        {/* Teachers Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-border flex items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                  {getInitials(teacher.name)}
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg">{teacher.name}</h3>
                  <p className="text-text-muted text-sm">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}
