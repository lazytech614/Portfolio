'use client';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

const ContactItem = ({ icon: Icon, label, value, href }: ContactItemProps) => {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 5 }}
      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted transition-colors group"
    >
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Icon className="text-primary" size={20} />
      </div>
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-muted-foreground text-sm">{value}</p>
      </div>
    </motion.a>
  );
};

export default ContactItem;
