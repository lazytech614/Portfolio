'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/lazytech614', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rupanjan-de-15126527a/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/whoisrupanjan/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:derupanjan2021@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Rupanjan</h3>
            <p className="text-muted-foreground">
              Frontend web developer dedicated to turning ideas into creative solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-xs">
          <p>&copy; {new Date().getFullYear()} Rupanjan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
