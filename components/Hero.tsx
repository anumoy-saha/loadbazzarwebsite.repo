
import React from 'react';
import { UserRole } from '../types';

interface HeroProps {
  role: UserRole;
}

const Hero: React.FC<HeroProps> = ({ role }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-blue-600/10 text-blue-600 text-xs font-bold tracking-widest uppercase shadow-sm" style={{ transitionDelay: '0.1s' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Optimized for {role.replace('_', ' ')}
          </div>
          
          <h1 className="reveal text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900" style={{ transitionDelay: '0.2s' }}>
            Powering the <br />
            <span className="text-gradient">Next Gen</span> of <br />
            Cargo Logistics
          </h1>
          
          <p className="reveal text-slate-500 text-lg leading-relaxed max-w-xl" style={{ transitionDelay: '0.3s' }}>
            Next-generation logistics ERP platform with 20+ years of expertise, transforming complex operations into streamlined, intelligent processes.
          </p>
          
          <div className="reveal flex flex-wrap gap-4 pt-4" style={{ transitionDelay: '0.4s' }}>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Get Started <i className="fas fa-rocket"></i>
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 rounded-2xl glass border-black/5 text-slate-900 font-bold text-lg hover:bg-white/90 transition-all flex items-center gap-2 shadow-sm"
            >
              Learn More <i className="fas fa-info-circle"></i>
            </a>
          </div>

          <div className="reveal flex items-center gap-6 pt-8" style={{ transitionDelay: '0.5s' }}>
             <HeroBadge icon="fa-cloud" text="Cloud Native" />
             <HeroBadge icon="fa-bolt" text="Real-time" />
             <HeroBadge icon="fa-shield-halved" text="AI Secured" />
          </div>
        </div>

        <div className="relative group perspective-1000 reveal" style={{ transitionDelay: '0.6s' }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative animate-float">
            <img 
              src="https://loadbazzar.com/assets/imgs/hero-truck.png" 
              alt="Futuristic Logistics" 
              className="w-full rounded-[2rem] border border-black/5 shadow-2xl backdrop-blur-3xl transform transition-transform group-hover:rotate-x-1 group-hover:rotate-y-1"
              onError={(e) => { (e.target as any).src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'; }}
            />
            <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl border-blue-600/10 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center text-orange-600">
                  <i className="fas fa-route text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Optimal Route</div>
                  <div className="text-xl font-black text-slate-900">CALCULATED</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl border-green-600/10 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center text-green-600">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase">Vehicle Health</div>
                  <div className="text-xl font-black text-slate-900">98.4% STATUS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroBadge: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group cursor-default">
    <div className="w-8 h-8 rounded-lg bg-white border border-black/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
      <i className={`fas ${icon}`}></i>
    </div>
    {text}
  </div>
);

export default Hero;
