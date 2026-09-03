'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const SECTIONS = ['hero', 'projects', 'blog', 'about', 'contact'] as const;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrolledSection, setScrolledSection] = useState('hero');
  const router = useRouter();
  const pathname = usePathname();

  const onHome = pathname === '/';
  const active = onHome
    ? scrolledSection
    : pathname.startsWith('/blog')
      ? 'blog'
      : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;

    const ids = ['hero', 'projects', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => setScrolledSection(entry.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [onHome]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (section: string) => {
    if (section === 'blog') {
      router.push('/blog');
    } else if (pathname !== '/') {
      router.push('/#' + section);
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection(section);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-line transition-colors duration-300 ${
        isScrolled ? 'bg-paper/95 backdrop-blur-sm' : 'bg-paper/70'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <button
            onClick={() => handleNavigation('hero')}
            className="my-2 shrink-0 font-serif text-lg font-bold tracking-tight text-rust transition-opacity hover:opacity-70"
          >
            M.R.
            <span className="ml-2 hidden text-xs font-normal uppercase tracking-[0.2em] text-moss sm:inline">
              Case File
            </span>
          </button>

          <ul className="flex items-end gap-1 overflow-x-auto pt-2">
            {SECTIONS.map((section) => {
              const label = section === 'hero' ? 'Home' : section;
              const isActive = active === section;
              return (
                <li key={section}>
                  <button
                    onClick={() => handleNavigation(section)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative -mb-px translate-y-0 rounded-t-md border border-b-0 px-3 py-2 text-sm capitalize transition-all duration-150 hover:-translate-y-0.5 sm:px-4 ${
                      isActive
                        ? 'border-line bg-surface font-semibold text-ink'
                        : 'border-transparent bg-line/30 text-ink/70 hover:border-line hover:bg-surface hover:text-ink'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
