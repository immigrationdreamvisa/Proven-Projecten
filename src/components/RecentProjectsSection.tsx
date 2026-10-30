import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  X,
  Sliders,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { recentProjectsData, RecentProjectItem } from '../data/recentProjectsData.ts';

const CATEGORIES = [
  'All Recent',
  'Roof & Dormers',
  'Loft & Interior',
  'Kitchens',
  'Bathrooms',
  'Extensions',
  'Living Salons',
] as const;

export const RecentProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Recent');
  const [activeModalProject, setActiveModalProject] = useState<RecentProjectItem | null>(null);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedCategory === 'All Recent'
      ? recentProjectsData
      : recentProjectsData.filter((p) => p.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <section id="recent-projects" className="py-20 md:py-28 bg-[#030407] text-[#FFFFFF] relative overflow-hidden">
      {/* Background Architectural Blueprint Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#D4FF24]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4FF24] font-secondary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Verified On-Site Transformations
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight font-bold">
              Recent Projects
            </h2>
            <p className="text-sm sm:text-base text-[#66686D] mt-3 max-w-2xl font-light leading-relaxed">
              Real before-and-after documentations from our ongoing and recently handed-over residences across Amsterdam,
              Zaandijk, Bloemendaal, and North Holland.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:border-[#D4FF24]"
              aria-label="Previous recent projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:border-[#D4FF24]"
              aria-label="Next recent projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer rounded-full ${
                  isActive
                    ? 'text-[#030407]'
                    : 'text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeRecentCategoryPill"
                    className="absolute inset-0 bg-[#D4FF24] rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel / Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-[88vw] sm:w-[410px] md:w-[430px] lg:w-[450px] shrink-0 snap-center group"
            >
              {/* Outer Card Styled with Midnight Black & Crisp Borders */}
              <div className="relative rounded-2xl sm:rounded-3xl bg-[#0b0e14] border border-white/15 p-3.5 sm:p-4 shadow-2xl transition-all duration-300 hover:border-[#1558C9] hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]">
                {/* Side Drag / Indicator Pill Handles */}
                <div
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-white/20 rounded-full group-hover:bg-[#D4FF24]/70 transition-colors pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-white/20 rounded-full group-hover:bg-[#D4FF24]/70 transition-colors pointer-events-none"
                  aria-hidden="true"
                />

                {/* 1. TOP IMAGE (BEFORE) */}
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#07090e] border border-white/5 shadow-inner">
                  <img
                    src={project.beforeImage}
                    alt={project.beforeAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Distinctive Acid Lime Pill Badge for BEFORE */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#D4FF24] text-[#030407] font-bold text-[11px] sm:text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-lg z-10 font-sans select-none pointer-events-none">
                    {project.beforeLabel}
                  </div>
                </div>

                {/* 2. BOTTOM IMAGE (AFTER) */}
                <div className="relative aspect-16/10 rounded-xl overflow-hidden bg-[#07090e] border border-white/5 mt-3 sm:mt-3.5 shadow-inner">
                  <img
                    src={project.afterImage}
                    alt={project.afterAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Distinctive Acid Lime Pill Badge for AFTER */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#D4FF24] text-[#030407] font-bold text-[11px] sm:text-xs tracking-wider uppercase px-4 py-1 rounded-full shadow-lg z-10 font-sans select-none pointer-events-none">
                    {project.afterLabel}
                  </div>
                </div>

                {/* Card Information & Action Bar */}
                <div className="pt-4 px-1 pb-1">
                  <div className="flex items-center justify-between text-[11px] text-[#66686D] font-mono mb-2">
                    <span className="flex items-center gap-1 text-[#D4FF24]">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-white/70">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-bold leading-snug mb-2 group-hover:text-[#D4FF24] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#66686D] font-light line-clamp-2 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Specifications & CTA Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4FF24] hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      <span>Inspect</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Trust Footer */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-white/70">
            <span className="text-[#D4FF24] font-semibold">100% Guaranteed Fixed Scope:</span> Every residential project
            includes line-item transparency, milestone billing, and a 10-year structural warranty.
          </div>
          <Link
            to="/free-consultation"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md shrink-0 rounded-xs"
          >
            <span>Inquire About Your Home</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Interactive Detail & Comparison Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#0b0e14] border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-white"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#030407]">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4FF24] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeModalProject.location}</span>
                    <span>·</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeModalProject.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close transformation detail modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Interactive Drag Comparison Slider inside Modal */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-white/75">
                    <span className="flex items-center gap-1">
                      <Sliders className="w-3.5 h-3.5 text-[#D4FF24]" />
                      Drag slider or click anywhere to compare Before & After
                    </span>
                    <span className="text-[#D4FF24] font-bold">{Math.round(sliderPos)}% After View</span>
                  </div>

                  <div
                    ref={sliderContainerRef}
                    onMouseDown={() => setIsDraggingSlider(true)}
                    onMouseUp={() => setIsDraggingSlider(false)}
                    onMouseLeave={() => setIsDraggingSlider(false)}
                    onMouseMove={(e) => {
                      if (isDraggingSlider) handleSliderMove(e.clientX);
                    }}
                    onClick={(e) => handleSliderMove(e.clientX)}
                    onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
                    className="relative aspect-16/10 sm:aspect-21/9 rounded-xl overflow-hidden bg-black select-none cursor-ew-resize border border-white/15 shadow-2xl"
                  >
                    {/* AFTER image (base layer) */}
                    <img
                      src={activeModalProject.afterImage}
                      alt={activeModalProject.afterAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* BEFORE image (clipped layer) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                      <img
                        src={activeModalProject.beforeImage}
                        alt={activeModalProject.beforeAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Sliding Divider Bar */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4FF24] text-[#030407] flex items-center justify-center shadow-xl">
                        <Sliders className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Corner Labels */}
                    <div className="absolute top-3 left-3 bg-[#D4FF24] text-[#030407] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                      BEFORE
                    </div>
                    <div className="absolute top-3 right-3 bg-[#D4FF24] text-[#030407] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10 pointer-events-none">
                      AFTER
                    </div>
                  </div>
                </div>

                {/* Detailed Scope of Work */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#D4FF24] mb-3 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Architectural & Structural Scope of Work
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalProject.detailedScope.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-white/90 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4FF24] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Specifications Grid */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-[#D4FF24] mb-3">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalProject.keySpecs.map((spec, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <span className="text-[10px] text-white/60 uppercase font-mono block mb-1">
                          {spec.label}
                        </span>
                        <span className="text-xs font-medium text-white block">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/10 bg-[#030407] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/75 text-center sm:text-left">
                  Discuss your home project with our Amsterdam architectural engineers.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 text-xs uppercase tracking-wider text-white border border-white/20 hover:bg-white/10 transition-colors rounded-xs"
                  >
                    Close
                  </button>
                  <Link
                    to="/free-consultation"
                    className="flex-1 sm:flex-initial px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all shadow-md rounded-xs flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default RecentProjectsSection;

