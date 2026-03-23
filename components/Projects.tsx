'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/constants';
import { ArrowUpRight, Github, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <section className="py-32 bg-surface/70" id="projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-text tracking-tight">SELECTED <br/> WORKS</h2>
            <span className="text-accent font-mono text-xl font-bold hidden md:block">01 — {String(PROJECTS.length).padStart(2, '0')}</span>
          </div>

          <div className="space-y-32 md:space-y-45">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className="group grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                
                {/* Image Side - Alternate Order */}
                <div className={`md:col-span-7 overflow-hidden relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {project.image === 'placeholder' ? (
                    <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center group-hover:from-neutral-800 group-hover:via-neutral-700 group-hover:to-neutral-800 transition-all duration-700">
                      <div className="text-center px-8 relative z-10">
                        <div className="text-6xl md:text-8xl font-extrabold text-text/20 group-hover:text-text/30 transition-colors mb-4 tracking-tighter">
                          {project.title.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="h-px w-24 bg-accent/30 mx-auto mb-4 group-hover:bg-accent/50 transition-colors"></div>
                        <p className="text-muted text-sm uppercase tracking-widest font-mono">
                          {project.subtitle || 'Project'}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-30"></div>
                    </div>
                  ) : (
                    <div 
                      className="relative h-[300px] md:h-[400px] overflow-hidden bg-neutral-900 cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-50"></div>
                    </div>
                  )}
                </div>

              {/* Content Side */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                <div className={`flex items-center gap-4 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {index % 2 === 0 && <div className="h-[1px] w-12 bg-accent"></div>}
                  <span className="text-accent font-mono text-sm">{project.year}</span>
                  {index % 2 === 1 && <div className="h-[1px] w-12 bg-accent"></div>}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-text group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-text/60 text-base font-normal mt-1 mb-3">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                
                {project.role && (
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 border border-accent/30 text-accent/80 text-xs font-mono uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>
                )}
                
                <p className="text-muted mb-8 leading-relaxed whitespace-pre-line text-justify">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 border border-neutral-800 text-xs text-neutral-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                      View Live <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors">
                      View Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image Modal/Lightbox */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 animate-in fade-in duration-200"
        onClick={() => setSelectedImage(null)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors p-2 z-10 bg-black/50 rounded-full backdrop-blur-sm"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div 
          className="relative max-w-7xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={selectedImage} 
            alt="Project preview" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    )}
    </>
  );
};

export default Projects;