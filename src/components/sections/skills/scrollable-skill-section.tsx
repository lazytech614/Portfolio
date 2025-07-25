'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SkillCard from './skill-card';
import { TECHNOLOGIES } from '@/constants/skills';

interface ScrollableSkillSectionProps {
  name: string;
  icon?: any;
  index: number;
}

const ScrollableSkillSection = ({ name, icon, index }: ScrollableSkillSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-12 last:mb-0"
    >
      {/* Category Header */}
      <div className="flex items-center mb-8">
        <motion.div 
          className="p-4 rounded-2xl mr-4 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          {/* Icon would go here if provided */}
        </motion.div>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {name}
          </h3>
        </div>
      </div>

      {/* Scrollable Skills Container */}
      <div className="relative group">
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
        )}

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <ChevronRight size={16} className="text-white" />
          </button>
        )}

        {/* Skills Grid */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {TECHNOLOGIES.map((skill, skillIndex) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={skillIndex}
              categoryIndex={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollableSkillSection;
