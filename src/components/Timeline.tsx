export default function Timeline() {
  const timelineItems = [
    {
      year: 'Now',
      title: 'Current Learning',
      description: 'Deepening expertise in software architecture and system design patterns.',
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      description: 'Developed and deployed multiple production applications using modern web technologies.',
    },
    {
      year: '2021',
      title: 'Journey Begins',
      description: 'Started learning computer science fundamentals and web development, with the goal of building skills in data science.',
    },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">The foundation of my technical growth</h2>
          <p className="section-subtitle">
            A chronological journey of learning and professional development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute left-0 md:left-1/2 top-3 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-blue-500 bg-[#0a0f1e] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>

                <div className={`ml-24 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-12 md:w-1/2' : 'md:ml-auto md:pl-12 md:w-1/2'}`}>
                  <div className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30">
                    <div className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
