"use client";
import ScrollReveal from "./ScrollReveal";
import TextReveal from "./TextReveal";

const NOTICES = [
  {
    id: 1,
    date: "15",
    month: "MAR",
    title: "First Term Examination",
    desc: "First term examinations for classes 1-10 will begin.",
    type: "Exam"
  },
  {
    id: 2,
    date: "25",
    month: "MAR",
    title: "Sports Week 2025",
    desc: "Annual sports week featuring inter-house competitions.",
    type: "Event"
  },
  {
    id: 3,
    date: "10",
    month: "APR",
    title: "Parents-Teachers Meeting",
    desc: "First term results distribution and parent consultation.",
    type: "Meeting"
  }
];

export default function NoticeCalendar() {
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
          {NOTICES.map((notice, i) => (
            <ScrollReveal key={notice.id} delay={i * 0.1}>
              <div className="group bg-bg-alt rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start gap-5 mb-4">
                  <div className="bg-primary text-white rounded-xl p-3 text-center min-w-[70px] shadow-md group-hover:bg-accent transition-colors duration-300">
                    <div className="text-2xl font-bold leading-none">{notice.date}</div>
                    <div className="text-xs font-semibold tracking-wider mt-1">{notice.month}</div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1 block">
                      {notice.type}
                    </span>
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {notice.title}
                    </h4>
                  </div>
                </div>
                <p className="text-text-muted mt-2 flex-grow">
                  {notice.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-border">
                  <button className="text-sm font-semibold text-primary group-hover:text-accent transition-colors inline-flex items-center gap-2">
                    Read More <i className="fi fi-rr-arrow-small-right"></i>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
