import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-darker overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase italic">Lorem, ipsum dolor.</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl mb-8 leading-[1.05] tracking-tight">
          <span className="text-gradient block">Lorem, ipsum dolor.</span>
          <span className="text-gradient-primary block">Lorem, ipsum dolor.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to <span className="text-white font-bold">VB</span>. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate consequatur dolorem autem sit sequi quis!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#join" className="btn btn-primary min-w-[200px]">Get Started</a>
          <a href="#program" className="btn bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md min-w-[200px]">
            Learn More
          </a>
        </div>
      </div>

      {/* Hero Image / Decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30vh] bg-linear-to-t from-dark-darker to-transparent z-20" />
    </section>
  );
};

export default Hero;
