import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { LemonButton } from '../components/LemonButton';
import { LemonInput } from '../components/LemonInput';

interface LandingPageProps {
  onGenerateRoadmap: (goal: string) => void;
}

export function LandingPage({ onGenerateRoadmap }: LandingPageProps) {
  const [goal, setGoal] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      onGenerateRoadmap(goal);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Learning</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-medium tracking-tight">
            Your Personalized
            <br />
            <span className="text-accent">Learning Path</span> Generator
          </h1>
          
          {/* Subheading */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us your learning goal, and we'll create a customized roadmap with curated resources 
            to help you master any skill.
          </p>
          
          {/* Input Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <LemonInput
                type="text"
                placeholder="e.g., Learn React Development, Master Machine Learning..."
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                size="large"
                fullWidth
                className="flex-1"
              />
              <LemonButton 
                type="submit" 
                variant="primary" 
                size="large"
                disabled={!goal.trim()}
              >
                Generate Roadmap
                <ArrowRight className="w-5 h-5" />
              </LemonButton>
            </div>
          </form>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-accent/10 rounded-[6px] flex items-center justify-center mx-auto">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-medium">Personalized Path</h3>
            <p className="text-sm text-muted-foreground">
              AI-generated roadmaps tailored to your specific learning goals and current skill level
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-accent/10 rounded-[6px] flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-medium">Curated Resources</h3>
            <p className="text-sm text-muted-foreground">
              Hand-picked articles, videos, and courses for each topic in your learning journey
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-accent/10 rounded-[6px] flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-medium">Track Progress</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your learning progress and unlock new topics as you complete each stage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
