"use client";

import { motion } from "motion/react";

import StaffCard from "@/components/StaffCard";

const ADMINISTRATION = [
  { name: "John Sharma", role: "Vice Principal", image: "https://i.pravatar.cc/300?u=johnsharma" },
  { name: "Anita Gurung", role: "Coordinator", image: "https://i.pravatar.cc/300?u=anitagurung" },
  { name: "Ramesh Adhikari", role: "Accountant", image: "https://i.pravatar.cc/300?u=rameshadhikari" },
];

export default function AdministrationPage() {
  return (
    <div className="min-h-[100dvh] bg-bg pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Administration
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500">
            Meet the team ensuring smooth operations at Sunrise English Boarding School.
          </p>
        </div>

        {/* Administration Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADMINISTRATION.map((staff, index) => (
            <StaffCard 
              key={index} 
              name={staff.name} 
              role={staff.role} 
              image={staff.image}
              delay={index}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
