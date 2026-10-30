import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BlueprintGrid } from './motion/BlueprintElements.tsx';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="relative bg-[#030407] text-[#FFFFFF] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle CAD Blueprint Grid on Midnight Black background */}
      <BlueprintGrid opacity={0.035} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid (12 Columns: 4 + 2 + 3 + 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* 1. Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <Logo isLight={true} />
            </Link>
            <p className="text-xs text-white/70 leading-relaxed font-normal max-w-sm pt-2">
              Proven Projecten B.V. is an Amsterdam-based premier construction and renovation firm
              specializing in luxury residential restorations, high-spec extensions, and bespoke
              commercial hospitality fit-outs throughout the Netherlands.
            </p>

            <div className="pt-2 text-[11px] text-white/60 space-y-1 font-mono">
              <p>Chamber of Commerce (KVK): 86893033</p>
              <p>Established & Registered in Amsterdam</p>
            </div>

            <div className="pt-2">
              <Link
                to="/free-consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] hover:bg-[#bceb16] transition-all hover:translate-x-0.5 cursor-pointer shadow-md rounded-md"
              >
                <span>Request Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#030407]" />
              </Link>
            </div>
          </div>

          {/* 2. Quick Multi-Page Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-white block">
              Pages
            </span>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/" className="hover:text-[#D4FF24] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4FF24] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4FF24] transition-colors">
                  Services Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4FF24] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/free-consultation" className="hover:text-[#D4FF24] transition-colors">
                  Get a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Dedicated Service Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-white block">
              Service Pages
            </span>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/services/residential" className="hover:text-[#D4FF24] transition-colors block">
                  Residential Services
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="hover:text-[#D4FF24] transition-colors block">
                  Commercial & Hospitality
                </Link>
              </li>
              <li>
                <Link to="/services/renovation" className="hover:text-[#D4FF24] transition-colors block">
                  Complete Renovation
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="hover:text-[#D4FF24] transition-colors block">
                  Property Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/extensions" className="hover:text-[#D4FF24] transition-colors block">
                  Extensions & Roof Works
                </Link>
              </li>
              <li>
                <Link to="/services/interior-design" className="hover:text-[#D4FF24] transition-colors block">
                  Interior Design & Joinery
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Official Contact Info & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-white block">
              Contact Us
            </span>
            <div className="space-y-3.5 text-xs text-white/70 leading-relaxed">
              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4FF24] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a
                    href="tel:+31 6 54 39 82 45"
                    className="hover:text-[#D4FF24] transition-colors block text-white font-semibold text-xs"
                  >
                    +31 6 54 39 82 45 <span className="text-[10px] text-[#D4FF24] font-normal tracking-wide">(Direct Line)</span>
                  </a>

                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4FF24] shrink-0" />
                <a
                  href="mailto:info@proven-projecten.nl"
                  className="hover:text-[#D4FF24] transition-colors truncate text-white/90"
                >
                  info@proven-projecten.nl
                </a>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#D4FF24] shrink-0 mt-0.5" />
                <address className="not-italic text-xs text-white/80 leading-snug">
                  Jacob Obrechtstraat 69<br />
                  1071KJ Amsterdam<br />
                  The Netherlands
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Proven Projecten B.V. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#D4FF24] transition-colors cursor-pointer"
            >
              Privacy Policy (AVG)
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#D4FF24] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#D4FF24] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
