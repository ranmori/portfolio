import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto pr-2">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
        <p className="opacity-60">A curated list of my recent digital creations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="card bg-base-100/50 hover:bg-base-100 transition-colors border border-white/10 shadow-lg hover:shadow-xl h-full flex flex-col rounded-2xl overflow-hidden group-hover:-translate-y-1 duration-300">
              
              {/* Image Window */}
              <figure className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </figure>
              
              <div className="card-body p-5 flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="card-title text-lg font-bold">{project.title}</h3>
                    <Folder size={18} className="opacity-50" />
                </div>
                
                <p className="text-xs opacity-70 my-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2 border-t border-base-content/5">
                  <a href={project.repoUrl} className="btn btn-xs btn-ghost gap-1 opacity-70 hover:opacity-100">
                    <Github size={12} /> Code
                  </a>
                  <a href={project.demoUrl} className="btn btn-xs btn-ghost gap-1 text-primary opacity-90 hover:opacity-100 ml-auto">
                    Live Demo <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;