import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }

      setIsVisible(currentScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  const circleRadius = 20;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#030407] hover:bg-[#1558C9] text-white border border-white/15 hover:border-[#D4FF24] shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
      aria-label="Scroll to top"
      title={`Back to top (${Math.round(scrollProgress)}%)`}
    >
      {/* SVG Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
        {/* Background track */}
        <circle
          cx="24"
          cy="24"
          r={circleRadius}
          fill="none"
          stroke="#66686D"
          strokeWidth="2"
          opacity="0.3"
        />
        {/* Animated Progress indicator */}
        <circle
          cx="24"
          cy="24"
          r={circleRadius}
          fill="none"
          stroke="#D4FF24"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>

      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:text-[#D4FF24]" />
    </button>
  );
};
