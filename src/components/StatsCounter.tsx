import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BlueprintGrid } from './motion/BlueprintElements.tsx';

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  cadRef: string;
}

const AnimatedNumber: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({
  value,
  suffix = '',
  prefix = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="font-serif editorial-number font-extrabold text-5xl sm:text-7xl lg:text-8xl text-[#D4FF24] tabular-nums tracking-[-0.03em] leading-none block"
    >
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  const STATS: StatItemProps[] = [
    {
      end: 100,
      suffix: '+',
      label: 'Delivered Projects',
      description: 'Turnkey residential restorations and commercial fit-outs across the Netherlands.',
      cadRef: 'PARAM_PRJ_TOTAL',
    },
    {
      end: 25,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Combined master craftsmanship in Dutch masonry, structural joinery, and MEP.',
      cadRef: 'PARAM_YRS_EXP',
    },
    {
      end: 65,
      suffix: '+',
      label: 'Residential Transformations',
      description: 'Canal townhouses, period apartments, and architect-designed garden expansions.',
      cadRef: 'PARAM_RES_SCOPE',
    },
    {
      end: 35,
      suffix: '+',
      label: 'Commercial & Hospitality',
      description: 'Boutique hotel suites, reception lounges, and executive creative studios.',
      cadRef: 'PARAM_COMM_FIT',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#030407] text-white border-y border-white/10 overflow-hidden">
      {/* Background CAD Blueprint Grid */}
      <BlueprintGrid opacity={0.03} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#D4FF24]" />
              <span className="font-secondary text-[11px] uppercase tracking-[0.25em] font-bold text-[#D4FF24]">
                Verified Performance & Track Record
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-[-0.02em] leading-tight font-extrabold">
              Craftsmanship Grounded in <span className="text-[#1558C9]">Data.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#66686D] leading-relaxed font-normal">
            Every statistic represents a completed site sign-off, structural guarantee, and a client
            relationship nurtured over decades of building excellence.
          </p>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-[#0b0e14] border border-white/10 hover:border-[#1558C9] transition-all duration-300 relative flex flex-col justify-between group hover:shadow-[0_15px_35px_rgba(21,88,201,0.2)] rounded-xl"
            >
              {/* Technical Marker Header */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[#1558C9] font-bold mb-6 border-b border-white/10 pb-2">
                <span>{stat.cadRef}</span>
                <span className="tabular-nums font-mono text-white/50">0{idx + 1} // NEN</span>
              </div>

              {/* Number */}
              <div className="my-3">
                <AnimatedNumber value={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
              </div>

              {/* Label & Description */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <h3 className="font-secondary text-base sm:text-lg text-white mb-1.5 font-bold">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#66686D] font-normal leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Corner Decorative Reticle */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#1558C9]/40 group-hover:border-[#D4FF24] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
