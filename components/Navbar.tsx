import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Cpu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Services', href: '#services', icon: <Cpu size={18} /> },
    { name: 'Work', href: '#portfolio', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-fit px-4 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-[-10px]'}`}>
      <div className="glass px-2 py-2 rounded-full shadow-2xl flex items-center gap-1 md:gap-4">
        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="h-6 w-[1px] bg-white/10 hidden md:block mx-2"></div>

        <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95">
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2.5 rounded-full hover:bg-white/5 text-slate-400" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[calc(100vw-3rem)] p-4 rounded-3xl grid grid-cols-2 gap-2 animate-in fade-in zoom-in duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all"
            >
              <span className="text-blue-500">{link.icon}</span>
              <span className="text-sm font-semibold">{link.name}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};