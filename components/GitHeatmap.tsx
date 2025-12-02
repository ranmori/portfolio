import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const GitHeatmap: React.FC = () => {
  // Generate consistent pseudo-random data for the grid
  const weeks = Array.from({ length: 52 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);
  
  // Workaround for framer-motion type inference issues
  const MotionDiv = motion.div as any;

  // Deterministic random level generator based on grid position
  const getLevel = (w: number, d: number) => {
     const isWeekend = d === 0 || d === 6;
     // Use sine/cosine to create "waves" of activity rather than pure noise
     const baseRandom = Math.sin(w * 0.2) * Math.cos(d * 0.5 + w * 0.1) * 10000; 
     const rand = baseRandom - Math.floor(baseRandom);
     
     // Reduce activity on weekends
     if (isWeekend && rand > 0.4) return 0;
     
     if (rand > 0.92) return 4;
     if (rand > 0.75) return 3;
     if (rand > 0.55) return 2;
     if (rand > 0.25) return 1;
     return 0;
  };

  const getColorClass = (level: number) => {
    switch (level) {
      case 1: return 'bg-primary/20';
      case 2: return 'bg-primary/40';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary shadow-[0_0_8px_rgba(var(--p),0.6)]';
      default: return 'bg-base-content/5'; // Very subtle for empty cells
    }
  };

  return (
    <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full mt-8 bg-base-100/40 rounded-xl p-6 border border-white/10 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Activity size={20} />
            </div>
            <div>
                <h3 className="font-bold text-sm">Contribution Graph</h3>
                <p className="text-xs opacity-50 font-mono">1,243 contributions in the last year</p>
            </div>
          </div>
          <div className="hidden sm:block text-[10px] font-mono opacity-40 border border-white/10 px-2 py-1 rounded">
            git commit -m "update"
          </div>
      </div>
      
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-[3px] min-w-max">
          {weeks.map((w) => (
            <div key={w} className="flex flex-col gap-[3px]">
              {days.map((d) => {
                const level = getLevel(w, d);
                return (
                    <div
                      key={`${w}-${d}`}
                      className={`w-3 h-3 rounded-[2px] ${getColorClass(level)} hover:ring-1 hover:ring-base-content/30 transition-all duration-300`}
                      title={`${level > 0 ? Math.floor(Math.random() * 10) + 1 + ' commits' : 'No contributions'}`}
                    />
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-2 mt-2 text-[10px] opacity-60 font-mono">
        <span>Less</span>
        <div className="w-2.5 h-2.5 bg-base-content/5 rounded-[2px]"></div>
        <div className="w-2.5 h-2.5 bg-primary/20 rounded-[2px]"></div>
        <div className="w-2.5 h-2.5 bg-primary/40 rounded-[2px]"></div>
        <div className="w-2.5 h-2.5 bg-primary/70 rounded-[2px]"></div>
        <div className="w-2.5 h-2.5 bg-primary rounded-[2px] shadow-[0_0_5px_rgba(var(--p),0.5)]"></div>
        <span>More</span>
      </div>
    </MotionDiv>
  );
};

export default GitHeatmap;