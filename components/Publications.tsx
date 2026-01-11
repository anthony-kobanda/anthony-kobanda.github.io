import React from 'react';
import SectionHeader from './SectionHeader';
import { PUBLICATIONS_DATA, SOCIAL_LINKS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-slate-900/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Publications" subtitle="Selected papers and proceedings." />
        
        <div className="flex flex-col divide-y divide-slate-800/50 border-t border-b border-slate-800/50">
          {PUBLICATIONS_DATA.map((pub) => (
            <div key={pub.id} className="py-6 group transition-colors hover:bg-slate-900/30 px-4 -mx-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow space-y-2">
                  <h3 className="text-lg font-medium text-slate-200 group-hover:text-accent-400 transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light">
                    {pub.authors}
                  </p>
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 border border-slate-800 px-2 py-0.5 rounded">
                      {pub.venue}
                    </span>
                  </div>
                </div>
                
                <div className="flex-shrink-0 flex items-center gap-6 md:justify-end min-w-[100px]">
                   <span className="text-sm font-mono text-slate-500">{pub.year}</span>
                   {pub.link && (
                     <a href={pub.link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-white transition-colors">
                       <ArrowUpRight size={18} />
                     </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
           <a 
             href={SOCIAL_LINKS.scholar} 
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all text-sm"
           >
             View Google Scholar Profile <ArrowUpRight size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;