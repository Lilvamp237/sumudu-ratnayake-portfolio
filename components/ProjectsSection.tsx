import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { Filter, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['ALL', 'AI/ML', 'Game Dev', 'XR', 'Web'];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = PROJECTS.filter(p => 
    filter === 'ALL' || p.category === filter
  );

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900/50 p-4 border border-slate-800 rounded-lg">
        <div className="flex items-center gap-2 text-green-400">
           <Layers className="animate-pulse" />
           <span className="font-orbitron font-bold">MISSION SELECT</span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
           {CATEGORIES.map(cat => (
             <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`
                 relative px-4 py-1.5 text-xs font-bold font-orbitron tracking-wider clip-path-polygon transition-all duration-300
                 ${filter === cat 
                   ? 'bg-green-600 text-black shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
                   : 'bg-transparent text-slate-500 border border-slate-700 hover:text-green-400 hover:border-green-500/50'}
               `}
               style={{
                 clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)'
               }}
             >
               {cat.toUpperCase()}
             </button>
           ))}
        </div>
      </div>

      {/* Stats Line */}
      <div className="flex justify-end text-[10px] font-mono text-slate-500 px-2">
         <span>DISPLAYING {filteredProjects.length} MODULES // FILTER: {filter}</span>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
         <div className="text-center py-20 text-slate-600 font-mono border border-dashed border-slate-800 rounded">
            <Filter className="mx-auto mb-2 opacity-50" size={32} />
            NO MODULES FOUND IN SECTOR "{filter}"
         </div>
      )}
    </div>
  );
};

export default ProjectsSection;