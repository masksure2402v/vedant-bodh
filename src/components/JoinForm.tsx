import React, { useState } from 'react';

const JoinForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for joining with ${email}!`);
    setEmail('');
  };

  return (
    <section id="join" className="py-32 bg-mesh bg-opacity-10 relative">
      <div className="container relative z-10">
        <div className="glass-card max-w-3xl mx-auto text-center border-white/20 shadow-primary/10">
          <h2 className="text-4xl md:text-6xl mb-6 text-gradient font-bold">Join Our Community</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            Stay updated with our latest programs and exclusive events. Join a global community of innovators.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-5 rounded-2xl border border-white/10 bg-white/5 text-white text-lg focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-slate-500"
            />
            <button type="submit" className="btn btn-primary px-10 py-5 text-lg">Join Now</button>
          </form>
          <p className="mt-6 text-slate-500 text-sm italic">
            Participate in the future. No spam, just pure excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
