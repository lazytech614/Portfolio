'use client';
import { motion } from 'framer-motion';
import { CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ActionButtons from './action-buttons';

interface ProjectContentProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectContent = ({ title, description, technologies, liveUrl, githubUrl, index }: ProjectContentProps) => {
  return (
    <CardContent className="p-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <CardTitle className="mb-3 group-hover:text-primary transition-colors duration-300 text-xl">
          {title}
        </CardTitle>
        
        <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, techIndex) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: (index * 0.1) + (techIndex * 0.05) 
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge 
                variant="secondary" 
                className="text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons - Mobile */}
        <div className="md:hidden">
          <ActionButtons 
            liveUrl={liveUrl} 
            githubUrl={githubUrl}
            className="flex items-center justify-start space-x-3 opacity-100 transform translate-y-0"
          />
        </div>
      </motion.div>
    </CardContent>
  );
};

export default ProjectContent;
