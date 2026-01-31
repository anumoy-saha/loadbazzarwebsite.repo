
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 px-6 relative overflow-hidden bg-slate-100/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">Product Ecosystem</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Technological Solutions</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Cutting-edge software solutions designed specifically for high-efficiency logistics operations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <div 
              key={idx}
              className="glass p-2 rounded-[3.5rem] border border-purple-500/10 group hover:border-purple-600/40 transition-all duration-700 hover:-translate-y-4 shadow-lg shadow-purple-500/5 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="bg-white/90 rounded-[3rem] p-10 h-full flex flex-col shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/5 to-transparent rounded-bl-[100px] transition-all group-hover:from-purple-600/10"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mb-8 border border-white/10 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-all">
                  <i className={`fas ${product.icon} text-2xl`}></i>
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-purple-600 transition-colors">{product.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
                  {product.description}
                </p>

                <div className="space-y-4 mb-10">
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-bold text-slate-500 bg-slate-50 px-4 py-3 rounded-2xl group-hover:bg-purple-600/5 group-hover:text-purple-700 transition-all shadow-sm border border-transparent group-hover:border-purple-200">
                      <i className="fas fa-shield-check text-purple-600"></i>
                      {feat}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-2xl bg-slate-100 border border-purple-500/10 text-slate-700 font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-xl hover:shadow-purple-500/30">
                  EXPLORE MODULE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
