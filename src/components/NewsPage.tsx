"use client";

import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import ScrollReveal from "./ScrollReveal";

const MOCK_NEWS = [
  {
    id: 1,
    date: "August 20, 2026",
    title: "Admissions Open for Academic Year 2026-2027",
    excerpt: "We are thrilled to announce that admissions are now open for the upcoming academic year. Secure your child's future with quality education.",
  },
  {
    id: 2,
    date: "July 15, 2026",
    title: "Annual Sports Meet Concludes Successfully",
    excerpt: "Congratulations to the Blue House for winning the overall championship trophy. Thank you to all parents and students for making it a grand success.",
  },
  {
    id: 3,
    date: "June 05, 2026",
    title: "World Environment Day Celebration",
    excerpt: "Students planted over 100 saplings around the school campus, taking a pledge to protect our environment for future generations.",
  },
  {
    id: 4,
    date: "May 12, 2026",
    title: "Science Exhibition Winners Announced",
    excerpt: "Our senior students showcased brilliant working models on sustainable energy. The winning team will represent our school at the district level.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-bg pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <AnimatedText 
            text="News & Events" 
            className="text-4xl md:text-5xl font-bold text-text tracking-tight mb-4"
          />
          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-lg max-w-2xl">
              Stay updated with the latest happenings, announcements, and events at Sunrise English Boarding School.
            </p>
          </ScrollReveal>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Latest News (2/3 width on desktop) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-text mb-8 border-b border-border pb-4">
              Latest Announcements
            </h2>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {MOCK_NEWS.map((news) => (
                <motion.div 
                  key={news.id} 
                  variants={itemVariants}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
                >
                  <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                    {news.date}
                  </span>
                  <h3 className="text-xl font-bold text-text mb-3">
                    {news.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {news.excerpt}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Facebook Page Plugin (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="sticky top-32 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
                <div className="p-5 border-b border-border bg-bg-alt/50">
                  <h2 className="text-lg font-semibold text-text flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                    Social Feed
                  </h2>
                </div>
                <div className="w-full flex justify-center bg-white min-h-[500px]">
                  {/* Standard Facebook Page Plugin iframe */}
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100057438009532&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="340" 
                    height="500" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Sunrise English Facebook Page Feed"
                  ></iframe>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
