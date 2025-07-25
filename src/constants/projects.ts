export const PROJECTS_SECTION_CONFIG = {
  title: "Featured Projects",
  subtitle: "Here are some of my recent projects that showcase my skills and passion for creating exceptional web experiences.",
  githubUrl: "https://github.com/lazytech614"
};

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
};
