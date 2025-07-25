'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMouseParallax } from './hooks/useMouseParallax';

const BackgroundMesh = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX, smoothY } = useMouseParallax();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <motion.div
      className="absolute inset-0 -z-20"
      style={{ y: backgroundY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: loadingDone ? 1 : 0 }}
      transition={{ duration: .5 }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: loadingDone ? 1 : 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* floating particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            x: useTransform(smoothX, [-100, 100], [-i * .5, i * .5]),
            y: useTransform(smoothY, [-100, 100], [-i * .3, i * .3]),
          }}
          initial={{ opacity: 0 }}
          animate={loadingDone ? {
            y: [0, -30, 0], 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
          } : { opacity: 0 }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity, 
            ease: 'easeInOut', 
            delay: i * .1,
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundMesh;
