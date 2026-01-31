
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-black/5 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center group">
              <img 
                src="https://loadbazzar.com/assets/imgs/logo-loadbazzar.png" 
                alt="Loadbazzar Logo" 
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-slate-500 leading-relaxed font-medium">
              Powering the future of cargo logistics with intelligent ERP solutions and 20+ years of domain expertise.
            </p>
            <div className="text-slate-400 font-bold text-sm">
              &copy; 2025 LOADBAZZAR INTERFACE v4.0.2
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest mb-8 text-sm">Core Links</h4>
            <ul className="space-y-4">
              <FooterLink href="#home" label="Home Base" />
              <FooterLink href="#about" label="Intelligence" />
              <FooterLink href="#services" label="Operations" />
              <FooterLink href="#products" label="Modules" />
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest mb-8 text-sm">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="#" label="Sales Consultation" />
              <FooterLink href="#" label="ERP Automation" />
              <FooterLink href="#" label="Route Optimization" />
              <FooterLink href="#" label="Data Strategy" />
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest mb-8 text-sm">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Stay ahead with the latest in AI logistics.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white border border-black/10 rounded-xl px-4 py-2 text-sm text-slate-900 w-full focus:outline-none focus:border-blue-600 shadow-sm"
              />
              <button className="bg-blue-600 p-2 rounded-xl text-white hover:bg-blue-500 transition-colors shadow-md">
                <i className="fas fa-arrow-right px-2"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">SECURITY AUDIT</a>
          </div>
          <div className="text-xs font-black text-slate-300 flex items-center gap-2">
             ENCRYPTED CONNECTION <i className="fas fa-lock text-green-500/30"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <li>
    <a href={href} className="text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm flex items-center gap-2 group">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600/10 group-hover:bg-blue-600 transition-colors"></span>
      {label}
    </a>
  </li>
);

export default Footer;
