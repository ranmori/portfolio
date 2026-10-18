import React from 'react';
import { SKILLS, EXPERIENCE, CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';
import { Briefcase, Code, Award, ExternalLink } from 'lucide-react';
import GitHeatmap from './GitHeatmap';

const Skills: React.FC = () => {
  // Workaround for framer-motion type inference issues
  const MotionDiv = motion.div as any;

  return (
    <div className="w-full pb-10">
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
              <MotionDiv 
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
              </MotionDiv>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase opacity-50 tracking-wider mb-3 flex items-center gap-2">
              <Award size={14} className="text-primary" /> Certifications
            </h4>
            <div className="space-y-2">
              {CERTIFICATES.map((cert) => (
                <a
                  key={cert.url}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3 p-4 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <div>
                    <div className="font-bold text-sm group-hover:text-primary transition-colors">{cert.title}</div>
                    <div className="text-xs opacity-60 mt-1">
                      {cert.issuer}
                      {cert.date && <> · {cert.date}</>}
                    </div>
                  </div>
                  <ExternalLink size={14} className="mt-1 shrink-0 opacity-40 group-hover:opacity-80" />
                </a>
              ))}
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
              <MotionDiv 
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* Heatmap Section */}
      <GitHeatmap />
    </div>
  );
};

export default Skills;