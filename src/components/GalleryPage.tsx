"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type Category = "All" | "Examination" | "Tour" | "Sports" | "Events";

interface GalleryImage {
  id: number;
  src: string;
  category: "Examination" | "Tour" | "Sports" | "Events";
  altText: string;
}

const CATEGORIES: Category[] = ["All", "Examination", "Tour", "Sports", "Events"];

const GALLERY_DATA: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800",
    category: "Examination",
    altText: "Students focused during final examinations",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800",
    category: "Examination",
    altText: "Science practical exams in the laboratory",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    category: "Examination",
    altText: "Writing the final board exams",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800",
    category: "Tour",
    altText: "Educational tour to the historical museum",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1504609774514-cbac78c139c8?q=80&w=800",
    category: "Tour",
    altText: "Students exploring nature during the annual hike",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800",
    category: "Tour",
    altText: "Group photo at the botanical garden",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1461896836934-ffe145ab64c1?q=80&w=800",
    category: "Sports",
    altText: "Annual sports day track events",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800",
    category: "Sports",
    altText: "Inter-house football tournament finals",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800",
    category: "Sports",
    altText: "Basketball practice session after school",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
    category: "Events",
    altText: "Cultural dance performance at the annual function",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800",
    category: "Events",
    altText: "Parents day celebration and prize distribution",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    category: "Events",
    altText: "Art exhibition showcasing student creativity",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return GALLERY_DATA;
    return GALLERY_DATA.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
  }, [filteredImages.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
  }, [filteredImages.length]);

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
    <section id="gallery" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Photo Gallery
          </h1>
          {/* Decorative blue underline */}
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-gray-500">
            Capturing moments and memories from our school life
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null); // Reset lightbox if open
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative break-inside-avoid overflow-hidden rounded-xl bg-gray-100 cursor-pointer group"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.altText}
                  width={600}
                  height={image.id % 2 === 0 ? 800 : 500}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary/80 to-transparent">
                  <p className="text-white text-sm font-medium line-clamp-2">{image.altText}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
              className="absolute inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            />

            {/* Modal Content */}
            <motion.div
              layoutId={`gallery-image-${filteredImages[selectedIndex].id}`}
              className="relative w-[95vw] h-[80vh] md:w-[85vw] md:h-[85vh] z-10 flex items-center justify-center pointer-events-none"
            >
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].altText}
                fill
                className="object-contain pointer-events-auto"
                sizes="100vw"
                priority
              />

              {/* Image Title in Modal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-16 left-0 right-0 text-center pointer-events-auto flex flex-col items-center gap-2"
              >
                <span className="text-white text-sm md:text-base font-medium tracking-wide drop-shadow-lg max-w-2xl px-4">
                  {filteredImages[selectedIndex].altText}
                </span>
                <span className="text-white/50 text-xs tracking-widest uppercase">
                  {selectedIndex + 1} / {filteredImages.length}
                </span>
              </motion.div>
            </motion.div>

            {/* Controls */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-2 md:px-8"
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Previous image"
              >
                <i className="fi fi-rr-angle-left text-2xl md:text-4xl"></i>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="pointer-events-auto p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none"
                aria-label="Next image"
              >
                <i className="fi fi-rr-angle-right text-2xl md:text-4xl"></i>
              </button>
            </motion.div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-30 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 focus:outline-none"
              aria-label="Close modal"
            >
              <i className="fi fi-rr-cross text-xl md:text-2xl"></i>
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
