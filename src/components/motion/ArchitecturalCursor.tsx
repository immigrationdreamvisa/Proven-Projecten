import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const ArchitecturalCursor: React.FC = () => {
  const [cursorType, setCursorType] = useState<'default' | 'project' | 'slider' | 'hidden'>('hidden');
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end organic cursor movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad, not touch)
    const checkFinePointer = () => {
      const supportsFine = window.matchMedia('(pointer: fine)').matches;
      setIsFinePointer(supportsFine);
      if (supportsFine) {
        setCursorType('default');
      }
    };
    checkFinePointer();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect hover target
      const target = (e.target as HTMLElement)?.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        if (type === 'project') setCursorType('project');
        else if (type === 'slider') setCursorType('slider');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => {
      setCursorType('hidden');
    };

    const handleMouseEnter = () => {
      if (isFinePointer) setCursorType('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isFinePointer]);

  if (!isFinePointer || cursorType === 'hidden') {
    return null;
  }

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 pointer-events-none z-50 select-none hidden lg:block"
    >
      {/* State: Default - Subtle architectural crosshair dot */}
      {cursorType === 'default' && (
        <div className="w-4 h-4 rounded-full border border-[#1558C9]/40 flex items-center justify-center transition-all">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1558C9]" />
        </div>
      )}

      {/* State: Project Hover - Expanded architectural badge */}
      {cursorType === 'project' && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          className="w-24 h-24 rounded-full bg-[#030407]/95 text-white backdrop-blur-xs flex flex-col items-center justify-center text-center p-2 shadow-2xl border border-white/30"
        >
          <span className="text-[9px] uppercase tracking-widest font-bold leading-tight">
            View
            <br />
            Project
          </span>
          <span className="text-[8px] font-mono text-[#D4FF24] mt-1 font-bold">
            + SPEC
          </span>
        </motion.div>
      )}

      {/* State: Slider Hover */}
      {cursorType === 'slider' && (
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          className="px-3 py-1.5 rounded-full bg-[#030407]/90 text-[#D4FF24] backdrop-blur-xs text-[10px] font-mono tracking-wider shadow-xl border border-[#D4FF24]/40 whitespace-nowrap font-bold"
        >
          &lt; DRAG &gt;
        </motion.div>
      )}
    </motion.div>
  );
};
