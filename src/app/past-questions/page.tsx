"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data structure so the user can easily add questions later
const CLASSES = [
  { id: "class-5", name: "Class 5" },
  { id: "class-6", name: "Class 6" },
  { id: "class-7", name: "Class 7" },
  { id: "class-8", name: "Class 8" },
  { id: "class-9", name: "Class 9" },
  { id: "class-10", name: "Class 10" },
];

const SUBJECTS = [
  { id: "math", name: "Mathematics", icon: "fi fi-rr-calculator" },
  { id: "science", name: "Science", icon: "fi fi-rr-microscope" },
  { id: "english", name: "English", icon: "fi fi-rr-book-alt" },
  { id: "nepali", name: "Nepali", icon: "fi fi-rr-book-open-cover" },
  { id: "social", name: "Social Studies", icon: "fi fi-rr-globe" },
  { id: "computer", name: "Computer Science", icon: "fi fi-rr-computer" },
];

// Placeholder for questions. User can add PDFs or text here later.
const PAST_QUESTIONS: Record<string, Record<string, { title: string; link?: string; year: string }[]>> = {
  "class-10": {
    "math": [
      // Example placeholders:
      // { title: "First Term Examination", year: "2080", link: "#" },
      // { title: "BLE Model Question", year: "2080", link: "#" }
    ]
  }
};

export default function PastQuestionsPage() {
  const [activeClass, setActiveClass] = useState(CLASSES[0].id);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const toggleSubject = (subjectId: string) => {
    setExpandedSubject(expandedSubject === subjectId ? null : subjectId);
  };

  return (
    <main className="min-h-screen bg-bg-alt flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Past Questions</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Browse and download past examination papers for Class 5 to 10 to help you prepare for your upcoming exams.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow w-full flex flex-col md:flex-row gap-8">
        
        {/* Sidebar / Tabs for Classes */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden sticky top-32">
            <div className="p-4 bg-primary/5 border-b border-border">
              <h3 className="font-bold text-text">Select Class</h3>
            </div>
            <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible">
              {CLASSES.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setActiveClass(cls.id)}
                  className={`flex items-center px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap md:whitespace-normal border-b md:border-b-0 md:border-l-4 ${
                    activeClass === cls.id
                      ? "border-accent bg-accent/5 text-primary"
                      : "border-transparent text-text-muted hover:bg-bg-alt hover:text-text"
                  }`}
                >
                  <i className="fi fi-rr-graduation-cap mr-3 text-lg opacity-70"></i>
                  {cls.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area for Subjects */}
        <div className="flex-grow">
          <motion.div
            key={activeClass}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-text mb-6 pb-4 border-b border-border flex items-center gap-3">
              <span className="bg-primary/10 text-primary p-2 rounded-lg inline-flex">
                <i className="fi fi-rr-books text-xl"></i>
              </span>
              Subjects for {CLASSES.find(c => c.id === activeClass)?.name}
            </h2>

            <div className="space-y-4">
              {SUBJECTS.map((subject) => {
                const isExpanded = expandedSubject === subject.id;
                const questions = PAST_QUESTIONS[activeClass]?.[subject.id] || [];

                return (
                  <div key={subject.id} className="border border-border rounded-xl overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => toggleSubject(subject.id)}
                      className={`w-full flex items-center justify-between p-4 md:p-5 transition-colors ${
                        isExpanded ? "bg-primary/5" : "bg-white hover:bg-bg-alt"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                          <i className={`${subject.icon} text-lg`}></i>
                        </div>
                        <span className="font-semibold text-text text-lg">{subject.name}</span>
                      </div>
                      <i className={`fi fi-rr-angle-down text-text-muted transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}></i>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-bg-alt/50"
                        >
                          <div className="p-4 md:p-6 border-t border-border">
                            {questions.length > 0 ? (
                              <ul className="space-y-3">
                                {questions.map((q, idx) => (
                                  <li key={idx}>
                                    <a href={q.link || "#"} className="group flex items-center justify-between p-3 md:p-4 bg-white rounded-lg border border-border hover:border-accent hover:shadow-sm transition-all">
                                      <div className="flex items-center gap-3">
                                        <i className="fi fi-rr-document text-accent"></i>
                                        <span className="font-medium text-text group-hover:text-primary transition-colors">{q.title}</span>
                                      </div>
                                      <span className="text-xs font-semibold bg-bg-alt text-text-muted px-2 py-1 rounded">
                                        {q.year}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="text-center py-8">
                                <div className="w-16 h-16 bg-white border border-border rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted">
                                  <i className="fi fi-rr-folder-open text-2xl"></i>
                                </div>
                                <h4 className="text-text font-medium mb-1">No questions added yet</h4>
                                <p className="text-sm text-text-muted">Past questions for this subject will be uploaded soon.</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
