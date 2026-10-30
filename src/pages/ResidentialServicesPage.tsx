import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Home, Sparkles, Layers, Clock } from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const ResidentialServicesPage: React.FC = () => {
  const galleryItems = [
    { title: 'Living Room Modernization', image: imageMapping.residentialLivingRoom.url, caption: 'High ceilings & restored ornamental moldings' },
    { title: 'Culinary Hub & Island', image: imageMapping.residentialKitchen.url, caption: 'Smoked oak cabinetry & Calacatta marble' },
    { title: 'Master Bedroom Suite', image: imageMapping.residentialBedroom.url, caption: 'Acoustic slatted timber & custom storage' },
    { title: 'Spa-Inspired Bathroom', image: imageMapping.residentialBathroom.url, caption: 'Travertine slabs, walk-in shower & rain head' },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
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
              Residential Construction & <span className="text-[#1558C9]">Modernization.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              We specialize in the meticulous structural and interior transformation of monumental canal
              townhouses, period apartments, and contemporary family properties across Amsterdam and the Netherlands.
            </motion.p>
          </div>

          {/* Hero Photography with Slow Zoom */}
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
                src={imageMapping.residentialHero.url}
                alt={imageMapping.residentialHero.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                SIGNATURE RESIDENCE · AMSTERDAM OUD-ZUID
              </span>
              <span className="font-light leading-relaxed">
                Restored 19th-century ceiling plaster moldings harmonized with minimalist dark forest joinery and chevron oak.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Residential Capabilities */}
      <section className="py-24 md:py-32 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block">
                Architectural Expertise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#030407] font-bold leading-tight tracking-[-0.02em]">
                Crafting Spaces Tailored to <span className="text-[#1558C9]">How You Live.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Historic Dutch homes present unique architectural challenges: shifting timber pile foundations,
                settlement angles, acoustic transmission across party walls, and strict monument preservation guidelines.
              </p>
              <p className="text-sm sm:text-base text-[#66686D] leading-relaxed font-light">
                Proven Projecten addresses every facet with structural precision. We engineer concealed steel portal
                frames to open compartmentalized floorplans, install laser-leveled acoustic floating subfloors, and
                fabricate bespoke solid oak millwork built to endure generational use.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#030407]/10">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#111214]">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span><strong>Full House Renovations:</strong> End-to-end turnkey reconstruction from bare masonry.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#111214]">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span><strong>Culinary & Bathroom Suites:</strong> Custom vanities, waterfall stone islands & spa wetrooms.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#111214]">
                  <CheckCircle2 className="w-4 h-4 text-[#1558C9] shrink-0 mt-0.5" />
                  <span><strong>Acoustic & Thermal Upgrades:</strong> Rw + Ctr 54dB sound dampening and high-efficiency underfloor heating.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs"
                >
                  <span>Request Residential Estimate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Supporting Feature Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 overflow-hidden shadow-2xl border border-[#030407]/10">
                <ArchitecturalImage
                  src={imageMapping.residentialExtension.url}
                  alt={imageMapping.residentialExtension.alt}
                  fallbackTitle="Garden Extension"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[#F7F7F5] border border-[#030407]/10 mt-4 flex items-center justify-between text-xs text-[#030407]">
                <span className="font-serif italic text-sm font-bold">Seamless Indoor-Outdoor Flow</span>
                <span className="font-mono text-[#1558C9] text-[10px] font-bold">MINIMAL-FRAME GLAZING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Room-by-Room Gallery */}
      <section className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="font-secondary text-xs uppercase tracking-[0.25em] font-bold text-[#1558C9] block mb-2">
              Spaces Transformed
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#030407] font-bold tracking-[-0.02em]">
              Signature Residential <span className="text-[#1558C9]">Rooms</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#030407]/10 overflow-hidden shadow-md group hover:border-[#1558C9] transition-colors">
                <div className="aspect-4/3 overflow-hidden bg-[#F7F7F5]">
                  <ArchitecturalImage
                    src={item.image}
                    alt={item.title}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-base text-[#030407] font-bold">{item.title}</h3>
                  <p className="text-xs text-[#66686D] mt-1 font-light">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Transformation Slider */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider initialCategoryId="living-room" />
        </div>
      </section>

      {/* 5. Consultation CTA Banner */}
      <section className="py-20 bg-[#030407] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">
            Planning a Residential Transformation?
          </h2>
          <p className="text-sm text-[#66686D] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Schedule an on-site survey at your property in Amsterdam or throughout the Netherlands.
            We provide clear, itemized cost planning and structural guidance.
          </p>
          <Link
            to="/free-consultation"
            className="px-8 py-4 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md inline-block rounded-xs"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};
