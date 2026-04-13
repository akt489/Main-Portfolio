import { ArrowRight } from 'lucide-react';

export default function Work() {
  const projects = [
    {
      title: 'Weather-APP',
      description:
        'A modern, production-ready weather application with light/dark mode, unit switching, API caching, and comprehensive testing.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '#',
      tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">Work that matters</h2>
          <p className="section-subtitle">
            Selected projects showcasing diverse skills and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full rounded-lg overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-50" />
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/akt489/Weather-APP.git"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
