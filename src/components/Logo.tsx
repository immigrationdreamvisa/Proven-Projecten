import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <div className={`flex items-center select-none shrink-0 ${className}`}>
      <img
        src={isLight ? '/proven-logo-transparent.png' : '/proven-logo-dark.png'}
        alt="Proven Projecten"
        width={156}
        height={44}
        loading="eager"
        decoding="async"
        className="h-9 sm:h-10.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default Logo;
