import React from 'react';
import { Trophy, Target, Flame } from 'lucide-react';
import { LemonCard } from '../components/LemonCard';
import { LemonProgressBar } from '../components/LemonProgressBar';
import { RoadmapContainer, RoadmapTopic } from '../components/RoadmapContainer';

interface DashboardPageProps {
  learningGoal: string;
  topics: RoadmapTopic[];
  onTopicClick: (topic: RoadmapTopic) => void;
}

export function DashboardPage({ learningGoal, topics, onTopicClick }: DashboardPageProps) {
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.status === 'completed').length;
  const completionPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
  
  const currentTopic = topics.find(t => t.status === 'unlocked');
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Dashboard</h1>
        <p className="text-muted-foreground mt-1">Track your progress and continue learning</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <LemonCard>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Progress</p>
              <p className="text-2xl font-medium">{Math.round(completionPercentage)}%</p>
            </div>
            <div className="w-10 h-10 bg-accent/10 rounded-[6px] flex items-center justify-center">
              <Trophy className="w-5 h-5 text-accent" />
            </div>
          </div>
          <LemonProgressBar value={completionPercentage} className="mt-4" showLabel={false} />
        </LemonCard>
        
        <LemonCard>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Topics Completed</p>
              <p className="text-2xl font-medium">{completedTopics} / {totalTopics}</p>
            </div>
            <div className="w-10 h-10 bg-[#388600]/10 rounded-[6px] flex items-center justify-center">
              <Target className="w-5 h-5 text-[#388600]" />
            </div>
          </div>
        </LemonCard>
        
        <LemonCard>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Learning Streak</p>
              <p className="text-2xl font-medium">7 days</p>
            </div>
            <div className="w-10 h-10 bg-[#f7a501]/10 rounded-[6px] flex items-center justify-center">
              <Flame className="w-5 h-5 text-[#f7a501]" />
            </div>
          </div>
        </LemonCard>
      </div>
      
      {/* Current Learning Stage */}
      {currentTopic && (
        <LemonCard>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3>Current Learning Stage</h3>
              <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                In Progress
              </span>
            </div>
            <div>
              <h4 className="font-medium mb-1">{currentTopic.title}</h4>
              <p className="text-sm text-muted-foreground">{currentTopic.description}</p>
            </div>
          </div>
        </LemonCard>
      )}
      
      {/* Learning Goal */}
      <LemonCard>
        <div className="space-y-2">
          <h3>Your Learning Goal</h3>
          <p className="text-muted-foreground">{learningGoal}</p>
        </div>
      </LemonCard>
      
      {/* Roadmap Overview */}
      <div>
        <h2 className="mb-4">Your Learning Roadmap</h2>
        <RoadmapContainer topics={topics} onTopicClick={onTopicClick} />
      </div>
    </div>
  );
}
