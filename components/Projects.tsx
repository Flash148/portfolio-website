import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { getAllProjects } from '@/lib/markdown';
import { title } from 'process';

export default async function Projects() {
  const projects = await getAllProjects();

  console.log('Projects:', projects.map(p => ({ slug: p.slug, title: p.title })));

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-slate-400 text-center mb-16">Things I've built</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{ 
                animation: `fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Details</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}