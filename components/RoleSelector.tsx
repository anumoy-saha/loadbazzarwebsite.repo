
import React from 'react';
import { UserRole } from '../types';
import { ROLES } from '../constants';

interface RoleSelectorProps {
  onSelect: (role: UserRole) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelect }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[150px]"></div>
      
      <div className="relative z-10 max-w-5xl w-full text-center mb-12">
        <div className="flex justify-center mb-6">
          <img 
            src="https://loadbazzar.com/assets/imgs/logo-loadbazzar.png" 
            alt="Loadbazzar" 
            className="h-16 w-auto"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
          Welcome to the <span className="text-gradient">Future</span> of Logistics
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          To provide you with the most relevant insights and experience, please select your primary role in the cargo ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full relative z-10">
        {ROLES.map((role) => (
          <button
            key={role.id}
            onClick={() => onSelect(role.id)}
            className="group relative h-[450px] overflow-hidden rounded-3xl border border-black/5 bg-white/60 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)]"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={role.image} 
                alt={role.title} 
                className="h-full w-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
            </div>

            <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end text-left">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 border border-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <i className={`fas ${role.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-3xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{role.title}</h3>
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                {role.description}
              </p>
              
              <div className="mt-8 flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                ENTER PLATFORM <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-slate-400 text-sm font-medium animate-pulse">
        <i className="fas fa-fingerprint mr-2"></i> VERIFYING SECURITY PROTOCOLS...
      </div>
    </div>
  );
};

export default RoleSelector;
