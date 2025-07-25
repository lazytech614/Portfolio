'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

interface ViewAllButtonProps {
  githubUrl: string;
}

const ViewAllButton = ({ githubUrl }: ViewAllButtonProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center mt-16"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          className="px-8 py-4 text-lg border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group" 
          asChild
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="mr-3"
            >
              <Github size={24} />
            </motion.div>
            View All Projects
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="ml-2"
            >
              →
            </motion.div>
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ViewAllButton;
