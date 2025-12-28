import React from 'react';
import { Monitor, Smartphone, Layout, Zap, Search, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Interface Design',
    desc: 'Bespoke UI crafted for peak performance.',
    icon: <Layout className="text-blue-500" />
  },
  {
    title: 'Responsive Flow',
    desc: 'Seamless transitions across all form factors.',
    icon: <Smartphone className="text-purple-500" />
  },
  {
    title: 'Core Development',
    desc: 'Clean, scalable architecture built for growth.',
    icon: <Monitor className="text-emerald-500" />
  },
  {
    title: 'Fast Optimization',
    desc: 'Lighthouse perfect scores for blazing speed.',
    icon: <Zap className="text-orange-500" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Expertise</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            I SOLVE <span className="text-slate-500">REAL WORLD</span> PROBLEMS THROUGH CODE.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/[0.02] group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="text-2xl font-black mb-4">{s.title}</h4>
              <p className="text-slate-400 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};