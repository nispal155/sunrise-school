"use client";

import { useState } from "react";
import { academicEvents, EventCategory, AcademicEvent } from "@/data/academicEvents";
import CalendarHeader from "./CalendarHeader";
import CalendarFilters from "./CalendarFilters";
import CalendarGrid from "./CalendarGrid";
import UpcomingEventsSidebar from "./UpcomingEventsSidebar";
import CalendarEventModal from "./CalendarEventModal";
import ScrollReveal from "../ScrollReveal";
import TextReveal from "../TextReveal";

export default function AcademicCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "all">("all");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState<Date | null>(null);
  const [modalEvents, setModalEvents] = useState<AcademicEvent[]>([]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDayClick = (date: Date, dayEvents: AcademicEvent[]) => {
    setModalDate(date);
    setModalEvents(dayEvents);
    setIsModalOpen(true);
  };

  const handleSidebarEventClick = (event: AcademicEvent) => {
    // When clicking a sidebar event, we open the modal for that specific date
    // and show only that event (or all events on that day, user preference. We'll show all events for that day).
    const eventDate = new Date(event.date);
    
    // Find all events on that day to show in modal
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
          <div className="mb-12 text-center md:text-left">
            <TextReveal 
              text="Academic Calendar" 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            />
            <div className="w-20 h-1 bg-accent mx-auto md:mx-0 mb-6"></div>
            <p className="text-text-muted max-w-2xl text-lg">
              Stay updated with our school schedule, holidays, examinations, and major events throughout the academic year.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <CalendarHeader 
            currentDate={currentDate}
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
                currentDate={currentDate}
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
      />
    </section>
  );
}
