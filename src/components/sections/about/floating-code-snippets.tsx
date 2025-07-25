'use client';
import { motion } from 'framer-motion';

const FloatingCodeSnippets = () => {
  return (
    <>
      {/* First Code Snippet */}
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

      {/* Second Code Snippet */}
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
    </>
  );
};

export default FloatingCodeSnippets;
