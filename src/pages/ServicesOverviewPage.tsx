import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Check, ShieldCheck, Clock, Layers } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

const CORE_SERVICES = [
  {
    slug: 'residential',
    path: '/services/residential',
    title: 'Residential Services',
    subtitle: 'Townhomes, Canal Houses & Private Residences',
    description:
      'Turnkey renovation of historic Amsterdam residences, modern apartments, and private country homes with bespoke craftsmanship and underfloor acoustic engineering.',
    image: imageMapping.residentialHero.url,
    deliverables: ['Full-house structural overhaul', 'Bespoke oak kitchen & marble island', 'Luxury en-suite bathrooms', 'Acoustic floor dampening'],
  },
  {
    slug: 'commercial',
    path: '/services/commercial',
    title: 'Commercial & Hospitality',
    subtitle: 'Boutique Hotels, Lounges & Corporate Offices',
    description:
      'High-impact hospitality transformations, corporate executive workspaces, and commercial fit-outs delivered with strict timeline adherence and minimal operational downtime.',
    image: imageMapping.commercialHero.url,
    deliverables: ['Acoustically certified hotel guest suites', 'Reception desks & waiting lounges', 'Executive meeting rooms & partitions', 'Commercial MEP & ventilation compliance'],
  },
  {
    slug: 'renovation',
    path: '/services/renovation',
    title: 'Complete Renovation',
    subtitle: 'Structural Engineering & Complete Overhauls',
    description:
      'End-to-end strip-outs, foundation reinforcement, steel portal framing, and complete interior reconstruction tailored to modern European building standards.',
    image: imageMapping.renovationHero.url,
    deliverables: ['Load-bearing wall removal & steel beams', 'Level 5 Q4 plaster skim coating', 'Full electrical & plumbing renewal', 'Chevron French oak parquet installation'],
  },
  {
    slug: 'maintenance',
    path: '/services/maintenance',
    title: 'Property Maintenance',
    subtitle: 'Scheduled Upkeep & Building Envelope Care',
    description:
      'Preventative maintenance contracts, building envelope inspections, masonry moisture audits, and technical servicing for residential portfolios and commercial owners.',
    image: imageMapping.maintenanceHero.url,
    deliverables: ['Traditional knipvoeg mortar repointing', 'Exterior timber preservation & painting', 'Roof flashing & gutter drainage audits', 'Technical plumbing & heating servicing'],
  },
  {
    slug: 'extensions',
    path: '/services/extensions',
    title: 'Extensions & Roof Works',
    subtitle: 'Glass Garden Rooms & Zinc Dormers',
    description:
      'Expanding square footage with architect-designed glass rear extensions, green flat sedum roofs, zinc mansard dormers, and rooftop sun terraces.',
    image: imageMapping.extensionsHero.url,
    deliverables: ['Screw pile driving & foundation calculations', 'Flush-threshold sliding glass walls', 'Standing seam zinc dormer construction', 'Engineered rooftop decking & balustrades'],
  },
  {
    slug: 'interior-design',
    path: '/services/interior-design',
    title: 'Interior Design',
    subtitle: 'Spatial Architecture & Artisanal Millwork',
    description:
      'Bespoke architectural joinery, layered lighting design, spatial flow optimization, and tactile material curation from initial moodboard to key handover.',
    image: imageMapping.interiorDesignHero.url,
    deliverables: ['Custom floor-to-ceiling library cabinetry', 'Architectural lighting plans & ambient cove circuits', 'Tactile material & stone curation', '3D spatial visualization & shop drawings'],
  },
];

export const ServicesOverviewPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Services Overview Hero */}
      <section className="relative pt-12 pb-24 bg-[#F7F7F5] border-b border-[#030407]/10 overflow-hidden">
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
                Proven Projecten Services Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Specialized Disciplines. <span className="text-[#1558C9]">Unified Mastery.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              Every building discipline requires specialist expertise. We coordinate structural engineering,
              fine joinery, architectural MEP, and artisanal finishing under single-point project accountability.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Core Service Blocks */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {CORE_SERVICES.map((service, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Frame (6 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-16/10 overflow-hidden shadow-xl border border-[#030407]/10 group">
                    <ArchitecturalImage
                      src={service.image}
                      alt={service.title}
                      fallbackTitle={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#030407] text-[#D4FF24] px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-wider font-bold">
                      0{idx + 1} // ARCHITECTURAL DISCIPLINE
                    </div>
                  </div>
                </div>

                {/* Narrative & Scope (6 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="font-secondary text-xs uppercase tracking-wider text-[#1558C9] font-bold block mb-2">
                    {service.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] font-bold tracking-[-0.02em] leading-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#66686D] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#111214]">
                        <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#030407] hover:bg-[#1558C9] transition-colors rounded-xs"
                    >
                      <span>Explore Dedicated {service.title} Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="py-24 bg-[#030407] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#D4FF24] block mb-2">
            Project Scoping
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-[-0.02em] mb-4">
            Need Guidance on Your <span className="text-[#D4FF24]">Project Scope?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#66686D] font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us about your property and architectural requirements. Our Amsterdam engineering
            office will review your specifications and prepare an itemized feasibility quotation.
          </p>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
          >
            <span>Request Free Project Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
