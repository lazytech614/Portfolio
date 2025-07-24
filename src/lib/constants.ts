import { Project, Experience, Skill } from '@/types';

export const PROJECTS: Project[] = [
    {
      id: 'compressflow',
      title: 'CompressFlow',
      description: 'Web application for compressing and decompressing files with advanced algorithms and user-friendly interface.',
      image: '/images/01_compress_flow/image3.png',
      technologies: ['Next.js', 'Clerk', 'Tailwind CSS', 'TypeScript', 'Node.js', 'NeonDB'],
      liveUrl: 'https://data-compresseion-decompression.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/data-compresseion-decompression',
      gradient: 'from-blue-500/30 via-cyan-500/30 to-teal-500/30',
    },
    {
      id: 'nuevue',
      title: 'Nuevue',
      description: 'A modern, full-featured video sharing platform with real-time streaming and social features.',
      image: '/images/02_nuvue/image3.png',
      technologies: ['Next.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'Node.js', 'TypeScript', 'Electron.js'],
      liveUrl: 'https://video-sharing-webapp.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/Video-Sharing-Webapp',
      gradient: 'from-purple-500/30 via-pink-500/30 to-red-500/30',
    },
    {
      id: 'forever',
      title: 'Forever',
      description: 'Online store for buying and selling products with authentication and payment integration.',
      image: '/images/04_e_commerce/image1.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Stripe'],
      liveUrl: 'https://e-commerce-website-frontend-ten.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/E-Commerce-Website-Frontend',
      gradient: 'from-green-500/30 via-emerald-500/30 to-teal-500/30',
    },
    {
      id: 'shopzone-admin',
      title: 'ShopZone Admin',
      description: 'A comprehensive SaaS solution for managing multiple e-commerce stores through a single dashboard.',
      image: '/images/03_shop_zone_admin/image1.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Cloudinary', 'PostgreSQL', 'Stripe', 'Recharts', 'Zustand'],
      liveUrl: 'https://shop-zone-admin.vercel.app/',
      githubUrl: 'https://github.com/lazytech614/ShopZone-Admin',
      gradient: 'from-orange-500/30 via-amber-500/30 to-yellow-500/30',
    },
    {
      id: 'two-good-co',
      title: 'Two Good Co',
      description: 'A simple e-commerce website for buying and selling products with elegant design.',
      image: '/images/05_two_good_co/image1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://lazytech614.github.io/two-good-co/',
      githubUrl: 'https://github.com/lazytech614/two-good-co',
      gradient: 'from-pink-500/30 via-rose-500/30 to-red-500/30',
    },
  ]

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Strativ AB',
    position: 'Software Engineer (Frontend)',
    duration: 'Dec 2024 - Present',
    description: [
      'Developed responsive web applications using React and Next.js',
      'Collaborated with design teams to implement pixel-perfect UI components',
      'Optimized application performance and improved user experience'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: '2',
    company: 'Epikcoders',
    position: 'Frontend Developer',
    duration: 'Oct 2023 - Nov 2024',
    description: [
      'Built complex user interfaces with modern JavaScript frameworks',
      'Implemented responsive designs and cross-browser compatibility',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Vue.js', 'TypeScript', 'SCSS']
  }
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95 },
  { name: 'Node.js', category: 'backend', level: 80 },
  { name: 'PostgreSQL', category: 'database', level: 75 },
  { name: 'MongoDB', category: 'database', level: 70 },
];
