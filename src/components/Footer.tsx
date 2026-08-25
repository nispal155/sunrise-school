import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white/10 shrink-0">
                <Image src="/school-logo.jpeg" alt="Sunrise English Boarding School Logo" fill className="object-cover" />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                Sunrise English Boarding School
              </h3>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed max-w-xs">
              &quot;Our endeavor is to serve a quality education.&quot; Empowering students with knowledge and character.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent transition-colors duration-200">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-accent transition-colors duration-200">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Itahari-3, Baukajhoda<br />Itahari, Nepal</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sunriseschool076@gmail.com" className="hover:text-accent transition-colors duration-200">
                  sunriseschool076@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+9779862058749" className="hover:text-accent transition-colors duration-200">
                  986-2058749
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <h5 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase opacity-80">Follow Us</h5>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100057438009532" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@sunriseschool33?_r=1&_t=ZS-99Ah2PzfzyZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.34 2.88 2.88 0 012.31-4.53 2.66 2.66 0 011.61.53V9.5a6.33 6.33 0 00-2-.33 6.32 6.32 0 106.66 6.18V8.66a8.3 8.3 0 004.3 1.15V6.36a5.2 5.2 0 01-1.46.33z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Location Map */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Find Us</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.3856961695469!2d87.29882460407428!3d26.68097300898896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6b36fc844ef3%3A0xca75e796eb8e3057!2z4aSb4aSj4aSY4aSg4aSW4aSlIFN1bnJpc2UgRW5nbGlzaCBCb2FyZGluZyBTY2hv!5e0!3m2!1sen!2snp!4v1787639186070!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Sunrise English Boarding School. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ♥</p>
        </div>
      </div>
    </footer>
  );
}
