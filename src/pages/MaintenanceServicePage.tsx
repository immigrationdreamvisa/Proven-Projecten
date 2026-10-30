import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowUpRight, Wrench, Droplets, Home, Clock } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const MaintenanceServicePage: React.FC = () => {
  const maintenanceFeatures = [
    { title: 'Exterior Timber & Window Care', image: imageMapping.maintenanceWoodwork.url, desc: 'Restoration, realignment, and micro-porous protective coating for historical sash windows.' },
    { title: 'Technical MEP Infrastructure', image: imageMapping.maintenanceRepairs.url, desc: 'Inspection and maintenance of water manifolds, boilers, heat pumps, and drainage systems.' },
    { title: 'Historic Facade Repointing', image: imageMapping.maintenanceExterior.url, desc: 'Traditional Dutch knipvoeg and snijvoeg lime mortar repointing on Amsterdam canal facades.' },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
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
              Property Maintenance & <span className="text-[#1558C9]">Upkeep.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              Protect your property’s architectural integrity and equity with structured preventative
              maintenance, facade waterproofing, and technical building envelope servicing across the Netherlands.
            </motion.p>
          </div>

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
                src={imageMapping.maintenanceHero.url}
                alt={imageMapping.maintenanceHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                BUILDING ENVELOPE CARE · AMSTERDAM
              </span>
              <span className="font-light leading-relaxed">
                Roof flashing inspections, drainage waterproofing, and masonry preservation for luxury properties.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Maintenance Approach & VvE Contracts */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block">
                Preservation & Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] leading-tight tracking-[-0.02em] font-bold">
                Preventative Vigilance for High-Value <span className="text-[#1558C9]">Dutch Real Estate.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                The Dutch maritime climate exerts relentless wear on exterior masonry, zinc roof valleys,
                and wooden joinery. Without proactive inspection, minor capillary moisture ingress can
                silently degrade structural timber beams and interior plaster.
              </p>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Proven Projecten provides bespoke scheduled maintenance programs for private homeowners,
                real estate investors, and Homeowner Associations (VvE), including detailed photographic
                condition reports and certified technical remediation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#030407]/10">
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Annual roof and gutter water testing</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Timber rot removal & microporous painting</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Historic lime joint repointing (knipvoeg)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Rapid response emergency repairs</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  <span>Request Maintenance Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden shadow-2xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.maintenanceExterior.url}
                  alt={imageMapping.maintenanceExterior.alt}
                  fallbackTitle="Facade Joint Restoration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10 mt-4 flex items-center justify-between text-xs text-[#030407]">
                <span className="font-serif italic text-sm font-bold">Historic Dutch Knipvoeg Repointing</span>
                <span className="font-mono text-[#1558C9] text-[10px] font-bold">MONUMENT PRESERVATION</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Maintenance Pillars Grid */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
              Core Maintenance Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-[-0.02em]">
              Timber, Technical & <span className="text-[#1558C9]">Masonry Care</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white border border-[#030407]/10 overflow-hidden shadow-md group hover:border-[#1558C9] transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-[#F7F7F5]">
                  <ArchitecturalImage
                    src={feat.image}
                    alt={feat.title}
                    fallbackTitle={feat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#030407] font-bold mb-2">{feat.title}</h3>
                  <p className="text-xs text-[#66686D] font-light leading-relaxed">{feat.desc}</p>
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
            Protect Your Property's Value.
          </h2>
          <p className="text-sm text-[#66686D] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Contact Proven Projecten to schedule a full property condition audit or establish a dedicated maintenance contract.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md inline-block rounded-xs"
          >
            Inquire About Maintenance
          </Link>
        </div>
      </section>
    </div>
  );
};
