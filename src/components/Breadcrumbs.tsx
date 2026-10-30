import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  customCrumbs?: Array<{ label: string; path?: string }>;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customCrumbs }) => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const pathnames = location.pathname.split('/').filter((x) => x);

  const routeLabelMap: Record<string, string> = {
    about: 'About Us',
    services: 'Services',
    residential: 'Residential Services',
    commercial: 'Commercial & Hospitality',
    renovation: 'Renovation',
    maintenance: 'Maintenance & Upkeep',
    extensions: 'Extensions & Roof Works',
    'interior-design': 'Interior Design',
    contact: 'Contact Us',
    'free-consultation': 'Free Consultation',
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-xs text-[#66686D] font-mono flex items-center gap-1.5 overflow-x-auto no-scrollbar"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-[#1558C9] transition-colors shrink-0"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {customCrumbs ? (
        customCrumbs.map((crumb, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[#66686D]/40 shrink-0" />
            {crumb.path ? (
              <Link
                to={crumb.path}
                className="hover:text-[#1558C9] transition-colors whitespace-nowrap"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[#030407] font-bold whitespace-nowrap">
                {crumb.label}
              </span>
            )}
          </React.Fragment>
        ))
      ) : (
        pathnames.map((segment, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = routeLabelMap[segment] || segment.replace(/-/g, ' ');

          return (
            <React.Fragment key={routeTo}>
              <ChevronRight className="w-3 h-3 text-[#66686D]/40 shrink-0" />
              {isLast ? (
                <span className="text-[#030407] font-bold capitalize whitespace-nowrap">
                  {label}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-[#1558C9] transition-colors capitalize whitespace-nowrap"
                >
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })
      )}
    </nav>
  );
};
