import React from 'react';
import SectionHeader from './SectionHeader';
import { EDUCATION_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Education" />
        
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-all hover:bg-slate-800">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                    <p className="text-indigo-400 font-medium">{edu.school}</p>
                    <p className="text-slate-500 text-sm mb-3">{edu.location}</p>
                    {edu.details.length > 0 && (
                      <ul className="text-slate-400 text-sm space-y-1">
                        {edu.details.map((detail, i) => (
                          <li key={i}>• {detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;