import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
            {title}
          </span>
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;