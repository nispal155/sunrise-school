import { Metadata } from "next";
import AcademicCalendar from "@/components/calendar/AcademicCalendar";

export const metadata: Metadata = {
  title: "Academic Calendar | Sunrise English Boarding School",
  description: "View the complete academic calendar, schedule, events, and holidays for Sunrise English Boarding School.",
};

export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-bg-alt pt-20">
      <AcademicCalendar />
    </main>
  );
}
