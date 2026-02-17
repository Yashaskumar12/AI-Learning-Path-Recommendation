import React from 'react';

interface LemonCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export function LemonCard({ children, className = '', hoverable = false, onClick }: LemonCardProps) {
  const baseStyles = 'bg-card border border-border rounded-[6px] p-6';
  const hoverStyles = hoverable ? 'hover:shadow-[0_3px_0_var(--border)] hover:scale-[1.01] transition-all cursor-pointer' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
