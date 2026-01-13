import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {EDUCATION.map((edu) => (
        <div 
          key={edu.id}
          className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all flex flex-col"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="bg-teal-900/20 p-2 rounded-lg text-teal-400">
               <GraduationCap size={24} />
            </div>
            <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                {edu.period}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-100 mb-1">{edu.degree}</h3>
          <p className="text-teal-200/80 mb-2">{edu.institution}</p>
          <p className="text-sm text-slate-500 mb-4">{edu.location}</p>
          
          <p className="text-slate-300 text-sm mb-4">{edu.description}</p>
          
          {edu.details && (
             <div className="mt-auto pt-4 border-t border-slate-700/50">
                <ul className="space-y-1">
                    {edu.details.map((detail, idx) => (
                        <li key={idx} className="text-xs text-slate-400">
                           • {detail}
                        </li>
                    ))}
                </ul>
             </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;