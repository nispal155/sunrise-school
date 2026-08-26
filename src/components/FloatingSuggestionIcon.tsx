"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function FloatingSuggestionIcon() {
  return (
    <Link href="/suggestion-box" className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50 group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative p-4 bg-primary text-white rounded-full shadow-2xl hover:shadow-primary/30 transition-all border-2 border-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer"
        aria-label="Suggestion Box"
      >
        <i className="fi fi-rr-comment text-xl leading-none"></i>
        
        {/* Tooltip */}
        <span className="absolute left-full ml-4 whitespace-nowrap bg-white text-text text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 pointer-events-none border border-border">
          Suggestion Box
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border-l border-b border-border rotate-45"></div>
        </span>
      </motion.div>
    </Link>
  );
}
