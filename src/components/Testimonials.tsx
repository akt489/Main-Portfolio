import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Abraham demonstrates exceptional problem-solving skills and a deep understanding of software fundamentals.',
      author: 'Professor Getnet',
      role: 'Computer Science Department',
    },
    {
      quote:
        'Working with Abraham was a pleasure. His code is clean, well-documented, and follows best practices.',
      author: 'Makeda Yonas',
      role: 'Senior Developer',
    },
    {
      quote:
        'Abraham brings innovation and dedication to every project. A rising talent in the field.',
      author: 'Eyeruse Tekle',
      role: 'Tech Lead',
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title mb-4">What others say</h2>
          <p className="section-subtitle">
            Feedback from mentors, colleagues, and collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30 flex flex-col"
            >
              <Quote className="text-blue-400 mb-4" size={32} />
              <p className="text-gray-300 leading-relaxed mb-6 flex-1 italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-white/10 pt-6">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
