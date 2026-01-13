import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, FileText } from 'lucide-react';
import { RESUME_LINK } from '../constants';

const navItems = [
  { label: 'About', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const footer = document.querySelector('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Name */}
            <div className="flex-shrink-0 relative z-50">
              <a 
                  href="#hero" 
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400"
              >
                Anthony Kobanda
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center gap-3 ml-2 border-l border-slate-700/50 pl-6">
                {/* Contact Button */}
                <button 
                    onClick={scrollToContact}
                    className="px-4 py-2 rounded-full bg-slate-200 text-slate-900 font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-sm text-sm"
                >
                    <Mail size={16} />
                    Contact Me
                </button>

                {/* Resume Button */}
                <a 
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-4 py-2 rounded-full bg-slate-800 text-teal-400 border border-slate-700 hover:border-teal-500/50 transition-all overflow-hidden text-sm font-medium"
                >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-teal-300">
                    <FileText size={16} />
                    Resume
                    </span>
                    <div className="absolute inset-0 bg-teal-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>
            </div>

            {/* Mobile menu button (Hamburger/Close toggle) */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen Coverage */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Explicit Close Button inside overlay for clarity */}
        <div className="absolute top-5 right-4 sm:right-6">
           <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Close menu"
           >
              <X size={28} />
           </button>
        </div>

        <div className="flex flex-col h-full p-6 pt-24 pb-12">
          {/* Navigation Items Area - Grows to fill space, pushing buttons down */}
          <div className="flex-grow flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-light text-slate-300 hover:text-teal-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Buttons Area - Pinned to bottom via flex layout structure */}
          <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
             <button 
                  onClick={scrollToContact}
                  className="w-full px-6 py-3 rounded-full bg-slate-200 text-slate-900 font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
               >
                  <Mail size={20} />
                  Contact Me
               </button>

               <a 
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 rounded-full bg-slate-800 text-teal-400 border border-slate-700 hover:border-teal-500/50 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                  <FileText size={20} />
                  Resume
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;