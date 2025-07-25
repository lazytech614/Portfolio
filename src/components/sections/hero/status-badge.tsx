'use client';
import { motion, useTransform } from 'framer-motion';
import { useMouseParallax } from './hooks/useMouseParallax';

const StatusBadge = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX, smoothY } = useMouseParallax();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -50 }}
      animate={loadingDone ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: -50 }}
      transition={{ 
        duration: 1.2, 
        delay: loadingDone ? 0.3 : 0,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-6 py-3 bg-card/30 backdrop-blur-xl border border-primary/20 rounded-full text-sm text-muted-foreground mb-4 cursor-pointer group"
      style={{
        x: useTransform(smoothX, [-100, 100], [-3, 3]),
        y: useTransform(smoothY, [-100, 100], [-2, 2]),
      }}
    >
      <motion.div
        animate={loadingDone ? { 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        } : {}}
        transition={{ 
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="mr-3"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </motion.div>
      <span className="group-hover:text-primary transition-colors">Available for freelance work</span>
      <motion.div
        animate={loadingDone ? { x: [0, 5, 0] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ✨
      </motion.div>
    </motion.div>
  );
};

export default StatusBadge;
