'use client'

import { motion, easeOut } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../../ui/button'
import Link from 'next/link'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text">Rupanjan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional digital experiences
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <Link href="https://github.com/lazytech614" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/rupanjan-de-15126527a/" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:derupanjan2021@gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
              <Mail size={24} />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="text-gray-400" size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
