import React from 'react';
import { Lock, Check, Circle } from 'lucide-react';
import { LemonCard } from './LemonCard';

export type NodeStatus = 'locked' | 'unlocked' | 'completed';

interface RoadmapNodeProps {
  title: string;
  description: string;
  status: NodeStatus;
  difficulty?: string;
  onClick?: () => void;
}

export function RoadmapNode({ title, description, status, difficulty, onClick }: RoadmapNodeProps) {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const isUnlocked = status === 'unlocked';
  
  const statusConfig = {
    locked: {
      icon: Lock,
      bgColor: 'bg-muted',
      textColor: 'text-muted-foreground',
      borderColor: 'border-border',
      iconColor: 'text-muted-foreground',
    },
    unlocked: {
      icon: Circle,
      bgColor: 'bg-card',
      textColor: 'text-foreground',
      borderColor: 'border-border',
      iconColor: 'text-accent',
    },
    completed: {
      icon: Check,
      bgColor: 'bg-card',
      textColor: 'text-foreground',
      borderColor: 'border-[#388600]',
      iconColor: 'text-[#388600]',
    },
  };
  
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <div
      className={`
        relative border ${config.borderColor} ${config.bgColor} rounded-[6px] p-4
        transition-all
        ${!isLocked && 'hover:shadow-[0_3px_0_var(--border)] hover:scale-[1.01] cursor-pointer'}
        ${isLocked && 'opacity-65 cursor-not-allowed'}
      `}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full ${isCompleted ? 'bg-[#388600]/10' : 'bg-muted'} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className={`font-medium ${config.textColor}`}>{title}</h4>
            {difficulty && (
              <span className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded-full whitespace-nowrap">
                {difficulty}
              </span>
            )}
          </div>
          <p className={`text-sm ${isLocked ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
            {description}
          </p>
        </div>
      </div>
      
      {isCompleted && (
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#388600] rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
}
