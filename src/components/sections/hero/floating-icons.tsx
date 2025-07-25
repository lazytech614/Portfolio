'use client';
import { motion, useTransform } from 'framer-motion';
import { FLOATING_ICONS } from '@/constants/hero-constants';
import { useMouseParallax } from './hooks/useMouseParallax';

const FloatingIcons = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX, smoothY } = useMouseParallax();

  return (
    <>
      {FLOATING_ICONS.map(({ icon:Icon, x,y,size,delay }, idx) => (
        <motion.div
          key={idx}
          className="absolute z-0 text-primary/20"
          style={{
            left:`${x}%`, top:`${y}%`,
            x: useTransform(smoothX, [-100,100], [-20-idx*2, 20+idx*2]),
            y: useTransform(smoothY, [-100,100], [-15-idx*1.5, 15+idx*1.5]),
          }}
          initial={{ opacity:0, scale:0 }}
          animate={loadingDone ? {
            opacity:1, scale:1, y:[0,-20,0], rotate:[0,360],
          } : { opacity:0, scale:0 }}
          transition={{
            opacity:{duration:.5,delay:delay+.5},
            scale:{duration:.5,delay:delay+.5},
            y:{duration:4+idx, repeat:Infinity, ease:'easeInOut'},
            rotate:{duration:20+idx*5, repeat:Infinity, ease:'linear'},
          }}
        >
          <Icon size={size}/>
        </motion.div>
      ))}
    </>
  );
};
export default FloatingIcons;
