'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code, Award, User, Star, Calendar, ExternalLink, CheckCircle, Trophy, Zap, Coffee, Heart, MapPin, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '../../ui/card'
import { Badge } from '../../ui/badge'
import { useState } from 'react'
import Link from 'next/link'

// Sample certifications data
const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-123456",
    image: "/api/placeholder/300/200",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    verified: true,
    description: "Comprehensive certification covering modern web development technologies and best practices."
  },
  {
    id: 2,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    credentialId: "UC-456789",
    image: "/api/placeholder/300/200",
    skills: ["React", "Redux", "Hooks", "Context API"],
    verified: true,
    description: "In-depth course covering React fundamentals to advanced concepts."
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialId: "FCC-789012",
    image: "/api/placeholder/300/200",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    verified: true,
    description: "Comprehensive coverage of JavaScript programming and computer science fundamentals."
  }
]

// Simplified tech stack with only icons and names
const techStackItems = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "💙" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "HTML & CSS", icon: "🌐" },
  { name: "Git & GitHub", icon: "🔀" },
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎨" },
  { name: "Vercel", icon: "▲" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Socket.io", icon: "🔌" },
  { name: "GSAP", icon: "🎭" },
  { name: "Stripe", icon: "💳" },
  { name: "JWT", icon: "🔐" },
  { name: "Firebase", icon: "🔥" }
]

// Stats data for About Me tab
const stats = [
  { id: 1, value: "2+", label: "Years of Experience", icon: <Coffee className="w-5 h-5" /> },
  { id: 2, value: "15+", label: "Projects Completed", icon: <Code className="w-5 h-5" /> },
  { id: 3, value: "10+", label: "Technologies Mastered", icon: <Zap className="w-5 h-5" /> },
  { id: 4, value: "100%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5" /> },
]

const About = () => {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Me', icon: <User className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
    { id: 'techstack', label: 'Tech Stack', icon: <Code className="w-4 h-4" /> }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate full-stack developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-full p-1 shadow-lg border border-gray-200/50 dark:border-gray-700/50 w-full sm:w-auto justify-between">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                <span className="relative z-10 flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center space-x-2 text-xs sm:text-sm">
                  {tab.icon}
                  <span className="text-xs sm:text-base">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="min-h-[500px]"
          >
            {activeTab === 'about' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Stats Section */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 sm:p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex justify-center mb-2 sm:mb-3 text-blue-600 dark:text-blue-400">
                        {stat.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Side - Story */}
                  <motion.div
                    variants={containerVariants}
                    className="space-y-6 sm:space-y-8 order-2 lg:order-1"
                  >
                    <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        My Journey
                      </h3>
                      
                      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                        <p>
                          Hello! I&apos;m a <strong className="text-blue-600 dark:text-blue-400">motivated full-stack web developer</strong> from 
                          Roorkee, India. Currently pursuing my studies at <strong className="text-purple-600 dark:text-purple-400">IIT Roorkee</strong>, 
                          I&apos;m passionate about building efficient, responsive, and user-friendly web applications.
                        </p>
                        
                        <p>
                          My journey in web development started with curiosity and has evolved into a deep passion for creating 
                          digital solutions that solve real-world problems. I love the challenge of turning ideas into functional, 
                          beautiful applications.
                        </p>
                        
                        <p>
                          When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, 
                          or sharing knowledge with the developer community.
                        </p>
                      </div>
                    </motion.div>

                    {/* Enhanced Quick Stats */}
                    <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div 
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg">
                          <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Education</p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">IIT Roorkee</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg">
                          <MapPin className="text-green-600 dark:text-green-400" size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Location</p>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Roorkee, India</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Enhanced Code Display */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 lg:order-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ scale: 1.02, rotate: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden bg-gray-900 border-0 shadow-2xl">
                        <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-800 border-b border-gray-700">
                          <div className="flex space-x-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-400 text-xs sm:text-sm">about-me.html</span>
                        </div>
                        
                        <CardContent className="p-0">
                          <div className="h-64 sm:h-80 lg:h-96 overflow-y-auto">
                            <pre className="p-3 sm:p-4 text-xs sm:text-sm font-mono leading-relaxed">
                              <div>
                                <span className="text-gray-500">1. </span>
                                <span className="text-red-400">&lt;!DOCTYPE html&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">2. </span>
                                <span className="text-pink-400">&lt;html&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">3. </span>
                                <span className="text-pink-400">&nbsp;&nbsp;&lt;head&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">4. </span>
                                <span className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</span>
                                <span className="text-white">Full Stack Developer</span>
                                <span className="text-green-400">&lt;/title&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">5. </span>
                                <span className="text-pink-400">&nbsp;&nbsp;&lt;/head&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">6. </span>
                                <span className="text-pink-400">&nbsp;&nbsp;&lt;body&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">7. </span>
                                <span className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
                                <span className="text-yellow-300">About Me</span>
                                <span className="text-green-400">&lt;/h1&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">8. </span>
                                <span className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;</span>
                                <span className="text-white">Motivated full-stack developer from IIT Roorkee</span>
                                <span className="text-green-400">&lt;/p&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">9. </span>
                                <span className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div </span>
                                <span className="text-orange-400">class=&quot;skills&quot;</span>
                                <span className="text-green-400">&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">10. </span>
                                <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend: React, NextJS, TypeScript</span>
                              </div>
                              <div>
                                <span className="text-gray-500">11. </span>
                                <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Backend: Node.js, Express, PostgreSQL</span>
                              </div>
                              <div>
                                <span className="text-gray-500">12. </span>
                                <span className="text-green-400">&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">13. </span>
                                <span className="text-pink-400">&nbsp;&nbsp;&lt;/body&gt;</span>
                              </div>
                              <div>
                                <span className="text-gray-500">14. </span>
                                <span className="text-pink-400">&lt;/html&gt;</span>
                              </div>
                            </pre>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Floating Code Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 bg-blue-500 text-white p-2 rounded-lg shadow-lg text-xs font-mono hidden sm:block"
                    >
                      console.log("Hello World!");
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-4 -left-4 bg-green-500 text-white p-2 rounded-lg shadow-lg text-xs font-mono hidden sm:block"
                    >
                      npm install awesome
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-0">
                        {/* Certificate Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Award className="w-16 h-16 text-blue-600/50 dark:text-blue-400/50" />
                          </div>
                          {cert.verified && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-green-500 hover:bg-green-600 text-white">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.title}
                          </h4>
                          
                          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
                            <span className="font-medium">{cert.issuer}</span>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{cert.date}</span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {cert.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{cert.skills.length - 3} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              ID: {cert.credentialId}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                            >
                              <span>View</span>
                              <ExternalLink className="w-3 h-3" />
                            </motion.button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'techstack' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {/* Simplified Tech Stack Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6"
                >
                  {techStackItems.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group cursor-default"
                    >
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/20 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                        <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                          {tech.icon}
                        </div>
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About
