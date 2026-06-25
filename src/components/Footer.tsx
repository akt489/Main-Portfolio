export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Skills</h3>
            <ul className="space-y-2">
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Frontend
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Backend
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Databases
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Java Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/akt489" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abrahamtilahun/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <p className="text-lg text-white font-bold" style={{ fontFamily: "'Great Vibes', cursive" }}>
                Crafted with modern tools, clean code, and a focus on quality.
              </p>
            </div>
            <div>
              <p>
                call me: +251 9340 7460
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Abraham Tilahun. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Crafted with precision and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
