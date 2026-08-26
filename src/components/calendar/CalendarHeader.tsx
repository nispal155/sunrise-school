"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CalendarType } from "./AcademicCalendar";

interface CalendarHeaderProps {
  viewYear: number;
  viewMonth: number;
  calendarType: CalendarType;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const NEPALI_MONTHS = [
  "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", 
  "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

const ENGLISH_MONTHS = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

export default function CalendarHeader({
  viewYear,
  viewMonth,
  calendarType,
  onPrevMonth,
  onNextMonth,
  onToday,
}: CalendarHeaderProps) {
  const monthName = calendarType === "AD" ? ENGLISH_MONTHS[viewMonth] : NEPALI_MONTHS[viewMonth];
  const year = viewYear;
  
  // Use a string key for animation so it triggers when month/year changes
  const dateKey = `${calendarType}-${monthName}-${year}`;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="flex bg-bg-alt border border-border rounded-full p-1 shadow-sm">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-full hover:bg-white hover:shadow-sm text-text-muted hover:text-primary transition-all"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={onToday}
            className="px-4 py-1.5 mx-1 rounded-full text-sm font-semibold text-primary hover:bg-white hover:shadow-sm transition-all"
          >
            Today
          </button>
          
          <button
            onClick={onNextMonth}
            className="p-2 rounded-full hover:bg-white hover:shadow-sm text-text-muted hover:text-primary transition-all"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center min-w-[200px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={dateKey}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-primary text-center"
          >
            {monthName} <span className="text-accent">{year}</span>
          </motion.h2>
        </AnimatePresence>
      </div>
      
      {/* Empty div to balance flex on desktop */}
      <div className="hidden sm:block min-w-[120px]"></div>
    </div>
  );
}
