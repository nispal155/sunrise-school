"use client";

import { motion } from "motion/react";

import StaffCard from "@/components/StaffCard";

const TRANSPORT = {
  name: "Sunil Tamang",
  role: "Bus Incharge",
  image: "https://i.pravatar.cc/300?u=suniltamang",
  contact: "+977-9800000000",
  routes: [
    "Itahari - Dharan Road",
    "Itahari - Biratnagar Road",
    "Itahari - Sunsari Route",
  ],
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <StaffCard 
              name={TRANSPORT.name} 
              role={TRANSPORT.role} 
              image={TRANSPORT.image} 
              delay={0}
            />
          </div>
          
          <div className="lg:col-span-8 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex-grow"
            >
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary">
                <i className="fi fi-rr-bus-alt text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Transport Services</h3>
              <p className="text-text-muted mb-6">Our reliable bus service ensures safe transportation for students across major routes.</p>
              
              <div className="flex items-center gap-2 text-primary font-semibold bg-accent/20 px-4 py-2 rounded-xl inline-flex mb-8">
                <i className="fi fi-rr-phone-call"></i>
                <span>{TRANSPORT.contact}</span>
              </div>
              
              <h4 className="font-bold text-slate-800 mb-4 text-lg">Active Routes</h4>
              <ul className="space-y-4">
                {TRANSPORT.routes.map((route, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-text-muted bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    {route}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
