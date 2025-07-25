'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/contexts/loading-context';

const Loading = () => {
  const { isLoading, setIsLoading, setIsLoadingComplete } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            // Add a small delay before marking as complete to ensure smooth transition
            setTimeout(() => setIsLoadingComplete(true), 300);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [setIsLoading, setIsLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="h-full w-full" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeOut",
                delay: 0.2
              }}
              className="relative"
            >
              {/* Glowing background */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500 blur-xl rounded-full"
              />
              
              {/* SVG Logo */}
              <motion.svg 
                className='h-[60px] sm:h-[80px] md:h-[100px] relative z-10' 
                viewBox="0 0 261 222" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <motion.path 
                  d="M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z" 
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ pathLength: 0, fill: "transparent" }}
                  animate={{ 
                    pathLength: 1,
                    fill: "rgb(59, 130, 246)"
                  }}
                  transition={{ 
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    fill: { duration: 0.5, delay: 1.5 }
                  }}
                />
                <motion.path 
                  d="M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z" 
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="2"
                  fill="transparent"
                  initial={{ pathLength: 0, fill: "transparent" }}
                  animate={{ 
                    pathLength: 1,
                    fill: "rgb(59, 130, 246)"
                  }}
                  transition={{ 
                    pathLength: { duration: 1.5, ease: "easeInOut", delay: 0.3 },
                    fill: { duration: 0.5, delay: 2 }
                  }}
                />
              </motion.svg>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-4"
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-white"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Rupanjan De
              </motion.h2>
              
              <motion.p 
                className="text-blue-400 text-lg font-mono"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  {"Initializing portfolio..."}
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="w-64 space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-400 font-mono">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                    opacity: 0
                  }}
                  animate={{
                    y: [null, -100],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
