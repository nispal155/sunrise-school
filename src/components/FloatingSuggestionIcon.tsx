"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FloatingSuggestionIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  // Hide the initial message after 8 seconds, but show it again on hover
  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex items-end">
      
      {/* Speech Bubble container */}
      <div className="relative mb-16 -mr-4 md:mb-20 md:-mr-6 z-10 flex flex-col items-end pointer-events-none">
        <AnimatePresence>
          {(showMessage || isHovered) && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
              className="relative bg-slate-950 px-5 py-4 rounded-[24px] shadow-2xl border border-yellow-500 min-w-[200px]"
              style={{ transformOrigin: "bottom right" }}
            >
              <div className="flex flex-col">
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-wider mb-1">
                  Sunrise Buddy
                </span>
                <span className="text-white text-sm md:text-base font-medium">
                  Psst... any suggestions? 💡
                </span>
              </div>
              {/* Circular Tail matching the reference */}
              <div className="absolute -bottom-2 right-4 w-5 h-5 bg-yellow-500 rounded-full border-[3px] border-slate-950"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The Boy Character Profile */}
      <Link href="/suggestion-box" passHref>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -5, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
          className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-2xl border-[3px] border-slate-950 ring-2 ring-yellow-500 cursor-pointer bg-slate-800"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src="/boy-icon.png" 
            alt="Suggestion Box"
            fill
            sizes="(max-width: 768px) 256px, 384px"
            quality={100}
            className="object-cover scale-[1.6] md:scale-[1.85] origin-top object-top mt-1 pointer-events-none" 
          />
        </motion.div>
      </Link>

    </div>
  );
}
