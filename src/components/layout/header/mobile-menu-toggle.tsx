'use client';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden"
      onClick={onToggle}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </Button>
  );
};

export default MobileMenuToggle;
