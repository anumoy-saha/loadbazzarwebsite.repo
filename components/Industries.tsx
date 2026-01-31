
import React from 'react';

const INDUSTRIES = [
  { icon: 'fa-shopping-cart', label: 'FMCG Logistics', color: 'from-blue-600 to-cyan-400' },
  { icon: 'fa-industry', label: 'Manufacturing', color: 'from-orange-600 to-yellow-400' },
  { icon: 'fa-store', label: 'Retail & E-comm', color: 'from-purple-600 to-pink-400' },
  { icon: 'fa-pills', label: 'Pharmaceutical', color: 'from-green-600 to-teal-400' }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-sm">Market Sectors</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Trusted Industry-Wide</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <div 
              key={idx}
              className="glass p-8 rounded-[2.5rem] border-black/5 text-center group hover:-translate-y-2 transition-all relative overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-slate-50 border border-black/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-sm">
                   <i className={`fas ${ind.icon} text-3xl text-slate-700 group-hover:text-blue-600 transition-colors`}></i>
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">{ind.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
