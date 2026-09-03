import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { getAllProjects } from '@/lib/markdown';

// Short handwritten notes for standout entries, keyed by slug.
const MARGIN_NOTES: Record<string, string> = {
  'morse-code-translator': 'first one I shipped end to end',
  'image-color-palette-generator': 'the color math finally clicked here',
};

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          Section 02
        </p>
        <h2 className="text-4xl font-bold text-ink sm:text-5xl">Projects</h2>
        <p className="mt-3 max-w-xl text-ink/70">
          Case files — small things I&apos;ve built, mostly to learn something
          specific.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          {projects.map((project, index) => {
            const isWide = index % 2 === 0;
            const note = MARGIN_NOTES[project.slug];

            return (
              <article
                key={project.slug}
                className={`group relative ${
                  isWide ? 'md:col-span-7' : 'md:col-span-5 md:mt-16'
                }`}
              >
                {/* Folder tab */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-6 h-3 w-24 rounded-t-md border border-b-0 border-line bg-surface"
                />

                <div className="relative border border-line bg-surface p-7 transition-all duration-200 group-hover:-translate-y-1.5 group-hover:[transform:rotate(0deg)] group-hover:shadow-[7px_9px_0_rgba(43,58,68,0.13)]">
                  {/* Dog-ear / page-turn corner */}
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-0 h-0 w-0 border-l-[26px] border-t-[26px] border-l-transparent border-t-paper transition-all duration-200 group-hover:border-l-[34px] group-hover:border-t-[34px]"
                  />

                  <h3 className="pr-6 text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink/75">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-moss px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-moss"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-5 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-rust underline underline-offset-4 hover:text-ink"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-rust underline underline-offset-4 hover:text-ink"
                    >
                      Case notes
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {note && (
                  <p className="mt-3 font-hand text-lg leading-tight text-moss md:absolute md:-bottom-6 md:right-3 md:mt-0 md:w-52 md:text-right md:[transform:rotate(-4deg)]">
                    {note}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
