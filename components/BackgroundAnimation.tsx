'use client';

import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: 'accent' | 'muted';
      pulse: number;
      pulseSpeed: number;
      opacity: number;
      delay: number;
    }> = [];

    const particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 18000));
    const entranceDuration = 1500;
    const connectionFadeInDuration = 2000;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1.5,
        color: Math.random() > 0.55 ? 'accent' : 'muted',
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        opacity: 0,
        delay: Math.random() * 500,
      });
    }

    let animationFrameId: number;
    let lastTime = performance.now();
    let startTime = performance.now();
    let frameCount = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      const elapsed = currentTime - startTime;
      lastTime = currentTime;
      frameCount++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const connections: Array<{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        distance: number;
        color: 'accent' | 'muted';
      }> = [];

      const entranceComplete = elapsed > entranceDuration;
      const connectionStartTime = entranceDuration;
      const connectionFadeInProgress = elapsed > connectionStartTime 
        ? Math.min(1, (elapsed - connectionStartTime) / connectionFadeInDuration)
        : 0;

      particles.forEach((particle, i) => {
        if (!entranceComplete) {
          const particleElapsed = elapsed - particle.delay;
          if (particleElapsed > 0) {
            const fadeDuration = entranceDuration - particle.delay;
            particle.opacity = Math.min(1, particleElapsed / fadeDuration);
          }
        } else {
          particle.opacity = 1;
        }

        particle.pulse += particle.pulseSpeed * (deltaTime / 16);
        particle.x += particle.vx * (deltaTime / 16);
        particle.y += particle.vy * (deltaTime / 16);

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        const pulseFactor = 1 + Math.sin(particle.pulse) * 0.3;
        const currentRadius = particle.radius * pulseFactor;

        if (particle.color === 'accent') {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, currentRadius * 2
          );
          gradient.addColorStop(0, `rgba(217, 78, 30, ${0.4 * particle.opacity})`);
          gradient.addColorStop(0.5, `rgba(217, 78, 30, ${0.2 * particle.opacity})`);
          gradient.addColorStop(1, 'rgba(217, 78, 30, 0)');
          ctx.fillStyle = gradient;
        } else {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, currentRadius * 2
          );
          gradient.addColorStop(0, `rgba(220, 220, 220, ${0.25 * particle.opacity})`);
          gradient.addColorStop(0.5, `rgba(220, 220, 220, ${0.12 * particle.opacity})`);
          gradient.addColorStop(1, 'rgba(220, 220, 220, 0)');
          ctx.fillStyle = gradient;
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = particle.color === 'accent' 
          ? `rgba(217, 78, 30, ${0.5 * particle.opacity})` 
          : `rgba(220, 220, 220, ${0.3 * particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        if (entranceComplete) {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const connectionColor = (particle.color === 'accent' || otherParticle.color === 'accent') 
                ? 'accent' 
                : 'muted';
              connections.push({
                x1: particle.x,
                y1: particle.y,
                x2: otherParticle.x,
                y2: otherParticle.y,
                distance,
                color: connectionColor,
              });
            }
          });
        }
      });

      if (entranceComplete) {
        connections.forEach((connection) => {
          const baseOpacity = (1 - connection.distance / 150) * 0.35;
          const finalOpacity = baseOpacity * connectionFadeInProgress;
          if (connection.color === 'accent') {
            ctx.strokeStyle = `rgba(217, 78, 30, ${finalOpacity})`;
            ctx.lineWidth = 1;
          } else {
            ctx.strokeStyle = `rgba(200, 200, 200, ${finalOpacity * 0.8})`;
            ctx.lineWidth = 0.8;
          }
          ctx.beginPath();
          ctx.moveTo(connection.x1, connection.y1);
          ctx.lineTo(connection.x2, connection.y2);
          ctx.stroke();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate(performance.now());

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default BackgroundAnimation;

