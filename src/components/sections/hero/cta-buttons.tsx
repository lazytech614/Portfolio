'use client';
import { motion, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMouseParallax } from './hooks/useMouseParallax';

const CTAButtons = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX } = useMouseParallax();

  const handleExploreWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={loadingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: loadingDone ? 2.3 : 0 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
    >
      {/* Primary CTA Button */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.98 }}
        style={{
          x: useTransform(smoothX, [-100, 100], [-2, 2]),
        }}
      >
        <Button 
          size="lg" 
          className="relative overflow-hidden group px-10 py-7 text-lg font-medium bg-primary hover:bg-primary/90 border-0"
          onClick={handleExploreWork}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
            animate={loadingDone ? { x: ["-100%", "100%"] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          />
          <span className="relative z-10">Explore My Work</span>
          <motion.div
            animate={loadingDone ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 ml-2"
          >
            →
          </motion.div>
        </Button>
      </motion.div>

      {/* Secondary CTA Button */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -3 }} 
        whileTap={{ scale: 0.98 }}
        style={{
          x: useTransform(smoothX, [-100, 100], [2, -2]),
        }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          className="px-10 py-7 text-lg font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
        >
          <Download className="w-5 h-5 mr-3" />
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CTAButtons;
