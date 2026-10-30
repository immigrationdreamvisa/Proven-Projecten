import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowUpRight, Palette, Sparkles, Layers, Sliders } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const InteriorDesignServicePage: React.FC = () => {
  const designElements = [
    { title: 'Architectural Kitchen Joinery', image: imageMapping.interiorDesignKitchen.url, desc: 'Smoked oak, fluted timber islands, and integrated Calacatta or Verde Alpi marble worktops.' },
    { title: 'Atmospheric Lighting Architecture', image: imageMapping.interiorDesignLiving.url, desc: 'Layered circuits of indirect warm LED cove lighting, plaster-in downlights, and statement brass fixtures.' },
    { title: 'Bespoke Millwork & Libraries', image: imageMapping.interiorDesignCabinetry.url, desc: 'Floor-to-ceiling library wall units, dressing rooms, and pivot doors crafted to exact millimeter tolerances.' },
    { title: 'Tactile Material Curation', image: imageMapping.interiorDesignMaterials.url, desc: 'Physical moodboards featuring honed travertine, solid European oak, linen fabrics, and gunmetal hardware.' },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
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
                Specialized Architectural Discipline
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Interior Design & <span className="text-[#1558C9]">Architectural Joinery.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              We translate your spatial requirements into cohesive European architectural interiors.
              From 3D spatial planning and material curation to bespoke solid oak cabinetry and layered lighting.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden shadow-2xl border border-[#030407]/10 group"
          >
            <motion.div
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <img
                src={imageMapping.interiorDesignHero.url}
                alt={imageMapping.interiorDesignHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                SPATIAL ARCHITECTURE · AMSTERDAM
              </span>
              <span className="font-light leading-relaxed">
                Minimalist luxury European interior with bespoke architectural furniture, warm plaster walls, and natural stone.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy & Execution Scope */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block">
                Spatial Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] leading-tight tracking-[-0.02em] font-bold">
                Harmonizing Proportion, Texture & <span className="text-[#1558C9]">Spatial Flow.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Interior design at Proven Projecten is never superficial decoration; it is spatial architecture.
                Before any construction commences, we establish a cohesive vision across sightlines, natural lighting,
                and circulation routes.
              </p>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Our design consultants work in tandem with our construction team, eliminating the disconnect between
                artistic rendering and on-site buildability. Every millwork drawing, lighting track, and material
                choice is engineered for seamless installation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#030407]/10">
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>3D spatial flow & furniture floorplans</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Bespoke kitchen & vanity shop drawings</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Architectural lighting specification</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Curated physical material moodboards</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  <span>Request Interior Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden shadow-2xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.interiorDesignCabinetry.url}
                  alt={imageMapping.interiorDesignCabinetry.alt}
                  fallbackTitle="Custom Cabinetry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10 mt-4 flex items-center justify-between text-xs text-[#030407]">
                <span className="font-serif italic text-sm font-bold">Bespoke Floor-to-Ceiling Library Joinery</span>
                <span className="font-mono text-[#1558C9] text-[10px] font-bold">HANDCRAFTED MILLWORK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interior Showcase */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
              Design Elements
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-[-0.02em]">
              Joinery, Lighting & <span className="text-[#1558C9]">Materiality</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designElements.map((el, idx) => (
              <div key={idx} className="bg-white border border-[#030407]/10 overflow-hidden shadow-md group hover:border-[#1558C9] transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-[#F7F7F5]">
                  <ArchitecturalImage
                    src={el.image}
                    alt={el.title}
                    fallbackTitle={el.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-[#030407] font-bold">{el.title}</h3>
                  <p className="text-xs text-[#66686D] mt-1 font-light leading-relaxed">{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Transformation Slider */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider initialCategoryId="kitchen" />
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="py-20 bg-[#030407] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            Transform Your Interior Atmosphere.
          </h2>
          <p className="text-sm text-[#66686D] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Speak with our interior architects to curate materials, design bespoke cabinetry, and plan your lighting layout.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md inline-block rounded-xs"
          >
            Schedule Design Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
