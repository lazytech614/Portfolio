'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Database, Globe, Award, MapPin, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '../../ui/card'
import Image from 'next/image'

// Your skills data
const frontendSkills = [
  { id: 1, skill: "HTML & CSS", meterRate: "90" },
  { id: 2, skill: "JavaScript", meterRate: "85" },
  { id: 3, skill: "TypeScript", meterRate: "75" },
  { id: 4, skill: "React", meterRate: "80" },
  { id: 5, skill: "NextJs", meterRate: "85" },
  { id: 6, skill: "Tailwind CSS", meterRate: "75" },
  { id: 7, skill: "EJS", meterRate: "70" },
  { id: 8, skill: "Bootstrap", meterRate: "80" },
]

const backendSkills = [
  { id: 1, skill: "NodeJS", meterRate: 90 },
  { id: 2, skill: "ExpressJS", meterRate: 85 },
  { id: 3, skill: "PostgreSQL", meterRate: 80 },
  { id: 4, skill: "MongoDB", meterRate: 75 },
]

const toolsUsed = [
  { id: 3, name: "JavaScript" },
  { id: 4, name: "TypeScript" },
  { id: 5, name: "React.js" },
  { id: 6, name: "Node.js" },
  { id: 7, name: "Express.js" },
  { id: 8, name: "PostgreSQL" },
  { id: 9, name: "MongoDB" },
  { id: 11, name: "EJS" },
  { id: 12, name: "Bootstrap" },
  { id: 13, name: "Tailwind" },
  { id: 14, name: "Git" },
  { id: 15, name: "GitHub" },
  { id: 16, name: "GSAP" },
  { id: 17, name: "LocomotiveScroll" },
  { id: 19, name: "Stripe" },
  { id: 20, name: "Socket.io" },
]

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: frontendSkills,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: backendSkills,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200 mb-6"
          >
            👨‍💻 Get to Know Me
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                My Journey
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
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

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-sm">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Education</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">IIT Roorkee</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg shadow-sm">
                <MapPin className="text-green-600 dark:text-green-400" size={24} />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Roorkee, India</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Code Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            // viewport={{ once: true }}
            className="relative"
          >
            <Card className="overflow-hidden bg-gray-900 border-0 shadow-2xl">
              <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">about-me.html</span>
              </div>
              
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto">
                  <pre className="p-4 text-sm font-mono leading-relaxed">
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
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My expertise spans across modern web technologies, from frontend frameworks to backend databases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="space-y-6"
              >
                <Card className="overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill.skill}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.meterRate}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.meterRate}%` }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              // viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {toolsUsed.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                // viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                #{tool.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
