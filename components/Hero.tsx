'use client';

import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative max-w-2xl">
          {/* Rotated rubber-stamp badge */}
          <div
            className="animate-stamp absolute -right-2 -top-14 select-none border-[3px] border-rust px-3 py-1 text-rust sm:-right-10 sm:-top-8 md:-right-24"
            style={{ transform: 'rotate(-3deg)' }}
            aria-hidden="true"
          >
            <span className="block border border-rust/70 px-2 py-0.5 text-xs font-bold uppercase tracking-[0.18em]">
              Open to work
            </span>
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
            Portfolio / Case File No. 01
          </p>

          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Mike Robbins
          </h1>

          <p className="mt-4 text-lg text-ink/80 sm:text-xl">
            Developer &amp; Housing Case Manager
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
            I build clean, practical software, and I spend my days helping people
            find stable housing. Both are the same job: understand the situation,
            cut the noise, and put something that works in front of a person.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-rust px-6 py-3 text-sm font-semibold uppercase tracking-wide text-surface transition-transform duration-150 hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors duration-150 hover:bg-ink hover:text-surface"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 left-6 text-ink/50 transition-colors hover:text-rust"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
