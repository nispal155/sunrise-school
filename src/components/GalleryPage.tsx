"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import AnimatedText from "./AnimatedText";

const galleryImages = [
  {
    id: 1,
    title: "Morning Assembly",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Science Laboratory",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Library & Reading",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Cultural Dance Performance",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
    className: "md:col-span-2 md:row-span-1",
    featured: true,
  },
  {
    id: 5,
    title: "Sports Day",
    src: "https://images.unsplash.com/photo-1461896836934-ffe145ab64c1?q=80&w=800",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    title: "Classroom Learning",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 7,
    title: "Art & Creativity",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 8,
    title: "Campus Life",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [selectedIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Body scroll lock
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedText
            text="Our Gallery: Capturing Quality Education in Nepal"
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          />
          <ScrollReveal delay={3}>
            <p className="text-lg text-text">
              Take a glimpse into the vibrant campus life, dedicated academics, and
              extracurricular excellence at Sunrise English Boarding School.
            </p>
          </ScrollReveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={image.id}
              delay={index + 2}
              className={`relative overflow-hidden rounded-xl bg-gray-100 ${image.className}`}
            >
              <motion.div
                layoutId={`gallery-image-${image.id}`}
                className="w-full h-full relative cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500" />

                {/* Title on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white font-semibold text-xl md:text-2xl tracking-wide text-center px-4 drop-shadow-md">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Blurred Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`gallery-image-${galleryImages[selectedIndex].id}`}
              className="relative w-[90vw] h-[80vh] md:w-[85vw] md:h-[85vh] z-10 flex items-center justify-center pointer-events-none"
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                fill
                className="object-contain pointer-events-auto shadow-2xl"
                sizes="100vw"
                priority
              />
              
              {/* Image Title in Modal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-12 left-0 right-0 text-center pointer-events-auto"
              >
                <span className="text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-lg">
                  {galleryImages[selectedIndex].title}
                </span>
              </motion.div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4 md:px-8"
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-3 md:p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="pointer-events-auto p-3 md:p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-30 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none backdrop-blur-sm"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
