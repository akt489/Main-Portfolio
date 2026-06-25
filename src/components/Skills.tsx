export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold text-white mb-3">
                    Skills & Technologies
                </h2>

                <p className="text-gray-400 text-sm mb-10 max-w-2xl">
                    A collection of technologies I use to build scalable web applications,
                    from frontend interfaces to backend systems and databases.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills">

                    {/* Frontend */}
                    <div
                        id="frontend"
                        className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                    >
                        <h3 className="text-white font-semibold text-lg mb-2">
                            Frontend Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I build responsive and interactive user interfaces using React and
                            TypeScript. I focus on clean UI, good UX, and modern styling with Tailwind CSS.
                        </p>
                    </div>

                    {/* Backend */}
                    <div
                        id="backend"
                        className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                    >
                        <h3 className="text-white font-semibold text-lg mb-2">
                            Backend Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I develop REST APIs using Node.js and Express, focusing on performance,
                            security, and clean architecture for scalable applications.
                        </p>
                    </div>

                    {/* Databases */}
                    <div
                        id="databases"
                        className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                    >
                        <h3 className="text-white font-semibold text-lg mb-2">
                            Databases
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I design and manage databases using MongoDB and MySQL, ensuring
                            efficient queries, proper schema design, and data integrity.
                        </p>
                    </div>

                    {/* Java */}
                    <div
                        id="java"
                        className="p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
                    >
                        <h3 className="text-white font-semibold text-lg mb-2">
                            Java Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            I use Java for object-oriented programming, building desktop apps with
                            JavaFX, and strengthening algorithmic problem-solving skills.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}