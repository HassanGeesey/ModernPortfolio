import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'AETHER DASH',
    category: 'PRODUCT DESIGN',
    image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800&auto=format&fit=crop',
    color: 'bg-blue-500'
  },
  {
    title: 'SOLARIS ECOM',
    category: 'FULL STACK',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    color: 'bg-purple-500'
  },
  {
    title: 'LUMEN BRAND',
    category: 'VISUAL ID',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    color: 'bg-emerald-500'
  },
  {
    title: 'NEON PROTOCOL',
    category: 'UI/UX KIT',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    color: 'bg-pink-500'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter">SELECTED WORK.</h2>
            <p className="text-slate-400 text-lg max-w-md">A showcase of projects that define the frontier of my creative output.</p>
          </div>
          <button className="h-16 px-10 rounded-full glass font-bold hover:bg-white hover:text-black transition-all">
            VIEW ARCHIVE
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[3rem] aspect-[4/3] border border-white/5 bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                />
                
                {/* Overlay details on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <ArrowUpRight />
                    </button>
                    <button className="w-14 h-14 rounded-full glass text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <Github />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full ${project.color}`}></span>
                    <p className="text-xs font-black tracking-widest text-slate-500 uppercase">{project.category}</p>
                  </div>
                  <h3 className="text-3xl font-black group-hover:text-blue-500 transition-colors">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};