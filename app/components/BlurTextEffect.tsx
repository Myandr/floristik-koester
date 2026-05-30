'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: string;
  className?: string;
  delay?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({ children, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('span.char');
    gsap.set(chars, { opacity: 0, y: 14, filter: 'blur(10px)' });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(chars, {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              duration: 0.75,
              ease: 'power2.out',
              stagger: 0.032,
              delay,
              clearProps: 'filter',
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [children, delay]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      {children.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="char inline-block" style={{ whiteSpace: 'pre' }}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  );
};
