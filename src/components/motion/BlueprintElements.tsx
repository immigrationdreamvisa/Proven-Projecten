import React from 'react';
import { motion } from 'motion/react';

// Subtle CAD-style background grid with crosshair markers
export const BlueprintGrid: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.04,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="blueprint-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Fine grid lines */}
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#030407"
              strokeWidth="0.75"
              strokeDasharray="2,4"
            />
            {/* Crosshair at intersections */}
            <path
              d="M 28 30 L 32 30 M 30 28 L 30 32"
              fill="none"
              stroke="#1558C9"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-pattern)" />
      </svg>
    </div>
  );
};

// Animated architectural facade outline that draws itself on scroll/entry
export const AnimatedFacadeDrawing: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto stroke-[#1558C9] pointer-events-none ${className}`}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ground line */}
      <motion.path
        d="M20 280 H380"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Dutch Canal House Profile with Step Gable */}
      <motion.path
        d="M60 280 V120 L80 120 V100 L100 100 V80 L120 80 V60 L140 60 V40 L160 40 L160 60 L180 60 L180 80 L200 80 L200 100 L220 100 L220 120 L240 120 V280"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.2 }}
      />

      {/* Modern Extension Annex */}
      <motion.path
        d="M240 280 V140 H340 V280"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Structural Glass Grid in Modern Extension */}
      <motion.path
        d="M260 280 V160 H320 V280 M290 160 V280 M260 220 H320"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.8 }}
      />

      {/* Historic Windows & Mullions */}
      <motion.path
        d="M90 140 H130 V180 H90 Z M170 140 H210 V180 H170 Z M90 200 H130 V250 H90 Z M170 200 H210 V250 H170 Z M135 70 H165 V100 H135 Z"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.9 }}
      />

      {/* Technical Dimension Marks */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <line x1="45" y1="40" x2="45" y2="280" stroke="#66686D" strokeWidth="0.75" strokeDasharray="3,3" />
        <line x1="40" y1="40" x2="50" y2="40" stroke="#66686D" strokeWidth="1" />
        <line x1="40" y1="280" x2="50" y2="280" stroke="#66686D" strokeWidth="1" />
        <text x="32" y="165" fill="#1558C9" fontSize="8" fontFamily="monospace" transform="rotate(-90, 32, 165)">
          ELEVATION +16.40m
        </text>

        <line x1="60" y1="295" x2="340" y2="295" stroke="#66686D" strokeWidth="0.75" strokeDasharray="3,3" />
        <line x1="60" y1="290" x2="60" y2="300" stroke="#66686D" strokeWidth="1" />
        <line x1="340" y1="290" x2="340" y2="300" stroke="#66686D" strokeWidth="1" />
        <text x="180" y="306" fill="#1558C9" fontSize="8" fontFamily="monospace" textAnchor="middle">
          FACADE WIDTH 14.80m
        </text>
      </motion.g>
    </svg>
  );
};

// Dimension lines overlay that activates over project cards
export const DimensionOverlay: React.FC<{
  dimensions?: { width: string; height: string; ref?: string };
}> = ({ dimensions = { width: '12.4m', height: '3.6m', ref: 'SECT_A-A' } }) => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-3 flex flex-col justify-between">
      {/* Top Dimension Line */}
      <div className="flex items-center justify-between text-[9px] font-mono text-white bg-[#030407]/90 backdrop-blur-xs px-2 py-0.5 border border-white/20">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-[#D4FF24] inline-block" />
          <span>DIM_W: {dimensions.width}</span>
        </span>
        <span className="text-[#D4FF24]">{dimensions.ref}</span>
      </div>

      {/* Four Precision Corner Reticles */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#D4FF24]" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#D4FF24]" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#D4FF24]" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#D4FF24]" />

      {/* Bottom Dimension Indicator */}
      <div className="flex items-center justify-between text-[9px] font-mono text-white bg-[#030407]/90 backdrop-blur-xs px-2 py-0.5 border border-white/20">
        <span>HEIGHT: {dimensions.height}</span>
        <span className="text-[#D4FF24]">NEN-EN 1990</span>
      </div>
    </div>
  );
};
