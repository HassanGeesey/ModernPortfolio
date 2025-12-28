import React from 'react';

const projects = [
  { title: 'Project One', category: 'Creative Design', img: 'https://picsum.photos/seed/p1/600/400' },
  { title: 'Project Two', category: 'Web App', img: 'https://picsum.photos/seed/p2/600/400' },
  { title: 'Project Three', category: 'UI Concept', img: 'https://picsum.photos/seed/p3/600/400' },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] cursor-pointer">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};