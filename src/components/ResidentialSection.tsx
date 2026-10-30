import React from 'react';
import { ArrowUpRight, Home, Sparkles, Hammer, Maximize2 } from 'lucide-react';

interface ResidentialSectionProps {
  onOpenConsultation: () => void;
  onExploreResidentialProjects: () => void;
}

export const ResidentialSection: React.FC<ResidentialSectionProps> = ({
  onOpenConsultation,
  onExploreResidentialProjects,
}) => {
  return (
    <section id="residential" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-16/10 sm:aspect-4/3 overflow-hidden shadow-2xl border border-[#E9E4DA]">
              <img
                src="/images/residential_townhouse_interior_1793271113481.jpg"
                alt="Proven Projecten residential living room townhouse renovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#263D35] text-[#F7F6F2] px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                Residential Solutions
              </div>
            </div>

            {/* Quick architectural spec callout */}
            <div className="mt-4 p-4 bg-[#F7F6F2] border border-[#E9E4DA] flex items-center justify-between text-xs text-[#252824]/80">
              <span className="font-serif italic font-medium">Restored Ornamental Ceiling & Bespoke Forest Joinery</span>
              <span className="font-mono text-[11px] text-[#263D35]">Amsterdam Residence</span>
            </div>
          </div>

          {/* Right Column: Editorial Overview & Capabilities (6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Private Residences & Townhouses
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252824] tracking-tight leading-[1.15] mb-6">
              Residential Spaces Crafted for Living and Longevity.
            </h2>

            <p className="text-base text-[#252824]/80 leading-relaxed font-light mb-8">
              A home is an intimate expression of how you live. We transform Dutch canal houses, historical
              mansions, and modern family properties into refined sanctuaries. By balancing heritage structural
              elements with thermal efficiency, custom oak millwork, and seamless contemporary flow, we ensure
              your home gains both enduring beauty and long-term equity.
            </p>

            {/* Core Residential Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 bg-[#F7F6F2] border border-[#E9E4DA]">
                <Home className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Full Home Renovation</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Structural reconfigurations, MEP overhauls, and turnkey styling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#F7F6F2] border border-[#E9E4DA]">
                <Sparkles className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Kitchen & Bath Upgrades</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Book-matched stone, underfloor heating, and bespoke joinery.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#F7F6F2] border border-[#E9E4DA]">
                <Maximize2 className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Structural Extensions</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Glass rear garden extensions, zinc dormers, and roof terraces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-[#F7F6F2] border border-[#E9E4DA]">
                <Hammer className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#252824]">Artisanal Interior Finish</h4>
                  <p className="text-[11px] text-[#252824]/75 mt-0.5">
                    Herringbone parquet, acoustic dampening, and lime plastering.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-colors cursor-pointer"
              >
                <span>Plan Your Residence</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreResidentialProjects}
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#252824] hover:bg-[#E9E4DA]/50 border border-[#252824]/20 transition-colors cursor-pointer"
              >
                View Residential Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
