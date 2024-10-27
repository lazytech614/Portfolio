import React, {useRef} from 'react';
import { frontendSkills, backendSkills } from '../../constants/skills';
import SkillCard from './SkillCard';
import arrowDown from '/arrowdown.svg';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Skills = () => {
  const frontendContainerRef = useRef(null);
  const backendContainerRef = useRef(null);

  // Separate motion values for frontend and backend sections
  const xFrontend = useMotionValue(0);
  const yFrontend = useMotionValue(0);
  const xBackend = useMotionValue(0);
  const yBackend = useMotionValue(0);

  // Separate springs for each section
  const mouseXSpringFrontend = useSpring(xFrontend);
  const mouseYSpringFrontend = useSpring(yFrontend);
  const mouseXSpringBackend = useSpring(xBackend);
  const mouseYSpringBackend = useSpring(yBackend);

  // Separate transformations for each section
  const rotateXFrontend = useTransform(mouseYSpringFrontend, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateYFrontend = useTransform(mouseXSpringFrontend, [-0.5, 0.5], ["-10deg", "10deg"]);
  const rotateXBackend = useTransform(mouseYSpringBackend, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateYBackend = useTransform(mouseXSpringBackend, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMoveFrontend = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    xFrontend.set(xPercent);
    yFrontend.set(yPercent);
  };

  const handleMouseMoveBackend = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = mouseX / width - 0.5;
    const yPercent = mouseY / height - 0.5;

    xBackend.set(xPercent);
    yBackend.set(yPercent);
  };

  const handleMouseLeaveFrontend = () => {
    xFrontend.set(0);
    yFrontend.set(0);
  };

  const handleMouseLeaveBackend = () => {
    xBackend.set(0);
    yBackend.set(0);
  };

  const scrollToBottom = (ref) => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="min-h-[100vh] py-4 mb-40 px-5 sm:px-10 md:px-20">
      <div className="main-intro moving-grad text-[24px] sm:text-[32px] md:text-[52px] font-semibold mb-16">
        Technologies Known
      </div>

      {/* Frontend Skills Section */}
      <div className="relative flex flex-col-reverse md:flex-row justify-between gap-10">
        <div
          ref={frontendContainerRef}
          className="md:w-[50%] flex flex-col gap-10 h-[400px] overflow-y-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {frontendSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
          <div onClick={() => scrollToBottom(frontendContainerRef)} className="absolute flex gap-2 px-4 py-2 right-0 md:right-auto md:left-[36%] rounded-xl bottom-[-46px] bg-accent-default text-black text-[12px] sm:text-[16px] cursor-pointer">
            <p>scroll down</p>
            <img className="w-[20px]" src={arrowDown} alt="arrow down" />
          </div>
        </div>
        <motion.div
          onMouseMove={handleMouseMoveFrontend}
          onMouseLeave={handleMouseLeaveFrontend}
          style={{
            rotateX: rotateXFrontend,
            rotateY: rotateYFrontend,
            transformStyle: 'preserve-3d'
          }}
          className="relative min-h-[360px] md:w-[50%] flex flex-col gap-2 mt-[-16px] rounded-[10px] cursor-default"
        >
          <div className='absolute -inset-0.5 bg-gradient-to-br from-accent-default to-violet-700 blur opacity-50 rounded-[10px]'></div>
          <div 
            className="absolute inset-0 bg-black rounded-[10px] p-6" 
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'translateZ(60px)'
            }}
          >
            <p className="text-[24px] sm:text-[32px] md:text-[52px] font-semibold text-accent-default">
              Frontend
            </p>
            <p className="text-[12px] sm:text-[14px]">
              Proficient in frontend development with expertise in JavaScript, React, and CSS frameworks like Bootstrap and Tailwind. Skilled in building responsive, dynamic web applications with smooth user interfaces. Experienced in integrating databases like MongoDB and PostgreSQL, and connecting APIs for full-stack functionality. Adept at using tools like Git for version control, with a focus on performance optimization and clean, maintainable code.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Backend Skills Section */}
      <div className="relative flex flex-col md:flex-row justify-between gap-10 mt-20">
        <motion.div
          onMouseMove={handleMouseMoveBackend}
          onMouseLeave={handleMouseLeaveBackend}
          style={{
            rotateX: rotateXBackend,
            rotateY: rotateYBackend,
            transformStyle: 'preserve-3d'
          }}
          className="relative md:w-[50%] min-h-[360px] flex flex-col gap-2 rounded-[10px] cursor-default"
        >
          <div className='absolute -inset-0.5 bg-gradient-to-br from-accent-default to-violet-700 blur opacity-50 rounded-[10px]'></div>
          <div 
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'translateZ(80px)'
            }}
            className='absolute inset-0 bg-black rounded-[10px] p-6'>
            <p className="text-[24px] sm:text-[32px] md:text-[52px] font-semibold text-accent-default">
              Backend
            </p>
            <p className="text-[12px] sm:text-[14px]">
              Experienced in backend development with a strong foundation in Node.js and Express for building scalable server-side applications. Proficient in working with databases such as MongoDB and PostgreSQL, designing efficient schemas, and managing data transactions. Skilled in creating RESTful APIs, handling authentication, and ensuring robust security measures. Adept at optimizing performance and integrating third-party services, while maintaining clean and maintainable code.
            </p>
          </div>
        </motion.div>
        <div
          ref={backendContainerRef}
          className="md:w-[50%] flex flex-col gap-10 h-[400px] overflow-y-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {backendSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
          <div onClick={() => scrollToBottom(backendContainerRef)} className="absolute flex gap-2 px-4 py-2 right-0 md:right-[36%] rounded-xl bottom-[-46px] bg-accent-default text-black text-[12px] sm:text-[16px] cursor-pointer">
            <p>scroll down</p>
            <img className="w-[20px]" src={arrowDown} alt="arrow down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
