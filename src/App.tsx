import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { HomePage } from './pages/HomePage.tsx';

// Code-split secondary routes to keep initial bundle size lean and load times fast
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then((m) => ({ default: m.AboutPage })));
const ServicesOverviewPage = lazy(() => import('./pages/ServicesOverviewPage.tsx').then((m) => ({ default: m.ServicesOverviewPage })));
const ResidentialServicesPage = lazy(() => import('./pages/ResidentialServicesPage.tsx').then((m) => ({ default: m.ResidentialServicesPage })));
const CommercialServicesPage = lazy(() => import('./pages/CommercialServicesPage.tsx').then((m) => ({ default: m.CommercialServicesPage })));
const RenovationServicePage = lazy(() => import('./pages/RenovationServicePage.tsx').then((m) => ({ default: m.RenovationServicePage })));
const MaintenanceServicePage = lazy(() => import('./pages/MaintenanceServicePage.tsx').then((m) => ({ default: m.MaintenanceServicePage })));
const ExtensionsServicePage = lazy(() => import('./pages/ExtensionsServicePage.tsx').then((m) => ({ default: m.ExtensionsServicePage })));
const InteriorDesignServicePage = lazy(() => import('./pages/InteriorDesignServicePage.tsx').then((m) => ({ default: m.InteriorDesignServicePage })));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then((m) => ({ default: m.ContactPage })));
const FreeConsultationPage = lazy(() => import('./pages/FreeConsultationPage.tsx').then((m) => ({ default: m.FreeConsultationPage })));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesOverviewPage />} />
          <Route path="services/residential" element={<ResidentialServicesPage />} />
          <Route path="services/commercial" element={<CommercialServicesPage />} />
          <Route path="services/renovation" element={<RenovationServicePage />} />
          <Route path="services/maintenance" element={<MaintenanceServicePage />} />
          <Route path="services/extensions" element={<ExtensionsServicePage />} />
          <Route path="services/interior-design" element={<InteriorDesignServicePage />} />

          {/* Gracefully redirect removed portfolio and reviews paths to home */}
          <Route path="portfolio" element={<Navigate to="/" replace />} />
          <Route path="portfolio/*" element={<Navigate to="/" replace />} />
          <Route path="reviews" element={<Navigate to="/" replace />} />

          <Route path="contact" element={<ContactPage />} />
          <Route path="free-consultation" element={<FreeConsultationPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
