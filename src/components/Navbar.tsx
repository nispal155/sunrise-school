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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isSolid = !isHome || scrolled;

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
        isSolid ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
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
              href="/"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              } ${pathname === "/" ? (isSolid ? "text-accent" : "text-white font-bold") : ""}`}
            >
              Home
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                  isSolid ? "text-text" : "text-white/90"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                About Us
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md overflow-hidden border border-border"
                  >
                    <ul className="py-2">
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                        >
                          Message from Founder
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                        >
                          Message from Director
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/news"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              } ${pathname === "/news" ? (isSolid ? "text-accent" : "text-white font-bold") : ""}`}
            >
              News & Events
              {pathname === "/news" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
              )}
            </Link>
            <Link
              href="/gallery"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              } ${pathname === "/gallery" ? (isSolid ? "text-accent" : "text-white font-bold") : ""}`}
            >
              Gallery
              {pathname === "/gallery" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
              )}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent relative ${
                isSolid ? "text-text" : "text-white/90"
              } ${pathname === "/contact" ? (isSolid ? "text-accent" : "text-white font-bold") : ""}`}
            >
              Contact Us
              {pathname === "/contact" && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent rounded-full" />
              )}
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
                href="/"
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  pathname === "/" ? "bg-bg-alt text-primary" : "text-text hover:text-primary hover:bg-bg-alt"
                }`}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <span className="block text-base font-medium text-text mb-2">
                  About Us
                </span>
                <div className="pl-4 space-y-1 border-l-2 border-border ml-2">
                  <Link
                    href="#"
                    className="block py-2 text-sm text-text-muted hover:text-primary"
                  >
                    Message from Founder
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm text-text-muted hover:text-primary"
                  >
                    Message from Director
                  </Link>
                </div>
              </div>
              <Link
                href="/news"
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  pathname === "/news" ? "bg-bg-alt text-primary" : "text-text hover:text-primary hover:bg-bg-alt"
                }`}
              >
                News & Events
              </Link>
              <Link
                href="/gallery"
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  pathname === "/gallery" ? "bg-bg-alt text-primary" : "text-text hover:text-primary hover:bg-bg-alt"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  pathname === "/contact" ? "bg-bg-alt text-primary" : "text-text hover:text-primary hover:bg-bg-alt"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
