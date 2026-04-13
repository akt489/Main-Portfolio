import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title mb-6">Let's build something together</h2>
        <p className="section-subtitle mx-auto mb-12">
          Interested in collaborating or discussing opportunities? Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:abraham@example.com"
            className="btn-primary"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="#"
            className="btn-secondary"
          >
            Learn More
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/akt489"
            className="inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Github"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/abrehamtilahun/"
            className="inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:your-abthilahun@gmail.com"
            className="inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://t.me/Kiflawit"
            className="inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <FaTelegram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
