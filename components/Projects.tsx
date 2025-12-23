// src/components/Projects.tsx
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

/* ----------  project 1 pics  ---------- */
import mag1 from '../assets/images/ISSUEeDITOR.webp';
import mag2 from '../assets/images/landingpagemag.webp';
import mag3 from '../assets/images/viewer.webp';
import mag4 from '../assets/images/mobileview.webp';
const magImgs = [mag1, mag2, mag3, mag4];
let magIdx = 0;
const cycleMag = () => {
  magIdx = (magIdx + 1) % magImgs.length;
  return magImgs[magIdx];
};

/* ----------  project 2 pics  ---------- */
import doc1 from '../assets/images/adminusers.webp';
import doc2 from '../assets/images/dashboarr.webp';
import doc3 from '../assets/images/dr oage.webp';
import doc4 from '../assets/images/apoointments.webp';
const docImgs = [doc1, doc2, doc3, doc4];
let docIdx = 0;
const cycleDoc = () => {
  docIdx = (docIdx + 1) % docImgs.length;
  return docImgs[docIdx];
};

/* ----------  project 3 pics  ---------- */
import imgs1 from '../assets/images/firstPG.webp';
import imgs2 from '../assets/images/hobbiespg.webp';
import imgs3 from '../assets/images/contactpg.webp';
const portImgs = [imgs1, imgs2, imgs3];
let portIdx = 0;
const cyclePort = () => {
  portIdx = (portIdx + 1) % portImgs.length;
  return portImgs[portIdx];
};

const Projects: React.FC = () => {
  const MotionDiv = motion.div as any;

  return (
    <div className="h-full overflow-y-auto pr-2 pb-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
        <p className="opacity-60">A curated list of my recent digital creations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => {
          let imgSrc = project.imageUrl; // fallback
          if (project.id === 1) imgSrc = cycleMag();
          if (project.id === 2) imgSrc = cycleDoc();
          if (project.id === 3) imgSrc = cyclePort();

          return (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="card bg-base-100/50 hover:bg-base-100 transition-all duration-300 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col rounded-2xl overflow-hidden group-hover:-translate-y-2">
                {/* Image Window */}
                <figure className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={imgSrc}
                    alt={project.title}
                     width={600} height={400}
                     sizes="(max-width: 640px) 400px, 800px"
                     loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </figure>

                <div className="card-body p-5 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="card-title text-lg font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-base-200/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      <Folder size={18} />
                    </div>
                  </div>

                  <p className="text-xs opacity-70 my-3 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary group-hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-base-content/5 mt-auto">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-ghost gap-1 opacity-70 hover:opacity-100 hover:bg-base-200 transition-all"
                    >
                      <Github size={12} /> Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-xs btn-ghost gap-1 text-primary opacity-90 hover:opacity-100 hover:bg-primary/10 ml-auto transition-all"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;