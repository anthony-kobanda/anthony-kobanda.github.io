import React from 'react';
import { motion } from 'framer-motion';
import { PUBLICATIONS } from '../constants';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center mb-16 gap-4">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-500/10 rounded-xl mr-4">
              <BookOpen className="text-indigo-400" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Selected Publications</h2>
          </div>
          <div className="md:ml-auto">
             <a 
               href="https://scholar.google.com/citations?user=dEBQPAkAAAAJ" 
               target="_blank" 
               className="group flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-bold transition-all px-6 py-2 bg-indigo-500/5 rounded-full border border-indigo-500/20"
             >
               Full Google Scholar Profile <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </div>

        <div className="space-y-6">
          {PUBLICATIONS.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <span className="text-slate-500 font-mono text-sm shrink-0 ml-6 bg-slate-800 px-3 py-1 rounded-lg border border-white/5">{pub.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed italic opacity-80">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-indigo-400 text-xs font-black uppercase tracking-[0.15em] px-3 py-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      {pub.venue}
                    </span>
                    {pub.citations && (
                      <span className="flex items-center gap-1 text-slate-500 text-xs font-bold uppercase tracking-widest">
                         <Quote size={12} className="rotate-180 text-indigo-500/50" /> {pub.citations} Citations
                      </span>
                    )}
                  </div>
                </div>
                <div className="shrink-0 flex items-center justify-center">
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    className="p-5 bg-slate-800 rounded-2xl text-slate-300 hover:text-indigo-400 hover:scale-110 transition-all shadow-lg border border-white/5"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;