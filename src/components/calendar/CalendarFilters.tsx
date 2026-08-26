"use client";

import { EventCategory, getCategoryInfo } from "@/data/academicEvents";

interface CalendarFiltersProps {
  selectedCategory: EventCategory | "all";
  onSelectCategory: (category: EventCategory | "all") => void;
}

const CATEGORIES: (EventCategory | "all")[] = [
  "all",
  "exam",
  "holiday",
  "academic",
  "event",
  "sports",
  "meeting",
];

export default function CalendarFilters({ selectedCategory, onSelectCategory }: CalendarFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-start mb-8 pb-4 overflow-x-auto hide-scrollbar">
      {CATEGORIES.map((cat) => {
        const isSelected = selectedCategory === cat;
        
        if (cat === "all") {
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory("all")}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-text-muted border-border hover:border-primary/30 hover:text-primary"
              }`}
            >
              All Events
            </button>
          );
        }

        const info = getCategoryInfo(cat);
        
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              isSelected
                ? `${info.bgColor} text-text border-transparent shadow-sm ring-1 ring-inset ring-${info.color.replace('bg-', '')}/20`
                : "bg-white text-text-muted border-border hover:border-border/80 hover:bg-bg-alt"
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${info.color}`}></span>
            {info.label}
          </button>
        );
      })}
    </div>
  );
}
