import React from "react";

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">A student committed to building robust systems</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              Passionate about computer science fundamentals and creating elegant solutions to complex problems. I focus on writing clean, efficient code and understanding the principles that drive modern systems.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              With experience in full-stack development and a deep interest in algorithms and data structures, I'm committed to continuous learning and delivering high-quality software.
            </p>
          </div>

          <div className="relative h-96 md:h-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Abraham working on code"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;