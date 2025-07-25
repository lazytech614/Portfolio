'use client';

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
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
          onClick={onItemClick}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
