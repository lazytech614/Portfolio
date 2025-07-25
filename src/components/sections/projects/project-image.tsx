'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ActionButtons from './action-buttons';

interface ProjectImageProps {
  image: string;
  title: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectImage = ({ image, title, gradient, liveUrl, githubUrl, index }: ProjectImageProps) => {
  return (
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      
      {/* Project Image */}
      <div className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      {/* Action Buttons - Desktop */}
      <div className="absolute inset-0 hidden md:flex">
        <ActionButtons 
          liveUrl={liveUrl} 
          githubUrl={githubUrl} 
          className="absolute inset-0 flex items-center justify-center space-x-3"
        />
      </div>

      {/* Project Index */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold text-sm border border-white/20">
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  );
};

export default ProjectImage;
