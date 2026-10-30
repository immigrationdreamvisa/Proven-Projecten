import React from 'react';
import {
  Users,
  Award,
  BadgeCheck,
  UserCheck,
  CalendarCheck2,
  MessageSquare,
  Shield,
  Building2,
} from 'lucide-react';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';

const REASONS = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Over 25 combined years delivering complex structural and architectural restorations across the Netherlands.',
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: 'Master joinery, precision stone fabrication, and immaculate finishes built to endure generational living.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Employees',
    description: 'Fully certified Dutch tradesmen adhering to the latest NEN standards, VCA safety, and building regulations.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Approach',
    description: 'Every project begins with listening. We shape each detail around your unique spatial and aesthetic aspirations.',
  },
  {
    icon: CalendarCheck2,
    title: 'Dedicated Project Management',
    description: 'A single point of contact from initial consultation to final delivery, ensuring smooth coordination and accountability.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    description: 'Clear milestone schedules, weekly photographic progress, and itemized transparent cost accounting with zero surprises.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Rigorous two-phase completion inspection backed by comprehensive warranty terms on all structural and finishing works.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial Expertise',
    description: 'Equally adept at historical Amsterdam townhouse restorations and fast-paced commercial hospitality fit-outs.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7F6F2] border-t border-[#E9E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 8 Pillars Grid (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Why Choose Proven Projecten
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#252824] tracking-tight mb-4">
              Built on Discipline, Precision, and Trust.
            </h2>
            <p className="text-sm text-[#252824]/75 font-light leading-relaxed mb-10 max-w-xl">
              In a complex industry, we distinguish ourselves by delivering both master-level craftsmanship
              and professional corporate governance on every job site.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {REASONS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-[#FFFFFF] border border-[#E9E4DA] hover:border-[#263D35]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#252824] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#252824]/75 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Supporting Craftsmanship Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-3/4 overflow-hidden shadow-2xl border border-[#E9E4DA]">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Master carpenter on site ensuring millimeter precision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E9E4DA] font-semibold">
                  Artisanal Standard
                </span>
                <p className="font-serif text-lg text-white font-medium mt-1">
                  "Every millimeter matters when marrying historical architecture with modern living."
                </p>
                <span className="text-xs text-[#A8B2A3] mt-2 font-mono">
                  Proven Projecten Lead Craftsman
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
