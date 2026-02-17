import React from 'react';

interface LemonProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
}

export function LemonProgressBar({ 
  value, 
  max = 100, 
  className = '',
  showLabel = true 
}: LemonProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-muted-foreground">Progress</span>
          <span className="text-sm font-medium text-foreground">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
