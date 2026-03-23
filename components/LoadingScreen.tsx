'use client';

import { useEffect, useState, useMemo } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [startTime] = useState(Date.now());

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const seed = i * 0.1;
      return {
        id: i,
        size: (Math.sin(seed) * 1.5 + 2.5),
        x: (Math.cos(seed * 2) * 50 + 50),
        y: (Math.sin(seed * 3) * 50 + 50),
        delay: Math.abs(Math.sin(seed)) * 2,
        duration: 4 + Math.abs(Math.cos(seed)) * 3,
        opacity: 0.4 + Math.abs(Math.sin(seed * 1.5)) * 0.6,
        gradientStop: 40 + Math.abs(Math.sin(seed)) * 40,
      };
    });
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const minDisplayTime = 1000;
      const remainingTime = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [startTime]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-base flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: `radial-gradient(circle, #d94e1e ${particle.gradientStop}%, transparent 80%)`,
              boxShadow: `0 0 ${particle.size * 3}px rgba(217, 78, 30, 0.25)`,
              animation: `particle-float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border-2 border-accent/10 rounded-full"></div>
              <div 
                className="absolute inset-0 border-2 border-transparent border-t-accent rounded-full animate-spin"
                style={{ animationDuration: '1.2s' }}
              ></div>
              <div 
                className="absolute inset-3 border-2 border-transparent border-r-accent rounded-full animate-spin"
                style={{ animationDuration: '1.8s', animationDirection: 'reverse' }}
              ></div>
              <div 
                className="absolute inset-6 border-2 border-transparent border-b-accent rounded-full animate-spin"
                style={{ animationDuration: '2.4s' }}
              ></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-2 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-8 h-8 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 bg-accent rounded-full animate-bounce shadow-lg shadow-accent/50"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.9s',
                }}
              />
            ))}
          </div>
          
          <div className="text-accent/70 font-mono text-xs tracking-[0.3em] uppercase">
            Loading...
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent/10 overflow-hidden">
        <div 
          className="h-full bg-accent"
          style={{
            animation: 'loading-bar 2s ease-in-out infinite',
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

