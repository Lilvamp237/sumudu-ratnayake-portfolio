
import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Eye, PlayCircle, ChevronDown, ChevronUp, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    // Prevent toggle if clicking on links/buttons
    if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      onClick={toggleExpand}
      className={`
        group relative bg-slate-900 border transition-all duration-300 rounded-sm overflow-hidden flex flex-col cursor-pointer
        ${isExpanded ? 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.1)] col-span-1 md:col-span-2 lg:col-span-3' : 'border-slate-700 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]'}
      `}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

      <div className={`flex flex-col ${isExpanded ? 'md:flex-row' : ''}`}>
        
        {/* Image / Preview Section */}
        <div className={`relative overflow-hidden bg-slate-950 ${isExpanded ? 'md:w-1/3 h-64 md:h-auto' : 'h-48'}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <div className="w-full h-full overflow-hidden">
               <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-all duration-700 opacity-60 group-hover:opacity-100 ${isExpanded ? 'grayscale-0' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
              />
          </div>

          <div className="absolute bottom-2 left-3 z-20 flex flex-wrap gap-1">
              {project.categories.map(cat => (
                <span key={cat} className="text-[10px] font-bold px-2 py-0.5 bg-slate-950/80 text-green-400 border border-green-500/50 rounded backdrop-blur-sm shadow-sm">
                    {cat.toUpperCase()}
                </span>
              ))}
          </div>

          {!isExpanded && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] z-10">
               <PlayCircle className="text-green-400 w-10 h-10 mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
               <span className="text-green-400 font-orbitron text-xs tracking-widest animate-pulse">CLICK TO EXPAND</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow relative bg-slate-900/50">
          {/* Scanline background for card body */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,24,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,24,0)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none"></div>

          <div className="flex justify-between items-start">
             <h3 className={`font-orbitron font-bold text-white group-hover:text-green-400 transition-colors ${isExpanded ? 'text-2xl mb-2' : 'text-lg truncate'}`}>
                {project.title}
             </h3>
             {isExpanded && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                  className="text-slate-500 hover:text-white p-1"
                >
                  <ChevronUp />
                </button>
             )}
          </div>
          
          <AnimatePresence mode="wait">
            {isExpanded ? (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 className="space-y-4"
               >
                 <p className="text-slate-300 text-sm leading-relaxed border-l-2 border-green-500/30 pl-4 py-1">
                   {project.longDescription || project.description}
                 </p>

                 {/* Skills Earned Section */}
                 {project.skillsEarned && (
                   <div className="bg-slate-950/50 p-3 rounded border border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-400 mb-2">
                         <Cpu size={14} />
                         SKILLS ACQUIRED
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.skillsEarned.map(skill => (
                          <span key={skill} className="text-xs text-slate-400 bg-slate-900 px-2 py-1 rounded-full border border-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                   </div>
                 )}
               </motion.div>
            ) : (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Tech Stack Tags */}
          <div className={`flex flex-wrap gap-1.5 ${isExpanded ? 'mt-4 mb-6' : 'mt-4 mb-4'}`}>
            {project.techStack.map((tech) => (
              <span key={tech} className="text-[9px] font-mono text-purple-300 bg-purple-900/20 border border-purple-500/20 px-1.5 py-0.5 rounded group-hover:border-purple-500/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3 border-t border-slate-800/50 mt-auto">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold py-2 rounded transition-all border border-slate-700 hover:border-slate-500 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} /> GITHUB
            </a>
            
            {project.demo ? (
               <a 
                 href={project.demo} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex-1 flex items-center justify-center gap-2 bg-green-900/20 hover:bg-green-600 text-green-400 hover:text-white text-xs font-bold py-2 rounded transition-all border border-green-500/30 hover:border-green-500 z-30"
                 onClick={(e) => e.stopPropagation()}
               >
                 <Eye size={14} /> DEMO
               </a>
            ) : (
              <button 
                  disabled 
                  className="flex-1 flex items-center justify-center gap-2 bg-slate-900/50 text-slate-600 text-xs font-bold py-2 rounded border border-slate-800 cursor-not-allowed z-30"
                  onClick={(e) => e.stopPropagation()}
              >
                 <Eye size={14} /> DEMO N/A
              </button>
            )}
            
            {!isExpanded && (
               <div className="ml-auto text-slate-600 self-center">
                 <ChevronDown size={16} />
               </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
