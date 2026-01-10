import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-10">
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-transparent mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Academic Journey</h2>
          </div>
          
          <div className="bg-slate-900/40 p-8 md:p-12 rounded-[2rem] border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 relative z-10 font-light">
              I am a final year <strong className="text-indigo-400 font-bold">PhD Candidate</strong> in Deep Reinforcement Learning at <span className="text-white font-medium">Inria Scool</span> and <span className="text-white font-medium">Ubisoft</span>. 
              My research focuses on <strong className="text-violet-400 font-bold">Continual Reinforcement Learning</strong>, specifically tackling challenges such as generalization, catastrophic forgetting, and scalability in complex environments like video games.
            </p>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed relative z-10 font-light">
              My goal is to bridge the gap between academic research and industrial application, building AI agents that can adapt and learn continuously in real-time. 
              With a strong mathematical background from <span className="text-white font-medium">École Polytechnique</span> and practical engineering experience, I enjoy solving complex algorithmic problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;