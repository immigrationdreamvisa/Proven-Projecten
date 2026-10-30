import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Check, ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.category === 'Residential'))
    .slice(0, 2);

  const currentHeroImage =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[activeImageIndex] || project.mainImage
      : project.mainImage;

  return (
    <div className="space-y-0">
      {/* 1. Hero & Gallery View */}
      <section className="relative pt-6 pb-16 bg-[#F7F6F2] border-b border-[#E9E4DA]">
        <BlueprintGrid opacity={0.025} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">

          </div>

          <div className="max-w-4xl mb-10">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#252824]/70 mb-3 font-mono">
              <span className="font-semibold text-[#263D35] uppercase">{project.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#263D35]" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Calendar className="w-3 h-3 text-[#263D35]" />
                Completed {project.completionYear}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Clock className="w-3 h-3 text-[#263D35]" />
                {project.duration}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[4rem] text-[#252824] leading-[1.08] tracking-[-0.025em]">
              {project.title}
            </h1>
          </div>

          {/* Main Visual Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-16/9 overflow-hidden border border-[#E9E4DA] shadow-xl bg-[#E9E4DA]">
              <ArchitecturalImage
                src={currentHeroImage}
                alt={`${project.title} gallery view`}
                fallbackTitle={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#252824]/85 text-white px-3 py-1 text-xs font-mono">
                PHOTO {activeImageIndex + 1} OF {project.galleryImages.length || 1}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-28 h-20 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${activeImageIndex === idx
                      ? 'border-[#263D35] ring-2 ring-[#263D35]/20'
                      : 'border-[#E9E4DA] opacity-70 hover:opacity-100'
                      }`}
                  >
                    <ArchitecturalImage
                      src={img}
                      alt={`${project.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Deep Dive: Overview & Scope */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E9E4DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#252824]">
                Project Overview & Context
              </h2>
              <p className="text-base text-[#252824]/85 leading-relaxed font-light">
                {project.fullDescription}
              </p>

              <div className="pt-6 border-t border-[#E9E4DA]">
                <h3 className="font-serif text-lg text-[#252824] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#263D35]" />
                  Delivered Scope of Work
                </h3>
                <div className="space-y-3">
                  {project.scopeOfWork.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#F7F6F2] border border-[#E9E4DA]">
                      <Check className="w-4 h-4 text-[#263D35] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#252824]/85 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications & Highlights (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-6 bg-[#F7F6F2] border border-[#E9E4DA]">
                <h3 className="font-serif text-lg text-[#252824] mb-4">
                  Key Architectural Highlights
                </h3>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252824]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#263D35] shrink-0 mt-2" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#263D35] text-white space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A8B2A3]">
                  PROVEN PROJECTEN B.V.
                </span>
                <h4 className="font-serif text-xl font-medium">
                  Planning a Similar Project?
                </h4>
                <p className="text-xs text-[#A8B2A3] leading-relaxed">
                  Our Amsterdam team can assess your site conditions and provide a detailed feasibility quotation.
                </p>
                <Link
                  to="/free-consultation"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#263D35] bg-[#F7F6F2] hover:bg-white transition-colors"
                >
                  <span>Request Feasibility Estimate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Before & After Transformation Slider */}
          <div className="mt-16 pt-10 border-t border-[#E9E4DA]">

            <BeforeAfterSlider />
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-20 pt-10 border-t border-[#E9E4DA]">
              <h3 className="font-serif text-2xl text-[#252824] mb-8">Related Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/portfolio/${rel.slug}`}
                    className="group flex items-center gap-5 p-4 bg-[#F7F6F2] border border-[#E9E4DA] hover:border-[#263D35] transition-colors"
                  >
                    <div className="w-28 h-20 shrink-0 overflow-hidden bg-[#E9E4DA]">
                      <ArchitecturalImage
                        src={rel.mainImage}
                        alt={rel.title}
                        fallbackTitle={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-mono text-[#263D35] block truncate">
                        {rel.category} · {rel.location}
                      </span>
                      <h4 className="font-serif text-base text-[#252824] group-hover:text-[#263D35] truncate mt-0.5">
                        {rel.title}
                      </h4>
                      <span className="text-xs text-[#263D35] inline-flex items-center gap-1 mt-1 group-hover:underline">
                        View Case Study <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
