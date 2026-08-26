"use client";

import { AcademicEvent, getCategoryInfo } from "@/data/academicEvents";

interface CalendarDayProps {
  date: Date;
  displayDay?: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: AcademicEvent[];
  onClick: () => void;
}

export default function CalendarDay({
  date,
  displayDay,
  isCurrentMonth,
  isToday,
  events,
  onClick,
}: CalendarDayProps) {
  const dayNumber = displayDay ?? date.getDate();

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center min-h-[60px] md:min-h-[90px] p-1 md:p-2 border border-border/40 transition-all duration-200 cursor-pointer group
        ${isCurrentMonth ? "bg-white" : "bg-bg-alt/50"}
        ${!isCurrentMonth && !events.length ? "hover:bg-bg-alt" : ""}
        ${isCurrentMonth ? "hover:shadow-md hover:-translate-y-0.5 hover:border-accent/40 hover:z-10 bg-white" : ""}
      `}
    >
      <span
        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm md:text-base font-semibold mb-1
          ${
            isToday
              ? "bg-primary text-white shadow-md ring-2 ring-primary/30 ring-offset-2"
              : isCurrentMonth
              ? "text-text"
              : "text-text-muted/40"
          }
          ${!isToday && isCurrentMonth ? "group-hover:text-accent" : ""}
        `}
      >
        {dayNumber}
      </span>

      <div className="flex-1 w-full flex flex-col gap-1 overflow-hidden mt-1 px-0.5 md:px-1">
        {events.slice(0, 3).map((event) => {
          const info = getCategoryInfo(event.type);
          return (
            <div
              key={event.id}
              className={`text-xs truncate rounded px-1 py-0.5 font-medium flex items-center gap-1 w-full
                ${info.bgColor} text-text hidden md:flex ring-1 ring-inset ring-black/5
              `}
              title={event.title}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${info.color}`}></span>
              <span className="truncate">{event.title}</span>
            </div>
          );
        })}

        {/* Mobile dots indicator (when text is hidden) */}
        {events.length > 0 && (
          <div className="flex md:hidden justify-center gap-1 mt-1 flex-wrap">
            {events.slice(0, 3).map((event) => (
              <span
                key={event.id}
                className={`w-1.5 h-1.5 rounded-full ${getCategoryInfo(event.type).color}`}
              ></span>
            ))}
          </div>
        )}

        {events.length > 3 && (
          <div className="text-[10px] text-text-muted font-semibold text-center mt-0.5">
            +{events.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
}
