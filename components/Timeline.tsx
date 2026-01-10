import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Experience Section */}
        <div className="mb-24">
            <div className="flex items-center mb-12 justify-center md:justify-start">
                <div className="p-3 bg-indigo-500/10 rounded-xl mr-4">
                  <Briefcase className="text-indigo-400" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Work Experience</h2>
            </div>
            
            <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
            {EXPERIENCE.map((exp, index) => (
                <motion.div 
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-10 md:pl-16"
                >
                    <span className="absolute top-1 left-[-4.5px] bg-indigo-500 h-2 w-2 rounded-full ring-4 ring-slate-950"></span>
                    
                    <div className="bg-slate-900/20 p-8 rounded-3xl border border-slate-800/50 hover:border-indigo-500/30 transition-all group shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                            <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest bg-indigo-500/5 px-4 py-1.5 rounded-full border border-indigo-500/10 mt-2 md:mt-0 w-fit">{exp.period}</span>
                        </div>
                        <h4 className="text-lg text-slate-400 font-medium mb-6">{exp.company} • {exp.location}</h4>
                        <ul className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                                  <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Education Section */}
        <div id="education" className="pt-10">
            <div className="flex items-center mb-12 justify-center md:justify-start">
                <div className="p-3 bg-violet-500/10 rounded-xl mr-4">
                  <GraduationCap className="text-violet-400" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-900/30 p-8 md:p-10 rounded-[2rem] border border-slate-800 hover:border-violet-500/30 transition-all flex flex-col h-full group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors leading-tight">{edu.institution}</h3>
                                <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider">{edu.location}</p>
                            </div>
                            <span className="bg-slate-800/80 text-violet-400 px-4 py-1.5 rounded-xl text-xs font-mono font-bold border border-white/5">
                                {edu.year}
                            </span>
                        </div>
                        <h4 className="text-slate-200 font-semibold mb-4 border-l-2 border-violet-500 pl-4">{edu.degree}</h4>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{edu.details}</p>
                        {edu.courses && (
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-black mb-3">Core Specialization</p>
                                <p className="text-slate-400 text-xs italic leading-relaxed">{edu.courses}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;