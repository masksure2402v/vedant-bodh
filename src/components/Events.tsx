import React from 'react';

const Events: React.FC = () => {
  const events = [
    { date: 'March 15, 2026', title: 'Global Tech Summit', location: 'Virtual Event' },
    { date: 'April 22, 2026', title: 'Networking Workshop', location: 'New York, NY' },
  ];

  return (
    <section id="events" className="py-32 bg-dark/50 relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl mb-6 text-gradient font-bold">Upcoming Events</h2>
            <p className="text-xl text-slate-400">Don't miss out on our latest gatherings and conferences.</p>
          </div>
          <a href="#" className="btn bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-md">
            View All Events
          </a>
        </div>
        
        <div className="flex flex-col gap-8">
          {events.map((e, i) => (
            <div key={i} className="glass-card flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="bg-primary/10 border border-primary/20 px-6 py-4 rounded-2xl">
                  <span className="text-primary font-bold text-lg block">{e.date.split(',')[0]}</span>
                  <span className="text-slate-400 text-sm block">{e.date.split(',')[1]}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-slate-400 mt-2 text-lg">📍 {e.location}</p>
                </div>
              </div>
              <button className="btn btn-primary w-full md:w-auto px-10">Register Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
