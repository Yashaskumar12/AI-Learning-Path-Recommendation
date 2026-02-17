import React from 'react';

interface LemonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export function LemonInput({
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}: LemonInputProps) {
  const baseStyles = 'border border-border bg-input-background text-foreground rounded-[6px] transition-all focus:outline-none focus:ring-2 focus:ring-ring/30 disabled:opacity-65 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    small: 'h-[32px] px-1 py-0.5',
    medium: 'h-[37px] px-2 py-1',
    large: 'h-[48px] px-3 py-2',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <input
      className={`${baseStyles} ${sizeStyles[size]} ${widthStyle} ${className}`}
      {...props}
    />
  );
}
