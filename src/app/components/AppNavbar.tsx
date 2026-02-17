import React from 'react';
import { GraduationCap, Menu } from 'lucide-react';

interface AppNavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function AppNavbar({ onMenuClick, showMenuButton = false }: AppNavbarProps) {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-40 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {showMenuButton && (
              <button
                onClick={onMenuClick}
                className="lg:hidden text-foreground hover:text-accent transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-[6px] flex items-center justify-center shadow-sm">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-foreground">LearnPath</span>
                <span className="text-accent font-semibold">AI</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">
              Engineering Learning Platform
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
