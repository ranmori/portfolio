import React from 'react';
import { SKILLS, EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto pr-2 pb-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Tech Stack & Experience</h2>
        <p className="opacity-60">My arsenal of tools and professional timeline.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills Column */}
        <div>
          <div className="flex items-center gap-2 mb-6 opacity-80">
              <Code size={20} className="text-primary" />
              <h3 className="text-xl font-bold">Technologies</h3>
          </div>
          
          <div className="space-y-4">
            {SKILLS.map((skillGroup, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-base-100/50 rounded-xl p-5 border border-white/10"
              >
                <h4 className="text-xs font-bold uppercase opacity-50 tracking-wider mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="px-3 py-1.5 rounded-lg bg-base-200/50 hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium border border-base-content/5 cursor-default">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                  <Cpu className="mt-1 text-primary w-5 h-5" />
                  <div>
                      <h4 className="font-bold text-sm">System Optimization</h4>
                      <p className="text-xs opacity-70 mt-1 leading-relaxed">
                          Always aiming for 100% Lighthouse scores. Proficient in code-splitting, lazy loading, and asset optimization for maximum performance.
                      </p>
                  </div>
              </div>
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-2 mb-6 opacity-80">
              <Briefcase size={20} className="text-secondary" />
              <h3 className="text-xl font-bold">Career History</h3>
          </div>

          <div className="relative border-l-2 border-base-content/10 ml-3 space-y-8">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="relative pl-8"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-base-100 border-2 border-primary shadow-sm"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h4 className="font-bold text-lg">{exp.role}</h4>
                    <span className="text-xs font-mono opacity-50 bg-base-200 px-2 py-0.5 rounded">{exp.period}</span>
                </div>
                <div className="text-sm font-semibold text-primary opacity-80 mb-2">{exp.company}</div>
                <p className="text-sm opacity-70 leading-relaxed bg-base-100/40 p-3 rounded-lg border border-white/5">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;