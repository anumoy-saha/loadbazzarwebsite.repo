
import React, { useState, useEffect } from 'react';
import { UserRole } from './types';
import RoleSelector from './components/RoleSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';
import Loader from './components/Loader';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.NONE);
  const [showMain, setShowMain] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Initial App Loader duration
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);

    const savedRole = localStorage.getItem('user_role') as UserRole;
    if (savedRole && Object.values(UserRole).includes(savedRole)) {
      setRole(savedRole);
      setShowMain(true);
    }

    // Intersection Observer for reveal animations
    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isAppLoading, showMain]);

  if (isAppLoading) {
    return <Loader />;
  }

  if (!showMain) {
    return <RoleSelector onSelect={(selectedRole) => {
      setRole(selectedRole);
      localStorage.setItem('user_role', selectedRole);
      setTimeout(() => setShowMain(true), 500);
    }} />;
  }

  return (
    <div className="relative min-h-screen text-slate-900 bg-slate-50 overflow-x-hidden selection:bg-blue-500/30">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10">
        <Hero role={role} />
        <Stats />
        <About />
        <Features />
        <Services />
        <Products />
        <Industries />
        <Contact />
      </main>
      <Footer />
      
      <ChatAssistant />
      
      <div className="fixed bottom-6 left-6 z-50 glass px-4 py-2 rounded-full text-xs font-bold border-blue-500/10 flex items-center gap-2 animate-pulse shadow-lg">
        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_#3b82f6]"></div>
        SESSION: {role.replace('_', ' ')}
        <button 
          onClick={() => { localStorage.removeItem('user_role'); window.location.reload(); }}
          className="ml-2 text-blue-600 hover:text-blue-500 underline"
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default App;
