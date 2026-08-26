"use client";

import { motion } from "motion/react";

import StaffCard from "@/components/StaffCard";

const TEACHERS = [
  { name: "Sita Devi", subject: "English", image: "https://i.pravatar.cc/300?u=sitadevi" },
  { name: "Hari Prasad", subject: "Mathematics", image: "https://i.pravatar.cc/300?u=hariprasad" },
  { name: "Gita Thapa", subject: "Science", image: "https://i.pravatar.cc/300?u=gitathapa" },
  { name: "Bikash Rai", subject: "Social Studies", image: "https://i.pravatar.cc/300?u=bikashrai" },
  { name: "Sarita Limbu", subject: "Nepali", image: "https://i.pravatar.cc/300?u=saritalimbu" },
  { name: "Deepak Karki", subject: "Computer Science", image: "https://i.pravatar.cc/300?u=deepakkarki" },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, index) => (
            <StaffCard 
              key={index} 
              name={teacher.name} 
              role={teacher.subject} 
              image={teacher.image}
              delay={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
