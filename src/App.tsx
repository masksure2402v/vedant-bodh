import Hero from './components/Hero';
import Program from './components/Program';
import Events from './components/Events';
import JoinForm from './components/JoinForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-darker min-h-screen selection:bg-primary/30 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-dark-darker/60 backdrop-blur-xl border-b border-white/5 py-3">
        <div className="container flex justify-between items-center">
          <div className="text-3xl font-black text-white tracking-tighter">
            VB<span className="text-primary italic">.</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            <a href="#program" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-[0.2em] hover:tracking-[0.3em]">Program</a>
            <a href="#events" className="text-slate-400 hover:text-white transition-all text-sm font-bold uppercase tracking-[0.2em] hover:tracking-[0.3em]">Events</a>
            <a href="#join" className="btn bg-primary/10 border border-primary/20 text-primary py-2 px-6 rounded-xl hover:bg-primary hover:text-white text-xs uppercase tracking-widest font-black">
              Join Us
            </a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <Program />
        <Events />
        <JoinForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
