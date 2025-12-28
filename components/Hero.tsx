import React from "react";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold tracking-widest text-blue-400 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Web designer
            </div>

            <h1 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter gradient-text">
              I'AM <br />
              <span className="text-blue-500">A WEB DEVELOPER</span> <br />
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              I am a web designer crafting high-fidelity experiences that bridge
              the gap between design and development.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="px-10 py-5 rounded-3xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20 flex items-center gap-3">
                HIRE ME <ArrowUpRight size={22} />
              </button>

              <div className="flex items-center gap-2">
                {[<Github />, <Twitter />, <Linkedin />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    {React.cloneElement(icon as React.ReactElement, {
                      size: 20,
                    })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative glass p-4 rounded-[4rem] transform hover:rotate-2 transition-transform duration-700">
              <div className="rounded-[3rem] overflow-hidden aspect-[3/4] border border-white/10 shadow-2xl">
                <img
                  src="assets\myimage.jpeg"
                  alt="Portrait"
                  className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all duration-1000"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl animate-float shadow-2xl border-white/20">
                <p className="text-sm font-black text-white leading-none">
                  1+ Years
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
