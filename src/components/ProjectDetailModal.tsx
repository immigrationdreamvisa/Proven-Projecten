import React, { useState } from 'react';
import { X, MapPin, Calendar, Clock, Check, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types.ts';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';
import { projectsData } from '../data/projectsData.ts';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.category === 'Residential'))
    .slice(0, 2);

  const currentHeroImage =
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages[activeImageIndex] || project.mainImage
      : project.mainImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#252824]/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F7F6F2] border border-[#E9E4DA] max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#F7F6F2]/95 backdrop-blur-md px-6 py-4 border-b border-[#E9E4DA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[#263D35]">
              Proven Projecten · Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#252824] hover:text-[#263D35] hover:bg-[#E9E4DA]/50 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Main Photo Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-16/9 overflow-hidden border border-[#E9E4DA] shadow-lg bg-[#E9E4DA]">
              <ArchitecturalImage
                src={currentHeroImage}
                alt={`${project.title} gallery preview`}
                fallbackTitle={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#252824]/80 backdrop-blur-xs px-3 py-1 text-xs text-[#F7F6F2] font-mono">
                Photo {activeImageIndex + 1} of {project.galleryImages.length || 1}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
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

          {/* Title & Metadata Strip */}
          <div className="border-b border-[#E9E4DA] pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#252824]/70 mb-3">
              <span className="font-semibold text-[#263D35] uppercase tracking-wider">
                {project.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#263D35]" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Calendar className="w-3.5 h-3.5 text-[#263D35]" />
                Completed {project.completionYear}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-[#263D35]" />
                {project.duration}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#252824] leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Project Overview */}
          <div>
            <h2 className="font-serif text-xl text-[#252824] mb-3">Project Overview</h2>
            <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features & Execution Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scope of Work */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E9E4DA]">
              <h3 className="font-serif text-base text-[#252824] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#263D35]" />
                Delivered Scope of Work
              </h3>
              <ul className="space-y-2.5">
                {project.scopeOfWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#252824]/80">
                    <Check className="w-3.5 h-3.5 text-[#263D35] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Highlights */}
            <div className="p-5 bg-[#FFFFFF] border border-[#E9E4DA]">
              <h3 className="font-serif text-base text-[#252824] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#263D35]" />
                Key Architectural Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#252824]/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#263D35] shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="pt-6 border-t border-[#E9E4DA]">
              <h3 className="font-serif text-lg text-[#252824] mb-4">Related Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProject(rel);
                      setActiveImageIndex(0);
                    }}
                    className="group cursor-pointer p-3 bg-[#FFFFFF] border border-[#E9E4DA] flex items-center gap-4 hover:border-[#263D35] transition-colors"
                  >
                    <div className="w-20 h-16 shrink-0 overflow-hidden bg-[#E9E4DA]">
                      <ArchitecturalImage
                        src={rel.mainImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] uppercase tracking-wider text-[#263D35] font-semibold block truncate">
                        {rel.category} · {rel.location}
                      </span>
                      <h4 className="text-xs font-semibold text-[#252824] group-hover:text-[#263D35] truncate mt-0.5">
                        {rel.title}
                      </h4>
                      <span className="text-[11px] text-[#263D35] inline-flex items-center gap-1 mt-1 group-hover:underline">
                        View Project <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Callout */}
          <div className="pt-6 border-t border-[#E9E4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#252824]/70">
              Inspired by this project? Let's discuss your property's potential.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-colors cursor-pointer"
            >
              Request a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
