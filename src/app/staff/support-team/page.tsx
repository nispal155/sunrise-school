"use client";

import { motion } from "motion/react";

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

export default function SupportTeamPage() {
  return (
    <div className="min-h-[100dvh] bg-bg pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Support Team
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500">
            The backbone of our daily school operations.
          </p>
        </div>

        {/* Support Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
