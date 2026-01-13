import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { PUBLICATIONS, SCHOLAR_LINK } from '../constants';

const Publications: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        {PUBLICATIONS.map((pub) => (
          <div 
            key={pub.id}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 p-4 rounded-lg hover:bg-slate-800/50 transition-colors border-b border-slate-800/50 last:border-0"
          >
             <div className="sm:w-24 flex-shrink-0 text-sm font-mono text-slate-500">
                {pub.year}
             </div>
             <div className="flex-1">
                {pub.link ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 group-hover:text-teal-300 transition-colors">
                     <h3 className="text-lg font-medium text-slate-200 leading-snug underline decoration-slate-600 underline-offset-4 hover:decoration-teal-400">
                        {pub.title}
                     </h3>
                     <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                  </a>
                ) : (
                   <h3 className="text-lg font-medium text-slate-200 leading-snug">
                      {pub.title}
                   </h3>
                )}
                
                <p className="text-slate-400 text-sm mt-1">{pub.authors}</p>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-indigo-400/80">
                   {pub.venue}
                </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="pt-8 text-center">
        <a 
          href={SCHOLAR_LINK}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all text-sm font-medium border border-slate-700"
        >
          <BookOpen size={18} />
          Google Scholar
        </a>
      </div>
    </div>
  );
};

export default Publications;