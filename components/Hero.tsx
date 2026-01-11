import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent-500/30 bg-accent-500/10 text-accent-400 text-xs font-mono uppercase tracking-wider">
              <span className="mr-2">●</span> Available for Research
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-100 leading-tight">
              Anthony <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-500 to-accent-600">
                Kobanda
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            PhD Candidate in <strong className="text-slate-100 font-semibold">Deep Reinforcement Learning</strong> at Inria Scool & Ubisoft. 
            <br className="hidden md:block" />
            Specializing in generalization, continual learning, and scalability in complex environments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-100 text-slate-950 font-semibold hover:bg-white transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={SOCIAL_LINKS.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        {/* Profile Picture Placeholder */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Spinning Gradient Ring */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full opacity-75 blur animate-[spin_4s_linear_infinite]"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950 flex items-center justify-center group z-10">
               {/* 
                  PLACEHOLDER LOGIC:
                  Ideally, replace the src below with a real photo file path like "/anthony-profile.jpg".
                  For now, we use a generic sleek abstract avatar or a placeholder service.
               */}
               <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 flex-col gap-2">
                 <span className="text-sm font-mono uppercase tracking-widest">Photo</span>
               </div>
               
               {/* Un-comment this when you have the image file ready */}
               {/* 
               <img 
                 src="/profile.jpg" 
                 alt="Anthony Kobanda" 
                 className="w-full h-full object-cover"
               /> 
               */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;