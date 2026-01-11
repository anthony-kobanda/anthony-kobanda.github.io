import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 inline-block relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-slate-400 mt-4 max-w-2xl font-light">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;