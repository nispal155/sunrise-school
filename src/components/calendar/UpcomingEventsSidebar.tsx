"use client";

import { useMemo } from "react";
import { AcademicEvent, EventCategory, getCategoryInfo } from "@/data/academicEvents";
import { Calendar as CalendarIcon, ChevronRight } from "lucide-react";

interface UpcomingEventsSidebarProps {
  events: AcademicEvent[];
  selectedCategory: EventCategory | "all";
  onSelectCategory: (category: EventCategory | "all") => void;
  onEventClick: (event: AcademicEvent) => void;
}

const ALL_CATEGORIES: EventCategory[] = [
  "exam",
  "holiday",
  "academic",
  "event",
  "sports",
  "meeting",
];

export default function UpcomingEventsSidebar({
  events,
  selectedCategory,
  onSelectCategory,
  onEventClick,
}: UpcomingEventsSidebarProps) {
  // Get upcoming events from today
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = events.filter((e) => {
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
      
      return eEnd.getTime() >= today.getTime();
    });

    // Sort by date ascending
    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Take top 5
    return filtered.slice(0, 5);
  }, [events, selectedCategory]);

  return (
    <div className="flex flex-col gap-8">
      {/* Upcoming Events Section */}
      <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 pb-4 border-b border-border">
          <CalendarIcon className="w-5 h-5 text-accent" />
          Upcoming Events
        </h3>

        {upcomingEvents.length === 0 ? (
          <div className="text-center py-6 text-text-muted">
            <p>No upcoming events found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingEvents.map((event) => {
              const info = getCategoryInfo(event.type);
              const date = new Date(event.date);
              const day = date.getDate();
              const month = date.toLocaleDateString("en-US", { month: "short" });

              return (
                <div
                  key={event.id}
                  onClick={() => onEventClick(event)}
                  className="group flex gap-4 p-3 rounded-xl hover:bg-bg-alt border border-transparent hover:border-accent/30 transition-all cursor-pointer"
                >
                  <div className={`shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg ${info.bgColor} text-text font-bold shadow-sm ring-1 ring-inset ring-black/5`}>
                    <span className="text-sm leading-none">{day}</span>
                    <span className="text-[10px] uppercase tracking-wider mt-0.5">{month}</span>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-primary truncate group-hover:text-accent transition-colors">
                      {event.title}
                    </h4>
                    <span className="text-xs text-text-muted truncate mt-0.5">
                      {info.label}
                    </span>
                  </div>
                  <div className="shrink-0 flex items-center">
                    <ChevronRight className="w-4 h-4 text-text-muted/50 group-hover:text-accent transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Categories Legend Section */}
      <div className="bg-bg-alt rounded-2xl border border-border p-6">
        <h3 className="text-sm font-bold tracking-wider text-text-muted uppercase mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {ALL_CATEGORIES.map((cat) => {
            const info = getCategoryInfo(cat);
            const isSelected = selectedCategory === cat;
            
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(isSelected ? "all" : cat)}
                className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                  isSelected ? "bg-white shadow-sm ring-1 ring-border" : "hover:bg-white"
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${info.color}`}></span>
                <span className={`text-sm font-medium ${isSelected ? "text-primary" : "text-text"}`}>
                  {info.label}
                </span>
                {isSelected && (
                  <span className="ml-auto text-xs font-bold text-accent">Active</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
