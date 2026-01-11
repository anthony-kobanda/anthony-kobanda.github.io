import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-950">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] bg-grid"></div>
      
      {/* Top Spotlight */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-600 rounded-full mix-blend-screen filter blur-[128px] opacity-20"></div>
      
      {/* Bottom Spotlight */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-400 rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
    </div>
  );
};

export default Background;