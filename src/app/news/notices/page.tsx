import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";

const NOTICES = [
  {
    id: 1,
    date: "August 20, 2026",
    title: "First Term Examination Routine",
    content: "The First Term Examination for the academic year 2026-2027 will commence from September 10, 2026. Students are advised to collect their admit cards from the administration office.",
  },
  {
    id: 2,
    date: "July 25, 2026",
    title: "Parent-Teacher Meeting",
    content: "A mandatory Parent-Teacher Meeting is scheduled for August 5, 2026, to discuss student progress and upcoming school events. Please make sure to attend.",
  },
  {
    id: 3,
    date: "June 10, 2026",
    title: "School Closed for Summer Vacation",
    content: "The school will remain closed from June 15 to July 15 for the summer vacation. Classes will resume as normal from July 16.",
  }
];

export default function NoticesPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText 
              text="School Notices" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                Stay updated with the latest announcements and official notices from the school administration.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16 bg-bg-alt/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {NOTICES.map((notice, index) => (
              <ScrollReveal key={notice.id} delay={index * 0.1}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {notice.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {notice.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
