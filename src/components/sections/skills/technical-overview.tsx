'use client';
import { motion } from 'framer-motion';
import { TECHNICAL_STATS } from '@/constants/skills';

const TechnicalOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-20 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">
          Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Overview</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TECHNICAL_STATS.map(({ label, number, icon: Icon, gradient }, index) => (
            <motion.div
              key={label}
              className="group relative overflow-hidden rounded-xl bg-card/50 p-6 backdrop-blur-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Animated Gradient Border */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}
              >
                <div className="absolute inset-[2px] rounded-xl bg-card/90 backdrop-blur-sm" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div
                  className={`mb-3 p-3 rounded-full bg-gradient-to-r ${gradient} transition-transform group-hover:scale-110`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <span className={`mb-2 text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {number}
                </span>
                <span className="text-sm text-muted-foreground">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalOverview;
