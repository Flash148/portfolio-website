export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            I'm a developer passionate about creating clean, efficient, and user-friendly applications. 
            I enjoy solving complex problems and continuously learning new technologies.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            My approach combines technical expertise with attention to detail, ensuring that every 
            project I work on is both functional and maintainable.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-700/50 rounded-lg text-slate-200 hover:bg-slate-700 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}