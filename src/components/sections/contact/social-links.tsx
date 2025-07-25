'use client';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_SECTION_CONFIG } from '@/constants/contact';

const SocialLinks = () => {
  return (
    <div className="pt-6 border-t border-border">
      <p className="font-medium mb-4">{CONTACT_SECTION_CONFIG.socialTitle}</p>
      <div className="flex space-x-4">
        {SOCIAL_LINKS.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-muted rounded-lg hover:bg-accent transition-colors"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
