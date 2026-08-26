"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStaffDropdownOpen, setIsStaffDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // If we are on the home page, it becomes solid only when scrolled.
  // On other pages (which have white backgrounds), it must always be solid.
  const isSolid = scrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Notice Bar */}
      <div className={`w-full bg-accent text-white flex items-center transition-all duration-300 overflow-hidden ${
        isSolid ? "h-0 opacity-0" : "h-8 opacity-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center h-full">
          <span className="text-xs font-bold uppercase tracking-wider bg-white text-accent px-2 py-0.5 rounded-sm mr-4 shrink-0 z-10 shadow-sm">
            Notice
          </span>
          <div className="overflow-hidden relative flex-grow h-full flex items-center">
            <div className="animate-marquee whitespace-nowrap text-sm font-medium">
              Welcome to Sunrise English Boarding School. Admissions are now open for the Academic Year 2026! &nbsp;&nbsp;&bull;&nbsp;&nbsp; First Term Examination routine has been published.
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isSolid ? "py-4" : "py-4 md:py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden transition-colors duration-300 ${isSolid ? "bg-primary/10" : "bg-white/20 backdrop-blur-sm"}`}>
              <Image src="/school-logo.jpeg" alt="Sunrise English Boarding School Logo" fill className="object-cover" />
            </div>
            <span
              className={`font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                isSolid ? "text-primary" : "text-white"
              } hidden sm:block`}
            >
              Sunrise English Boarding School
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#hero"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              }`}
            >
              Home
            </Link>

            <Link
              href="/#about"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              }`}
            >
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-accent relative flex items-center gap-1 ${
                  isSolid ? "text-text" : "text-white/90"
                }`}
              >
                Academics
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-border overflow-hidden"
                  >
                    <Link
                      href="/#academics"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Academic Programs
                    </Link>
                    <Link
                      href="/past-questions"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Past Questions
                    </Link>
                    <Link
                      href="/academics/scholarship"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Scholarship
                    </Link>
                    <Link
                      href="/academics/fee-structure"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Fee Structure
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsStaffDropdownOpen(true)}
              onMouseLeave={() => setIsStaffDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-accent relative flex items-center gap-1 ${
                  isSolid ? "text-text" : "text-white/90"
                }`}
              >
                Our Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isStaffDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 border border-border overflow-hidden"
                  >
                    <Link
                      href="/staff#teachers"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsStaffDropdownOpen(false)}
                    >
                      Teachers
                    </Link>
                    <Link
                      href="/staff#administration"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsStaffDropdownOpen(false)}
                    >
                      Administration
                    </Link>
                    <Link
                      href="/staff#support-team"
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                      onClick={() => setIsStaffDropdownOpen(false)}
                    >
                      Support Team
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#news"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              }`}
            >
              News & Events
            </Link>
            <Link
              href="/#gallery"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium transition-colors bg-accent hover:opacity-90 text-white px-6 py-2.5 rounded-full shadow-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${
                isSolid ? "text-primary" : "text-white"
              }`}
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/#hero"
                className="block px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Academics
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-6 space-y-1"
                    >
                      <Link
                        href="/#academics"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Academic Programs
                      </Link>
                      <Link
                        href="/past-questions"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Past Questions
                      </Link>
                      <Link
                        href="/academics/scholarship"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Scholarship
                      </Link>
                      <Link
                        href="/academics/fee-structure"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Fee Structure
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-1">
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                  onClick={() => setIsStaffDropdownOpen(!isStaffDropdownOpen)}
                >
                  Our Team
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isStaffDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isStaffDropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-6 space-y-1"
                    >
                      <Link
                        href="/staff#teachers"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Teachers
                      </Link>
                      <Link
                        href="/staff#administration"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Administration
                      </Link>
                      <Link
                        href="/staff#support-team"
                        className="block px-3 py-2 text-sm font-medium rounded-md transition-colors text-text-muted hover:text-primary hover:bg-bg-alt"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Support Team
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link
                href="/#news"
                className="block px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                href="/#gallery"
                className="block px-3 py-3 text-base font-medium rounded-md transition-colors text-text hover:text-primary hover:bg-bg-alt"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-3 mt-4 text-base font-medium rounded-md transition-colors bg-accent text-white text-center hover:bg-accent/90 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
