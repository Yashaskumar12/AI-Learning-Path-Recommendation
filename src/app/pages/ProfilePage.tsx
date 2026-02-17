import React from 'react';
import { User, Trophy, Target, Calendar, Flame, Award } from 'lucide-react';
import { LemonCard } from '../components/LemonCard';
import { LemonProgressBar } from '../components/LemonProgressBar';
import { RoadmapTopic } from '../components/RoadmapContainer';

interface ProfilePageProps {
  learningGoal: string;
  topics: RoadmapTopic[];
}

export function ProfilePage({ learningGoal, topics }: ProfilePageProps) {
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.status === 'completed').length;
  const completionPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;
  
  const stats = [
    { label: 'Total Topics', value: totalTopics, icon: Target },
    { label: 'Completed', value: completedTopics, icon: Trophy },
    { label: 'Days Active', value: '7', icon: Calendar },
    { label: 'Current Streak', value: '7 days', icon: Flame },
  ];
  
  const recentActivity = [
    { topic: topics.find(t => t.status === 'completed'), date: 'Today' },
    { topic: topics.find(t => t.status === 'completed'), date: 'Yesterday' },
  ].filter(item => item.topic);
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1>Profile</h1>
        <p className="text-muted-foreground mt-1">Track your learning journey and achievements</p>
      </div>
      
      {/* Profile Card */}
      <LemonCard>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="mb-1">Learner</h3>
            <p className="text-sm text-muted-foreground mb-3">{learningGoal}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-medium">{Math.round(completionPercentage)}%</span>
              </div>
              <LemonProgressBar value={completionPercentage} showLabel={false} />
            </div>
          </div>
        </div>
      </LemonCard>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <LemonCard key={stat.label}>
              <div className="text-center space-y-2">
                <div className="w-10 h-10 bg-accent/10 rounded-[6px] flex items-center justify-center mx-auto">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-medium">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </LemonCard>
          );
        })}
      </div>
      
      {/* Achievements */}
      <LemonCard>
        <h3 className="mb-4">Achievements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-[6px]">
            <div className="w-10 h-10 bg-accent/10 rounded-[6px] flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-medium text-sm">First Steps</p>
              <p className="text-xs text-muted-foreground">Started learning</p>
            </div>
          </div>
          
          {completedTopics > 0 && (
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-[6px]">
              <div className="w-10 h-10 bg-[#388600]/10 rounded-[6px] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#388600]" />
              </div>
              <div>
                <p className="font-medium text-sm">Quick Learner</p>
                <p className="text-xs text-muted-foreground">Completed first topic</p>
              </div>
            </div>
          )}
          
          {completionPercentage >= 50 && (
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-[6px]">
              <div className="w-10 h-10 bg-[#f7a501]/10 rounded-[6px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#f7a501]" />
              </div>
              <div>
                <p className="font-medium text-sm">Halfway There</p>
                <p className="text-xs text-muted-foreground">50% progress</p>
              </div>
            </div>
          )}
        </div>
      </LemonCard>
      
      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <LemonCard>
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="w-8 h-8 bg-[#388600]/10 rounded-[6px] flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-[#388600]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Completed: {item.topic?.title}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </LemonCard>
      )}
    </div>
  );
}
