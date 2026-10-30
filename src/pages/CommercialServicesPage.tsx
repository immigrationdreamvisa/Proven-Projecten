import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building, Briefcase, Clock, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const CommercialServicesPage: React.FC = () => {
  const galleryItems = [
    { title: 'Boutique Hotel Suites', image: imageMapping.commercialHotel.url, caption: 'Acoustic isolation, integrated headboards & en-suites' },
    { title: 'Executive Workspaces', image: imageMapping.commercialOffice.url, caption: 'Industrial steel-framed glass partitions & zoned MEP' },
    { title: 'Sculptural Receptions', image: imageMapping.commercialReception.url, caption: 'Custom terrazzo desks & atmospheric welcome lighting' },
    { title: 'Hospitality Dining', image: imageMapping.commercialRestaurant.url, caption: 'Acoustic slatted timber & commercial kitchen readiness' },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-24 bg-[#F7F7F5] border-b border-[#030407]/10 overflow-hidden">
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
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9]">
                Specialized Architectural Discipline
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Commercial Interiors & <span className="text-[#1558C9]">Hospitality Fit-Outs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              We deliver sophisticated boutique hotel renovations, executive corporate headquarters,
              and premier hospitality interiors across Amsterdam, balancing brand prestige with rigorous deadline control.
            </motion.p>
          </div>

          {/* Hero Photography with Slow Zoom */}
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
              <img
                src={imageMapping.commercialHero.url}
                alt={imageMapping.commercialHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                HOSPITALITY FIT-OUT · AMSTERDAM
              </span>
              <span className="font-light leading-relaxed">
                Architectural fluted timber panelling, sculptural stone reception counter, and discreet ambient lighting.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Commercial Pillars & Hotel Experience */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block">
                Commercial Performance
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] font-bold leading-tight tracking-[-0.02em]">
                Engineered for High Traffic, Acoustic Privacy & <span className="text-[#1558C9]">Fast Handover.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Commercial environments require disciplined construction management. Building on landmark projects
                such as the comprehensive historical renovation of <strong>De Ware Jacob Hotel</strong> in Amsterdam
                Oud-Zuid, our team is adept at navigating central-location logistics, tight working hours, and
                stringent municipal safety certifications.
              </p>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                We work during phased schedules or night-shifts when needed, ensuring existing operations remain
                undisturbed while new guest rooms, executive meeting suites, or dining zones are completed on time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#030407]/10">
                <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10">
                  <Building className="w-5 h-5 text-[#1558C9] mb-2" />
                  <h3 className="text-xs font-bold text-[#030407]">Hospitality & Hotels</h3>
                  <p className="text-[11px] text-[#66686D] mt-1">Guest room suites, bespoke joinery, en-suite wetrooms, and lounges.</p>
                </div>
                <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10">
                  <Briefcase className="w-5 h-5 text-[#1558C9] mb-2" />
                  <h3 className="text-xs font-bold text-[#030407]">Offices & Studios</h3>
                  <p className="text-[11px] text-[#66686D] mt-1">Flexible floorplates, acoustic glass walls, and collaborative breakout zones.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  <span>Request Commercial Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden shadow-2xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.commercialReception.url}
                  alt={imageMapping.commercialReception.alt}
                  fallbackTitle="Reception Lounge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10 mt-4 flex items-center justify-between text-xs text-[#030407]">
                <span className="font-serif italic font-bold">Bespoke Architectural Reception Counters</span>
                <span className="font-mono text-[#1558C9] text-[10px] font-bold">COMMERCIAL FIT-OUT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Commercial Gallery */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-[-0.02em]">
              Hospitality & Corporate <span className="text-[#1558C9]">Environments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#030407]/10 overflow-hidden shadow-md group hover:border-[#1558C9] transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-[#F7F7F5]">
                  <ArchitecturalImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-[#030407] font-bold">{item.title}</h3>
                  <p className="text-xs text-[#66686D] mt-1 font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="py-20 bg-[#030407] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            Planning a Commercial or Hospitality Renovation?
          </h2>
          <p className="text-sm text-[#66686D] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Discuss your timeline, phased construction strategy, and technical requirements with our commercial project director.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md inline-block rounded-xs"
          >
            Request Commercial Quote
          </Link>
        </div>
      </section>
    </div>
  );
};
