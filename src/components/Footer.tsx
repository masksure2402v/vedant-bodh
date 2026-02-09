import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-dark-darker relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black text-white mb-4">VB<span className="text-primary">.</span></h2>
            <p className="text-slate-400 max-w-sm">
              Empowering the next generation of leaders through world-class programs and community events.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Resources</span>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Our Programs</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Events</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold uppercase tracking-widest text-xs">Legal</span>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            © 2026 VB Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social icons placeholder */}
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors" />
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors" />
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
