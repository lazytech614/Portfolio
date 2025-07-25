'use client';
import { useLoading } from '@/contexts/loading-context';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import BackgroundMesh from './background-mesh';
import FloatingIcons from './floating-icons';
import StatusBadge from './status-badge';
import HeadingBlock from './heading-block';
import CTAButtons from './cta-buttons';
import SocialLinks from './social-links';
import ScrollIndicator from './scroll-indicator';

const Hero = () => {
  const { isLoadingComplete } = useLoading();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <BackgroundMesh loadingDone={isLoadingComplete} />
      <FloatingIcons loadingDone={isLoadingComplete} />

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 py-28 relative z-10"
        style={{ y: textY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoadingComplete ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isLoadingComplete ? 0.5 : 0 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <StatusBadge loadingDone={isLoadingComplete} />
          <HeadingBlock loadingDone={isLoadingComplete} />
          <CTAButtons loadingDone={isLoadingComplete} />
          <SocialLinks loadingDone={isLoadingComplete} />
          <ScrollIndicator loadingDone={isLoadingComplete} />
        </div>
      </motion.div>

      {/* Gradient fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-muted/30 z-20" />
    </section>
  );
};

export default Hero;
