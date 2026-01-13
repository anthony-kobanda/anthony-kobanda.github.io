import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {SKILLS.map((skillGroup) => (
        <div key={skillGroup.category} className="bg-slate-800/20 rounded-2xl p-6 border border-slate-800/50">
          <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span 
                key={skill}
                className="flex-grow text-center justify-center px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm rounded-md transition-colors border border-slate-700 hover:border-teal-500/50 cursor-default min-w-[80px]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;