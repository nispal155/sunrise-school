"use client";

import { motion } from "motion/react";

const FEE_DATA = [
  { grade: "Playgroup", admission: "Rs. 10,000", monthly: "Rs. 3,500", annual: "Rs. 5,000" },
  { grade: "Nursery", admission: "Rs. 10,000", monthly: "Rs. 3,500", annual: "Rs. 5,000" },
  { grade: "LKG", admission: "Rs. 12,000", monthly: "Rs. 4,000", annual: "Rs. 6,000" },
  { grade: "UKG", admission: "Rs. 12,000", monthly: "Rs. 4,000", annual: "Rs. 6,000" },
  { grade: "Class 1", admission: "Rs. 15,000", monthly: "Rs. 4,500", annual: "Rs. 7,000" },
  { grade: "Class 2", admission: "Rs. 15,000", monthly: "Rs. 4,500", annual: "Rs. 7,000" },
  { grade: "Class 3", admission: "Rs. 18,000", monthly: "Rs. 5,000", annual: "Rs. 8,000" },
  { grade: "Class 4", admission: "Rs. 18,000", monthly: "Rs. 5,000", annual: "Rs. 8,000" },
  { grade: "Class 5", admission: "Rs. 18,000", monthly: "Rs. 5,000", annual: "Rs. 8,000" },
  { grade: "Class 6", admission: "Rs. 20,000", monthly: "Rs. 5,500", annual: "Rs. 10,000" },
  { grade: "Class 7", admission: "Rs. 20,000", monthly: "Rs. 5,500", annual: "Rs. 10,000" },
  { grade: "Class 8", admission: "Rs. 22,000", monthly: "Rs. 6,000", annual: "Rs. 12,000" },
  { grade: "Class 9", admission: "Rs. 25,000", monthly: "Rs. 7,000", annual: "Rs. 15,000" },
];

const BUS_FEE_DATA = [
  { route: "Local (Within 5 km)", monthly: "Rs. 1,000" },
  { route: "Standard (5 km - 10 km)", monthly: "Rs. 1,500" },
  { route: "Extended (10 km - 15 km)", monthly: "Rs. 2,000" },
  { route: "Long Distance (Beyond 15 km)", monthly: "Rs. 2,500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export default function FeeStructurePage() {
  return (
    <div className="min-h-[100dvh] bg-bg pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Fee Structure
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Transparent and accessible education investments for the upcoming academic session.
          </p>
        </motion.div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <motion.table
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full min-w-[600px] text-left border-collapse"
            >
              <thead>
                <tr className="bg-slate-50/80">
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Class / Grade
                  </th>
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Admission Fee <br/><span className="text-xs font-normal text-slate-500 normal-case">(One-time)</span>
                  </th>
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Monthly Tuition Fee
                  </th>
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Annual Charges
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEE_DATA.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    variants={rowVariants}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-6 text-sm font-medium text-slate-800 border-b border-slate-100">
                      {row.grade}
                    </td>
                    <td className="p-6 text-sm text-slate-600 border-b border-slate-100">
                      {row.admission}
                    </td>
                    <td className="p-6 text-sm text-slate-600 border-b border-slate-100">
                      {row.monthly}
                    </td>
                    <td className="p-6 text-sm text-slate-600 border-b border-slate-100">
                      {row.annual}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>

        {/* Bus Fee Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="p-6 bg-slate-50/50 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-800">Bus Fee Structure</h3>
            <p className="text-sm text-slate-500 mt-1">Monthly transportation charges based on distance.</p>
          </div>
          <div className="overflow-x-auto">
            <motion.table
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full min-w-[400px] text-left border-collapse"
            >
              <thead>
                <tr className="bg-slate-50/80">
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Route / Distance
                  </th>
                  <th className="p-6 text-sm font-semibold text-slate-700 uppercase tracking-wider border-b border-slate-200">
                    Monthly Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {BUS_FEE_DATA.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    variants={rowVariants}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-6 text-sm font-medium text-slate-800 border-b border-slate-100">
                      {row.route}
                    </td>
                    <td className="p-6 text-sm text-slate-600 border-b border-slate-100">
                      {row.monthly}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-slate-50 rounded-xl p-6 border border-slate-100"
        >
          <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
            Terms & Conditions
          </h4>
          <ul className="space-y-2 text-sm text-slate-500 list-disc list-inside">
            <li>Fees are subject to change without prior notice.</li>
            <li>Late payment policies apply after the 10th of every month (Rs. 50/day).</li>
            <li>Bus fees are calculated separately based on routes and distance.</li>
            <li>Admission and Annual charges are non-refundable under any circumstances.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
