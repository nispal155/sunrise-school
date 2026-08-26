"use client";

import { useMemo } from "react";
import CalendarDay from "./CalendarDay";
import { AcademicEvent, EventCategory } from "@/data/academicEvents";
import { motion } from "motion/react";

interface CalendarGridProps {
  currentDate: Date;
  events: AcademicEvent[];
  selectedCategory: EventCategory | "all";
  onDayClick: (date: Date, dayEvents: AcademicEvent[]) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarGrid({
  currentDate,
  events,
  selectedCategory,
  onDayClick,
}: CalendarGridProps) {
  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startPadding = firstDayOfMonth.getDay(); // 0-6 (Sun-Sat)
    
    // total cells we need: startPadding + days in month + end padding
    const daysInMonth = lastDayOfMonth.getDate();
    const totalCells = Math.ceil((startPadding + daysInMonth) / 7) * 7;

    const daysArray = [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < totalCells; i++) {
      const date = new Date(year, month, i - startPadding + 1);
      date.setHours(0, 0, 0, 0);

      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.getTime() === today.getTime();

      // Find events that fall on this day
      // Simple date string matching since our mock data has "YYYY-MM-DD"
      // and we handle multi-day events as well.
      const dayEvents = events.filter((e) => {
        if (selectedCategory !== "all" && e.type !== selectedCategory) {
          return false;
        }

        const eStart = new Date(e.date);
        eStart.setHours(0, 0, 0, 0);
        
        let eEnd = eStart;
        if (e.endDate) {
          eEnd = new Date(e.endDate);
          eEnd.setHours(0, 0, 0, 0);
        }

        return date.getTime() >= eStart.getTime() && date.getTime() <= eEnd.getTime();
      });

      daysArray.push({
        date,
        isCurrentMonth,
        isToday,
        events: dayEvents,
      });
    }

    return daysArray;
  }, [currentDate, events, selectedCategory]);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
      <div className="grid grid-cols-7 bg-bg-alt border-b border-border">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-sm font-bold tracking-wider text-primary uppercase"
          >
            {day}
          </div>
        ))}
      </div>
      
      <motion.div 
        key={currentDate.getTime()} // forces re-render animation when month changes
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-7 bg-border/20 gap-px"
      >
        {days.map((day, i) => (
          <CalendarDay
            key={i}
            date={day.date}
            isCurrentMonth={day.isCurrentMonth}
            isToday={day.isToday}
            events={day.events}
            onClick={() => onDayClick(day.date, day.events)}
          />
        ))}
      </motion.div>
    </div>
  );
}
