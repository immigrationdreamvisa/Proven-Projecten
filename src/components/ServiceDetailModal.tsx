import React from 'react';
import { X, Check, Clock, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types.ts';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuoteForService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252824]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F7F6F2] border border-[#E9E4DA] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#F7F6F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E9E4DA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#263D35]">
              Proven Projecten · Specialized Service
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252824] hover:text-[#263D35] hover:bg-[#E9E4DA]/50 transition-colors cursor-pointer"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Banner with Architectural Image */}
          <div className="relative aspect-16/9 overflow-hidden border border-[#E9E4DA] shadow-md">
            <ArchitecturalImage
              src={service.imageUrl}
              alt={service.title}
              fallbackTitle={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E9E4DA] font-semibold">
                  {service.category === 'both'
                    ? 'Residential & Commercial'
                    : service.category === 'residential'
                    ? 'Residential Expertise'
                    : 'Commercial & Hospitality'}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-white font-medium mt-1">
                  {service.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Description & Overview */}
          <div>
            <h3 className="font-serif text-xl text-[#252824] mb-3">Service Overview</h3>
            <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed font-light">
              {service.fullDescription}
            </p>
          </div>

          {/* Specifications & Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#263D35] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35]">
                  Typical Project Timeline
                </span>
                <p className="text-sm font-semibold text-[#252824] mt-0.5">{service.typicalDuration}</p>
                <p className="text-xs text-[#252824]/70 mt-1">
                  Includes site prep, execution, and final punch-list sign-off.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#FFFFFF] border border-[#E9E4DA] flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#263D35] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35]">
                  Ideal Application
                </span>
                <p className="text-xs text-[#252824] mt-1 leading-snug">{service.idealFor}</p>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div>
            <h3 className="font-serif text-lg text-[#252824] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#263D35]" />
              Detailed Scope of Work
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.scopeOfWork.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-[#FFFFFF] border border-[#E9E4DA]/80"
                >
                  <Check className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#252824]/80 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curated Materials */}
          <div>
            <h3 className="font-serif text-lg text-[#252824] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#263D35]" />
              Signature Materials & Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.keyMaterials.map((mat, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium text-[#252824] bg-[#FFFFFF] border border-[#E9E4DA]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-[#E9E4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#252824]/70">
                Ready to discuss your {service.title.toLowerCase()}?
              </p>
              <p className="text-xs font-semibold text-[#263D35]">
                Direct consultation with our project team in Amsterdam
              </p>
            </div>
            <button
              onClick={() => {
                onRequestQuoteForService(service.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-colors cursor-pointer"
            >
              <span>Request Consultation for This Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
