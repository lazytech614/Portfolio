'use client';
import { motion } from 'framer-motion';
import CodeEditor from './code-editor';
import ProfileAvatar from './profile-avatar';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-muted/30 py-24 lg:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-dots opacity-5" />

      <div className="container mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <motion.h2 
          className="mb-16 text-center text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="flex flex-col-reverse items-center gap-16 md:flex-row-reverse">
          <CodeEditor />
          <ProfileAvatar />
        </div>
      </div>
    </section>
  );
};

export default About;
