import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, INTERESTS } from '../constants';
import { Terminal, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Technical Skills */}
        <div className="mb-24">
            <div className="flex items-center mb-16">
                <div className="p-3 bg-indigo-500/10 rounded-xl mr-4">
                  <Terminal className="text-indigo-400" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Technical Proficiency</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-slate-950 p-8 rounded-[2rem] border border-slate-800 hover:bg-slate-900 transition-all hover:shadow-indigo-500/5 hover:shadow-2xl group"
                    >
                        <h3 className="text-[10px] font-black text-indigo-500 mb-6 uppercase tracking-[0.3em] border-b border-white/5 pb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                                <span 
                                    key={skill} 
                                    className="px-3.5 py-1.5 bg-white/5 text-slate-300 text-xs font-bold rounded-xl border border-white/5 hover:border-indigo-500/50 hover:text-indigo-400 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Interests */}
        <div>
            <div className="flex items-center mb-16">
                <div className="p-3 bg-violet-500/10 rounded-xl mr-4">
                  <Sparkles className="text-violet-400" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Beyond Research</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {INTERESTS.map((interest, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-slate-950 p-10 rounded-[2.5rem] border border-slate-800 hover:border-violet-500/30 transition-all overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-violet-500 opacity-30 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{interest.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light min-h-[60px]">{interest.description}</p>
                        <div className="flex flex-wrap gap-2.5">
                            {interest.tags.map(tag => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-violet-400/90 px-3 py-1.5 bg-violet-500/10 rounded-lg border border-violet-500/20">
                                  {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;