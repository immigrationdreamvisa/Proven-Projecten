import React from 'react';
import { motion } from 'motion/react';
import { servicesData } from '../data/servicesData.ts';
import { ServiceItem } from '../types.ts';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';
import { ArrowUpRight } from 'lucide-react';
import { DimensionOverlay } from './motion/BlueprintElements.tsx';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#F7F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
                Full-Scope Construction & Renovation
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] tracking-tight">
              Our Comprehensive Services
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-md text-sm text-[#252824]/75 font-light leading-relaxed"
          >
            From structural transformations to intricate finishing details, our multidisciplinary team
            executes twelve specialized disciplines with architectural integrity.
          </motion.p>
        </div>

        {/* Asymmetrical Grid of 12 Services with 3D Tilt & Staggered Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0 || index === 11;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onSelectService(service)}
                className={`group cursor-pointer bg-[#FFFFFF] border border-[#E9E4DA] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#263D35]/40 hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Hover Zoom & Technical Dimension Overlay */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#E9E4DA]">
                  <ArchitecturalImage
                    src={service.imageUrl}
                    alt={service.title}
                    fallbackTitle={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dimension overlay activating on hover */}
                  <DimensionOverlay
                    dimensions={{
                      width: `${10 + (index % 5) * 2}.5m`,
                      height: '3.20m',
                      ref: `DISCIPLINE_0${index + 1}`,
                    }}
                  />

                  {/* Category Indicator Tag */}
                  <div className="absolute top-3 left-3 bg-[#F7F6F2]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#263D35] border border-[#E9E4DA] z-20">
                    {service.category === 'residential'
                      ? 'Residential'
                      : service.category === 'commercial'
                      ? 'Commercial'
                      : 'Dual Discipline'}
                  </div>

                  {/* Corner Index */}
                  <div className="absolute bottom-3 right-3 bg-[#252824]/80 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono text-[#F7F6F2] z-20">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Card Body with Slight Title Movement on Hover */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#252824] group-hover:text-[#263D35] transition-transform duration-300 group-hover:translate-x-1 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#252824]/75 line-clamp-3 font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Footer Link with Animated Arrow */}
                  <div className="pt-4 border-t border-[#E9E4DA]/60 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#263D35] group-hover:underline">
                      Explore Service
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7F6F2] group-hover:bg-[#263D35] group-hover:text-[#F7F6F2] flex items-center justify-center text-[#252824] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 p-8 sm:p-10 bg-[#263D35] text-[#F7F6F2] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#252824]"
        >
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal">
              Have a custom or multi-discipline project?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8B2A3] mt-1">
              We coordinate complex structural, architectural, and design briefs with turnkey project governance.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#263D35] bg-[#F7F6F2] hover:bg-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Consult Our Engineers
          </button>
        </motion.div>
      </div>
    </section>
  );
};
