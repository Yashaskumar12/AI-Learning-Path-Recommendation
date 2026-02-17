import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LemonButton } from './LemonButton';

interface LemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function LemonModal({ isOpen, onClose, title, children, footer }: LemonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-[5px]"
        onClick={onClose}
      />
      <div 
        className="relative bg-card border border-border rounded-[6px] w-full max-w-lg mx-4 max-h-[90vh] overflow-hidden flex flex-col"
        style={{ boxShadow: '0px 16px 16px -16px rgba(0, 0, 0, 0.35)' }}
      >
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-medium">{title}</h3>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        <div className="p-4 overflow-y-auto flex-1">
          {children}
        </div>
        {footer && (
          <div className="p-4 border-t border-border">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
