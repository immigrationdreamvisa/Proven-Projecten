import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { DimensionOverlay, BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

const CATEGORIES = [
  'All Projects',
  'Complete Renovations',
  'Living Rooms',
  'Kitchens',
  'Bathrooms',
  'Exterior Design',
  'Extensions',
  'Flooring & Finishing',
];

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeBeforeCards, setActiveBeforeCards] = useState<Record<string, boolean>>({});

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const toggleCardBefore = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveBeforeCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
                Residential Portfolio & Transformations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#252824] tracking-[-0.025em] font-normal leading-[1.05]"
            >
              Residential Transformations. <span className="italic font-normal">Enduring Craftsmanship.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#252824]/80 mt-6 font-light leading-relaxed max-w-2xl"
            >
              Explore our verified residential portfolio spanning monumental Dutch canal houses,
              luxury kitchen renovations, travertine spa bathrooms, contemporary rear extensions, and bespoke interior joinery across Amsterdam and North Holland.
            </motion.p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 text-xs font-secondary font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#F7F6F2]'
                      : 'bg-[#FFFFFF] text-[#252824]/80 hover:text-[#252824] hover:bg-[#E9E4DA] border border-[#E9E4DA]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute inset-0 bg-[#263D35] z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Before/After Transformation Slider Hub */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E9E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 3. Projects Grid */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#263D35] font-semibold block mb-2">
                Curated Case Studies · {filteredProjects.length} Projects
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#252824]">
                Proven Execution in Every Detail
              </h2>
            </div>
            <span className="text-xs text-[#252824]/60">
              Click “Compare Before / After” on cards to reveal pre-renovation condition
            </span>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => {
                const showBefore = activeBeforeCards[project.id];
                const displayImage = showBefore && project.beforeImage ? project.beforeImage : project.mainImage;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    data-cursor="project"
                  >
                    <div className="group flex flex-col justify-between bg-[#F7F6F2] border border-[#E9E4DA] overflow-hidden hover:shadow-2xl hover:border-[#263D35]/40 transition-all h-full">
                      <div className="relative aspect-16/10 overflow-hidden bg-[#E9E4DA]">
                        <ArchitecturalImage
                          src={displayImage}
                          alt={project.title}
                          fallbackTitle={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <DimensionOverlay
                          dimensions={{
                            width: `${14 + (idx % 3) * 2}.5m`,
                            height: '3.60m',
                            ref: `PRJ_${project.category.toUpperCase().slice(0, 4)}`,
                          }}
                        />

                        {/* Category & Status Badges */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                          <span className="bg-[#F7F6F2]/95 backdrop-blur-xs px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#263D35] border border-[#E9E4DA]">
                            {project.category}
                          </span>
                          {project.beforeImage && (
                            <button
                              type="button"
                              onClick={(e) => toggleCardBefore(project.id, e)}
                              className="bg-[#252824]/85 hover:bg-[#263D35] text-white text-[10px] px-2.5 py-1 uppercase tracking-wider font-medium backdrop-blur-xs transition-colors flex items-center gap-1 cursor-pointer"
                              title="Toggle between before and after image"
                            >
                              <Sparkles className="w-3 h-3 text-[#A8B2A3]" />
                              <span>{showBefore ? 'Show Completed' : 'Compare Before'}</span>
                            </button>
                          )}
                        </div>

                        {showBefore && (
                          <div className="absolute top-4 right-4 bg-red-950/80 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 z-20">
                            Pre-Renovation State
                          </div>
                        )}

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFFFF] bg-black/60 backdrop-blur-xs px-3 py-1.5 opacity-90 z-20">
                          <span className="flex items-center gap-1.5 truncate">
                            <MapPin className="w-3.5 h-3.5 text-[#E9E4DA] shrink-0" />
                            <span className="truncate">{project.location}</span>
                          </span>
                          <span className="text-[10px] font-mono text-[#E9E4DA] shrink-0 pl-2">
                            {project.completionYear}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex items-center gap-2 text-[11px] text-[#263D35] font-mono mb-2">
                            <span>{project.residentialType || 'Residential Architecture'}</span>
                            <span>·</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {project.duration}
                            </span>
                          </div>
                          <h3 className="font-serif text-2xl text-[#252824] group-hover:text-[#263D35] transition-colors mb-2 leading-snug">
                            {project.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#252824]/75 line-clamp-2 font-light leading-relaxed mb-6">
                            {project.shortDescription}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#E9E4DA] flex items-center justify-between">
                          <Link
                            to={`/portfolio/${project.slug}`}
                            className="text-xs uppercase tracking-wider font-semibold text-[#263D35] hover:underline flex items-center gap-1.5"
                          >
                            <span>Explore Full Case Study & Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-[11px] text-[#252824]/50 font-mono">
                            Amsterdam Oud-Zuid B.V.
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="py-20 bg-[#263D35] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 font-normal">
            Ready to Begin Your Home Transformation?
          </h2>
          <p className="text-sm sm:text-base text-[#A8B2A3] max-w-xl mx-auto font-light leading-relaxed mb-8">
            Tell us about your property vision. We will prepare an architectural survey, structural feasibility review, and line-item quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/free-consultation"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#263D35] bg-[#F7F6F2] hover:bg-white transition-all shadow-md inline-block"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] border border-[#F7F6F2]/40 hover:bg-[#F7F6F2]/10 transition-all"
            >
              Contact Our Amsterdam Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
