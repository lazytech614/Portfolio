import { 
  Code2, 
  Database, 
  Server,
  Award,
  Target,
  Flame
} from 'lucide-react';

export const TECH_ICONS = {
  "HTML": "/icons/html5.svg",
  "CSS": "/icons/css3.svg", 
  "JavaScript": "/icons/javascript.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  "Express JS": "/icons/express.svg",
  "Node JS": "/icons/nodejs.svg",
  "React": "/icons/react.svg",
  "MongoDB": "/icons/mongodb.svg",
  "Prisma ORM": "/icons/prisma.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "TypeScript": "/icons/typescript.svg",
  "Docker": "/icons/docker.svg"
};

export const TECHNOLOGIES = [
  { name: "HTML", icon: TECH_ICONS["HTML"] },
  { name: "CSS", icon: TECH_ICONS["CSS"] },
  { name: "JavaScript", icon: TECH_ICONS["JavaScript"] },
  { name: "Tailwind CSS", icon: TECH_ICONS["Tailwind CSS"] },
  { name: "React", icon: TECH_ICONS["React"] },
  { name: "TypeScript", icon: TECH_ICONS["TypeScript"] },
  { name: "Express JS", icon: TECH_ICONS["Express JS"] },
  { name: "Node JS", icon: TECH_ICONS["Node JS"] },
  { name: "Prisma ORM", icon: TECH_ICONS["Prisma ORM"] },
  { name: "Docker", icon: TECH_ICONS["Docker"] },
  { name: "MongoDB", icon: TECH_ICONS["MongoDB"] },
  { name: "PostgreSQL", icon: TECH_ICONS["PostgreSQL"] }
];

export const TECHNICAL_STATS = [
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
];

export const SKILLS_SECTION_CONFIG = {
  title: "Skills & Technologies",
  subtitle: "Technologies I use to build modern, scalable web applications",
  backgroundPattern: {
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
    backgroundSize: '20px 20px'
  }
};
