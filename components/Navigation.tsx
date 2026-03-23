'use client';

import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Active when element is in the middle 10% of screen
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = navLinks.findIndex(link => link.href.substring(1) === activeSection);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-10">
      {/* The Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 rounded-full" />

      {/* The Moving Dot */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_var(--accent)] transition-all duration-500 ease-out ${activeIndex === -1 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        style={{
          // gap-10 is 2.5rem (40px). Item height is h-2 (8px). 
          // Total pitch is 48px.
          top: activeIndex !== -1 ? `${activeIndex * 48}px` : '0px',
          transform: 'translate(-50%, 0)'
        }}
      />

      {/* Navigation Points */}
      <div className="flex flex-col gap-10 relative">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative flex items-center justify-center w-2 h-2"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Marker on the line */}
            <span className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === link.href.substring(1) ? 'bg-transparent' : 'bg-white/20 group-hover:bg-white/50'
              }`} />

            {/* Label (Tooltip) */}
            <span className="absolute left-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold text-muted whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;