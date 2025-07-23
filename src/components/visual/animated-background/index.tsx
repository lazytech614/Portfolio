'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from '../../theme/theme-provider'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { isDark } = useTheme()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`} />

      {/* Interactive gradient orbs */}
      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20' 
            : 'bg-gradient-to-r from-blue-400/30 to-purple-400/30'
        }`}
        animate={{
          x: `${mousePosition.x * 0.5}%`,
          y: `${mousePosition.y * 0.5}%`,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          x: { type: 'spring', stiffness: 50, damping: 30 },
          y: { type: 'spring', stiffness: 50, damping: 30 },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          left: '-300px',
          top: '-300px',
        }}
      />

      <motion.div
        className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-r from-pink-600/20 to-orange-600/20' 
            : 'bg-gradient-to-r from-pink-400/30 to-orange-400/30'
        }`}
        animate={{
          x: `${100 - mousePosition.x * 0.3}%`,
          y: `${100 - mousePosition.y * 0.3}%`,
          scale: [1.2, 1, 1.2],
        }}
        transition={{ 
          x: { type: 'spring', stiffness: 40, damping: 30 },
          y: { type: 'spring', stiffness: 40, damping: 30 },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          right: '-200px',
          bottom: '-200px',
        }}
      />

      {/* Geometric shapes */}
      <motion.div
        className={`absolute w-2 h-2 rounded-full ${
          isDark ? 'bg-blue-400/60' : 'bg-blue-500/40'
        }`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          left: '20%',
          top: '30%',
        }}
      />

      <motion.div
        className={`absolute w-1 h-1 rounded-full ${
          isDark ? 'bg-purple-400/60' : 'bg-purple-500/40'
        }`}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          right: '25%',
          top: '40%',
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            isDark ? 'bg-blue-300/40' : 'bg-blue-400/30'
          }`}
          animate={{
            y: [-20, -120, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}