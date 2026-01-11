import React from 'react';
import SectionHeader from './SectionHeader';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-slate-950">
      {/* Decorative gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-accent-600/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeader title="Contact Me" subtitle="Reach out for collaborations, research opportunities, or just a chat." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-accent-500/50 hover:bg-slate-900 transition-all group"
          >
            <div className="w-12 h-12 bg-accent-500/10 rounded-full flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-slate-200 font-medium mb-1">Email</h3>
            <p className="text-slate-400 text-sm">{SOCIAL_LINKS.email}</p>
          </a>

          <div className="flex flex-col items-center justify-center p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-accent-500/50 hover:bg-slate-900 transition-all group">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <h3 className="text-slate-200 font-medium mb-1">Phone</h3>
            <p className="text-slate-400 text-sm">{SOCIAL_LINKS.phone}</p>
          </div>
        </div>

        <div className="mt-16 flex justify-center items-center space-x-10">
           <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1">
             <Linkedin size={28} />
             <span className="sr-only">LinkedIn</span>
           </a>
           <a href={SOCIAL_LINKS.scholar} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1">
             <BookOpenIcon />
             <span className="sr-only">Google Scholar</span>
           </a>
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1">
             <Github size={28} />
             <span className="sr-only">GitHub</span>
           </a>
        </div>
        
        <footer className="mt-20 text-slate-600 text-sm border-t border-slate-900 pt-8">
          <p>© {new Date().getFullYear()} Anthony Kobanda. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};

// Scholar Icon
const BookOpenIcon = () => (
   <svg 
     xmlns="http://www.w3.org/2000/svg" 
     width="28" 
     height="28" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
)

export default Contact;