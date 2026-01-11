import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 shadow-lg' 
            : 'bg-transparent border-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
              <span className="text-xl font-bold font-mono tracking-tighter text-slate-100 group-hover:text-white transition-colors">
                AK<span className="text-accent-400">.</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-slate-400 hover:text-accent-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-300 hover:text-white p-2"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-950 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-2"
            >
              <X size={32} />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-3xl font-light text-slate-300 hover:text-accent-400 hover:scale-110 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;