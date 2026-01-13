import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { EMAIL, LINKEDIN_LINK, GITHUB_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 flex justify-center mt-24 mb-16" id="contact">
      <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-[2.5rem] px-12 py-10 flex flex-col items-center gap-6 shadow-2xl max-w-2xl w-full mx-auto transform hover:scale-[1.01] transition-transform duration-300">
        
        {/* Contact Title */}
        <h3 className="text-teal-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base">
          Contact
        </h3>

        <span className="text-slate-200 text-lg md:text-xl font-medium text-center">
          Open to discussing new opportunities ! 😊
        </span>

        <div className="flex items-center gap-10 mt-4">
          <a 
            href={`mailto:${EMAIL}`}
            className="text-slate-400 hover:text-teal-400 transition-colors p-3 hover:bg-teal-400/10 rounded-full group"
            aria-label="Email"
          >
            <Mail size={28} className="group-hover:stroke-[2.5px] transition-all" />
          </a>
          <a 
            href={LINKEDIN_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-teal-400 transition-colors p-3 hover:bg-teal-400/10 rounded-full group"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="group-hover:stroke-[2.5px] transition-all" />
          </a>
          <a 
             href={GITHUB_LINK}
             target="_blank" 
             rel="noopener noreferrer"
             className="text-slate-400 hover:text-teal-400 transition-colors p-3 hover:bg-teal-400/10 rounded-full group"
             aria-label="GitHub"
          >
             <Github size={28} className="group-hover:stroke-[2.5px] transition-all" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;