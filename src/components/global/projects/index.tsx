'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../ui/card'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const router = useRouter()

  const projects = [
    {
      id: 'compressflow',
      title: 'CompressFlow',
      description: 'Web application for compressing and decompressing files with advanced algorithms and user-friendly interface.',
      image: '/images/01_compress_flow/image3.png',
      technologies: ['Next.js', 'Clerk', 'Tailwind CSS', 'TypeScript', 'Node.js', 'NeonDB'],
      liveUrl: 'https://data-compresseion-decompression.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/data-compresseion-decompression',
      gradient: 'from-blue-500/30 via-cyan-500/30 to-teal-500/30',
    },
    {
      id: 'nuevue',
      title: 'Nuevue',
      description: 'A modern, full-featured video sharing platform with real-time streaming and social features.',
      image: '/images/02_nuvue/image3.png',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Electron.js'],
      liveUrl: 'https://video-sharing-webapp.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/Video-Sharing-Webapp',
      gradient: 'from-purple-500/30 via-pink-500/30 to-red-500/30',
    },
    {
      id: 'forever',
      title: 'Forever',
      description: 'Online store for buying and selling products with authentication and payment integration.',
      image: '/images/04_e_commerce/image1.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
      liveUrl: 'https://e-commerce-website-frontend-ten.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/E-Commerce-Website-Frontend',
      gradient: 'from-green-500/30 via-emerald-500/30 to-teal-500/30',
    },
    {
      id: 'shopzone-admin',
      title: 'ShopZone Admin',
      description: 'A comprehensive SaaS solution for managing multiple e-commerce stores through a single dashboard.',
      image: '/images/03_shop_zone_admin/image1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Cloudinary', 'PostgreSQL', 'Stripe', 'Recharts', 'Zustand'],
      liveUrl: 'https://shop-zone-admin.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/ShopZone-Admin',
      gradient: 'from-orange-500/30 via-amber-500/30 to-yellow-500/30',
    },
    {
      id: 'two-good-co',
      title: 'Two Good Co',
      description: 'A simple e-commerce website for buying and selling products with elegant design.',
      image: '/images/05_two_good_co/image1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://lazytech614.github.io/two-good-co/',
      githubUrl: 'https://github.com/lazytech614/two-good-co',
      gradient: 'from-pink-500/30 via-rose-500/30 to-red-500/30',
    },
  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  const handleDetailsClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Light background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-300/10 to-orange-300/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
                className="relative"
              >
                {/* Glassmorphism Card - No color changes on hover */}
                <Card className="relative overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full pt-2">
                  
                  {/* Project Image Container with Padding */}
                  <div className="relative p-4 rounded-t-lg">
                    <div className="relative overflow-hidden rounded-lg">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full h-48 sm:h-56"
                      >
                        <Image
                          width={600}
                          height={300}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-2">
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-between">
                      <Link
                        href={project.liveUrl}
                        className="hover:text-blue-600 transition-all duration-300 text-sm flex gap-x-2 items-center"
                      >
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Button
                        onClick={() => handleDetailsClick(project.id)}
                        className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                        size="sm"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="mr-2">
                {showAll ? 'Show Less' : `Show More (${projects.length - 3} more)`}
              </span>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showAll ? (
                  <ChevronUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
