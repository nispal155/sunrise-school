"use client";

import { motion } from "motion/react";

const ADMINISTRATION = [
  { name: "John Sharma", role: "Vice Principal" },
  { name: "Anita Gurung", role: "Coordinator" },
  { name: "Ramesh Adhikari", role: "Accountant" },
];

const TEACHERS = [
  { name: "Sita Devi", subject: "English" },
  { name: "Hari Prasad", subject: "Mathematics" },
  { name: "Gita Thapa", subject: "Science" },
  { name: "Bikash Rai", subject: "Social Studies" },
  { name: "Sarita Limbu", subject: "Nepali" },
  { name: "Deepak Karki", subject: "Computer Science" },
];

const TRANSPORT = {
  name: "Sunil Tamang",
  role: "Bus Incharge",
  contact: "+977-9800000000",
  routes: [
    "Itahari - Dharan Road",
    "Itahari - Biratnagar Road",
    "Itahari - Sunsari Route",
  ],
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
};

export default function StaffPage() {
  return (
    <div className="min-h-[100dvh] bg-bg pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Staff
          </h1>
          {/* Decorative blue underline */}
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500">
            Meet the dedicated team behind our school
          </p>
        </div>

        {/* Administration Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Administration</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMINISTRATION.map((staff, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-border flex items-center gap-4 transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                  {getInitials(staff.name)}
                </div>
                <div>
                  <h3 className="font-bold text-text text-lg">{staff.name}</h3>
                  <p className="text-text-muted text-sm">{staff.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Teachers Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Teaching Staff</h2>
          </div>
          
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

        {/* Transport Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-accent rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Transport</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border transition-shadow hover:shadow-md">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              
              {/* Incharge Info */}
              <div className="flex items-center gap-4 md:w-1/3 shrink-0">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xl">
                  {getInitials(TRANSPORT.name)}
                </div>
                <div>
                  <p className="text-text-muted text-sm font-medium mb-1">{TRANSPORT.role}</p>
                  <h3 className="font-bold text-text text-xl mb-2">{TRANSPORT.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-muted">
                    <i className="fi fi-rr-phone-call"></i>
                    <span>{TRANSPORT.contact}</span>
                  </div>
                </div>
              </div>

              {/* Routes */}
              <div className="flex-grow bg-bg-alt/50 rounded-xl p-6 border border-border/50">
                <h4 className="font-bold text-text mb-4 flex items-center gap-2">
                  <i className="fi fi-rr-bus-alt text-primary"></i>
                  Bus Routes
                </h4>
                <ul className="space-y-3">
                  {TRANSPORT.routes.map((route, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-text-muted text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
