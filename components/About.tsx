
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="reveal text-blue-600 font-bold uppercase tracking-[0.2em] text-sm" style={{ transitionDelay: '0.1s' }}>Pioneering Logistics</div>
            <h2 className="reveal text-4xl md:text-5xl font-black text-slate-900" style={{ transitionDelay: '0.2s' }}>Loadbazzar Innovation</h2>
            <div className="reveal w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ transitionDelay: '0.3s' }}></div>
            
            <p className="reveal text-slate-500 text-lg leading-relaxed" style={{ transitionDelay: '0.4s' }}>
              Loadbazzar is a next-generation logistics ERP platform, envisioned and pioneered by <strong className="text-slate-900">Mr. A. K. Chatterjee</strong> — a well-respected figure in the logistics industry. With decades of experience as a Sales and Operations Strategist, Mr. Chatterjee has driven innovation in cargo logistics through a deep understanding of profit center control.
            </p>
            
            <p className="reveal text-slate-500 text-lg leading-relaxed" style={{ transitionDelay: '0.5s' }}>
              At its core, Loadbazzar is a powerful ERP system built to enhance operational efficiency. Designed by experienced IT professionals, the platform continuously evolves through ongoing R&D to keep pace with the sector's fast-changing demands.
            </p>

            <div className="reveal glass p-8 rounded-3xl border border-purple-200/50 border-l-4 border-l-purple-600 relative overflow-hidden group shadow-xl transition-all duration-700 hover:-translate-y-4 hover:rotate-2 hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.3)] hover:bg-white/90 cursor-default" style={{ transitionDelay: '0.6s' }}>
              <div className="absolute top-0 right-0 p-8 opacity-5 -rotate-12 scale-150 transition-transform group-hover:scale-[1.7] group-hover:rotate-0 text-purple-600">
                <i className="fas fa-quote-right text-9xl"></i>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg transition-transform group-hover:scale-110">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Founded by Mr. A. K. Chatterjee</h4>
                  <p className="text-blue-600 font-medium">Sales & Operations Strategist (20+ Years Expertise)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-[100px] opacity-10"></div>
            <div className="relative glass-dark p-4 rounded-[2.5rem] border border-purple-200/30 shadow-2xl shadow-purple-500/10">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop" 
                alt="Innovation Hub" 
                className="rounded-[2rem] shadow-sm grayscale-20 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-md flex items-center justify-center text-white text-3xl animate-pulse cursor-pointer shadow-2xl transition-transform hover:scale-110">
                  <i className="fas fa-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
