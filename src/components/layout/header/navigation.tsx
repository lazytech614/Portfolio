'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface NavigationItem {
  href: string;
  label: string;
}

interface NavigationProps {
  items: NavigationItem[];
  className?: string;
  onItemClick?: () => void;
}

const Navigation = ({ items, className = "", onItemClick }: NavigationProps) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="relative group"
        >
          <Link
            href={item.href}
            className="relative inline-block text-muted-foreground hover:text-cyan-300 transition-colors duration-300 ease-out py-2"
            onClick={onItemClick}
          >
            <span className="relative z-10">
              {item.label}
            </span>
            
            {/* Glowing effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-300/60 via-emerald-400/60 to-yellow-300/60 rounded-full blur-sm"
              initial={{ width: 0, opacity: 0 }}
              whileHover={{
                width: "100%",
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                  delay: 0.1
                }
              }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Navigation;
