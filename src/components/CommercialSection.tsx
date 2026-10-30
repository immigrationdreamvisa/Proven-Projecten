import React from 'react';
import { ArrowUpRight, Building, Briefcase, Clock, ShieldCheck } from 'lucide-react';

interface CommercialSectionProps {
  onOpenConsultation: () => void;
  onExploreCommercialProjects: () => void;
}

export const CommercialSection: React.FC<CommercialSectionProps> = ({
  onOpenConsultation,
  onExploreCommercialProjects,
}) => {
  return (
    <section id="commercial" className="py-20 md:py-28 bg-[#F7F6F2] border-b border-[#E9E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Commercial Value Narrative (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Hospitality, Corporate & Retail
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252824] tracking-tight leading-[1.15] mb-6">
              Commercial Interiors Engineered for Impact and Performance.
            </h2>

            <p className="text-base text-[#252824]/80 leading-relaxed font-light mb-8">
              Commercial spaces demand a delicate synthesis of aesthetic refinement, strict building code
              compliance, and aggressive schedule execution. From luxury boutique hotels like De Ware Jacob
              to collaborative corporate offices along Nieuwendammer Kade, Proven Projecten delivers turnkey
              commercial fit-outs with minimal operational downtime.
            </p>

            {/* Core Commercial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] border border-[#E9E4DA]">
                <Building className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Boutique Hotels & Hospitality</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Acoustically certified guest rooms, statement lobbies, and bars.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] border border-[#E9E4DA]">
                <Briefcase className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Executive Office Fit-Outs</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Flexible floorplates, glass meeting suites, and acoustic zoning.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] border border-[#E9E4DA]">
                <Clock className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Rigorous Timeline Adherence</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Phased and off-hours site works to maintain business continuity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#FFFFFF] border border-[#E9E4DA]">
                <ShieldCheck className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Commercial Certifications</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Fire retardancy, egress safety, and accessibility compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-colors cursor-pointer"
              >
                <span>Request Commercial Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreCommercialProjects}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#252824] hover:bg-[#E9E4DA]/50 border border-[#252824]/20 transition-colors cursor-pointer"
              >
                View Commercial Projects
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-16/10 sm:aspect-4/3 overflow-hidden shadow-2xl border border-[#E9E4DA]">
              <img
                src="/images/commercial_hotel_interior_1793271114811.jpg"
                alt="Proven Projecten commercial boutique hotel lobby renovation in Amsterdam"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#263D35] text-[#F7F6F2] px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                Commercial & Hospitality
              </div>
            </div>

            <div className="mt-4 p-4 bg-[#FFFFFF] border border-[#E9E4DA] flex items-center justify-between text-xs text-[#252824]/80">
              <span className="font-serif italic font-medium">Boutique Hotel Lobby & Custom Fluted Timber Reception</span>
              <span className="font-mono text-[11px] text-[#263D35]">Amsterdam Oud-Zuid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
