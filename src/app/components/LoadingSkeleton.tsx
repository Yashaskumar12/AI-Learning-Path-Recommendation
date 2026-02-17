import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function LoadingSkeleton({ className = '', variant = 'rectangular' }: LoadingSkeletonProps) {
  const baseStyles = 'animate-pulse bg-muted';
  
  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-[6px]',
  };
  
  return <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} />;
}
