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

const ProjectCard = ({ project, index, variants }: ProjectCardProps) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="group relative overflow-hidden rounded-xl"
  >
    {/* Animated Gradient Border */}
    <div className={`absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: `conic-gradient(from 0deg, ${project.gradient.replace('from-', '').replace('via-', '').replace('to-', '').replace('/30', '').split(' ').join(', ')})`,
          backgroundSize: '400% 400%'
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Inner content area */}
      <div className="relative z-10 h-full w-full rounded-xl bg-card/95 backdrop-blur-sm">
        {/* Card content */}
        <Card className="h-full bg-transparent border-0 shadow-none">
          <CardHeader className="p-0">
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
      </div>
    </div>

    {/* Default state card (when not hovered) */}
    <Card className="group-hover:opacity-0 transition-opacity duration-500 h-full bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl">
      <CardHeader className="p-0">
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

export default ProjectCard;