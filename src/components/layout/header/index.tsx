'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '../header/animated-logo';
import Navigation from '../header/navigation';
import MobileMenuToggle from '../header/mobile-menu-toggle';
import { useScrollDetection } from '../header/hooks/useScrollDetection';
import { NAV_ITEMS } from '@/constants/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollDetection(50);

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <Navigation 
            items={NAV_ITEMS}
            className="hidden md:flex items-center space-x-8"
          />

          {/* Mobile Menu Button */}
          <MobileMenuToggle 
            isOpen={isOpen}
            onToggle={handleMobileMenuToggle}
          />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4"
          >
            <Navigation 
              items={NAV_ITEMS}
              className="flex flex-col space-y-4"
              onItemClick={handleMobileMenuClose}
            />
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
