'use client';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import WrappedSkillsSection from './wrapped-skills-section';
import TechnicalOverview from './technical-overview';
import { SKILLS_SECTION_CONFIG } from '@/constants/skills';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={SKILLS_SECTION_CONFIG.backgroundPattern}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-50">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {SKILLS_SECTION_CONFIG.title.split(' & ')[0]} & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">{SKILLS_SECTION_CONFIG.title.split(' & ')[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {SKILLS_SECTION_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto">
          <WrappedSkillsSection title={''} />
        </div>

        {/* Technical Overview */}
        <TechnicalOverview />
      </div>

      {/* Gradient fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900 to-[#121212] z-20" />
    </section>
  );
};

export default Skills;
