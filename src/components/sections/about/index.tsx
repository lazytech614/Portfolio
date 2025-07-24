'use client';

import { motion } from 'framer-motion';
import { Monitor, Coffee, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-muted/30 py-24 lg:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-dots opacity-5" />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.h2 
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="flex flex-col-reverse items-center gap-16 md:flex-row-reverse">
          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="my-16"
          >
            <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-[#0d1117] shadow-2xl">
              {/* VS Code Header */}
              <div className="flex items-center justify-between bg-[#21262d] px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#28ca42]"></div>
                </div>
                <div className="text-sm text-gray-400">about-me.html</div>
                <div className="w-16"></div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex">
                  <div className="mr-4 select-none text-gray-500">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i} className="leading-6">{i + 1}.</div>
                    ))}
                  </div>
                  <div className="flex-1">
                    <div className="leading-6">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-red-400">!DOCTYPE</span>
                      <span className="text-white"> html</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-red-400">html</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-4">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-red-400">head</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-8">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-green-400">title</span>
                      <span className="text-gray-500">&gt;</span>
                      <span className="text-white">Frontend Developer</span>
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-green-400">title</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-4">
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-red-400">head</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-4">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-red-400">body</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-8">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-green-400">h1</span>
                      <span className="text-gray-500">&gt;</span>
                      <span className="text-yellow-300">About Me</span>
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-green-400">h1</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-8">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-green-400">p</span>
                      <span className="text-gray-500">&gt;</span>
                      <span className="text-white">Passionate frontend developer specializing in React & Next.js</span>
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-green-400">p</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-8">
                      <span className="text-gray-500">&lt;</span>
                      <span className="text-green-400">div</span>
                      <span className="text-blue-400"> class</span>
                      <span className="text-gray-500">=</span>
                      <span className="text-orange-300">&quot;skills&quot;</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-12">
                      <span className="text-white">Frontend: React, NextJS, TypeScript</span>
                    </div>
                    <div className="leading-6 pl-12">
                      <span className="text-white">Styling: Tailwind CSS, Framer Motion</span>
                    </div>
                    <div className="leading-6 pl-8">
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-green-400">div</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6 pl-4">
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-red-400">body</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                    <div className="leading-6">
                      <span className="text-gray-500">&lt;/</span>
                      <span className="text-red-400">html</span>
                      <span className="text-gray-500">&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terminal */}
              <div className="bg-[#0d1117] px-6 pb-4">
                <div className="inline-block rounded bg-green-500 px-3 py-1 text-sm font-medium text-black">
                  npm install awesome
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Avatar Container */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-2xl sm:blur-3xl opacity-15 sm:opacity-20 scale-110"></div>
              
              {/* Main Avatar Circle */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-full shadow-xl sm:shadow-2xl overflow-hidden border-2 sm:border-4 border-white dark:border-gray-600">
                
                {/* Placeholder for cartoon avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl sm:text-8xl lg:text-9xl">👨‍💻</div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full shadow-lg"
                />
              </div>

              {/* Orbiting Elements - Scaled for mobile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm sm:text-xl shadow-lg">
                  ⚛️
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs sm:text-lg shadow-lg">
                  📱
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute -bottom-3 sm:-bottom-6 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm shadow-lg">
                  💾
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Code Snippets - Hidden on small mobile */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-10 sm:top-20 -left-5 sm:-left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 sm:p-4 text-xs font-mono border border-gray-200 dark:border-gray-700 opacity-80 hidden sm:block"
            >
              <div className="text-blue-600 dark:text-blue-400">const dev = {`{`}</div>
              <div className="text-gray-600 dark:text-gray-300 ml-2">name: &quot;Rupanjan&quot;,</div>
              <div className="text-gray-600 dark:text-gray-300 ml-2">skills: [&quot;React&quot;, &quot;Node.js&quot;]</div>
              <div className="text-blue-600 dark:text-blue-400">{`}`}</div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, -5, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-20 sm:bottom-32 -right-5 sm:-right-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 sm:p-3 text-xs font-mono border border-gray-200 dark:border-gray-700 opacity-80 hidden sm:block"
            >
              <div className="text-green-600 dark:text-green-400">npm install success</div>
              <div className="text-gray-600 dark:text-gray-300">Building amazing apps...</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Counter with Animated Gradient Borders */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: 'Years Experience', value: 3, icon: Coffee },
            { label: 'Projects Completed', value: 25, icon: Monitor },
            { label: 'Technologies', value: 15, icon: Code2 }
          ].map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              className="group relative overflow-hidden rounded-xl bg-card/50 p-6 backdrop-blur-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(45deg, #34d399, #3b82f6, #8b5cf6, #f59e0b, #ef4444)',
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
                <div className="absolute inset-[2px] rounded-xl bg-card/90 backdrop-blur-sm" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <Icon className="mb-3 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <span className="mb-2 text-4xl font-bold text-primary transition-colors group-hover:text-white">
                  {value}+
                </span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-gray-300">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
