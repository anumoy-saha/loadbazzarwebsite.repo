
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-100/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-purple-600 font-bold uppercase tracking-[0.2em] text-sm">Why Choose Us</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Key Platform Highlights</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Combining 20+ years of logistics expertise with cutting-edge technology to deliver unmatched value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx}
              className="group glass p-10 rounded-[2.5rem] border border-purple-500/10 hover:border-purple-600/40 hover:bg-white transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-transparent -translate-y-12 translate-x-12 rotate-45 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-purple-500/10 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <i className={`fas ${feature.icon} text-2xl text-purple-600 group-hover:text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-28">
          <div className="text-center mb-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent -z-10"></div>
             <div className="inline-block bg-slate-50 px-8">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Strategic Foundation</h2>
                <p className="text-purple-600 font-bold text-xs uppercase tracking-[0.3em] mt-2">Mission & Vision</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-12 rounded-[3rem] border border-purple-500/20 border-t-4 border-t-blue-600 bg-gradient-to-br from-blue-50/50 to-transparent group hover:bg-white transition-all duration-500 shadow-lg shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"><i className="fas fa-bullseye text-xl"></i></div>
                 <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg group-hover:text-slate-600 transition-colors">
                To simplify logistics through smart automation and intelligent, scalable operational strategies—delivering tangible, profit-driven solutions while minimizing potential losses.
              </p>
            </div>
            <div className="glass p-12 rounded-[3rem] border border-purple-500/20 border-t-4 border-t-purple-600 bg-gradient-to-br from-purple-50/50 to-transparent group hover:bg-white transition-all duration-500 shadow-lg shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20"><i className="fas fa-eye text-xl"></i></div>
                 <h3 className="text-3xl font-black text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-500 leading-relaxed text-lg group-hover:text-slate-600 transition-colors">
                To become the most trusted logistics technology consulting brand in emerging markets, delivering assured, profit-focused solutions that drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
