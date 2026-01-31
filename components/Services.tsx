
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-purple-600 font-bold uppercase tracking-[0.2em] text-sm">Expert Solutions</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Our Specialized Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">End-to-end consulting and technology services designed to transform your logistics operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="glass p-10 rounded-[3rem] border border-purple-500/10 hover:border-purple-600/40 hover:bg-white transition-all duration-500 group shadow-md shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/15"
            >
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 shrink-0 rounded-[2rem] bg-slate-50 flex items-center justify-center border border-purple-500/10 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-purple-400 transition-all duration-700 shadow-sm">
                  <i className={`fas ${service.icon} text-3xl group-hover:text-white text-purple-600 transition-colors`}></i>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                  <ul className="grid grid-cols-1 gap-4">
                    {service.items.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-3 text-slate-500 font-medium group/item hover:translate-x-1 transition-transform">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600/10 to-purple-400/10 flex items-center justify-center text-purple-600 text-[10px] shadow-sm border border-purple-500/10">
                          <i className="fas fa-check"></i>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
