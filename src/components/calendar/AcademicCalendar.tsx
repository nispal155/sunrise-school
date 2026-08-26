"use client";

import { useState, useEffect } from "react";
import { academicEvents, EventCategory, AcademicEvent } from "@/data/academicEvents";
import CalendarHeader from "./CalendarHeader";
import CalendarFilters from "./CalendarFilters";
import CalendarGrid from "./CalendarGrid";
import UpcomingEventsSidebar from "./UpcomingEventsSidebar";
import CalendarEventModal from "./CalendarEventModal";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";
import NepaliDate from "nepali-datetime";

export type CalendarType = "AD" | "BS";

export default function AcademicCalendar() {
  const [calendarType, setCalendarType] = useState<CalendarType>("AD");
  
  // Track the current viewing month/year independently of the exact date
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());

  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "all">("all");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState<Date | null>(null);
  const [modalEvents, setModalEvents] = useState<AcademicEvent[]>([]);

  // When calendar type changes, reset to current month in that calendar
  useEffect(() => {
    handleToday();
  }, [calendarType]);

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(y => y - 1);
    } else {
      setViewMonth(m => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(y => y + 1);
    } else {
      setViewMonth(m => m + 1);
    }
  };

  const handleToday = () => {
    if (calendarType === "AD") {
      const now = new Date();
      setViewYear(now.getFullYear());
      setViewMonth(now.getMonth());
    } else {
      const nowBs = new NepaliDate();
      setViewYear(nowBs.getYear());
      setViewMonth(nowBs.getMonth());
    }
  };

  const handleDayClick = (date: Date, dayEvents: AcademicEvent[]) => {
    setModalDate(date);
    setModalEvents(dayEvents);
    setIsModalOpen(true);
  };

  const handleSidebarEventClick = (event: AcademicEvent) => {
    const eventDate = new Date(event.date);
    
    const dayEvents = academicEvents.filter(e => {
      const eStart = new Date(e.date);
      eStart.setHours(0,0,0,0);
      let eEnd = eStart;
      if (e.endDate) {
        eEnd = new Date(e.endDate);
        eEnd.setHours(0,0,0,0);
      }
      return eventDate.getTime() >= eStart.getTime() && eventDate.getTime() <= eEnd.getTime();
    });

    setModalDate(eventDate);
    setModalEvents(dayEvents);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <ScrollReveal>
          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <TextReveal 
                text="Academic Calendar" 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              />
              <div className="w-20 h-1 bg-accent mx-auto md:mx-0 mb-6"></div>
              <p className="text-text-muted max-w-2xl text-lg">
                Stay updated with our school schedule, holidays, examinations, and major events throughout the academic year.
              </p>
            </div>

            {/* Toggle AD/BS */}
            <div className="bg-bg-alt p-1 rounded-xl flex shadow-sm border border-border shrink-0">
              <button 
                onClick={() => setCalendarType("AD")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  calendarType === "AD" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-text-muted hover:text-text"
                }`}
              >
                English (AD)
              </button>
              <button 
                onClick={() => setCalendarType("BS")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  calendarType === "BS" 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-text-muted hover:text-text"
                }`}
              >
                Nepali (BS)
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <CalendarHeader 
            viewYear={viewYear}
            viewMonth={viewMonth}
            calendarType={calendarType}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onToday={handleToday}
          />

          <CalendarFilters 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </ScrollReveal>

        {/* Calendar Layout */}
        <ScrollReveal delay={2}>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-8">
            <div className="order-2 xl:order-1">
              <CalendarGrid 
                viewYear={viewYear}
                viewMonth={viewMonth}
                calendarType={calendarType}
                events={academicEvents}
                selectedCategory={selectedCategory}
                onDayClick={handleDayClick}
              />
            </div>
            
            <div className="order-1 xl:order-2">
              <UpcomingEventsSidebar 
                events={academicEvents}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onEventClick={handleSidebarEventClick}
              />
            </div>
          </div>
        </ScrollReveal>

      </div>

      <CalendarEventModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedDate={modalDate}
        events={modalEvents}
        calendarType={calendarType}
      />
    </section>
  );
}
