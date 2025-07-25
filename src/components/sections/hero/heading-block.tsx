'use client';
import { motion, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AnimatedText from '@/components/global/animated-text';
import { useMouseParallax } from './hooks/useMouseParallax';
// import Typewriter from '@/components/global/type-writer/type-writer';
import Typewriter from 'typewriter-effect';

const HeadingBlock = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX, smoothY } = useMouseParallax();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loadingDone ? 1 : 0 }}
      transition={{ duration: 0.8, delay: loadingDone ? 0.5 : 0 }}
      className="mb-12"
    >
      {/* Main Heading */}
      <motion.h1
        className="flex flex-wrap justify-center items-baseline text-center text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8"
        style={{
          x: useTransform(smoothX, [-100, 100], [-5, 5]),
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={loadingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: loadingDone ? 0.7 : 0, ease: "easeOut" }}
          className="mr-3"
        >
          Hi, I&apos;m
        </motion.span>
        <motion.span
          className="gradient-text relative"
          initial={{ opacity: 0, y: 100 }}
          animate={loadingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: loadingDone ? 0.9 : 0, ease: "easeOut" }}
        >
          <AnimatedText text="Rupanjan" className='' />
          
          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-4 left-0 h-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={loadingDone ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1.5, delay: loadingDone ? 2 : 0 }}
          />
          
          {/* Floating sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary"
              style={{
                top: `${-20 + i * 10}%`,
                right: `${-10 + i * 15}%`,
              }}
              animate={loadingDone ? {
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              } : { opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: loadingDone ? i * 0.5 + 2.5 : 0,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={12 + i * 2} />
            </motion.div>
          ))}
        </motion.span>
      </motion.h1>

      {/* Animated subtitle */}
      <motion.div
        className="overflow-hidden mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingDone ? 1 : 0 }}
        transition={{ delay: loadingDone ? 1.5 : 0 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-light"
          initial={{ y: 100 }}
          animate={loadingDone ? { y: 0 } : { y: 100 }}
          transition={{ duration: 1, delay: loadingDone ? 1.7 : 0, ease: "easeOut" }}
          style={{
            x: useTransform(smoothX, [-100, 100], [3, -3]),
          }}
        >
          <Typewriter
            options={{
              strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h2>
      </motion.div>

      {/* Description paragraph */}
      <motion.p 
        className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={loadingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: loadingDone ? 2 : 0 }}
        style={{
          x: useTransform(smoothX, [-100, 100], [2, -2]),
        }}
      >
        I craft seamless digital experiences with clean code and creative solutions. 
        Specializing in modern web technologies and user-centered design.
      </motion.p>
    </motion.div>
  );
};

export default HeadingBlock;
