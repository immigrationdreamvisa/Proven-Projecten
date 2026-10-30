import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/projectsData.ts';
import { ProjectItem } from '../types.ts';
import { ArchitecturalImage } from './ArchitecturalImage.tsx';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { DimensionOverlay } from './motion/BlueprintElements.tsx';
import { BeforeAfterSlider } from './BeforeAfterSlider.tsx';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  activeCategoryFilter?: string;
}

const CATEGORIES = [
  'All Projects',
  'Residential',
  'Commercial',
  'Kitchens',
  'Bathrooms',
  'Extensions',
  'Interior Renovations',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#263D35]" />

          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] tracking-tight leading-[1.12]"
          >
            Spaces Transformed.
            <br />
            <span className="italic font-normal text-[#263D35]">Standards Elevated.</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-[#252824]/75 mt-4 font-light leading-relaxed">
            Explore our curated selection of verified residential restorations, commercial fit-outs, and
            architectural transformations completed throughout Amsterdam and across the Netherlands.
          </p>
        </div>

        {/* Animated Category Filter Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${isActive
                    ? 'text-[#F7F6F2]'
                    : 'bg-[#F7F6F2] text-[#252824]/80 hover:text-[#252824] hover:bg-[#E9E4DA]'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#263D35] z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Projects Grid with Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                data-cursor="project"
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between bg-[#F7F6F2] border border-[#E9E4DA] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[#263D35]/40 hover:-translate-y-1 relative"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#E9E4DA]">
                  <ArchitecturalImage
                    src={project.mainImage}
                    alt={project.title}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* CAD Measurement Dimension Overlay */}
                  <DimensionOverlay
                    dimensions={{
                      width: `${14 + (idx % 4) * 3}.2m`,
                      height: '3.80m',
                      ref: `PROJECT_REF_0${idx + 1}`,
                    }}
                  />

                  <div className="absolute top-4 left-4 bg-[#F7F6F2]/95 backdrop-blur-xs px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#263D35] border border-[#E9E4DA] z-20">
                    {project.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFFFF] bg-black/60 backdrop-blur-xs px-3 py-1.5 opacity-90 z-20">
                    <span className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#E9E4DA] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#E9E4DA] shrink-0 pl-2">
                      {project.completionYear}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#252824] group-hover:text-[#263D35] transition-transform duration-300 group-hover:translate-x-1 mb-3 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#252824]/75 line-clamp-2 font-light leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9E4DA] flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#263D35] group-hover:underline">
                      View Project Case Study
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] group-hover:bg-[#263D35] group-hover:text-[#F7F6F2] flex items-center justify-center text-[#252824] transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-[#F7F6F2] border border-[#E9E4DA]">
            <p className="text-sm text-[#252824]/70">No projects currently listed in this category.</p>
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className="mt-3 text-xs font-semibold text-[#263D35] uppercase tracking-wider underline cursor-pointer"
            >
              Reset to All Projects
            </button>
          </div>
        )}

        {/* Interactive Before & After Renovation Comparison Slider */}
        <div className="mt-20 pt-10 border-t border-[#E9E4DA]">
          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
};
