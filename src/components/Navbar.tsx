import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { Phone, ChevronDown, Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';

const SERVICE_LINKS = [
  { name: 'Residential Services', path: '/services/residential', desc: 'Canal houses, townhomes & private suites' },
  { name: 'Commercial & Hospitality', path: '/services/commercial', desc: 'Boutique hotels, lounges & offices' },
  { name: 'Renovation', path: '/services/renovation', desc: 'Structural overhauls & interior transformations' },
  { name: 'Maintenance & Upkeep', path: '/services/maintenance', desc: 'Preventative building envelope care' },
  { name: 'Extensions & Roof Works', path: '/services/extensions', desc: 'Glass garden rooms & zinc dormers' },
  { name: 'Interior Design', path: '/services/interior-design', desc: 'Spatial architecture, joinery & lighting' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || location.pathname !== '/'
        ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#030407]/10 py-3.5'
        : 'bg-[#FFFFFF]/90 backdrop-blur-xs py-4.5 border-b border-[#030407]/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Wordmark & Emblem */}
          <Link to="/" className="group shrink-0">
            <Logo isLight={false} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#111214]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors whitespace-nowrap py-1 relative ${isActive
                  ? 'text-[#1558C9] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1558C9]'
                  : 'hover:text-[#1558C9]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors whitespace-nowrap py-1 relative ${isActive
                  ? 'text-[#1558C9] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1558C9]'
                  : 'hover:text-[#1558C9]'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 transition-colors whitespace-nowrap ${isServicesActive
                  ? 'text-[#1558C9] font-bold'
                  : 'hover:text-[#1558C9]'
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#1558C9]' : ''
                    }`}
                />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#FFFFFF] border border-[#030407]/10 shadow-2xl p-3 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50 rounded-lg">
                  <div className="px-3 py-1.5 border-b border-[#030407]/10 mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1558C9]">
                      Specialized Disciplines
                    </span>
                    <Link
                      to="/services"
                      className="text-[10px] text-[#1558C9] font-semibold hover:underline"
                    >
                      All Services
                    </Link>
                  </div>
                  {SERVICE_LINKS.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`text-left px-3 py-2 text-xs transition-all block group rounded-md ${location.pathname === service.path
                        ? 'bg-[#1558C9]/10 text-[#1558C9] font-bold'
                        : 'text-[#111214] hover:bg-[#F7F7F5] hover:text-[#1558C9]'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        <ArrowRight className="w-3 h-3 text-[#1558C9] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-[10px] text-[#66686D] font-normal mt-0.5 truncate">
                        {service.desc}
                      </p>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-[#030407]/10 mt-1">
                    <Link
                      to="/services"
                      className="w-full text-center py-1.5 text-xs font-bold text-[#1558C9] hover:underline block"
                    >
                      Explore Complete Services Hub →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors whitespace-nowrap py-1 relative ${isActive
                  ? 'text-[#1558C9] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#1558C9]'
                  : 'hover:text-[#1558C9]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Action Zone: Header Phone & CTA */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            {/* Header phone */}
            <a
              href="tel:+31627405632"
              className="flex items-center gap-2 text-xs font-semibold text-[#111214] hover:text-[#1558C9] transition-colors whitespace-nowrap py-1"
              title="Direct Telephone Line"
            >
              <span className="w-7 h-7 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9]">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="tracking-wide">31 6 54 39 82 45</span>
            </a>

            {/* Prominent Acid Lime Get a Free Quote Button */}
            <Link
              to="/free-consultation"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] hover:bg-[#bceb16] transition-all duration-200 shadow-sm hover:shadow-md hover:translate-y-[-1px] cursor-pointer whitespace-nowrap shrink-0 group rounded-md"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#030407]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/free-consultation"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] sm:hidden whitespace-nowrap rounded-md"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111214] hover:text-[#1558C9] transition-colors cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FFFFFF] border-b border-[#030407]/10 shadow-2xl p-6 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto z-50">
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className={`text-left py-2 text-base font-medium border-b border-[#030407]/10 ${location.pathname === '/' ? 'text-[#1558C9] font-bold' : 'text-[#111214]'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-left py-2 text-base font-medium border-b border-[#030407]/10 ${location.pathname === '/about' ? 'text-[#1558C9] font-bold' : 'text-[#111214]'
                }`}
            >
              About Us
            </Link>

            {/* Mobile Services Sub-List */}
            <div className="py-2 border-b border-[#030407]/10">
              <Link
                to="/services"
                className="text-base font-medium text-[#111214] block mb-2"
              >
                Services Overview
              </Link>
              <div className="pl-3 space-y-2 border-l-2 border-[#1558C9]/30">
                {SERVICE_LINKS.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="text-xs text-[#66686D] hover:text-[#1558C9] block py-0.5"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`text-left py-2 text-base font-medium border-b border-[#030407]/10 ${location.pathname === '/contact' ? 'text-[#1558C9] font-bold' : 'text-[#111214]'
                }`}
            >
              Contact
            </Link>

            {/* Direct Phone Numbers in Mobile Drawer */}
            <div className="pt-3 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#F7F7F5] rounded-md">
                <span className="text-[#66686D]">Direct Line:</span>
                <a href="tel:+31 6 54 39 82 45" className="font-bold text-[#1558C9] hover:underline">
                  31 6 54 39 82 45
                </a>
              </div>
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#F7F7F5] rounded-md">
                <span className="text-[#66686D]">Amsterdam Office:</span>
                <a href="tel:+31654398245" className="font-bold text-[#1558C9] hover:underline">
                  +31 6 54 39 82 45
                </a>
              </div>
              <div className="flex items-center justify-between text-xs py-2 px-3 bg-[#1558C9]/10 rounded-md">
                <span className="text-[#1558C9] font-medium">WhatsApp Support:</span>
                <a
                  href="https://wa.me/31 6 54 39 82 45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1558C9] hover:underline"
                >
                  Chat (+31 6 54 39 82 45)
                </a>
              </div>

              <Link
                to="/free-consultation"
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] hover:bg-[#bceb16] mt-2 block rounded-md shadow-sm"
              >
                Request Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
