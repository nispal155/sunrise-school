"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function NoticePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenNoticePopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen for this session so it doesn't annoy the user on every refresh
    sessionStorage.setItem("hasSeenNoticePopup", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[80vh] bg-transparent rounded-2xl overflow-hidden z-10 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
              aria-label="Close notice"
            >
              <i className="fi fi-rr-cross text-lg"></i>
            </button>

            {/* Image Area */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/notice.png" alt="Important Notice" fill className="object-contain" priority />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
