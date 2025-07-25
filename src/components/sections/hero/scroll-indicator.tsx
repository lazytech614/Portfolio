'use client';
import { motion, useTransform } from 'framer-motion';
import { useMouseParallax } from './hooks/useMouseParallax';

const ScrollIndicator = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothY } = useMouseParallax();

  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loadingDone ? 1 : 0 }}
      transition={{ duration: 0.8, delay: loadingDone ? 3 : 0 }}
      className="relative"
      style={{
        y: useTransform(smoothY, [-100, 100], [-3, 3]),
      }}
    >
      <motion.div
        animate={loadingDone ? { 
          y: [0, 20, 0],
        } : {}}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="flex flex-col items-center cursor-pointer group"
        onClick={handleScrollToAbout}
      >
        <motion.span 
          className="text-sm text-muted-foreground mb-4 group-hover:text-primary transition-colors"
          animate={loadingDone ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to discover more
        </motion.span>
        
        <motion.div
          className="w-8 h-12 border-2 border-muted-foreground group-hover:border-primary rounded-full flex justify-center transition-colors relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-4 bg-muted-foreground group-hover:bg-primary rounded-full mt-3 transition-colors"
            animate={loadingDone ? { y: [0, 20, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
