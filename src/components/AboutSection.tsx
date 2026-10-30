import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';
import { imageMapping } from '../data/imageMapping.ts';
import { AnimatedFacadeDrawing, BlueprintGrid } from './motion/BlueprintElements.tsx';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [approachModalOpen, setApproachModalOpen] = useState(false);

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E9E4DA] overflow-hidden">
      {/* Background blueprint elements */}
      <BlueprintGrid opacity={0.025} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#263D35]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
              About Proven Projecten
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] leading-[1.15] tracking-tight"
          >
            Craftsmanship That Shapes Better Spaces.
          </motion.h2>
        </div>

        {/* Main Content: Left Images Composition & Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Dual Image Composition & SVG Self-Drawing Facade (6 cols) */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Architectural Craft Photo with motion reveal */}
            <motion.div
              initial={{ opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              whileInView={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full sm:w-11/12 aspect-4/3 overflow-hidden shadow-xl border border-[#E9E4DA] group"
            >
              <img
                src="/images/about_architect_craftsmanship_1793271114011.jpg"
                alt="Proven Projecten architect and craftsman reviewing blueprints in Amsterdam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Technical CAD Tag */}
              <div className="absolute top-3 left-3 bg-[#252824]/85 text-[#F7F6F2] text-[9px] font-mono px-2 py-0.5 border border-white/20">
                SCALE: 1:50 · AMSTERDAM
              </div>
            </motion.div>

            {/* Secondary Overlapping Detail Photo with motion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block absolute -bottom-10 -right-4 z-20 w-3/5 aspect-4/3 overflow-hidden shadow-2xl border-4 border-[#FFFFFF] group"
            >
              <ArchitecturalImage
                src={imageMapping.homeCraftsmanship.url}
                alt={imageMapping.homeCraftsmanship.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#252824]/90 backdrop-blur-xs p-2 text-[10px] text-[#F7F6F2] font-mono">
                {imageMapping.homeCraftsmanship.caption}
              </div>
            </motion.div>

            {/* Subtle decorative framing */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#263D35]/20 -z-0" />
          </div>

          {/* Right Column: Editorial Narrative & Principles (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-2xl sm:text-3xl text-[#252824] mb-6 leading-tight"
            >
              A refined European approach to building, renovation, and property transformation.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base text-[#252824]/80 leading-relaxed font-light mb-6"
            >
              Proven Projecten B.V. is an Amsterdam-based construction and renovation firm founded on a
              commitment to uncompromising quality, transparent communication, and meticulous craftsmanship.
              We operate at the intersection of historical preservation and contemporary European design,
              bringing life and longevity to every structure we touch.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base text-[#252824]/80 leading-relaxed font-light mb-8"
            >
              Whether restoring a classical townhouse on the Amsterdam canals, expanding a family residence
              in North Holland, or delivering a full hospitality fit-out, we maintain a dedicated project
              management philosophy where clients have a direct, single point of contact from concept
              to key handover.
            </motion.p>

            {/* Editorial Numbered Markers with Stagger */}
            <div className="space-y-4 mb-10 pt-4 border-t border-[#E9E4DA]">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="font-serif text-lg font-bold text-[#263D35] shrink-0 tabular-nums">01.</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#252824]">Architectural Vision & Execution</h4>
                  <p className="text-xs text-[#252824]/75 mt-0.5 leading-relaxed">
                    Collaborating closely with leading architects or executing complete turnkey plans with equal precision.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="font-serif text-lg font-bold text-[#263D35] shrink-0 tabular-nums">02.</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#252824]">Enduring Natural Materials</h4>
                  <p className="text-xs text-[#252824]/75 mt-0.5 leading-relaxed">
                    European oak, Belgian bluestone, steel frame systems, and breathable mineral finishes that age gracefully.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <span className="font-serif text-lg font-bold text-[#263D35] shrink-0 tabular-nums">03.</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#252824]">Transparent Project Governance</h4>
                  <p className="text-xs text-[#252824]/75 mt-0.5 leading-relaxed">
                    Clear schedules, itemized cost accounting, milestone sign-offs, and zero hidden contingencies.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                onClick={() => setApproachModalOpen(true)}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#263D35] hover:text-[#1a2b25] group pb-1 border-b-2 border-[#263D35] transition-all cursor-pointer"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Self-Drawing Architectural Facade Elevation Blueprint */}
        <div className="mt-20 pt-10 border-t border-[#E9E4DA]">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#263D35]/70 block">
              Architectural Elevation Section · Schetsontwerp
            </span>
            <p className="text-xs text-[#252824]/60 font-light mt-1">
              Precision structural engineering drawing of traditional Dutch stepped-gable facade and modern rear extension
            </p>
          </div>
          <div className="max-w-3xl mx-auto p-4 bg-[#F7F6F2] border border-[#E9E4DA] shadow-inner">
            <AnimatedFacadeDrawing />
          </div>
        </div>
      </div>

      {/* Discover Our Approach Modal */}
      {approachModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252824]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F7F6F2] border border-[#E9E4DA] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
            <button
              onClick={() => setApproachModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#252824] hover:text-[#263D35] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#263D35]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#263D35]">
                Proven Projecten Methodology
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#252824] mb-6">
              Our 4-Pillar Construction Philosophy
            </h3>

            <div className="space-y-6 text-sm text-[#252824]/80 leading-relaxed">
              <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA]">
                <h4 className="font-semibold text-base text-[#252824] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#263D35]" />
                  1. Pre-Construction Clarity & Detailed Costing
                </h4>
                <p className="text-xs text-[#252824]/75">
                  Before a single wall is opened, we conduct structural verifications, damp surveys, and permit audits. We present a clear, itemized quote so you know exactly where every euro is allocated.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA]">
                <h4 className="font-semibold text-base text-[#252824] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#263D35]" />
                  2. Master Craftsmen & Certified Trades
                </h4>
                <p className="text-xs text-[#252824]/75">
                  Our team consists of certified Dutch tradespeople, master carpenters, gas/water technicians, and finishing artisans. We do not subcontract critical structural or aesthetic tasks to unknown third parties.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA]">
                <h4 className="font-semibold text-base text-[#252824] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#263D35]" />
                  3. Weekly Digital Progress & Site Meetings
                </h4>
                <p className="text-xs text-[#252824]/75">
                  You receive weekly photographic milestone updates, schedule tracking, and direct access to your dedicated project director. Any requested variation is priced and approved in writing beforehand.
                </p>
              </div>

              <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA]">
                <h4 className="font-semibold text-base text-[#252824] mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#263D35]" />
                  4. Rigorous Delivery & Comprehensive Warranty
                </h4>
                <p className="text-xs text-[#252824]/75">
                  Handover is only complete when our two-stage punch list is signed off to perfection. We stand behind our work with full construction guarantees and ongoing maintenance support.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E9E4DA] flex items-center justify-between">
              <span className="text-xs text-[#252824]/60">Proven Projecten B.V. · Amsterdam</span>
              <button
                onClick={() => {
                  setApproachModalOpen(false);
                  onOpenConsultation();
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25]"
              >
                Discuss Your Vision
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
