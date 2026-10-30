import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Home,
  Award,
  ShieldCheck,
  MapPin,
  Sparkles,
  Maximize2,
  Paintbrush,
  CheckCircle2,
} from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { StatsCounter } from '../components/StatsCounter.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { RecentProjectsSection } from '../components/RecentProjectsSection.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 bg-[#F7F7F5]">
      {/* 1. Hero Section with Bold Modern Industrial Typography */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        <BlueprintGrid opacity={0.035} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Architectural Kicker */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-[2px] bg-[#1558C9]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#1558C9] font-secondary">
              Amsterdam · Jacob Obrechtstraat 69 · Residential Construction & Renovation
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bold Headline & Action Zone */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6rem] leading-[0.98] text-[#030407] tracking-[-0.03em] font-extrabold mb-8">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    Building Spaces.
                  </motion.span>
                </span>
                <span className="block overflow-hidden mt-1">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-[#1558C9] font-serif font-extrabold"
                  >
                    Creating Lasting Value.
                  </motion.span>
                </span>
              </h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#66686D] leading-[1.75] font-normal mb-10 max-w-xl"
              >
                Specializing in complete residential transformations, luxury home renovations, custom kitchens,
                travertine bathrooms, and architectural extensions across Amsterdam and North Holland.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
              >
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] hover:bg-[#bceb16] transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] cursor-pointer group rounded-md"
                >
                  <span>Request Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#030407]" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#030407] border-2 border-[#030407] hover:bg-[#030407] hover:text-white transition-all duration-200 cursor-pointer rounded-md"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Direct Trust Micro-indicators */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#030407]/10">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#66686D] leading-snug">
                    Fixed line-item quotes, guaranteed milestone schedules & 10-year structural warranty
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#66686D] leading-snug">
                    Headquartered at Jacob Obrechtstraat, Amsterdam Oud-Zuid
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Architectural Photo */}
            <div className="lg:col-span-5 relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden aspect-4/3 sm:aspect-16/11 shadow-2xl border border-[#030407]/10 rounded-xl"
              >
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  src={imageMapping.homeHero.url}
                  alt={imageMapping.homeHero.alt}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />

                {/* Technical CAD Measurement Lines Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[9px] font-mono text-white bg-[#030407]/90 backdrop-blur-xs px-2.5 py-1 border border-white/20 rounded-xs">
                  <span className="w-1.5 h-1.5 bg-[#D4FF24] rounded-full inline-block" />
                  <span>RESIDENCE · 52°21'19"N 4°52'42"E · AMSTERDAM</span>
                </div>                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-sm p-4 border border-[#030407]/10 shadow-lg rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#1558C9]" />
                    <span className="text-[10px] uppercase tracking-widest text-[#1558C9] font-bold font-secondary">
                      Signature Residential Architecture
                    </span>
                  </div>
                  <p className="text-xs text-[#111214] font-medium leading-snug">
                    Contemporary Dutch townhouse renovation with bespoke steel-framed glazing and restored masonry.
                  </p>
                </div>
              </motion.div>

              {/* Decorative Corner Framing */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#1558C9]/40 pointer-events-none rounded-br-lg" />
            </div>
          </div>

          {/* Bottom Information Strip */}
          <div className="mt-14 pt-8 border-t border-[#030407]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#030407] font-bold">Home Renovations</p>
                <p className="text-xs text-[#66686D]">Canal houses & luxury residences</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#030407] font-bold tabular-nums">25+ Years</p>
                <p className="text-xs text-[#66686D]">Master Dutch craftsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#030407] font-bold tabular-nums">100+ Homes</p>
                <p className="text-xs text-[#66686D]">Transformed across North Holland</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-[#030407] font-bold">Amsterdam</p>
                <p className="text-xs text-[#66686D]">Oud-Zuid, Centrum, Randstad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Before/After Transformation Feature Showcase */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] border-y border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#1558C9]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9]">
                Architectural Proof of Work
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#030407] font-extrabold mb-4">
              From Raw Substrates to <span className="text-[#1558C9]">Master Handover.</span>
            </h2>
            <p className="text-base text-[#66686D] leading-relaxed">
              Drag the interactive slider below to inspect our real transformations across living salons, bespoke kitchens,
              travertine bathrooms, historic facades, and complete residential renovations.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </section>

      {/* 3. Editorial About & Craftsmanship Preview */}
      <section className="py-20 md:py-28 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 overflow-hidden shadow-xl border border-[#030407]/10 rounded-xl">
                <ArchitecturalImage
                  src={imageMapping.homeAboutPreview.url}
                  alt={imageMapping.homeAboutPreview.alt}
                  fallbackTitle="Restored Living Space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-4 w-1/2 aspect-4/3 overflow-hidden shadow-2xl border-4 border-white rounded-lg">
                <ArchitecturalImage
                  src={imageMapping.homeCraftsmanship.url}
                  alt={imageMapping.homeCraftsmanship.alt}
                  fallbackTitle="Artisanal Joinery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#1558C9]" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] font-secondary">
                  About Proven Projecten
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#030407] tracking-tight mb-6 font-extrabold">
                Craftsmanship That Shapes <span className="text-[#1558C9]">Better Homes.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#66686D] leading-[1.75] font-normal mb-6">
                Proven Projecten B.V. is an Amsterdam construction and residential renovation firm founded on
                uncompromising standards, transparent line-item contracts, and master finishing.
                From monumental canal houses to contemporary urban villas, we oversee structural engineering, MEP infrastructure,
                custom oak joinery, and interior design under a single accountable director.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs text-[#111214] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9]" />
                  <span>Licensed Dutch master builders</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111214] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9]" />
                  <span>Historic monument permit expertise</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111214] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9]" />
                  <span>In-house millwork & joinery workshop</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111214] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9]" />
                  <span>10-year structural warranty</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1558C9] hover:text-[#030407] pb-1 border-b-2 border-[#1558C9] transition-colors group"
                >
                  <span>Learn More About Our Team & Approach</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Residential Disciplines Hub */}
      <section className="py-20 md:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#1558C9]" />
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] font-secondary">
                  Complete Residential Capabilities
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#030407] tracking-tight font-extrabold">
                Residential Building Disciplines
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#1558C9] hover:underline"
            >
              View All 12 Architectural Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/services/residential"
              className="p-8 bg-[#F7F7F5] border border-[#030407]/10 hover:border-[#1558C9] transition-all hover:shadow-xl group rounded-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] mb-4 group-hover:bg-[#1558C9] group-hover:text-white transition-colors">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-[#1558C9] font-bold block mb-2">COMPLETE RENOVATION</span>
              <h3 className="font-serif text-2xl text-[#030407] group-hover:text-[#1558C9] transition-colors mb-2 font-bold">
                Residential Services
              </h3>
              <p className="text-xs text-[#66686D] leading-relaxed mb-6 font-normal">
                Full-scope transformations of canal houses, modern townhomes, and private family residences in Amsterdam.
              </p>
              <span className="text-xs font-bold text-[#1558C9] inline-flex items-center gap-1 group-hover:underline">
                Explore Residential <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/services/interior-design"
              className="p-8 bg-[#030407] text-white border border-[#030407] hover:border-[#D4FF24] transition-all hover:shadow-2xl group rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 bg-[#D4FF24] text-[#030407] text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-xs">
                Featured Focus
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#D4FF24] flex items-center justify-center text-[#030407] mb-4">
                <Paintbrush className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-[#D4FF24] font-bold block mb-2">SPATIAL ARCHITECTURE</span>
              <h3 className="font-serif text-2xl text-white group-hover:text-[#D4FF24] transition-colors mb-2 font-bold">
                Interior Design & Joinery
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6 font-normal">
                Custom oak kitchens, travertine bathrooms, herringbone parquet, bespoke library walls, and atmospheric lighting.
              </p>
              <span className="text-xs font-bold text-[#D4FF24] inline-flex items-center gap-1 group-hover:underline">
                Explore Interior Design <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/services/extensions"
              className="p-8 bg-[#F7F7F5] border border-[#030407]/10 hover:border-[#1558C9] transition-all hover:shadow-xl group rounded-xl"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] mb-4 group-hover:bg-[#1558C9] group-hover:text-white transition-colors">
                <Maximize2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase text-[#1558C9] font-bold block mb-2">STRUCTURAL EXPANSIONS</span>
              <h3 className="font-serif text-2xl text-[#030407] group-hover:text-[#1558C9] transition-colors mb-2 font-bold">
                Extensions & Roof Works
              </h3>
              <p className="text-xs text-[#66686D] leading-relaxed mb-6 font-normal">
                Ground-floor glass garden rooms, steel portal installations, zinc dormers, and rooftop terrace construction.
              </p>
              <span className="text-xs font-bold text-[#1558C9] inline-flex items-center gap-1 group-hover:underline">
                Explore Extensions <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Verified Statistics Counter (Midnight Black Feature Section) */}
      <StatsCounter />

      {/* 6. Recent Projects (Before & After Showcase) */}
      <RecentProjectsSection />

      {/* 7. Consultation Banner CTA (Midnight Black with Acid Lime Action) */}
      <section className="py-20 bg-[#030407] text-[#FFFFFF] border-t border-white/10 relative overflow-hidden">
        <BlueprintGrid opacity={0.03} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4FF24] font-bold block mb-3 font-secondary">
            Plan Your Home Project With Proven Projecten
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 font-extrabold text-white">
            Homes designed to inspire. <span className="text-[#1558C9]">Built to last.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Contact our Amsterdam engineering office for an itemized estimate, architectural survey,
            or comprehensive project discussion for your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/free-consultation"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#030407] bg-[#D4FF24] hover:bg-[#bceb16] transition-all shadow-md hover:shadow-lg hover:translate-y-[-1px] rounded-md"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white border-2 border-white/30 hover:bg-white hover:text-[#030407] transition-all rounded-md"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
