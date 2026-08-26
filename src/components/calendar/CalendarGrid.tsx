import { useMemo } from "react";
import CalendarDay from "./CalendarDay";
import { AcademicEvent, EventCategory } from "@/data/academicEvents";
import { motion } from "motion/react";
import NepaliDate from "nepali-datetime";
import type { CalendarType } from "./AcademicCalendar";

interface CalendarGridProps {
  viewYear: number;
  viewMonth: number;
  calendarType: CalendarType;
  events: AcademicEvent[];
  selectedCategory: EventCategory | "all";
  onDayClick: (date: Date, dayEvents: AcademicEvent[]) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getBSDaysInMonth(year: number, month: number) {
  let days = 28;
  while (days <= 32) {
    try {
      new NepaliDate(year, month, days + 1);
      days++;
    } catch (e) {
      break;
    }
  }
  return days;
}

export default function CalendarGrid({
  viewYear,
  viewMonth,
  calendarType,
  events,
  selectedCategory,
  onDayClick,
}: CalendarGridProps) {
  const days = useMemo(() => {
    const daysArray = [];
    const todayAD = new Date();
    todayAD.setHours(0, 0, 0, 0);
    const todayBS = new NepaliDate();

    let startPadding = 0;
    let daysInMonth = 0;
    let totalCells = 0;

    if (calendarType === "AD") {
      const firstDayOfMonth = new Date(viewYear, viewMonth, 1);
      const lastDayOfMonth = new Date(viewYear, viewMonth + 1, 0);
      
      startPadding = firstDayOfMonth.getDay();
      daysInMonth = lastDayOfMonth.getDate();
      totalCells = Math.ceil((startPadding + daysInMonth) / 7) * 7;

      for (let i = 0; i < totalCells; i++) {
        const date = new Date(viewYear, viewMonth, i - startPadding + 1);
        date.setHours(0, 0, 0, 0);

        const isCurrentMonth = date.getMonth() === viewMonth;
        const isToday = date.getTime() === todayAD.getTime();

        const dayEvents = events.filter((e) => {
          if (selectedCategory !== "all" && e.type !== selectedCategory) return false;
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
          date, // native JS date used for modal
          displayDay: date.getDate(),
          isCurrentMonth,
          isToday,
          events: dayEvents,
        });
      }
    } else {
      // BS Calendar Logic
      const firstDayOfMonthBS = new NepaliDate(viewYear, viewMonth, 1);
      startPadding = firstDayOfMonthBS.getDay();
      daysInMonth = getBSDaysInMonth(viewYear, viewMonth);
      totalCells = Math.ceil((startPadding + daysInMonth) / 7) * 7;

      for (let i = 0; i < totalCells; i++) {
        const dayNumber = i - startPadding + 1;
        
        let displayDay = dayNumber;
        let isCurrentMonth = true;
        let cellDateBS: any = null;
        let cellDateAD: Date | null = null;
        
        // Handle padding days correctly
        if (dayNumber <= 0) {
          isCurrentMonth = false;
          const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
          const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
          const prevMonthDays = getBSDaysInMonth(prevYear, prevMonth);
          displayDay = prevMonthDays + dayNumber;
          try { cellDateBS = new NepaliDate(prevYear, prevMonth, displayDay); } catch(e) {}
        } else if (dayNumber > daysInMonth) {
          isCurrentMonth = false;
          displayDay = dayNumber - daysInMonth;
          const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
          const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
          try { cellDateBS = new NepaliDate(nextYear, nextMonth, displayDay); } catch(e) {}
        } else {
          try { cellDateBS = new NepaliDate(viewYear, viewMonth, displayDay); } catch(e) {}
        }

        let isToday = false;
        let dayEvents: AcademicEvent[] = [];

        if (cellDateBS) {
          isToday = 
            cellDateBS.getYear() === todayBS.getYear() && 
            cellDateBS.getMonth() === todayBS.getMonth() && 
            cellDateBS.getDate() === todayBS.getDate();
            
          // Get equivalent AD date for event matching
          try {
            const dateStr = cellDateBS.format('YYYY-MM-DD');
            cellDateAD = new Date(cellDateBS.getEnglishDate());
            cellDateAD.setHours(0, 0, 0, 0);
          } catch(e) {
            // fallback if getEnglishDate fails
          }
        }

        if (cellDateAD) {
          dayEvents = events.filter((e) => {
            if (selectedCategory !== "all" && e.type !== selectedCategory) return false;
            const eStart = new Date(e.date);
            eStart.setHours(0, 0, 0, 0);
            let eEnd = eStart;
            if (e.endDate) {
              eEnd = new Date(e.endDate);
              eEnd.setHours(0, 0, 0, 0);
            }
            return cellDateAD!.getTime() >= eStart.getTime() && cellDateAD!.getTime() <= eEnd.getTime();
          });
        }

        daysArray.push({
          date: cellDateAD || new Date(), // pass AD date to Modal
          displayDay,
          isCurrentMonth,
          isToday,
          events: dayEvents,
        });
      }
    }

    return daysArray;
  }, [viewYear, viewMonth, calendarType, events, selectedCategory]);

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
        key={`${calendarType}-${viewYear}-${viewMonth}`} // forces re-render animation when month changes
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-7 bg-border/20 gap-px"
      >
        {days.map((day, i) => (
          <CalendarDay
            key={i}
            date={day.date}
            displayDay={day.displayDay} // Pass standard number rather than Date obj
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
