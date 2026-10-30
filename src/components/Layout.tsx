import React, { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import { Breadcrumbs } from './Breadcrumbs.tsx';
import { ScrollToTop } from './ScrollToTop.tsx';
import { ArchitecturalCursor } from './motion/ArchitecturalCursor.tsx';
import { BackToTop } from './BackToTop.tsx';
import { LegalModal } from './LegalModal.tsx';

const PageFallback: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center py-24 bg-[#F7F7F5]">
    <div className="w-9 h-9 border-3 border-[#030407]/10 border-t-[#1558C9] rounded-full animate-spin mb-4" />
    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#030407]">
      Proven Projecten · Loading
    </span>
  </div>
);

export const Layout: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111214] flex flex-col relative selection:bg-[#D4FF24] selection:text-[#030407]">
      {/* Scroll restoration on route changes */}
      <ScrollToTop />

      {/* Desktop CAD Crosshair Cursor */}
      <ArchitecturalCursor />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Area: Robust direct rendering without AnimatePresence deadlocks */}
      <main id="main-content" className="flex-1 pt-20 w-full">
        <Breadcrumbs />
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Global Midnight Black Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Legal & Compliance Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Circular Scroll Progress Back-To-Top Button */}
      <BackToTop />
    </div>
  );
};
