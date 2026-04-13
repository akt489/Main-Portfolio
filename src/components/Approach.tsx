import { Zap, Lightbulb, Award } from 'lucide-react';

export default function Approach() {
  const approaches = [
    {
      icon: Zap,
      title: 'Precision',
      description: 'Writing clean, maintainable code with attention to detail and best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Seeking creative solutions and staying updated with emerging technologies.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality results and continuously improving my craft.',
    },
  ];

  return (
    <section id="approach" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">What defines my approach</h2>
          <p className="section-subtitle">
            Three core principles guide my work in software development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group hover:border-blue-400/30"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
