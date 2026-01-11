import React from 'react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Experience" subtitle="My academic and professional journey." />
        
        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE_DATA.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] md:-left-[5px] top-2 w-2.5 h-2.5 bg-slate-600 rounded-full group-hover:bg-accent-400 group-hover:scale-125 transition-all duration-300 ring-4 ring-slate-950"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-400 transition-colors">
                  {job.role}
                </h3>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wide mt-1 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <div className="mb-4">
                 <span className="text-sm font-medium text-slate-300">{job.company}</span>
                 <span className="text-slate-600 mx-2">•</span>
                 <span className="text-sm text-slate-500">{job.location}</span>
              </div>

              <ul className="space-y-2">
                {job.description.map((desc, idx) => (
                  <li key={idx} className="text-slate-400 leading-relaxed text-base flex items-start">
                    <span className="mr-3 text-accent-500/50 mt-1.5 text-[10px]">♦</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;