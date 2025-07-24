'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Smartphone,
  Palette,
  Settings,
  Zap,
  Star,
  Award,
  Target,
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progressOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "#34d399",
      skills: [
        { 
          name: "React", 
          proficiency: "Expert", 
          years: "3+ years",
          description: "Building complex SPAs and component libraries",
          level: "expert",
          projects: "25+ projects"
        },
        { 
          name: "Next.js", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Full-stack React applications with SSR/SSG",
          level: "advanced",
          projects: "15+ projects"
        },
        { 
          name: "TypeScript", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Type-safe development and scalable codebases",
          level: "advanced",
          projects: "20+ projects"
        },
        { 
          name: "Tailwind CSS", 
          proficiency: "Expert", 
          years: "2+ years",
          description: "Modern responsive design and custom components",
          level: "expert",
          projects: "30+ projects"
        },
        { 
          name: "JavaScript", 
          proficiency: "Expert", 
          years: "3+ years",
          description: "ES6+, async programming, and modern patterns",
          level: "expert",
          projects: "50+ projects"
        },
        { 
          name: "HTML5", 
          proficiency: "Expert", 
          years: "3+ years",
          description: "Semantic markup and accessibility best practices",
          level: "expert",
          projects: "50+ projects"
        },
        { 
          name: "CSS3", 
          proficiency: "Advanced", 
          years: "3+ years",
          description: "Modern styling, animations, and responsive design",
          level: "advanced",
          projects: "40+ projects"
        },
        { 
          name: "Framer Motion", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Complex animations and micro-interactions",
          level: "intermediate",
          projects: "10+ projects"
        }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "#3b82f6",
      skills: [
        { 
          name: "Node.js", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "RESTful APIs and server-side applications",
          level: "advanced",
          projects: "12+ projects"
        },
        { 
          name: "Express.js", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Web servers and API development",
          level: "advanced",
          projects: "15+ projects"
        },
        { 
          name: "Python", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Backend services and automation scripts",
          level: "intermediate",
          projects: "8+ projects"
        },
        { 
          name: "Django", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Full-stack web applications with Python",
          level: "intermediate",
          projects: "6+ projects"
        },
        { 
          name: "RESTful APIs", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "API design, documentation, and implementation",
          level: "advanced",
          projects: "20+ projects"
        },
        { 
          name: "GraphQL", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Query optimization and schema design",
          level: "intermediate",
          projects: "5+ projects"
        },
        { 
          name: "JWT", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Secure authentication and authorization",
          level: "advanced",
          projects: "18+ projects"
        },
        { 
          name: "AWS", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Cloud deployment and infrastructure",
          level: "intermediate",
          projects: "10+ projects"
        }
      ]
    },
    {
      title: "Database Technologies",
      icon: Database,
      color: "#8b5cf6",
      skills: [
        { 
          name: "MongoDB", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "NoSQL database design and optimization",
          level: "advanced",
          projects: "18+ projects"
        },
        { 
          name: "PostgreSQL", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Complex queries and database architecture",
          level: "advanced",
          projects: "12+ projects"
        },
        { 
          name: "MySQL", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "Relational database design and optimization",
          level: "advanced",
          projects: "15+ projects"
        },
        { 
          name: "Redis", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Caching strategies and session management",
          level: "intermediate",
          projects: "8+ projects"
        },
        { 
          name: "Firebase", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Real-time applications and authentication",
          level: "intermediate",
          projects: "10+ projects"
        },
        { 
          name: "Prisma", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Modern ORM and database toolkit",
          level: "intermediate",
          projects: "6+ projects"
        },
        { 
          name: "Supabase", 
          proficiency: "Intermediate", 
          years: "1+ years",
          description: "Backend-as-a-service with PostgreSQL",
          level: "intermediate",
          projects: "7+ projects"
        },
        { 
          name: "Mongoose", 
          proficiency: "Advanced", 
          years: "2+ years",
          description: "MongoDB object modeling and validation",
          level: "advanced",
          projects: "16+ projects"
        }
      ]
    }
  ];

  const ScrollableSkillSection = ({ category, index }: { category: any, index: number }) => {
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
        const scrollAmount = 320;
        scrollRef.current.scrollBy({
          left: direction === 'right' ? scrollAmount : -scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    useEffect(() => {
      checkScroll();
    }, []);

    const getProficiencyIcon = (level: string) => {
      switch (level) {
        case "expert":
          return <Flame className="w-4 h-4 text-red-500" />;
        case "advanced":
          return <Award className="w-4 h-4 text-blue-500" />;
        case "intermediate":
          return <Target className="w-4 h-4 text-green-500" />;
        default:
          return <Star className="w-4 h-4 text-yellow-500" />;
      }
    };

    const getProficiencyColor = (level: string) => {
      switch (level) {
        case "expert":
          return "from-red-500/20 to-orange-500/20";
        case "advanced":
          return "from-blue-500/20 to-cyan-500/20";
        case "intermediate":
          return "from-green-500/20 to-emerald-500/20";
        default:
          return "from-yellow-500/20 to-amber-500/20";
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="mb-16 last:mb-0"
      >
        {/* Category Header */}
        <div className="flex items-center mb-8">
          <div 
            className="p-4 rounded-2xl mr-6 shadow-lg"
            style={{ 
              backgroundColor: `${category.color}20`,
              border: `2px solid ${category.color}40`
            }}
          >
            <category.icon 
              size={32} 
              style={{ color: category.color }}
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {category.title}
            </h3>
            <div 
              className="h-1 w-20 rounded-full"
              style={{ backgroundColor: category.color }}
            />
          </div>
        </div>

        {/* Scrollable Skills Container */}
        <div className="relative group">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:bg-card hover:scale-110' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={{ 
              color: category.color,
              borderColor: canScrollLeft ? `${category.color}40` : undefined
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:bg-card hover:scale-110' 
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={{ 
              color: category.color,
              borderColor: canScrollRight ? `${category.color}40` : undefined
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Skills */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {category.skills.map((skill: any, skillIndex: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: (index * 0.2) + (skillIndex * 0.1) 
                }}
                // whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group/skill relative flex-shrink-0 w-80"
              >
                <div className="relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 h-full hover:bg-card/70 transition-all duration-300">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${getProficiencyColor(skill.level)} opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Skill Header */}
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                      {getProficiencyIcon(skill.level)}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          color: category.color,
                          borderColor: `${category.color}40`,
                          backgroundColor: `${category.color}10`
                        }}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>

                  {/* Skill Details */}
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center space-x-2">
                        <Globe className="w-3 h-3" />
                        <span>{skill.years}</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Settings className="w-3 h-3" />
                        <span>{skill.projects}</span>
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skill Level Indicator */}
                    <div className="flex space-x-1 pt-2">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            (skill.level === "expert" && dot <= 5) ||
                            (skill.level === "advanced" && dot <= 4) ||
                            (skill.level === "intermediate" && dot <= 3)
                              ? `bg-current`
                              : 'bg-muted'
                          }`}
                          style={{
                            color: (skill.level === "expert" && dot <= 5) ||
                                   (skill.level === "advanced" && dot <= 4) ||
                                   (skill.level === "intermediate" && dot <= 3)
                              ? category.color
                              : undefined
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(category.skills.length / 3) }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-muted opacity-50"
                style={{ backgroundColor: `${category.color}40` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My technical expertise across different domains, showcasing the technologies 
            I use to build modern, scalable web applications.
          </p>
        </motion.div>

        {/* Skills Categories with Horizontal Scrolling */}
        <div className="max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollableSkillSection 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8">
              Technical <span className="gradient-text">Overview</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { 
                  number: "24+", 
                  label: "Technologies Mastered",
                  icon: Code2,
                  color: "#34d399"
                },
                { 
                  number: "3+", 
                  label: "Years of Experience",
                  icon: Award,
                  color: "#3b82f6"
                },
                { 
                  number: "50+", 
                  label: "Projects Completed",
                  icon: Target,
                  color: "#8b5cf6"
                },
                { 
                  number: "100%", 
                  label: "Commitment Level",
                  icon: Flame,
                  color: "#f59e0b"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  // whileHover={{ scale: 1.05 }}
                  className="group text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300"
                >
                  <div 
                    className="inline-flex p-3 rounded-full mb-4"
                    style={{
                      backgroundColor: `${stat.color}20`,
                      border: `1px solid ${stat.color}40`
                    }}
                  >
                    <stat.icon 
                      size={24} 
                      style={{ color: stat.color }}
                    />
                  </div>
                  <div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
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
