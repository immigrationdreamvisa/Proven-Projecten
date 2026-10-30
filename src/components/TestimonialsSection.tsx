import React from 'react';
import { Star, Quote, Building2, Home } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      'Proven Projecten delivered our boutique hotel renovation with outstanding craftsmanship and exceptional coordination. Managing an active site while preserving historical architectural features required precision, and their team exceeded expectations.',
    client: 'Management Team',
    role: 'De Ware Jacob Hotel',
    location: 'Amsterdam Oud-Zuid',
    projectType: 'Commercial Hospitality Renovation',
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
    rating: 5,
    icon: Home,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#263D35]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
              Client Endorsements & Proof
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252824] tracking-tight">
            Client Perspectives on Proven Results.
          </h2>
          <p className="text-sm text-[#252824]/75 mt-2 font-light">
            Reflecting our long-term partnerships across high-profile residential transformations and boutique
            hospitality destinations in the Amsterdam region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => {
            const Icon = review.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F6F2] border border-[#E9E4DA] p-7 flex flex-col justify-between hover:border-[#263D35]/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#263D35] text-[#263D35]" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#A8B2A3]" />
                  </div>

                  <p className="font-serif text-sm text-[#252824] leading-relaxed italic mb-6">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E4DA]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E9E4DA] flex items-center justify-center text-[#263D35]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#252824]">
                        {review.client} · {review.role}
                      </h4>
                      <p className="text-[11px] text-[#263D35] font-medium">
                        {review.location} ({review.projectType})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
