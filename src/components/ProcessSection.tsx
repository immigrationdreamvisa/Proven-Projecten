import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, FileSpreadsheet, Compass, HardHat, Key } from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';
import { imageMapping } from '../data/imageMapping.ts';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Consultation',
    subtitle: 'Vision & Feasibility Survey',
    cadCode: 'STAGE_01_SURVEY',
    description:
      'We meet on-site in Amsterdam or at your property to examine the existing building fabric, discuss spatial aspirations, verify zoning restrictions, and establish an initial budget framework.',
    deliverables: [
      'Comprehensive on-site architectural survey',
      'Structural feasibility and municipal zoning check',
      'Preliminary budget breakdown and scope alignment',
    ],
    previewImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '02',
    icon: FileSpreadsheet,
    title: 'Planning & Design',
    subtitle: 'Detailed Engineering & Quoting',
    cadCode: 'STAGE_02_BLUEPRINT',
    description:
      'We prepare detailed technical scope documentation, material specifications, engineering calculations, and milestone project schedules before site commencement.',
    deliverables: [
      'Itemized fixed-price quotation with zero hidden fees',
      'Physical material samples (oak, stone, mineral plaster)',
      'Municipal permit filings (omgevingsvergunning)',
    ],
    previewImage: imageMapping.aboutArchitectDrawings.url,
  },
  {
    step: '03',
    icon: HardHat,
    title: 'Construction & Renovation',
    subtitle: 'Master Execution & Project Direction',
    cadCode: 'STAGE_03_EXECUTION',
    description:
      'Our certified craftsmen execute demolition, structural reinforcement, installations, and bespoke finishing with meticulous attention to detail and weekly updates.',
    deliverables: [
      'Dedicated project manager as your single point of contact',
      'Weekly digital photographic progress reports',
      'VCA safety compliance and dust-containment protocol',
    ],
    previewImage: imageMapping.homeCraftsmanship.url,
  },
  {
    step: '04',
    icon: Key,
    title: 'Final Delivery',
    subtitle: 'Two-Stage Sign-Off & Warranty',
    cadCode: 'STAGE_04_HANDOVER',
    description:
      'We conduct a comprehensive two-stage punch-list review, complete immaculate deep cleaning, and hand over your keys accompanied by warranty documents.',
    deliverables: [
      'Two-stage punch-list inspection walkthrough',
      'As-built documentation and technical maintenance manual',
      'Comprehensive statutory construction guarantee',
    ],
    previewImage: '/images/residential_townhouse_interior_1793271113481.jpg',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-[#FFFFFF] border-b border-[#E9E4DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Methodology & Timeline
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] tracking-tight">
              Our Working Process
            </h2>
          </motion.div>
          <p className="max-w-md text-sm text-[#252824]/75 font-light leading-relaxed">
            A disciplined four-phase methodology delivering predictability, quality assurance, and peace
            of mind throughout your project lifecycle.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal Process Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STEPS.map((item, idx) => {
            const isActive = activeStage === idx;
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-5 text-left border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#263D35] text-[#F7F6F2] border-[#263D35] shadow-lg'
                    : 'bg-[#F7F6F2] text-[#252824] border-[#E9E4DA] hover:border-[#263D35]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-serif text-2xl font-bold tabular-nums ${
                      isActive ? 'text-[#F7F6F2]' : 'text-[#263D35]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-[#F7F6F2]/20 text-white' : 'bg-[#E9E4DA] text-[#263D35]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3
                  className={`text-sm font-semibold truncate ${
                    isActive ? 'text-[#F7F6F2]' : 'text-[#252824]'
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className={`text-[10px] uppercase tracking-wider block mt-0.5 truncate ${
                    isActive ? 'text-[#A8B2A3]' : 'text-[#252824]/60'
                  }`}
                >
                  {item.subtitle}
                </span>

                {/* Animated active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#E9E4DA]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Interactive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F7F6F2] border border-[#E9E4DA] p-6 sm:p-10 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Narrative & Deliverables (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-mono text-[#263D35] mb-2">
                  <span>{STEPS[activeStage].cadCode}</span>
                  <span>·</span>
                  <span>PHASE {STEPS[activeStage].step} OF 04</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#252824] mb-3">
                  {STEPS[activeStage].title}: {STEPS[activeStage].subtitle}
                </h3>

                <p className="text-sm text-[#252824]/80 leading-relaxed font-light mb-6">
                  {STEPS[activeStage].description}
                </p>

                <div className="pt-4 border-t border-[#E9E4DA]">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35] block mb-3">
                    Guaranteed Phase Deliverables
                  </span>
                  <div className="space-y-2.5">
                    {STEPS[activeStage].deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#252824]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Stage Visual Preview (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-4/3 overflow-hidden shadow-xl border border-[#E9E4DA] bg-[#E9E4DA]">
                  <ArchitecturalImage
                    src={STEPS[activeStage].previewImage}
                    alt={STEPS[activeStage].title}
                    fallbackTitle={STEPS[activeStage].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-[#252824]/85 backdrop-blur-xs px-3 py-1.5 text-[10px] text-[#F7F6F2] font-mono flex items-center justify-between">
                    <span>STAGE {STEPS[activeStage].step} VERIFIED</span>
                    <span className="text-[#A8B2A3]">PROVEN PROJECTEN</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Process CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-colors cursor-pointer group shadow-sm hover:shadow-md"
          >
            <span>Start Step 01 — Book Your Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
