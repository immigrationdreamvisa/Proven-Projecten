import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ShieldCheck, ArrowUpRight, Maximize2, Compass, Layers, Sun } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const ExtensionsServicePage: React.FC = () => {
  const extensionTypes = [
    { title: 'Zinc Dormers & Roof Terraces', image: imageMapping.extensionsRoof.url, desc: 'Standing seam zinc dormers expanding attic floorplans with engineered panoramic roof terraces.' },
    { title: 'Glass Garden Room Additions', image: imageMapping.extensionsGardenRoom.url, desc: 'Ultra-slim aluminium sliding glass walls connecting open-plan kitchens seamlessly to private gardens.' },
    { title: 'Structural Steel Portal Framing', image: imageMapping.extensionsStructural.url, desc: 'Precision crane placement of HEB steel beams enabling wide-span, column-free living expanses.' },
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
              Home Extensions & <span className="text-[#1558C9]">Roof Works.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              Unlock valuable square meters with architect-designed ground-floor rear extensions,
              flush-threshold glass architecture, zinc roof dormers, and private rooftop terraces.
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
                src={imageMapping.extensionsHero.url}
                alt={imageMapping.extensionsHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                MINIMAL-FRAME ARCHITECTURE · AMSTERDAM
              </span>
              <span className="font-light leading-relaxed">
                Full-width steel portal frame with flush sliding glass doors and thermal break engineering.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Structural Engineering & Foundations */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block">
                Foundations & Civil Works
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] leading-tight tracking-[-0.02em] font-bold">
                Expanding Without Compromising <span className="text-[#1558C9]">Existing Foundations.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Expanding an Amsterdam property demands specialist foundation engineering. In dense urban
                gardens with narrow access routes, we utilize vibration-free screw pile driving techniques
                anchored into load-bearing sand layers.
              </p>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                We handle the complete omgevingsvergunning (building permit) procedure, daylight calculations,
                and structural engineer sign-offs, creating fluid indoor-outdoor connections that flood your
                residence with natural daylight.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#030407]/10">
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Vibration-free steel screw pile driving</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Flush zero-threshold minimal sliding glazing</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Sedum green flat roofs & solar insulation</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#111214]">
                  <Check className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span>Zinc standing seam dormer craftsmanship</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  <span>Request Extension Feasibility</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-4/3 overflow-hidden shadow-2xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.extensionsRoof.url}
                  alt={imageMapping.extensionsRoof.alt}
                  fallbackTitle="Rooftop Terrace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10 mt-4 flex items-center justify-between text-xs text-[#030407]">
                <span className="font-serif italic text-sm font-bold">Engineered Rooftop Terrace & Zinc Dormer</span>
                <span className="font-mono text-[#1558C9] text-[10px] font-bold">AMSTERDAM SKYLINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Extension Types Showcase */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
              Architectural Extensions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-[-0.02em]">
              Ground & Rooftop <span className="text-[#1558C9]">Expansions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extensionTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-[#030407]/10 overflow-hidden shadow-md group hover:border-[#1558C9] transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-[#F7F7F5]">
                  <ArchitecturalImage
                    src={type.image}
                    alt={type.title}
                    fallbackTitle={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#030407] font-bold mb-2">{type.title}</h3>
                  <p className="text-xs text-[#66686D] font-light leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Transformation Slider */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider initialCategoryId="exterior-facade" />
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="py-20 bg-[#030407] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            Ready to Expand Your Living Space?
          </h2>
          <p className="text-sm text-[#66686D] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Our structural engineers will assess your garden layout, check municipal soil maps, and outline the ideal extension configuration.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md inline-block rounded-xs"
          >
            Plan Your Extension
          </Link>
        </div>
      </section>
    </div>
  );
};
