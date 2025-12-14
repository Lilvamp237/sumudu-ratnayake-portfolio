import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, category, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-xs uppercase tracking-widest font-bold">
        <span className={color === 'purple' ? 'text-purple-400' : 'text-green-400'}>{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color === 'purple' ? 'bg-purple-600 shadow-[0_0_10px_#9333ea]' : 'bg-green-600 shadow-[0_0_10px_#16a34a]'}`}
        />
      </div>
      <div className="text-[10px] text-slate-600 mt-1 text-right">{category}</div>
    </div>
  );
};

export default SkillBar;
