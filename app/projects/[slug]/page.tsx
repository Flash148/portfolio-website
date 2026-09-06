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
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-rust underline underline-offset-4 hover:text-ink"
        >
          <ArrowLeft size={18} />
          <span>Back to Projects</span>
        </Link>

        <div className="border-b border-line pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
            Case Notes
          </p>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-ink/80">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-moss px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-moss"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-ink px-4 py-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-surface"
            >
              <Github size={18} />
              <span>View on GitHub</span>
            </a>
          )}
        </div>

        <article className="prose mt-8 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </article>
      </div>
    </div>
  );
}
