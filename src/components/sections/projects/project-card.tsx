'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader } from '@/components/ui/card';
import ProjectImage from './project-image';
import ProjectContent from './project-content';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  variants: any;
}

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full group relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500">
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, ${project.gradient.replace(/\/30/g, '')})`,
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-[2px] rounded-lg bg-card/95 backdrop-blur-sm" />
        </motion.div>

        <CardHeader className="p-0 relative z-10">
          <ProjectImage
            image={project.image}
            title={project.title}
            gradient={project.gradient}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            index={index}
          />
        </CardHeader>

        <ProjectContent
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          index={index}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
