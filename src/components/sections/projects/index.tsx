'use client';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import ProjectCard from './project-card';
import ViewAllButton from './view-all-button';
import { PROJECTS_SECTION_CONFIG, ANIMATION_VARIANTS } from '@/constants/projects';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {PROJECTS_SECTION_CONFIG.title.split(' ')[0]} <span className="gradient-text">{PROJECTS_SECTION_CONFIG.title.split(' ')[1]}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {PROJECTS_SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={ANIMATION_VARIANTS.container}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variants={ANIMATION_VARIANTS.item}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <ViewAllButton githubUrl={PROJECTS_SECTION_CONFIG.githubUrl} />
      </div>

      {/* Gradient fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-[#121212] to-[#0A0A0A] z-20" />
    </section>
  );
};

export default Projects;
