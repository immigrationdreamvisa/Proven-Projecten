import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Quote, Building2, Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

const VERIFIED_REVIEWS = [
  {
    quote:
      'Proven Projecten delivered our boutique hotel renovation with outstanding craftsmanship and exceptional coordination. Managing an active site while preserving historical architectural features required precision, and their team exceeded expectations.',
    client: 'General Management',
    role: 'De Ware Jacob Hotel',
    location: 'Amsterdam Oud-Zuid',
    projectType: 'Commercial Hospitality Renovation',
    year: '2024',
    rating: 5,
    icon: Building2,
  },
  {
    quote:
      'The renovation of our townhouse on Govert Flinckstraat was seamless. Restoring 19th-century ceiling plaster while modernizing underfloor heating and open-plan kitchen joinery was executed on time and with total transparency.',
    client: 'Private Homeowner',
    role: 'Townhouse Residence',
    location: 'De Pijp, Amsterdam',
    projectType: 'Complete Residential Modernization',
    year: '2023',
    rating: 5,
    icon: Home,
  },
  {
    quote:
      'Our rear garden extension and rooftop zinc dormer transformed our living space. The attention to detail on the flush minimal sliding glazing and structural steelwork was masterclass level.',
    client: 'Family Residence',
    role: 'Property Owner',
    location: 'Amsterdam West',
    projectType: 'Structural Extension & Zinc Works',
    year: '2024',
    rating: 5,
    icon: Home,
  },
  {
    quote:
      'The waterfront dual-purpose renovation on Nieuwendammer Kade required complex MEP and acoustic zoning between creative offices and apartments. Proven Projecten handled the structural calculations and permits flawlessly.',
    client: 'Development Partner',
    role: 'Nieuwendammer Kade Project',
    location: 'Amsterdam Noord',
    projectType: 'Dual-Purpose Commercial & Residential',
    year: '2023',
    rating: 5,
    icon: Building2,
  },
  {
    quote:
      'Restoring our heritage cottage in Markenbinnen while maintaining authentic timber roof trusses was a delicate task. The master carpenters treated every historical timber with deep respect.',
    client: 'Private Owner',
    role: 'Markenbinnen Cottage',
    location: 'Markenbinnen, North Holland',
    projectType: 'Vernacular Rural Restoration',
    year: '2023',
    rating: 5,
    icon: Home,
  },
  {
    quote:
      'The master bathroom renovation in our Keizersgracht residence with bookmatched Italian travertine slabs and concealed thermostatic circuits was executed within four weeks as promised.',
    client: 'Apartment Owner',
    role: 'Keizersgracht Residence',
    location: 'Amsterdam Canals',
    projectType: 'Spa-Inspired Bath Remodel',
    year: '2024',
    rating: 5,
    icon: Home,
  },
];

export const ReviewsPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-12 pb-24 bg-[#F7F6F2] border-b border-[#E9E4DA] overflow-hidden">
        <BlueprintGrid opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Verified Client Testimonials
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#252824] tracking-[-0.025em] font-normal leading-[1.05]"
            >
              Client Perspectives on <span className="italic font-normal">Proven Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#252824]/80 mt-6 font-light leading-relaxed max-w-2xl"
            >
              Read authentic feedback from private homeowners, hotel directors, and property investors
              who entrusted their renovations and structural transformations to Proven Projecten B.V.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden shadow-2xl border border-[#E9E4DA] group"
          >
            <motion.div
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <img
                src={imageMapping.reviewsHero.url}
                alt={imageMapping.reviewsHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#252824]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#A8B2A3]">
              <span className="font-mono text-[#A8B2A3] block text-[10px] uppercase tracking-wider mb-1">
                VERIFIED CLIENT DELIVERIES · AMSTERDAM
              </span>
              <span className="font-light leading-relaxed">
                Turnkey residential transformation completed on schedule with statutory construction warranties.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Reviews Grid */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#E9E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VERIFIED_REVIEWS.map((review, idx) => {
              const Icon = review.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F6F2] border border-[#E9E4DA] p-8 flex flex-col justify-between hover:border-[#263D35]/50 transition-all duration-300 shadow-xs hover:shadow-xl relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-[#263D35] text-[#263D35]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-[#263D35]/30 group-hover:text-[#263D35] transition-colors" />
                    </div>

                    <p className="font-serif text-base text-[#252824] leading-relaxed italic mb-6 font-normal">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#E9E4DA]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E9E4DA] flex items-center justify-center text-[#263D35] shrink-0 font-bold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-secondary text-xs font-semibold text-[#252824] truncate">
                          {review.client} · {review.role}
                        </h3>
                        <p className="text-[11px] text-[#263D35] font-medium truncate">
                          {review.location} ({review.projectType})
                        </p>
                        <span className="text-[10px] font-mono text-[#252824]/60">
                          Completed {review.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Review Verification Note & CTA */}
      <section className="py-24 bg-[#263D35] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="font-secondary text-xs uppercase tracking-[0.25em] font-semibold text-[#A8B2A3] block mb-3">
            INTEGRITY & VERIFICATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl mb-4 tracking-[-0.02em]">
            Become Our Next <span className="italic font-normal">Success Story.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2A3] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Experience dedicated project direction, transparent milestone accounting, and certified Dutch master craftsmanship.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#263D35] bg-[#F7F6F2] hover:bg-white transition-all shadow-md inline-block"
          >
            Request Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
