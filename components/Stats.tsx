
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ end: string; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const numericPart = parseInt(end.replace(/[^0-9]/g, '')) || 0;
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericPart));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, numericPart, duration]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
      {count}{suffix}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass p-8 rounded-[2rem] border-black/5 text-center group hover:bg-white hover:shadow-lg transition-all hover:-translate-y-2 shadow-sm"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
              >
                <i className={`fas ${stat.icon} text-3xl`}></i>
              </div>
              <CountUp end={stat.number} />
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
