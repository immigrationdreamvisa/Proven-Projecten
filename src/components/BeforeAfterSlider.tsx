import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoveHorizontal, CheckCircle2, Sliders, Columns, Sparkles, MapPin, Clock } from 'lucide-react';
import { transformationsData, TransformationItem } from '../data/transformationsData.ts';

interface BeforeAfterSliderProps {
  initialCategoryId?: string;
  showCategoryTabs?: boolean;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  initialCategoryId = 'living-room',
  showCategoryTabs = true,
  className = '',
}) => {
  const [selectedId, setSelectedId] = useState(initialCategoryId);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'split'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem: TransformationItem =
    transformationsData.find((t) => t.id === selectedId) || transformationsData[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`w-full bg-[#FFFFFF] border border-[#030407]/10 p-6 sm:p-10 shadow-lg ${className}`}>
      {/* Category Tabs Header */}
      {showCategoryTabs && (
        <div className="mb-8 border-b border-[#030407]/10 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-[1px] bg-[#1558C9]" />

              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#030407] font-bold">
                Before & After Transformations
              </h3>
            </div>

            {/* Mode Toggle: Slider vs Side-by-Side */}
            <div className="flex items-center gap-1 bg-[#F7F7F5] p-1 border border-[#030407]/10 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${viewMode === 'slider'
                    ? 'bg-[#1558C9] text-white shadow-xs'
                    : 'text-[#66686D] hover:text-[#111214]'
                  }`}
                aria-label="Interactive comparison slider"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Slider</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('split')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${viewMode === 'split'
                    ? 'bg-[#1558C9] text-white shadow-xs'
                    : 'text-[#66686D] hover:text-[#111214]'
                  }`}
                aria-label="Side by side comparison"
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Side by Side</span>
              </button>
            </div>
          </div>

          {/* Room / Scope Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {transformationsData.map((item) => {
              const isActive = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all whitespace-nowrap cursor-pointer ${isActive
                      ? 'bg-[#1558C9] text-white'
                      : 'bg-[#F7F7F5] text-[#66686D] hover:text-[#111214] hover:bg-black/5 border border-[#030407]/10'
                    }`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Case Study Details Header */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 text-xs text-[#1558C9] mb-1 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {activeItem.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Duration: {activeItem.duration}
              </span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#030407] font-bold">{activeItem.title}</h4>
          </div>
          <p className="max-w-xl text-xs sm:text-sm text-[#66686D] font-light leading-relaxed">
            {activeItem.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Comparison Display */}
      {viewMode === 'slider' ? (
        <div
          ref={containerRef}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Interactive Before and After image comparison slider"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onClick={handleContainerClick}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden select-none cursor-ew-resize border border-[#030407]/10 shadow-md group focus:outline-none focus:ring-2 focus:ring-[#1558C9]"
        >
          {/* 'After' Image (Base Layer) */}
          <img
            src={activeItem.afterImage}
            alt={activeItem.afterLabel}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* 'After' Badge */}
          <div className="absolute top-4 right-4 z-10 bg-[#D4FF24] text-[#030407] px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#030407] animate-pulse" />
            <span>{activeItem.afterLabel}</span>
          </div>

          {/* 'Before' Image Layer (Clipped to sliderPosition) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={activeItem.beforeImage}
              alt={activeItem.beforeLabel}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                height: '100%',
              }}
            />
            {/* 'Before' Badge */}
            <div className="absolute top-4 left-4 z-10 bg-[#030407]/90 text-white px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold shadow-md">
              {activeItem.beforeLabel}
            </div>
          </div>

          {/* Vertical Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Line with subtle glow */}
            <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

            {/* Central Round Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#D4FF24] text-[#030407] border-2 border-[#030407] shadow-2xl flex items-center justify-center transition-transform group-hover:scale-110">
              <MoveHorizontal className="w-5 h-5" />
            </div>

            {/* Live Split Indicator */}
            <div className="absolute bottom-4 -translate-x-1/2 bg-[#030407] text-[#D4FF24] px-2.5 py-0.5 text-[10px] font-mono shadow-md whitespace-nowrap font-bold">
              {Math.round(sliderPosition)}% SPLIT
            </div>
          </div>

          {/* Floating Instructions */}
          <div className="absolute bottom-4 right-4 z-10 bg-[#030407]/80 backdrop-blur-xs text-white text-[10px] px-3 py-1 flex items-center gap-1.5 font-medium pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#D4FF24]" />
            <span>Drag slider or use ← → arrow keys</span>
          </div>
        </div>
      ) : (
        /* Side by Side Mode */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-16/10 overflow-hidden border border-[#030407]/10 shadow-xs">
            <img
              src={activeItem.beforeImage}
              alt={activeItem.beforeLabel}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#030407]/90 text-white px-3 py-1 text-[10px] uppercase tracking-wider font-bold">
              {activeItem.beforeLabel}
            </div>
          </div>

          <div className="relative aspect-16/10 overflow-hidden border border-[#030407]/10 shadow-xs">
            <img
              src={activeItem.afterImage}
              alt={activeItem.afterLabel}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-[#D4FF24] text-[#030407] px-3 py-1 text-[10px] uppercase tracking-wider font-bold">
              {activeItem.afterLabel}
            </div>
          </div>
        </div>
      )}

      {/* Scope of Work & Architectural Specifications Strip */}
      <div className="mt-8 pt-8 border-t border-[#030407]/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <h5 className="text-xs uppercase tracking-wider font-bold text-[#1558C9] mb-3">
            Executed Transformation Scope
          </h5>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeItem.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#111214] leading-snug">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1558C9] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 bg-[#F7F7F5] p-4 border border-[#030407]/10">
          <h5 className="text-[11px] uppercase tracking-wider font-bold text-[#030407] mb-2.5">
            Key Architectural Specifications
          </h5>
          <div className="space-y-1.5">
            {activeItem.specs.map((spec, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-[#030407]/10 last:border-none">
                <span className="text-[#66686D]">{spec.label}</span>
                <span className="font-medium text-[#111214]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustrative Disclaimer Note */}
      <div className="mt-6 pt-3 border-t border-[#030407]/10 flex items-center justify-between text-[11px] text-[#66686D]">
        <span>Illustrative architectural transformation case study · Proven Projecten B.V.</span>
        <span className="hidden sm:inline">Craftsmanship Guarantee: 10 Years Structural Warranty</span>
      </div>
    </div>
  );
};
