"use client";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";
import Link from "next/link";
import { academicEvents, getCategoryInfo } from "@/data/academicEvents";
import { useMemo } from "react";

export default function NoticeCalendar() {
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = academicEvents.filter((e) => {
      const eStart = new Date(e.date);
      eStart.setHours(0, 0, 0, 0);
      let eEnd = eStart;
      if (e.endDate) {
        eEnd = new Date(e.endDate);
        eEnd.setHours(0, 0, 0, 0);
      }
      return eEnd.getTime() >= today.getTime();
    });

    filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return filtered.slice(0, 3);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <TextReveal 
              text="Upcoming Events & Notices" 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            />
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((notice, i) => {
            const dateObj = new Date(notice.date);
            const date = dateObj.getDate();
            const month = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
            const info = getCategoryInfo(notice.type);

            return (
              <ScrollReveal key={notice.id} delay={i * 0.1}>
                <div className="group bg-bg-alt rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start gap-5 mb-4">
                    <div className={`${info.bgColor} text-text rounded-xl p-3 text-center min-w-[70px] shadow-sm ring-1 ring-inset ring-black/5 group-hover:bg-accent group-hover:text-white group-hover:ring-transparent transition-colors duration-300`}>
                      <div className="text-2xl font-bold leading-none">{date}</div>
                      <div className="text-xs font-semibold tracking-wider mt-1">{month}</div>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1 block">
                        {info.label}
                      </span>
                      <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {notice.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-text-muted mt-2 flex-grow">
                    {notice.description || "No description available."}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <Link href="/calendar" className="text-sm font-semibold text-primary group-hover:text-accent transition-colors inline-flex items-center gap-2">
                      View Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/calendar"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-light transition-colors shadow-md hover:shadow-lg"
            >
              View Full Calendar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
