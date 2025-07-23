'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Button } from '../../ui/button'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: '🚀 CompressFlow',
      description: 'Web application for compressing and decompressing files.',
      image: '/images/01_compress_flow/image3.png',
      technologies: ['NextJs', 'Clerk', 'Tailwind CSS', 'TypeScript', 'NodeJs', 'NeonDB'],
      liveUrl: 'https://data-compresseion-decompression.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/data-compresseion-decompression',
    },
    {
      title: '🎥 Nuevue',
      description: 'A modern, full-featured video sharing platform.',
      image: '/images/02_nuvue/image3.png',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'NodeJS', 'Typescript', 'electronJS'],
      liveUrl: 'https://video-sharing-webapp.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/Video-Sharing-Webapp',
    },
    {
      title: 'E-commerce Platform',
      description: 'Online store for buying and selling products with authentication and payment integration.',
      image: '/images/04_e_commerce/image1.png',
      technologies: ['React', 'Tailwind CSS', 'NodeJs', 'ExpressJs', 'MongoDB', 'JWT', 'Stripe'],
      liveUrl: 'https://e-commerce-website-frontend-ten.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/E-Commerce-Website-Frontend',
    },
    {
      title: 'E-commerce Admin Panel (SaaS)',
      description: 'A comprehensive SaaS solution for managing multiple e-commerce stores through a single dashboard.',
      image: '/images/03_shop_zone_admin/image1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Cloudinary', 'PostgreSQL', 'Stripe', 'Recharts', 'zustand'],
      liveUrl: 'https://shop-zone-admin.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/ShopZone-Admin',
    },
    {
      title: 'E-commerce Platform',
      description: 'A simple e-commerce website for buying and selling products.',
      image: '/images/05_two_good_co/image1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://lazytech614.github.io/two-good-co/',
      githubUrl: 'https://github.com/lazytech614/two-good-co',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden px-2">
                  <Image
                    width={600}
                    height={400}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-transparent group transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4">
                      <Button 
                        onClick={() => window.open(project.liveUrl, '_blank')} 
                        size="sm" 
                        variant="ghost" 
                        className="text-white"
                      >
                        <ExternalLink size={16} />
                      </Button>
                      <Button 
                        onClick={() => window.open(project.githubUrl, '_blank')} 
                        size="sm" 
                        variant="ghost" 
                        className="text-white"
                      >
                        <Github size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      onClick={() => window.open(project.liveUrl, '_blank')} 
                      size="sm" 
                      className="flex-1"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      onClick={() => window.open(project.githubUrl, '_blank')} 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
