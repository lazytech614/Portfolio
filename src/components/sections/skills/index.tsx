'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  ChevronLeft,
  ChevronRight,
  Award,
  Target,
  Flame
} from 'lucide-react';
import Image from 'next/image';
import WrappedSkillsSection from './wrapped-skills-section';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Technology icons mapping
  const techIcons = {
    "HTML": "/icons/html5.svg",
    "CSS": "/icons/css3.svg", 
    "JavaScript": "/icons/javascript.svg",
    "Tailwind CSS": "/icons/tailwind.svg",
    "Express JS": "/icons/express.svg",
    "Node JS": "/icons/nodejs.svg",
    "React + Native": "/icons/react.svg",
    "MongoDB": "/icons/mongodb.svg",
    "JWT": "/icons/jwt.svg",
    "PostgreSQL": "/icons/postgresql.svg",
    "TypeScript": "/icons/typescript.svg",
    "Docker": "/icons/docker.svg"
  };

  const technologies = [
        { name: "HTML", icon: techIcons["HTML"] },
        { name: "CSS", icon: techIcons["CSS"] },
        { name: "JavaScript", icon: techIcons["JavaScript"] },
        { name: "Tailwind CSS", icon: techIcons["Tailwind CSS"] },
        { name: "React + Native", icon: techIcons["React + Native"] },
        { name: "TypeScript", icon: techIcons["TypeScript"] },
        { name: "Express JS", icon: techIcons["Express JS"] },
        { name: "Node JS", icon: techIcons["Node JS"] },
        { name: "JWT", icon: techIcons["JWT"] },
        { name: "Docker", icon: techIcons["Docker"] },
        { name: "MongoDB", icon: techIcons["MongoDB"] },
        { name: "PostgreSQL", icon: techIcons["PostgreSQL"] }
  ];

  const ScrollableSkillSection = ({ name, icon, index }: { name: string, icon: any, index: number }) => {
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
        // viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="mb-12 last:mb-0"
      >
        {/* Category Header */}
        <div className="flex items-center mb-8">
          <motion.div 
            className="p-4 rounded-2xl mr-4 shadow-lg"
            // style={{ backgroundColor: `${category.color}20` }}
            whileHover={{ scale: 1.05 }}
          >
            {/* <icon 
              size={24} 
              style={{ color: category.color }}
            /> */}
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
            {technologies.map((skill: any, skillIndex: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index * 0.1) + (skillIndex * 0.05) 
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0"
              >
                {/* Skill Card */}
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
                        <Code2 size={32}  />
                      )}
                    </div>
                  </div>
                  
                  {/* Technology Name */}
                  <h4 className="text-sm font-medium text-white text-center leading-tight">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden" 
      ref={containerRef}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Skills & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I use to build modern, scalable web applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto">
            <WrappedSkillsSection 
              title={''}
            />
        </div>

        {/* Enhanced Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">
              Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Overview</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { 
                  number: "15+", 
                  label: "Technologies Mastered",
                  icon: Code2,
                  gradient: "from-blue-500 to-cyan-500"
                },
                { 
                  number: "3+", 
                  label: "Certifications Completed",
                  icon: Award,
                  gradient: "from-green-500 to-emerald-500"
                },
                { 
                  number: "5+", 
                  label: "Projects Completed",
                  icon: Target,
                  gradient: "from-purple-500 to-pink-500"
                },
                { 
                  number: "100%", 
                  label: "Commitment Level",
                  icon: Flame,
                  gradient: "from-orange-500 to-red-500"
                }
              ].map(({ label, number, icon: Icon, gradient }, index) => (
                <motion.div
                  key={label}
                  className="group relative overflow-hidden rounded-xl bg-card/50 p-6 backdrop-blur-sm transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default Skills;

