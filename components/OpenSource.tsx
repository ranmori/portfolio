// src/components/OpenSource.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, GitMerge, ExternalLink } from 'lucide-react';
import { CONTRIBUTIONS } from '../constants';
import type { Contribution } from '../types';

const MotionDiv = motion.div as any;

/* group PRs by repo, keeping the order they appear in CONTRIBUTIONS */
const byRepo = CONTRIBUTIONS.reduce<Record<string, Contribution[]>>((acc, pr) => {
  (acc[pr.repo] ??= []).push(pr);
  return acc;
}, {});

const merged = CONTRIBUTIONS.filter((pr) => pr.status === 'merged').length;

const OpenSource: React.FC = () => (
  <div className="w-full pb-10">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-2">Open Source</h2>
      <p className="opacity-60">
        Fixes upstream in tools other teams depend on — {merged} merged, {CONTRIBUTIONS.length - merged} in review.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.entries(byRepo).map(([repo, prs], index) => (
        <MotionDiv
          key={repo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-base-100/50 rounded-xl p-5 border border-white/10"
        >
          <div className="flex items-center justify-between gap-2 mb-4">
            <a
              href={`https://github.com/${repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-bold hover:text-primary transition-colors break-all"
            >
              {repo}
            </a>
            <span className="text-[10px] font-mono opacity-50 shrink-0">{prs[0].lang}</span>
          </div>

          <ul className="space-y-2">
            {prs.map((pr) => (
              <li key={pr.prUrl}>
                <a
                  href={pr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 rounded-lg p-2 -mx-2 hover:bg-base-200/50 transition-colors"
                >
                  {pr.status === 'merged' ? (
                    <GitMerge size={14} className="mt-0.5 shrink-0 text-purple-400" aria-label="Merged" />
                  ) : (
                    <GitPullRequest size={14} className="mt-0.5 shrink-0 text-green-400" aria-label="Open" />
                  )}
                  <span className="text-xs opacity-80 leading-relaxed flex-1">{pr.title}</span>
                  <ExternalLink size={12} className="mt-0.5 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </MotionDiv>
      ))}
    </div>

    <p className="text-center text-[11px] opacity-40 mt-4">
      <GitMerge size={11} className="inline text-purple-400" /> merged ·{' '}
      <GitPullRequest size={11} className="inline text-green-400" /> open
    </p>
  </div>
);

export default OpenSource;
