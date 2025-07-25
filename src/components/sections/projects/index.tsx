'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import Image from 'next/image';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional web experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
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
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    {/* Animated Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                      }}
                    />
                    
                    {/* Project Image */}
                    <div className="relative h-full w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {project.liveUrl && (
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
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                      
                      {project.githubUrl && (
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
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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

                    {/* Project Index */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold text-sm border border-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardTitle className="mb-3 group-hover:text-primary transition-colors duration-300 text-xl">
                      {project.title}
                    </CardTitle>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
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

                    {/* Action Buttons */}
                    <div className="flex md:hidden items-center justify-between space-x-3 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {project.liveUrl && (
                        <div>
                          <Button 
                            size="sm" 
                            className="bg-white/90 text-black hover:bg-white transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/20" 
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <ExternalLink size={16} className="mr-2" />
                              </motion.div>
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      )}
                      
                      {project.githubUrl && (
                        <div>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-black/90 text-white border-white/30 hover:bg-black hover:border-white transition-all duration-300 shadow-lg backdrop-blur-sm" 
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
                              >
                                <Github size={16} className="mr-2" />
                              </motion.div>
                              Code
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              <a href="https://github.com/lazytech614" target="_blank" rel="noopener noreferrer">
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
      </div>
    </section>
  );
};

export default Projects;
