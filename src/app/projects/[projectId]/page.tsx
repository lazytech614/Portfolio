'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Star, Sparkles, Code, Layers, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { Badge } from '../../../components/ui/badge'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'

// Extended project data with detailed information
const projectsData = [
  {
    id: 'compressflow',
    title: 'CompressFlow',
    subtitle: 'Advanced File Compression Platform',
    description: 'A powerful web application for compressing and decompressing files with advanced algorithms and user-friendly interface.',
    longDescription: `CompressFlow is a comprehensive file compression platform that leverages modern web technologies to provide users with powerful compression and decompression capabilities. The platform supports multiple file formats and uses advanced algorithms to achieve optimal compression ratios while maintaining file integrity.

    The application features a clean, intuitive interface built with Next.js and styled with Tailwind CSS. User authentication is handled through Clerk, providing secure access to personal compression history and settings. The backend utilizes Node.js for processing files and NeonDB for storing user data and compression statistics.

    Key features include batch processing, compression ratio optimization, file format conversion, and detailed analytics on compression performance. The platform is designed to handle both individual files and large batches, making it suitable for both personal and professional use.`,
    
    image: '/images/01_compress_flow/image3.png',
    images: [
      '/images/01_compress_flow/image1.png',
      '/images/01_compress_flow/image2.png',
      '/images/01_compress_flow/image3.png',
    ],
    technologies: [
      { name: 'Next.js', category: 'Frontend Framework' },
      { name: 'Clerk', category: 'Authentication' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'NeonDB', category: 'Database' }
    ],
    features: [
      'Advanced compression algorithms',
      'Multiple file format support',
      'Batch processing capabilities',
      'Real-time compression preview',
      'User authentication & profiles',
      'Compression history tracking',
      'File format conversion',
      'Performance analytics'
    ],
    liveUrl: 'https://data-compresseion-decompression.vercel.app/',
    githubUrl: 'https://github.com/lazytech614/data-compresseion-decompression',
    gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    color: 'blue',
    status: 'Completed',
    duration: '3 months',
    year: '2024',
    category: 'Web Application'
  },
  {
    id: 'nuevue',
    title: 'Nuevue',
    subtitle: 'Modern Video Sharing Platform',
    description: 'A modern, full-featured video sharing platform with real-time streaming and social features.',
    longDescription: `Nuevue is a comprehensive video sharing platform that combines the best of modern web technologies to create an engaging social media experience. Built with Next.js and powered by a robust PostgreSQL database, the platform offers seamless video uploading, streaming, and social interaction features.

    The application leverages AWS S3 for scalable video storage and efficient content delivery. Users can upload, share, and discover videos while engaging with content through likes, comments, and shares. The platform includes advanced features like video processing, thumbnail generation, and adaptive streaming for optimal viewing experience across devices.

    The desktop application is built using Electron.js, providing native-like performance and additional features not available in web browsers. The platform emphasizes user experience with smooth animations, responsive design, and intuitive navigation.`,
    
    image: '/images/02_nuvue/image3.png',
    images: [
      '/images/02_nuvue/image1.png',
      '/images/02_nuvue/image2.png',
      '/images/02_nuvue/image3.png',
    ],
    technologies: [
      { name: 'Next.js', category: 'Frontend Framework' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'AWS S3', category: 'Cloud Storage' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'TypeScript', category: 'Language' },
      { name: 'Electron.js', category: 'Desktop App' }
    ],
    features: [
      'Video upload & streaming',
      'Social interactions (likes, comments)',
      'User profiles & following system',
      'Video discovery & search',
      'Real-time notifications',
      'Desktop application',
      'Responsive design',
      'Video processing & optimization'
    ],
    liveUrl: 'https://video-sharing-webapp.vercel.app/',
    githubUrl: 'https://github.com/lazytech614/Video-Sharing-Webapp',
    gradient: 'from-purple-500/20 via-pink-500/20 to-red-500/20',
    color: 'purple',
    status: 'Completed',
    duration: '4 months',
    year: '2024',
    category: 'Social Platform'
  },
  {
    id: 'forever',
    title: 'Forever',
    subtitle: 'Complete Online Shopping Solution',
    description: 'Online store for buying and selling products with authentication and payment integration.',
    longDescription: `A full-featured e-commerce platform built with React and powered by a robust Node.js backend. The platform provides a complete online shopping experience with user authentication, product catalog, shopping cart, and secure payment processing through Stripe integration.

    The application features a responsive design built with Tailwind CSS, ensuring optimal user experience across all devices. The backend utilizes Express.js and MongoDB for efficient data management, while JWT tokens ensure secure user authentication and session management.

    Key functionalities include product browsing with advanced filtering, user account management, order tracking, and administrative features for inventory management. The platform is designed to scale and can handle multiple product categories and thousands of concurrent users.`,
    
    image: '/images/04_e_commerce/image1.png',
    images: [
      '/images/04_e_commerce/image1.png',
      '/images/04_e_commerce/image2.png',
      '/images/04_e_commerce/image3.png',
    ],
    technologies: [
      { name: 'React', category: 'Frontend Framework' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express.js', category: 'Web Framework' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'JWT', category: 'Authentication' },
      { name: 'Stripe', category: 'Payment Processing' }
    ],
    features: [
      'Product catalog & search',
      'Shopping cart functionality',
      'User authentication & profiles',
      'Secure payment processing',
      'Order management',
      'Admin dashboard',
      'Inventory tracking',
      'Responsive design'
    ],
    liveUrl: 'https://e-commerce-website-frontend-ten.vercel.app/',
    githubUrl: 'https://github.com/lazytech614/E-Commerce-Website-Frontend',
    gradient: 'from-green-500/20 via-emerald-500/20 to-teal-500/20',
    color: 'green',
    status: 'Completed',
    duration: '3.5 months',
    year: '2024',
    category: 'E-commerce'
  },
  {
    id: 'shopzone-admin',
    title: 'ShopZone Admin',
    subtitle: 'E-Commerce SaaS Dashboard',
    description: 'A comprehensive SaaS solution for managing multiple e-commerce stores through a single dashboard.',
    longDescription: `ShopZone Admin is a sophisticated SaaS platform designed to manage multiple e-commerce stores from a centralized dashboard. Built with Next.js and powered by modern technologies, it provides store owners with comprehensive tools for inventory management, sales analytics, and customer relationship management.

    The platform integrates with Cloudinary for media management, uses Prisma for database operations with PostgreSQL, and implements Stripe for payment processing. The dashboard features advanced analytics powered by Recharts, providing detailed insights into sales performance, customer behavior, and inventory trends.

    State management is handled efficiently using Zustand, ensuring smooth user interactions and real-time data updates. The platform supports multi-store management, allowing users to switch between different stores and manage them independently while maintaining centralized reporting and analytics.`,
    
    image: '/images/03_shop_zone_admin/image1.png',
    images: [
      '/images/03_shop_zone_admin/image1.png',
    ],
    technologies: [
      { name: 'Next.js', category: 'Frontend Framework' },
      { name: 'Tailwind CSS', category: 'Styling' },
      { name: 'Prisma', category: 'ORM' },
      { name: 'Cloudinary', category: 'Media Management' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Stripe', category: 'Payment Processing' },
      { name: 'Recharts', category: 'Data Visualization' },
      { name: 'Zustand', category: 'State Management' }
    ],
    features: [
      'Multi-store management',
      'Advanced analytics dashboard',
      'Inventory management',
      'Customer relationship management',
      'Sales performance tracking',
      'Media asset management',
      'Payment processing integration',
      'Real-time data synchronization'
    ],
    liveUrl: 'https://shop-zone-admin.vercel.app/',
    githubUrl: 'https://github.com/lazytech614/ShopZone-Admin',
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    color: 'orange',
    status: 'Completed',
    duration: '2.5 months',
    year: '2024',
    category: 'SaaS Platform'
  },
  {
    id: 'two-good-co',
    title: 'Two Good Co',
    subtitle: 'Business Website',
    description: 'A simple e-commerce website for buying and selling products with elegant design.',
    longDescription: `Two Good Co is a beautifully designed business website that showcases modern web development techniques using fundamental technologies. Built with HTML, CSS, and JavaScript, the site demonstrates the power of core web technologies when used effectively.

    The website features elegant animations, responsive design, and smooth user interactions. Bootstrap provides the foundation for responsive layouts, while custom CSS creates unique visual elements and animations. The site includes product showcases, company information, and contact forms.

    Despite using traditional web technologies, the site delivers a premium user experience with attention to detail in typography, spacing, and visual hierarchy. The project demonstrates proficiency in fundamental web development skills and the ability to create professional-grade websites without heavy frameworks.`,
    
    image: '/images/05_two_good_co/image1.png',
    images: [
      '/images/05_two_good_co/image1.png',
      '/images/05_two_good_co/image2.png',
      '/images/05_two_good_co/image3.png',
    ],
    technologies: [
      { name: 'HTML', category: 'Markup Language' },
      { name: 'CSS', category: 'Styling' },
      { name: 'JavaScript', category: 'Programming Language' },
      { name: 'Bootstrap', category: 'CSS Framework' }
    ],
    features: [
      'Responsive design',
      'Smooth animations',
      'Interactive elements',
      'Contact forms',
      'Product showcases',
      'Mobile optimization',
      'Cross-browser compatibility',
      'SEO optimization'
    ],
    liveUrl: 'https://lazytech614.github.io/two-good-co/',
    githubUrl: 'https://github.com/lazytech614/two-good-co',
    gradient: 'from-pink-500/20 via-rose-500/20 to-red-500/20',
    color: 'pink',
    status: 'Completed',
    duration: '1 month',
    year: '2023',
    category: 'Business Website'
  }
]

const ProjectDetails = () => {
  const router = useRouter()
  const params = useParams()
  const projectId = params?.projectId as string
  const [selectedImage, setSelectedImage] = useState(0)

  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <Button onClick={() => router.push('/')}>Go Back Home</Button>
        </div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      {/* Background Elements */}
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

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Project Hero */}
            <motion.div variants={itemVariants} className="text-center">              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {project.subtitle}
              </p>

              {/* Project Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{project.year}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">{project.status}</span>
                </div>
              </div>
            </motion.div>

            {/* Main Content Grid - Left: Info, Right: Image + Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Project Information */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* About This Project */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Code className="w-6 h-6 mr-3 text-blue-600" />
                        About This Project
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        {project.longDescription.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Key Features */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                        <Layers className="w-6 h-6 mr-3 text-green-600" />
                        Key Features
                      </h2>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-center space-x-3 p-3 bg-gray-50/80 dark:bg-gray-800/80 rounded-lg"
                          >
                            <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Technologies Used */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Technologies Used
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="flex items-center justify-between p-3 bg-gray-50/80 dark:bg-gray-800/80 rounded-lg"
                          >
                            <span className="font-medium text-gray-900 dark:text-white">
                              {tech.name}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {tech.category}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Side - Images and Actions */}
              <div className="space-y-8 order-1 lg:order-2">
                {/* Project Images */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardContent className="p-6">
                      {/* Main Image */}
                      <div className="relative mb-6">
                        <motion.div
                          key={selectedImage}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative overflow-hidden rounded-lg"
                        >
                          <Image
                            width={1200}
                            height={600}
                            src={project.images[selectedImage]}
                            alt={`${project.title} Screenshot ${selectedImage + 1}`}
                            className="w-full h-64 sm:h-80 md:h-96 object-cover"
                          />
                        </motion.div>
                      </div>

                      {/* Image Thumbnails */}
                      <div className="flex space-x-4 justify-center">
                        {project.images.length > 1 && project.images.map((image, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                              selectedImage === index
                                ? 'ring-2 ring-blue-500 ring-offset-2'
                                : 'opacity-70 hover:opacity-100'
                            }`}
                          >
                            <Image
                              width={120}
                              height={80}
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-20 h-12 sm:w-24 sm:h-16 object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Project Actions
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          size="lg"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Live Project
                        </Button>
                        <Button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          variant="outline"
                          className="w-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500"
                          size="lg"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Project Information */}
                <motion.div variants={itemVariants}>
                  <Card className="overflow-hidden bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border-0 shadow-xl">
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Project Information
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Status</span>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Duration</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {project.duration}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Year</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {project.year}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-300">Category</span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
