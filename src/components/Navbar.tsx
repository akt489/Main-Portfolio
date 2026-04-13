import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md">
      <a href="#" className="text-white font-semibold text-lg tracking-tight">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-gray-400 hover:text-white transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0f1e] border-b border-white/10 md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
