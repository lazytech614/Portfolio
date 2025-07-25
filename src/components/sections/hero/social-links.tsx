'use client';
import { motion, useTransform } from 'framer-motion';
import { SOCIAL_LINKS } from '@/constants/hero-constants';
import { useMouseParallax } from './/hooks/useMouseParallax';

const SocialLinks = ({ loadingDone }: { loadingDone: boolean }) => {
  const { smoothX, smoothY } = useMouseParallax();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loadingDone ? 1 : 0 }}
      transition={{ duration:.8, delay: loadingDone ? 2.5 : 0 }}
      className="flex items-center justify-center space-x-10 mb-20"
    >
      {SOCIAL_LINKS.map((s, idx) => (
        <motion.a
          key={s.label} href={s.href} target="_blank" rel="noreferrer"
          className="relative group"
          whileHover={{ scale:1.4, y:-10,
                        transition:{type:'spring', stiffness:400, damping:15} }}
          whileTap={{ scale:.9 }}
          initial={{ opacity:0, y:30, scale:.5 }}
          animate={loadingDone ? { opacity:1, y:0, scale:1 } : { opacity:0, y:30, scale:.5 }}
          transition={{
            duration:.6, delay: loadingDone ? 2.7 + idx*.1 : 0,
            type:'spring', stiffness:200,
          }}
          style={{
            x: useTransform(smoothX, [-100,100], [-idx*2, idx*2]),
            y: useTransform(smoothY, [-100,100], [-idx,   idx]),
          }}
        >
          {/* background ring */}
          <motion.div
            className="absolute inset-0 -m-4 rounded-2xl bg-card/20
                       backdrop-blur-xl border border-primary/20 opacity-0 
                       group-hover:opacity-100"
            animate={loadingDone ? { rotate:[0,360] } : {}}
            transition={{ duration:10, repeat:Infinity, ease:'linear' }}
          />
          <s.icon size={32} className="relative z-10 text-muted-foreground
                                      group-hover:text-primary transition-colors"/>
          {/* tooltip */}
          <motion.div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-3 py-2
                       bg-card border border-border rounded-lg text-xs opacity-0
                       group-hover:opacity-100 pointer-events-none"
            initial={{ y:10 }} whileHover={{ y:0 }} transition={{ duration:.2 }}>
            {s.label}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};
export default SocialLinks;
