import React from 'react';

const Program: React.FC = () => {
  const programs = [
    { title: 'Training', desc: 'Expert-led sessions for skill development and personal growth.', icon: '🎓', color: 'from-violet-500/20' },
    { title: 'Mentorship', desc: 'One-on-one guidance from industry veterans to accelerate your career.', icon: '🤝', color: 'from-cyan-500/20' },
    { title: 'Collaboration', desc: 'Active workspace for team projects and innovative thinking.', icon: '💡', color: 'from-fuchsia-500/20' },
  ];

  return (
    <section id="program" className="py-32 relative bg-dark-darker">
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 text-gradient font-bold">Our Program</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We offer comprehensive tracks designed to help you succeed in a fast-paced world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className={`glass-card group hover:-translate-y-2 transition-all duration-500`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                <h3 className="text-2xl mb-4 font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
