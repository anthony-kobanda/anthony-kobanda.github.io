import React from 'react';
import { WORK_EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {WORK_EXPERIENCE.map((job) => {
        // Determine if this is an internship to adjust font weight/style
        const isInternship = job.title.toLowerCase().includes('intern');
        
        return (
          <div 
            key={job.id} 
            className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50 hover:border-teal-500/30 transition-all flex flex-col"
          >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-teal-900/20 p-2 rounded-lg text-teal-400">
                   <Briefcase size={24} />
                </div>
                <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                    {job.period}
                </span>
              </div>

              {/* Title First, then Company */}
              <h3 className={`text-lg text-slate-100 mb-1 ${isInternship ? 'font-medium opacity-90' : 'font-bold'}`}>
                {job.title}
              </h3>
              <p className="text-teal-200/80 mb-2 font-medium">{job.company}</p>
              <p className="text-sm text-slate-500 mb-4">{job.location}</p>

              <p className="text-slate-300 text-sm mb-4 leading-relaxed">{job.description}</p>
              
              {job.details && (
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                    <ul className="space-y-1">
                        {job.details.map((detail, idx) => (
                            <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                                • {detail}
                            </li>
                        ))}
                    </ul>
                </div>
              )}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;