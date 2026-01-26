import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/lib/markdown';

// This tells Next.js which project pages to pre-build
export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Props type for the page
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-slate-300 mb-6">{project.description}</p>
          
          {/* Tech stack */}
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

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          )}
        </div>

        {/* Project content from markdown */}
        <article className="prose">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </div>
    </div>
  );
}