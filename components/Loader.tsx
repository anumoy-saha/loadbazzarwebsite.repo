
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          {/* Animated Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-blue-600/20 rounded-full border-t-blue-600 animate-spin" style={{ animationDuration: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-purple-600/10 rounded-full border-b-purple-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
          
          <img 
            src="https://loadbazzar.com/assets/imgs/logo-loadbazzar.png" 
            alt="Loadbazzar Logo" 
            className="h-20 w-auto animate-logo-pulse relative z-10"
          />
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-black tracking-[0.3em] uppercase text-slate-400 flex items-center gap-2">
            Initiating 
            <span className="shimmer-text font-black">Loadbazzar OS</span>
          </div>
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full origin-left animate-[shimmer_2s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 tracking-[0.5em] uppercase">
        Verifying Core Protocols...
      </div>
    </div>
  );
};

export default Loader;
