import React, { useState, useRef, useEffect } from 'react';

interface ArchitecturalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
  priority?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt = 'Proven Projecten architectural renovation',
  fallbackTitle,
  className = '',
  aspectRatioClass = '',
  priority = false,
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  if (error || !src) {
    return (
      <div
        className={`w-full h-full bg-[#F7F7F5] flex flex-col items-center justify-center p-6 text-center border border-[#030407]/10 ${aspectRatioClass} ${className}`}
      >
        <div className="w-12 h-12 rounded-full border border-[#1558C9]/20 flex items-center justify-center text-[#1558C9] mb-3">
          <svg
            className="w-6 h-6 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 21h18M5 21V7l8-4v18M13 10h4v11M9 9v1M9 13v1M9 17v1" />
          </svg>
        </div>
        <span className="text-xs uppercase tracking-widest text-[#1558C9] font-bold">
          {fallbackTitle || 'Proven Projecten'}
        </span>
        <span className="text-xs text-[#66686D] mt-1 max-w-[200px] truncate">
          Architectural Craftsmanship
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#030407]/5 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
