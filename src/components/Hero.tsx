import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { ArrowDown, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 max-w-5xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Picture Frame */}
          <div className="relative mb-12">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur opacity-30 animate-pulse"></div>
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-[6px] border-slate-900 bg-slate-800 overflow-hidden shadow-2xl">
              {/* Replace the src with your actual photo URL */}
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anthony" 
                alt="Anthony Kobanda"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 right-3 w-7 h-7 bg-indigo-500 rounded-full border-4 border-slate-950 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </div>
          </div>

          <h2 className="text-indigo-400 font-bold tracking-[0.2em] mb-4 uppercase text-xs md:text-sm">
            Deep Reinforcement Learning Researcher
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
            Anthony <span className="bg-gradient-to-br from-indigo-400 to-violet-400 text-transparent bg-clip-text">Kobanda</span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Advancing the state-of-the-art in <span className="text-slate-100 font-medium">Continual Learning</span> and Adaptive Agents at <span className="text-indigo-400/90 font-medium">Inria Scool</span> & <span className="text-violet-400/90 font-medium">Ubisoft</span>.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-all transform hover:scale-125"
                title={social.name}
              >
                <social.icon size={26} />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a 
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-indigo-500/20 overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a 
              href="#" // Put your PDF link here
              target="_blank"
              className="flex items-center gap-2 px-10 py-4 bg-slate-800/50 backdrop-blur-md border border-slate-700 text-slate-200 font-bold rounded-2xl hover:bg-slate-700 hover:border-indigo-500/50 transition-all"
            >
              <FileText size={20} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;