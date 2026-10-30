import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, MapPin, Award, Building2, ChevronDown } from 'lucide-react';
import { BlueprintGrid } from './motion/BlueprintElements.tsx';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreProjects,
}) => {
  // Heading words for word-by-word staggered reveal
  const line1Words = ['Building', 'Spaces.'];
  const line2Words = ['Creating', 'Lasting', 'Value.'];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background CAD Blueprint Grid */}
      <BlueprintGrid opacity={0.03} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left Editorial Statement & Right Monumental Architectural Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & CTAs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Subtle editorial kicker with animated entrance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#263D35]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
                Architecture · Construction · Amsterdam
              </span>
            </motion.div>

            {/* Word-by-Word Animated Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[#252824] tracking-tight text-balance mb-6">
              <span className="block overflow-hidden">
                {line1Words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block italic font-normal text-[#263D35] overflow-hidden mt-1">
                {line2Words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-2.5"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Supporting Copy with Staggered Fade */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#252824]/80 leading-relaxed font-light mb-8 max-w-xl"
            >
              From thoughtful renovations to complete property transformations, we bring craftsmanship,
              precision and vision to every project across Amsterdam and the Netherlands.
            </motion.p>

            {/* Staggered CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#252824] bg-transparent border border-[#252824]/30 hover:border-[#252824] hover:bg-[#E9E4DA]/40 transition-all duration-200 cursor-pointer"
              >
                Explore Our Projects
              </button>
            </motion.div>

            {/* Direct Trust Micro-indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E9E4DA]"
            >
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <span className="text-xs text-[#252824]/80 leading-snug">
                  Fixed quotes, transparent scheduling & single point of contact
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                <span className="text-xs text-[#252824]/80 leading-snug">
                  Based at Jacob Obrechtstraat, Amsterdam Oud-Zuid
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Architectural Photography with Cinematic Reveal & Slow Zoom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            {/* Architectural Frame with Technical CAD Corner Ticks */}
            <div className="relative overflow-hidden aspect-4/3 sm:aspect-16/10 shadow-2xl border border-[#E9E4DA]">
              {/* Slow continuous cinematic scale animation */}
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.04 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                src="/src/assets/images/hero_architectural_exterior_1793271112313.jpg"
                alt="Proven Projecten contemporary European townhouse renovation"
                className="w-full h-full object-cover"
              />

              {/* Technical CAD Measurement Lines Overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[9px] font-mono text-[#F7F6F2] bg-[#252824]/80 backdrop-blur-xs px-2 py-0.5 border border-white/20">
                <span className="w-1.5 h-1.5 bg-[#A8B2A3] rounded-full inline-block" />
                <span>GRID: 52°21'19"N 4°52'42"E</span>
              </div>

              {/* Architectural Caption Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#F7F6F2]/95 backdrop-blur-sm p-4 border border-[#E9E4DA] shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#263D35]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#263D35] font-semibold">
                    Signature Residential
                  </span>
                </div>
                <p className="text-xs text-[#252824] font-medium leading-snug">
                  Modern facade modernization with slimline steel-framed glazing and restored Dutch brickwork.
                </p>
              </motion.div>
            </div>

            {/* Corner Decorative Hairline Elements */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#263D35]/30 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Architectural Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 pt-8 border-t border-[#E9E4DA] grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg text-[#252824] font-semibold">Residential & Commercial</p>
              <p className="text-xs text-[#252824]/70">Full-spectrum construction & fit-outs</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg text-[#252824] font-semibold tabular-nums">25+ Years</p>
              <p className="text-xs text-[#252824]/70">Combined master craftsmanship</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg text-[#252824] font-semibold tabular-nums">100+ Projects</p>
              <p className="text-xs text-[#252824]/70">Delivered across the Netherlands</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg text-[#252824] font-semibold">Netherlands</p>
              <p className="text-xs text-[#252824]/70">Amsterdam, Randstad & nationwide</p>
            </div>
          </div>
        </motion.div>

        {/* Subtle Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 hidden md:flex flex-col items-center justify-center cursor-pointer"
          onClick={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#263D35] mb-1">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-[#263D35]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
