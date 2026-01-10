import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-32 pb-16 overflow-hidden relative">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Let's build the <span className="bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text">future</span>.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-12 font-light">
              Always eager to discuss Reinforcement Learning research, AI industrialization, or new scientific ventures.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:anthony.kobanda@polytechnique.org" className="text-slate-200 hover:text-indigo-400 transition-colors font-bold text-lg break-all">
                    anthony.kobanda@polytechnique.org
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Direct</p>
                  <span className="text-slate-200 font-bold text-lg">+33 6 22 21 52 47</span>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 group-hover:bg-white group-hover:text-slate-950 transition-all shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Location</p>
                  <span className="text-slate-200 font-bold text-lg">Lille / Bordeaux, France</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-10 md:p-14 rounded-[3rem] border border-slate-800 shadow-2xl relative group">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]"></div>
             <h3 className="text-2xl font-bold text-white mb-10 tracking-tight">Digital Footprint</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-5 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all group/link"
                  >
                    <div className="flex items-center gap-4">
                      <social.icon size={20} className="text-slate-500 group-hover/link:text-indigo-400 transition-colors" />
                      <span className="text-sm font-bold text-slate-300 group-hover/link:text-white">{social.name}</span>
                    </div>
                    <ExternalLink size={16} className="text-slate-700 group-hover/link:text-indigo-500 transition-colors" />
                  </a>
                ))}
             </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-900 pt-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-black">AK</div>
             <span className="text-xl font-black text-white">Kobanda<span className="text-indigo-500">.</span></span>
          </div>
          <div className="text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase">
            Built for Academic Excellence • © {new Date().getFullYear()} Anthony Kobanda
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;