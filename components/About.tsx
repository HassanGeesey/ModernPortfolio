import React from "react";
import { Sparkles, Code2, Globe, Heart } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Bio Card */}
          <div className="md:col-span-2 glass p-10 md:p-14 rounded-[3.5rem] flex flex-col justify-between space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Who I Am
            </h2>
            <p className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              I'm a <span className="text-slate-500">visionary designer</span>{" "}
              turning lines of code into{" "}
              <span className="text-blue-500">living experiences.</span>
            </p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Based in the digital ether, I focus on the intersection of
              aesthetics and utility. I believe that good design is invisible—it
              just works, effortlessly.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-blue-600 p-10 rounded-[3.5rem] text-white flex flex-col justify-between">
            <Sparkles size={40} className="mb-8 opacity-50" />
            <div>
              <p className="text-7xl font-black tracking-tighter">5+</p>
              <p className="text-sm font-bold uppercase tracking-widest mt-2 opacity-80">
                Projects Completed
              </p>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="glass p-10 rounded-[3.5rem] space-y-6">
            <h3 className="text-lg font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Tailwind",
                "Next.js",
                "Figma",
                "Node",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="md:col-span-2 glass p-10 rounded-[3.5rem] flex items-center gap-8 group">
            <div className="hidden sm:flex w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 items-center justify-center shrink-0">
              <Globe
                className="text-white group-hover:rotate-12 transition-transform"
                size={40}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Global Vision</h3>
              <p className="text-slate-400">
                Collaborating with forward-thinking teams across 12+ timezones
                to build the next generation of the web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
