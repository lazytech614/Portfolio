'use client';
import { motion } from 'framer-motion';
import FloatingCodeSnippets from './floating-code-snippets';

const ProfileAvatar = () => {
  const orbitingElements = [
    { emoji: '⚛️', duration: 10, position: 'top', bgColor: 'bg-blue-500' },
    { emoji: '📱', duration: 12, position: 'right', bgColor: 'bg-green-500' },
    { emoji: '💾', duration: 14, position: 'bottom', bgColor: 'bg-purple-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="relative flex justify-center items-center order-1 lg:order-2"
    >
      {/* Avatar Container */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
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

          {/* Decorative Corner Elements */}
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

        {/* Orbiting Elements */}
        {orbitingElements.map((element, index) => (
          <motion.div
            key={index}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{ duration: element.duration, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className={`absolute ${
                element.position === 'top' ? '-top-4 sm:-top-8 left-1/2 transform -translate-x-1/2' :
                element.position === 'right' ? 'top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2' :
                '-bottom-3 sm:-bottom-6 left-1/4'
              } ${
                element.position === 'top' ? 'w-8 h-8 sm:w-12 sm:h-12' : 'w-6 h-6 sm:w-10 sm:h-10'
              } ${element.bgColor} rounded-full flex items-center justify-center text-white ${
                element.position === 'top' ? 'text-sm sm:text-xl' : 'text-xs sm:text-lg'
              } shadow-lg`}
            >
              {element.emoji}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Code Snippets */}
      <FloatingCodeSnippets />
    </motion.div>
  );
};

export default ProfileAvatar;
