import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedText from "@/components/AnimatedText";

const ACHIEVEMENTS = [
  {
    id: 1,
    date: "July 2026",
    title: "District Level Science Exhibition Winners",
    content: "Our team of senior students secured the first position in the District Level Science Exhibition for their working model on sustainable energy solutions.",
    category: "Academic",
  },
  {
    id: 2,
    date: "May 2026",
    title: "Interschool Sports Championship",
    content: "Sunrise English Boarding School emerged as the overall champions in the Annual Interschool Sports Meet, bagging 15 gold medals across various track and field events.",
    category: "Sports",
  },
  {
    id: 3,
    date: "March 2026",
    title: "100% Board Exam Success Rate",
    content: "We are proud to announce a 100% pass rate in the final board examinations with over 80% of our students achieving distinction.",
    category: "Academic",
  }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedText 
              text="Our Achievements" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight"
            />
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
                Celebrating the milestones and success stories of our brilliant students and dedicated faculty members.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-16 bg-bg-alt/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <ScrollReveal key={achievement.id} delay={index * 0.1}>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  <div className="flex flex-wrap items-center gap-3 mb-4 relative z-10">
                    <span className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                      {achievement.date}
                    </span>
                    <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-3 relative z-10">
                    {achievement.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed relative z-10">
                    {achievement.content}
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
