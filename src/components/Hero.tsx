import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0a0f1e] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Abraham Tilahun,{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Computer Science Student.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-2">
          Building secure systems with precision and purpose. Passionate about
          algorithms, software engineering, and creating meaningful digital
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 hover:border-white/40 text-white font-medium text-sm rounded-lg transition-all duration-200 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </div>

        <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10 w-full justify-center">
          {[
            { label: 'Projects Built', value: '5+' },
            { label: 'Years Learning', value: '3+' },
            { label: 'Technologies', value: '6+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
