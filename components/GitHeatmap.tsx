// GitHeatmap.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const GitHeatmap: React.FC = () => {
  // LIVE SVG served by GitHub’s own CDN (via 3rd-party wrapper)
  const svgUrl =
    'https://github-readme-activity-graph.vercel.app/graph' +
    '?username=ranmori' + // ← swap to your GitHub username
    '&theme=react-dark' +
    '&bg_color=00000000'; // transparent background

  return (
    <motion.div
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
            <p className="text-xs opacity-50 font-mono">
              Live GitHub data (last 12 months)
            </p>
          </div>
        </div>
        <div className="hidden sm:block text-[10px] font-mono opacity-40 border border-white/10 px-2 py-1 rounded">
          git commit -m "update"
        </div>
      </div>

      {/*  THE ACTUAL HEAT-MAP  */}
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <img
          src={svgUrl}
          alt="GitHub commit activity"
          className="w-full h-auto rounded"
        />
      </div>

      <div className="flex items-center justify-end gap-2 mt-2 text-[10px] opacity-60 font-mono">
        <span>Less</span>
        <div className="w-2.5 h-2.5 bg-base-content/5 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-primary/20 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-primary/40 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-primary/70 rounded-[2px]" />
        <div className="w-2.5 h-2.5 bg-primary rounded-[2px] shadow-[0_0_5px_rgba(var(--p),0.5)]" />
        <span>More</span>
      </div>
    </motion.div>
  );
};

export default GitHeatmap;