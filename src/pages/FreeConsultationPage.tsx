import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ConsultationForm } from '../components/ConsultationForm.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const FreeConsultationPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-12 pb-20 bg-[#F7F7F5] border-b border-[#030407]/10 overflow-hidden">
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
                Proven Projecten Planning Desk
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Request Your Free <span className="text-[#1558C9]">Project Consultation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              Plan your renovation or commercial transformation with confidence. Complete our multi-step
              questionnaire to receive an itemized preliminary cost assessment and technical guidance.
            </motion.p>
          </div>

          {/* Consultation Guarantees Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-[#030407]/10">
            <div className="flex items-start gap-4 p-5 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <Clock className="w-5 h-5 text-[#1558C9] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-secondary text-xs font-bold text-[#030407] uppercase tracking-wider">24-Hour Response</h3>
                <p className="text-xs text-[#66686D] mt-1 font-light leading-relaxed">A project director contacts you within one business day.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#1558C9] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-secondary text-xs font-bold text-[#030407] uppercase tracking-wider">Fixed-Price Transparency</h3>
                <p className="text-xs text-[#66686D] mt-1 font-light leading-relaxed">Clear line-item costing with zero hidden markups.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white border border-[#030407]/10 hover:border-[#1558C9] transition-colors shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#1558C9] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-secondary text-xs font-bold text-[#030407] uppercase tracking-wider">On-Site Feasibility Survey</h3>
                <p className="text-xs text-[#66686D] mt-1 font-light leading-relaxed">Comprehensive structural and moisture inspection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Working Multi-Step Consultation Questionnaire */}
      <section className="py-12 md:py-20 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationForm isModal={false} />
        </div>
      </section>

      {/* 3. Direct Phone Contact Help Banner */}
      <section className="py-14 bg-[#030407] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-[#D4FF24] font-bold mb-2">
            Prefer to speak directly with an engineer?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="tel:+31627405632"
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#D4FF24] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4FF24]" />
              <span>Direct Mobile: 06 27 40 56 32</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href="tel:+31654398245"
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#D4FF24] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4FF24]" />
              <span>Amsterdam Office: +31 6 54 39 82 45</span>
            </a>
            <span className="text-white/40">·</span>
            <a
              href="https://wa.me/31627405632"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[#D4FF24] hover:underline transition-colors"
            >
              <span>WhatsApp: +31 6 27 40 56 32</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
