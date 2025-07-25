'use client';
import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export const useMouseParallax = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(my, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { innerWidth:w, innerHeight:h } = window;
      mx.set(((e.clientX - w / 2) / (w / 2)) * 100);
      my.set(((e.clientY - h / 2) / (h / 2)) * 100);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [mx, my]);

  return { smoothX, smoothY };
};
