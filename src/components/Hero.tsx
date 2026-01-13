import React from 'react';
import { Mail, FileText, ArrowDown } from 'lucide-react';
import { ABOUT_TEXT, RESUME_LINK } from '../constants';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-12">
      {/* Reduced max-width from 7xl to 5xl for a more contained look */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Text Content (Left) */}
          <div className="md:col-span-7 flex flex-col space-y-6 text-left">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Anthony <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
                  Kobanda
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed border-l-2 border-teal-500/30 pl-6 text-justify">
              {ABOUT_TEXT}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
               {/* Contact Button (White-ish) */}
               <button 
                  onClick={scrollToContact}
                  className="px-6 py-2.5 rounded-full bg-slate-200 text-slate-900 font-semibold hover:bg-white transition-colors flex items-center gap-2 shadow-lg shadow-white/5 text-sm md:text-base"
               >
                  <Mail size={18} />
                  Contact Me
               </button>

               {/* Resume Button (Dark/Teal style) */}
               <a 
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group relative px-6 py-2.5 rounded-full bg-slate-800 text-teal-400 border border-slate-700 hover:border-teal-500/50 transition-all overflow-hidden text-sm md:text-base"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium group-hover:text-teal-300">
                  <FileText size={18} />
                  Resume
                </span>
                <div className="absolute inset-0 bg-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
          </div>

          {/* Profile Image (Right) */}
          <div className="md:col-span-5 flex justify-center md:justify-end w-full mb-4 md:mb-0">
              {/* Reduced size: w-48 (mobile) / w-64 (desktop) */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-xl group">
                  <img 
                    src="/profile.jpeg" 
                    alt="Anthony Kobanda" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
              </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-600 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Hero;