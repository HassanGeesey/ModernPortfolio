import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass p-10 md:p-24 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative">
            <div className="space-y-10">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter">GET IN <br /><span className="text-blue-500">TOUCH.</span></h2>
              <div className="space-y-4">
                <p className="text-xl font-bold text-slate-300">Ready to start your next big project?</p>
                <p className="text-slate-500">I usually respond within 24 hours. Let's make something iconic together.</p>
              </div>
              
              <div className="pt-6">
                <a href="mailto:hello@portfolio.com" className="text-2xl font-black hover:text-blue-500 transition-colors flex items-center gap-4 group">
                  hello@portfolio.com <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-600 font-bold"
                />
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full px-8 py-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-600 font-bold"
                />
              </div>
              <textarea 
                placeholder="YOUR MESSAGE" 
                rows={5}
                className="w-full px-8 py-6 rounded-[2.5rem] bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-600 font-bold resize-none"
              ></textarea>
              <button className="w-full py-6 rounded-[2rem] bg-white text-black font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                SEND MESSAGE <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};