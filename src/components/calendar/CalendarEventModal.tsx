"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MapPin, Clock, Calendar as CalendarIcon, Info } from "lucide-react";
import { AcademicEvent, getCategoryInfo } from "@/data/academicEvents";

interface CalendarEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  events: AcademicEvent[];
}

export default function CalendarEventModal({
  isOpen,
  onClose,
  selectedDate,
  events,
}: CalendarEventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !selectedDate) return null;

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
        
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="flex items-center justify-between p-6 border-b border-border bg-bg-alt">
            <h3 id="modal-title" className="text-xl font-bold text-primary flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-accent" />
              {formattedDate}
            </h3>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-text-muted hover:text-primary hover:bg-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto hide-scrollbar">
            {events.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-bg-alt rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarIcon className="w-8 h-8 text-border" />
                </div>
                <h4 className="text-lg font-semibold text-text-muted">No events on this day</h4>
                <p className="text-sm text-text-muted/70 mt-1">Check another date for upcoming activities.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {events.map((event, index) => {
                  const info = getCategoryInfo(event.type);
                  
                  // Format date range if exists
                  let dateRange = "";
                  if (event.endDate && event.endDate !== event.date) {
                    const start = new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
                    const end = new Date(event.endDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                    dateRange = `${start} – ${end}`;
                  } else {
                    dateRange = new Date(event.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
                  }

                  return (
                    <div key={event.id} className={index !== 0 ? "pt-6 border-t border-border" : ""}>
                      <div className="flex items-start justify-between mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${info.bgColor} text-text border border-black/5`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${info.color}`}></span>
                          {info.label}
                        </span>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-primary mb-4">{event.title}</h4>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-3 text-text-muted">
                          <Clock className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                          <span className="font-medium text-text">{dateRange}</span>
                        </div>
                        
                        {event.location && (
                          <div className="flex items-start gap-3 text-text-muted">
                            <MapPin className="w-5 h-5 shrink-0 text-accent mt-0.5" />
                            <span className="font-medium text-text">{event.location}</span>
                          </div>
                        )}
                      </div>
                      
                      {event.description && (
                        <div className="flex items-start gap-3 text-text-muted bg-bg-alt p-4 rounded-xl border border-border/50">
                          <Info className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                          <p className="leading-relaxed text-sm md:text-base">{event.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
