'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';

type TextState = 'name' | 'name-deleting' | 'title' | 'title-deleting';

const Hero: React.FC = () => {
  const [state, setState] = useState<TextState>('name');
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const nameIndexRef = useRef(0);
  const titleIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nameParts = PERSONAL_INFO.name.split(' ');
  const nameLine1 = nameParts[0] || '';
  const nameLine2 = nameParts[1] || '';
  const titleLine1 = 'DIGITAL';
  const titleLine2 = 'ARCHITECT';

  useEffect(() => {
    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleNameTyping = () => {
      if (nameIndexRef.current < nameLine1.length) {
        setNameText(nameLine1.slice(0, nameIndexRef.current + 1));
        nameIndexRef.current++;
        timeoutRef.current = setTimeout(handleNameTyping, 80);
      } else if (nameIndexRef.current < nameLine1.length + nameLine2.length) {
        const remaining = nameIndexRef.current - nameLine1.length;
        setNameText(nameLine1 + '\n' + nameLine2.slice(0, remaining + 1));
        nameIndexRef.current++;
        timeoutRef.current = setTimeout(handleNameTyping, 80);
      } else {
        timeoutRef.current = setTimeout(() => {
          setState('name-deleting');
        }, 2000);
      }
    };

    const handleNameDeleting = () => {
      if (nameIndexRef.current > nameLine1.length) {
        const remaining = nameIndexRef.current - nameLine1.length - 1;
        setNameText(nameLine1 + '\n' + nameLine2.slice(0, remaining));
        nameIndexRef.current--;
        timeoutRef.current = setTimeout(handleNameDeleting, 40);
      } else if (nameIndexRef.current > 0) {
        setNameText(nameLine1.slice(0, nameIndexRef.current - 1));
        nameIndexRef.current--;
        timeoutRef.current = setTimeout(handleNameDeleting, 40);
      } else {
        setNameText('');
        setState('title');
        titleIndexRef.current = 0;
      }
    };

    const handleTitleTyping = () => {
      if (titleIndexRef.current < titleLine1.length) {
        setTitleText(titleLine1.slice(0, titleIndexRef.current + 1));
        titleIndexRef.current++;
        timeoutRef.current = setTimeout(handleTitleTyping, 80);
      } else if (titleIndexRef.current < titleLine1.length + titleLine2.length) {
        const remaining = titleIndexRef.current - titleLine1.length;
        setTitleText(titleLine1 + '\n' + titleLine2.slice(0, remaining + 1));
        titleIndexRef.current++;
        timeoutRef.current = setTimeout(handleTitleTyping, 80);
      } else {
        timeoutRef.current = setTimeout(() => {
          setState('title-deleting');
        }, 2000);
      }
    };

    const handleTitleDeleting = () => {
      if (titleIndexRef.current > titleLine1.length) {
        const remaining = titleIndexRef.current - titleLine1.length - 1;
        setTitleText(titleLine1 + '\n' + titleLine2.slice(0, remaining));
        titleIndexRef.current--;
        timeoutRef.current = setTimeout(handleTitleDeleting, 40);
      } else if (titleIndexRef.current > 0) {
        setTitleText(titleLine1.slice(0, titleIndexRef.current - 1));
        titleIndexRef.current--;
        timeoutRef.current = setTimeout(handleTitleDeleting, 40);
      } else {
        setTitleText('');
        setState('name');
        nameIndexRef.current = 0;
      }
    };

    clearTimer();

    switch (state) {
      case 'name':
        handleNameTyping();
        break;
      case 'name-deleting':
        handleNameDeleting();
        break;
      case 'title':
        handleTitleTyping();
        break;
      case 'title-deleting':
        handleTitleDeleting();
        break;
    }

    return clearTimer;
  }, [state, nameLine1, nameLine2, titleLine1, titleLine2]);

  const renderNameText = () => {
    const lines = nameText.split('\n');
    const line1 = lines[0] || '';
    const line2 = lines[1] || '';
    
    return (
      <>
        <span className="block" style={{ height: '0.9em', lineHeight: '0.9', overflow: 'hidden' }}>{line1 || '\u00A0'}</span>
        <span className="block" style={{ height: '0.9em', lineHeight: '0.9', overflow: 'hidden' }}>{line2 || '\u00A0'}</span>
      </>
    );
  };

  const renderTitleText = () => {
    const lines = titleText.split('\n');
    const line1 = lines[0] || '';
    const line2 = lines[1] || '';
    
    return (
      <>
        <span className="block" style={{ height: '0.9em', lineHeight: '0.9', overflow: 'hidden' }}>{line1 || '\u00A0'}</span>
        <span className="block" style={{ height: '0.9em', lineHeight: '0.9', overflow: 'hidden' }}>
          {line2 ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-500 to-neutral-800">
              {line2}
            </span>
          ) : (
            '\u00A0'
          )}
        </span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">

          <div className="md:col-span-8">
            <h2 className="text-accent/60 font-mono text-sm md:text-base mb-4 tracking-[0.2em] uppercase">
              Full Stack Software Engineer
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold leading-[0.9] tracking-tighter text-text mb-8" style={{ display: 'flex', flexDirection: 'column', height: '1.8em' }}>
              {(state === 'name' || state === 'name-deleting') && renderNameText()}
              {(state === 'title' || state === 'title-deleting') && renderTitleText()}
            </h1>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end pb-4 md:pb-8">
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-md border-l border-accent/15 pl-6">
              I build resilient, scalable systems that solve complex problems.
              From messy realities to reliable systems that stay up.
            </p>
          </div>
        </div>

        <div className="mt-24 md:mt-32 border-t border-neutral-900 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="group">
                <div className="text-muted font-mono text-xs uppercase tracking-[0.2em] mb-1">Experience</div>
                <div className="text-text font-bold text-xl md:text-2xl">
                  <span className="text-accent/70">4+</span> Years
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-neutral-800"></div>
              <div className="md:hidden w-full h-px bg-neutral-800"></div>

              <div className="group">
                <div className="text-muted font-mono text-xs uppercase tracking-[0.2em] mb-1">Expertise</div>
                <div className="text-text font-bold text-xl md:text-2xl">
                  <span className="text-accent/70">Full Stack</span>
                  <span className="text-text/80"> • </span>
                  <span className="text-accent/70">DevOps</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-neutral-800"></div>
              <div className="md:hidden w-full h-px bg-neutral-800"></div>

              <div className="group">
                <div className="text-muted font-mono text-xs uppercase tracking-[0.2em] mb-1">Location</div>
                <div className="text-text font-bold text-xl md:text-2xl">
                  <span className="text-accent/70">Pakistan</span>
                </div>
              </div>
            </div>

            <a href="#projects" className="group flex items-center gap-2 text-text hover:text-accent/80 transition-colors mt-4 md:mt-0">
              <span className="text-xs font-bold uppercase tracking-widest">Explore Work</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;