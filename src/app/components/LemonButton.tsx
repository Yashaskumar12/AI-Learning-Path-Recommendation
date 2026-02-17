import React from 'react';

interface LemonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function LemonButton({
  variant = 'primary',
  size = 'medium',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: LemonButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all border font-medium disabled:opacity-65 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-accent text-accent-foreground border-accent hover:opacity-90 active:opacity-100',
    secondary: 'bg-secondary text-secondary-foreground border-border hover:bg-muted',
    tertiary: 'bg-transparent text-foreground border-border hover:bg-secondary',
    danger: 'bg-destructive text-destructive-foreground border-destructive hover:opacity-90',
  };
  
  const sizeStyles = {
    small: 'h-[33px] px-2 py-2 rounded-[6px]',
    medium: 'h-[37px] px-3 py-1 rounded-[6px]',
    large: 'h-[49px] px-3 py-3 rounded-[6px]',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
