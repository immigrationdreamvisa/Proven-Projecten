import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030407]/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] border border-[#030407]/10 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative rounded-xs">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#111214] hover:text-[#1558C9] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-4 h-4 text-[#1558C9]" />
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#1558C9]">
            Proven Projecten B.V. · Legal & Compliance
          </span>
        </div>

        {type === 'privacy' ? (
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#030407] font-bold mb-4">
              Privacy Policy (AVG / GDPR)
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#66686D] leading-relaxed font-light">
              <p>
                <strong className="text-[#111214]">Proven Projecten B.V.</strong>, registered in the Netherlands under Chamber of
                Commerce (KVK) number <strong>86893033</strong>, located at Jacob Obrechtstraat 69,
                1071KJ Amsterdam, is committed to safeguarding the personal data of our clients and
                site visitors in accordance with the General Data Protection Regulation (AVG / GDPR).
              </p>
              <h3 className="font-serif text-base text-[#030407] font-bold pt-2">
                1. Data Collection & Purpose
              </h3>
              <p>
                When you request a consultation or submit an inquiry through our forms, we collect your
                name, email address, telephone number, and relevant project details solely for the
                purpose of preparing cost estimations, scheduling architectural consultations, and
                providing construction services.
              </p>
              <h3 className="font-serif text-base text-[#030407] font-bold pt-2">
                2. Data Retention & Third Parties
              </h3>
              <p>
                We do not sell, rent, or trade your personal data to third parties. Information is stored
                securely and accessed only by designated project managers and technical directors. You
                have the right at any time to request inspection, correction, or deletion of your data
                by contacting info@proven-projecten.nl.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#030407] font-bold mb-4">
              General Terms & Conditions (AVB)
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#66686D] leading-relaxed font-light">
              <p>
                These General Terms apply to all quotations, agreements, and construction works executed
                by <strong className="text-[#111214]">Proven Projecten B.V.</strong> (KVK 86893033), Amsterdam, The Netherlands.
              </p>
              <h3 className="font-serif text-base text-[#030407] font-bold pt-2">
                1. Quotations & Agreement
              </h3>
              <p>
                All project quotations are valid for 30 calendar days from the date of issue unless
                expressly stated otherwise. Agreements take effect upon mutual written confirmation of
                the technical specifications and payment schedule.
              </p>
              <h3 className="font-serif text-base text-[#030407] font-bold pt-2">
                2. Workmanship & Guarantees
              </h3>
              <p>
                All building, carpentry, plumbing, electrical, and finishing works are carried out by
                qualified tradespeople in compliance with prevailing Dutch building standards (Bouwbesluit
                / NEN norms). Structural interventions carry our standard statutory guarantee.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#030407]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#030407] hover:bg-[#1558C9] transition-colors cursor-pointer rounded-xs"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
