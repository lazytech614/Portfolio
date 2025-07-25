'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ActionButtonsProps {
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ActionButtons = ({ liveUrl, githubUrl, className = "" }: ActionButtonsProps) => {
  return (
    <div className={`flex items-center justify-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${className}`}>
      {liveUrl && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Button 
            size="sm" 
            className="bg-white/90 text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20" 
            asChild
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ExternalLink size={16} className="mr-2" />
              </motion.div>
              Live Demo
            </a>
          </Button>
        </motion.div>
      )}
      
      {githubUrl && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-black/90 text-white border-white/30 hover:bg-black hover:border-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm" 
            asChild
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
              >
                <Github size={16} className="mr-2" />
              </motion.div>
              Code
            </a>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ActionButtons;
