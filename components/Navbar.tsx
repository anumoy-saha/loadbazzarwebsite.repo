
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center group">
          <img 
            src="https://loadbazzar.com/assets/imgs/logo-loadbazzar.png" 
            alt="Loadbazzar Logo" 
            className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#services" label="Services" />
          <NavLink href="#products" label="Solutions" />
          <NavLink href="#industries" label="Industries" />
          <NavLink href="#contact" label="Contact" />
          
          <a 
            href="https://app.loadbazzar.com" 
            target="_blank" 
            className="group relative px-6 py-2 overflow-hidden rounded-full transition-all duration-300 flex items-center justify-center"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-widest relative py-1">Login</span>
          </a>

          <a 
            href="#contact" 
            className="relative px-8 py-3 rounded-full bg-slate-900 text-white text-sm font-black tracking-widest uppercase overflow-hidden group shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        <button className="md:hidden text-slate-900 text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <a 
    href={href} 
    className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors relative group"
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
  </a>
);

export default Navbar;