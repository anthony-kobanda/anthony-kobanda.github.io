import React from 'react';
import SectionHeader from './SectionHeader';
import { SKILL_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Technical Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_DATA.map((category) => (
            <div key={category.title} className="bg-slate-950/40 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-lg font-semibold text-accent-400 mb-6 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-light rounded border border-slate-800 hover:border-accent-500/30 hover:text-white hover:bg-slate-800 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;