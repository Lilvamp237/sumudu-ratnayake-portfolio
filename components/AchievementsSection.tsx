
import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AchievementsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {ACHIEVEMENTS.map((ach) => (
        <motion.div 
          key={ach.id}
          layout
          className={`
            border rounded-lg overflow-hidden transition-colors cursor-pointer
            ${expandedId === ach.id 
              ? 'bg-slate-900 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
              : 'bg-slate-800/40 border-slate-700 hover:bg-slate-800'}
          `}
          onClick={() => toggleExpand(ach.id)}
        >
          <div className="flex items-center gap-4 p-4">
            <div className={`
              p-3 rounded-full border transition-colors
              ${expandedId === ach.id 
                ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/40' 
                : 'bg-slate-700/50 text-slate-400 border-slate-600'}
            `}>
              <Trophy size={24} />
            </div>
            
            <div className="flex-1">
              <h4 className={`font-bold transition-colors ${expandedId === ach.id ? 'text-yellow-400' : 'text-slate-200'}`}>
                {ach.title}
              </h4>
              <p className="text-xs font-mono text-slate-500">{ach.date}</p>
            </div>

            <div className="text-slate-500">
              {expandedId === ach.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          <AnimatePresence>
            {expandedId === ach.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 text-slate-400 text-sm border-t border-dashed border-slate-700 mx-4 mt-2 mb-4">
                  <div className="flex items-start gap-2 pt-4">
                    <Star className="w-4 h-4 text-yellow-500/50 mt-1 flex-shrink-0" />
                    <p className="leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementsSection;
