'use client';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Image from 'next/image';

interface SkillCardProps {
  skill: {
    name: string;
    icon?: string;
  };
  index: number;
  categoryIndex: number;
}

const SkillCard = ({ skill, index, categoryIndex }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: (categoryIndex * 0.1) + (index * 0.05) 
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="flex-shrink-0"
    >
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 min-w-[140px] text-center">
        {/* Technology Icon */}
        <div className="mb-3 flex justify-center">
          <div className="w-16 h-16 rounded-xl bg-gray-700/30 flex items-center justify-center">
            {skill.icon ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : (
              <Code2 size={32} />
            )}
          </div>
        </div>
        
        {/* Technology Name */}
        <h4 className="text-sm font-medium text-white text-center leading-tight">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );
};

export default SkillCard;
