import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { AnimatedFacadeDrawing, BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. About Editorial Hero */}
      <section className="relative pt-12 pb-24 bg-[#F7F7F5] overflow-hidden border-b border-[#030407]/10">
        <BlueprintGrid opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#1558C9]" />
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-semibold text-[#1558C9]">
                About Proven Projecten B.V.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Craftsmanship Grounded in <span className="text-[#1558C9]">Integrity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              Based in Amsterdam Oud-Zuid, Proven Projecten combines traditional European building
              craftsmanship with rigorous modern engineering, delivering residential and commercial
              transformations with absolute transparency.
            </motion.p>
          </div>

          {/* Hero Wide Photography Frame with Slow Cinematic Zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden shadow-2xl border border-[#030407]/10 group"
          >
            <motion.div
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <ArchitecturalImage
                src={imageMapping.aboutHero.url}
                alt={imageMapping.aboutHero.alt}
                fallbackTitle="Architecture Team On-Site"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                ON-SITE DIRECTION · AMSTERDAM OUD-ZUID
              </span>
              <span className="font-light leading-relaxed">
                Our licensed engineers and site directors coordinate every structural calculation and artisanal detail.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Dive: Firm History & Philosophy */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Dual Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 overflow-hidden shadow-xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.aboutMain.url}
                  alt={imageMapping.aboutMain.alt}
                  fallbackTitle="Master Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-8 -right-4 w-3/5 aspect-4/3 overflow-hidden shadow-2xl border-4 border-white">
                <ArchitecturalImage
                  src={imageMapping.aboutArchitectDrawings.url}
                  alt={imageMapping.aboutArchitectDrawings.alt}
                  fallbackTitle="Technical Drawings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
                Heritage & Precision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] font-bold leading-tight mb-6">
                Bridging Historic Preservation & <span className="text-[#1558C9]">Contemporary Living.</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                <p>
                  Established in Amsterdam with Chamber of Commerce registration <strong>86893033</strong>,
                  Proven Projecten B.V. was formed in response to the common pitfalls of the construction
                  industry: hidden costs, fragmented communication, and subcontracting compromises.
                </p>
                <p>
                  We instituted a direct, single-point-of-contact project management structure. From the
                  moment your initial survey begins to the final hand-polished brass fitting, your project
                  director maintains full accountability over schedules, building permits, and quality controls.
                </p>
                <p>
                  Our craftsmen specialize in historic monumental Amsterdam masonry (knipvoeg & snijvoeg),
                  structural steel portal insertions, underfloor acoustic isolation, French oak parquet,
                  and spa-grade natural stone installations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 mt-8 border-t border-[#030407]/10">
                <div>
                  <span className="font-serif editorial-number text-3xl sm:text-4xl font-bold text-[#1558C9] tabular-nums block">25+ Yrs</span>
                  <p className="font-secondary text-xs text-[#66686D] mt-1 uppercase tracking-wider font-semibold">Master Trade Experience</p>
                </div>
                <div>
                  <span className="font-serif editorial-number text-3xl sm:text-4xl font-bold text-[#1558C9] tabular-nums block">100+</span>
                  <p className="font-secondary text-xs text-[#66686D] mt-1 uppercase tracking-wider font-semibold">Delivered Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Pillar Construction Philosophy */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
              Our Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-tight">
              The 4 Core Principles of <span className="text-[#1558C9]">Proven Projecten</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <span className="font-serif editorial-number text-4xl sm:text-5xl font-bold text-[#1558C9] block mb-3">01.</span>
              <h3 className="font-secondary text-lg font-bold text-[#030407] mb-2">
                Pre-Construction Clarity & Fixed-Price Accounting
              </h3>
              <p className="text-xs sm:text-sm text-[#66686D] font-light leading-relaxed">
                Before commencing demolition, we complete full structural and moisture surveys, verifying
                MEP conduits and local permit parameters. You receive an itemized cost schedule with zero
                unauthorized variations.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <span className="font-serif editorial-number text-4xl sm:text-5xl font-bold text-[#1558C9] block mb-3">02.</span>
              <h3 className="font-secondary text-lg font-bold text-[#030407] mb-2">
                Certified Master Trades & In-House Joinery
              </h3>
              <p className="text-xs sm:text-sm text-[#66686D] font-light leading-relaxed">
                We believe in artisanal continuity. Our team comprises licensed Dutch tradespeople,
                master carpenters, certified gas and water technicians, and plaster artisans who maintain
                uniform standards across every square meter.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <span className="font-serif editorial-number text-4xl sm:text-5xl font-bold text-[#1558C9] block mb-3">03.</span>
              <h3 className="font-secondary text-lg font-bold text-[#030407] mb-2">
                Weekly Digital Milestones & Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#66686D] font-light leading-relaxed">
                Clients receive regular photographic progress updates, timeline tracking, and scheduled
                on-site walkthroughs. You have direct access to your project director throughout the build.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <span className="font-serif editorial-number text-4xl sm:text-5xl font-bold text-[#1558C9] block mb-3">04.</span>
              <h3 className="font-secondary text-lg font-bold text-[#030407] mb-2">
                Two-Stage Handover & Statutory Guarantees
              </h3>
              <p className="text-xs sm:text-sm text-[#66686D] font-light leading-relaxed">
                Final delivery only occurs after a rigorous two-stage punch-list inspection. We deliver all
                statutory building guarantees, maintenance manuals, and ongoing technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Architectural Facade Drawing Section */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#1558C9] font-bold block mb-2">
            PRECISION ENGINEERING CAD SCHEMATIC
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#030407] font-bold mb-4">
            Structural Facade Elevation & Extension Alignment
          </h2>
          <p className="text-xs sm:text-sm text-[#66686D] max-w-xl mx-auto mb-10 font-light">
            Every Proven Projecten renovation is modeled with CAD precision, aligning historical load-bearing
            facades with modern steel framing and thermal glazing.
          </p>

          <div className="p-6 bg-[#F7F7F5] border border-[#030407]/10 shadow-inner">
            <AnimatedFacadeDrawing />
          </div>
        </div>
      </section>

      {/* 5. Modern Completed Residential Interior & CTA */}
      <section className="py-20 bg-[#030407] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#D4FF24] block mb-2 font-mono font-bold">
                COMPLETED RESIDENTIAL TRANSFORMATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
                Let Us Elevate Your Property.
              </h2>
              <p className="text-sm text-[#66686D] font-light leading-relaxed mb-8">
                Whether undertaking a full townhouse restoration or seeking expert project management,
                our Amsterdam team is prepared to guide your vision from concept to completion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/free-consultation"
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-16/10 overflow-hidden border border-white/10 shadow-2xl">
                <ArchitecturalImage
                  src={imageMapping.aboutModernInterior.url}
                  alt={imageMapping.aboutModernInterior.alt}
                  fallbackTitle="Completed Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
