import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/* ------------------------------------------------------------------ */
/*  ICON  PATHS                                                       */
/* ------------------------------------------------------------------ */
const techIcons: Record<string, string> = {
  HTML: '/icons/html5.svg',
  CSS: '/icons/css3.svg',
  JavaScript: '/icons/javascript.svg',
  'Tailwind CSS': '/icons/tailwind.svg',
  'React': '/icons/react.svg',
  TypeScript: '/icons/typescript.svg',
  'Express JS': '/icons/express.svg',
  'Node JS': '/icons/nodejs.svg',
  JWT: '/icons/jwt.svg',
  Docker: '/icons/docker.svg',
  MongoDB: '/icons/mongodb.svg',
  PostgreSQL: '/icons/postgresql.svg',
};

/* ------------------------------------------------------------------ */
/*  TECHNOLOGY LIST                                                  */
/* ------------------------------------------------------------------ */
const technologies = [
  { name: 'HTML', icon: techIcons['HTML'] },
  { name: 'CSS', icon: techIcons['CSS'] },
  { name: 'JavaScript', icon: techIcons['JavaScript'] },
  { name: 'Tailwind CSS', icon: techIcons['Tailwind CSS'] },
  { name: 'React', icon: techIcons['React'] },
  { name: 'TypeScript', icon: techIcons['TypeScript'] },
  { name: 'Express JS', icon: techIcons['Express JS'] },
  { name: 'Node JS', icon: techIcons['Node JS'] },
  { name: 'JWT', icon: techIcons['JWT'] },
  { name: 'Docker', icon: techIcons['Docker'] },
  { name: 'MongoDB', icon: techIcons['MongoDB'] },
  { name: 'PostgreSQL', icon: techIcons['PostgreSQL'] },
];

/* ------------------------------------------------------------------ */
/*  GRADIENT PALETTE (round-robin)                                   */
/* ------------------------------------------------------------------ */
const gradients: [string, string][] = [
  ['#f97316', '#d946ef'],
  ['#3b82f6', '#06b6d4'],
  ['#10b981', '#8b5cf6'],
  ['#f59e0b', '#ef4444'],
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
};

interface WrappedSkillsSectionProps {
  title: string;
  index?: number;
}

export default function WrappedSkillsSection({ title, index = 0 }: WrappedSkillsSectionProps) {
  return (
    <motion.section
      id="skills-grid"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="py-16 px-6 bg-gray-900"
    >
      {/* Section Title */}
      <motion.h3
        className="text-3xl font-extrabold text-center text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        {title}
      </motion.h3>

      {/* Technologies Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, i) => {
          const [from, to] = gradients[i % gradients.length];
          return (
            <motion.div
              key={tech.name}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="relative w-[140px]"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl p-[2px] "
                style={{
                  background: `linear-gradient(135deg, ${from}, ${to})`,
                  backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="h-full w-full rounded-2xl bg-gray-800" />
              </motion.div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-center rounded-2xl bg-gray-800/60 backdrop-blur-md p-6 text-white text-center">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${from}20, ${to}20)` }}
                >
                  <Image src={tech.icon} alt={tech.name} width={40} height={40} priority />
                </div>
                <p className="text-sm font-medium leading-tight">{tech.name}</p>
              </div>

              {/* Glow on Hover */}
              <motion.div
                className="pointer-events-none absolute -inset-1 rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${from}55, transparent 70%)` }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.8, scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
