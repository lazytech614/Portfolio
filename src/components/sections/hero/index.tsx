'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimationFrame } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Palette, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedText from '@/components/global/animated-text';
import { useEffect, useState, useRef } from 'react';
import { useLoading } from '@/contexts/loading-context';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLElement>(null);

  const { isLoadingComplete } = useLoading(); 
  
  // Mouse tracking with spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  // Floating animation state
  const time = useMotionValue(0);
  useAnimationFrame((t) => {
    time.set(t / 1000);
  });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (clientY - innerHeight / 2) / (innerHeight / 2);
      
      mouseX.set(x * 100);
      mouseY.set(y * 100);
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, [mouseX, mouseY]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  // Floating elements similar to reference
  const floatingElements = [
    { icon: Code2, x: 15, y: 25, size: 40, delay: 0 },
    { icon: Palette, x: 85, y: 20, size: 35, delay: 0.5 },
    { icon: Zap, x: 10, y: 75, size: 45, delay: 1 },
    { icon: Star, x: 90, y: 80, size: 30, delay: 1.5 },
    { icon: Sparkles, x: 50, y: 10, size: 25, delay: 2 },
  ];

  // Background mesh gradient points
  const meshPoints = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (i % 5) * 25 + 10,
    y: Math.floor(i / 5) * 25 + 10,
    size: Math.random() * 200 + 100,
    hue: Math.random() * 60 + 180, // Blue to teal range
  }));

  // Don't render hero animations until loading is complete, but keep the same structure
  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Mesh */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{ y: backgroundY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoadingComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isLoadingComplete ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: useTransform(smoothMouseX, [-100, 100], [-i * 0.5, i * 0.5]),
              y: useTransform(smoothMouseY, [-100, 100], [-i * 0.3, i * 0.3]),
            }}
            initial={{ opacity: 0 }}
            animate={isLoadingComplete ? {
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            } : { opacity: 0 }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Floating Tech Icons */}
      {floatingElements.map(({ icon: Icon, x, y, size, delay }, index) => (
        <motion.div
          key={index}
          className="absolute z-0 text-primary/20"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            x: useTransform(smoothMouseX, [-100, 100], [-20 - index * 2, 20 + index * 2]),
            y: useTransform(smoothMouseY, [-100, 100], [-15 - index * 1.5, 15 + index * 1.5]),
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isLoadingComplete ? {
            opacity: 1,
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 360],
          } : { opacity: 0, scale: 0 }}
          transition={{
            opacity: { duration: 0.5, delay: delay + 0.5 },
            scale: { duration: 0.5, delay: delay + 0.5 },
            y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 py-28 relative z-10"
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoadingComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isLoadingComplete ? 0.5 : 0 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -50 }}
            animate={isLoadingComplete ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: -50 }}
            transition={{ 
              duration: 1.2, 
              delay: isLoadingComplete ? 0.3 : 0,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center px-6 py-3 bg-card/30 backdrop-blur-xl border border-primary/20 rounded-full text-sm text-muted-foreground mb-4 cursor-pointer group"
            style={{
              x: useTransform(smoothMouseX, [-100, 100], [-3, 3]),
              y: useTransform(smoothMouseY, [-100, 100], [-2, 2]),
            }}
          >
            <motion.div
              animate={isLoadingComplete ? { 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mr-3"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </motion.div>
            <span className="group-hover:text-primary transition-colors">Available for freelance work</span>
            <motion.div
              animate={isLoadingComplete ? { x: [0, 5, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Main Heading with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoadingComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 0.5 : 0 }}
            className="mb-12"
          >
            <motion.h1
              className="flex flex-wrap justify-center items-baseline text-center text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8"
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [-5, 5]),
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 100 }}
                animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 1, delay: isLoadingComplete ? 0.7 : 0, ease: "easeOut" }}
                className="mr-3"
              >
                Hi, I&apos;m
              </motion.span>
              <motion.span
                className="gradient-text relative"
                initial={{ opacity: 0, y: 100 }}
                animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 1, delay: isLoadingComplete ? 0.9 : 0, ease: "easeOut" }}
              >
                <AnimatedText text="Rupanjan" />
                
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-4 left-0 h-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={isLoadingComplete ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
                  transition={{ duration: 1.5, delay: isLoadingComplete ? 2 : 0 }}
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
                    animate={isLoadingComplete ? {
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    } : { opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: isLoadingComplete ? i * 0.5 + 2.5 : 0,
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
              animate={{ opacity: isLoadingComplete ? 1 : 0 }}
              transition={{ delay: isLoadingComplete ? 1.5 : 0 }}
            >
              <motion.h2 
                className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-light"
                initial={{ y: 100 }}
                animate={isLoadingComplete ? { y: 0 } : { y: 100 }}
                transition={{ duration: 1, delay: isLoadingComplete ? 1.7 : 0, ease: "easeOut" }}
                style={{
                  x: useTransform(smoothMouseX, [-100, 100], [3, -3]),
                }}
              >
                Full Stack Developer
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: isLoadingComplete ? 2 : 0 }}
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [2, -2]),
              }}
            >
              I craft seamless digital experiences with clean code and creative solutions. 
              Specializing in modern web technologies and user-centered design.
            </motion.p>
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 2.3 : 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [-2, 2]),
              }}
            >
              <Button 
                size="lg" 
                className="relative overflow-hidden group px-10 py-7 text-lg font-medium bg-primary hover:bg-primary/90 border-0"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                  animate={isLoadingComplete ? { x: ["-100%", "100%"] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  animate={isLoadingComplete ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 ml-2"
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }}
              style={{
                x: useTransform(smoothMouseX, [-100, 100], [2, -2]),
              }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="px-10 py-7 text-lg font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoadingComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 2.5 : 0 }}
            className="flex items-center justify-center space-x-10 mb-20"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ 
                  scale: 1.4, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={isLoadingComplete ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: isLoadingComplete ? 2.7 + index * 0.1 : 0,
                  type: "spring",
                  stiffness: 200
                }}
                style={{
                  x: useTransform(smoothMouseX, [-100, 100], [-index * 2, index * 2]),
                  y: useTransform(smoothMouseY, [-100, 100], [-index, index]),
                }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 -m-4 rounded-2xl bg-card/20 backdrop-blur-xl border border-primary/20 opacity-0 group-hover:opacity-100"
                  animate={isLoadingComplete ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                <social.icon 
                  size={32} 
                  className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                />

                {/* Hover tooltip */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-card border border-border rounded-lg text-xs opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoadingComplete ? 1 : 0 }}
            transition={{ duration: 0.8, delay: isLoadingComplete ? 3 : 0 }}
            className="relative"
            style={{
              y: useTransform(smoothMouseY, [-100, 100], [-3, 3]),
            }}
          >
            <motion.div
              animate={isLoadingComplete ? { 
                y: [0, 20, 0],
              } : {}}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.span 
                className="text-sm text-muted-foreground mb-4 group-hover:text-primary transition-colors"
                animate={isLoadingComplete ? { opacity: [0.5, 1, 0.5] } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Scroll to discover more
              </motion.span>
              
              <motion.div
                className="w-8 h-12 border-2 border-muted-foreground group-hover:border-primary rounded-full flex justify-center transition-colors relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-4 bg-muted-foreground group-hover:bg-primary rounded-full mt-3 transition-colors"
                  animate={isLoadingComplete ? { y: [0, 20, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
