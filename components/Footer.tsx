import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-3xl font-black tracking-tighter mb-4">
              MY<span className="text-blue-500">PORTFOLIO.</span>
            </div>
            <p className="text-slate-500 font-medium italic">Crafting digital products since 2019.</p>
          </div>

          <div className="flex items-center gap-12 text-sm font-bold uppercase tracking-widest text-slate-500">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          </div>

          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2025 ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};