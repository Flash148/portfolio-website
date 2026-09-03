export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          Section 03
        </p>
        <h2 className="text-4xl font-bold text-ink sm:text-5xl">About Me</h2>

        <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-ink/80">
          <p>
            I&apos;m a developer who came to code sideways. My day job is
            Housing Case Manager: I sit with people in hard situations, sort out
            what&apos;s actually going on, and help them get to somewhere stable.
          </p>
          <p>
            Building software scratches the same itch. I like taking a vague,
            tangled problem and turning it into something small, clear, and
            genuinely useful. I care about clean structure, honest edge-case
            handling, and code the next person can read.
          </p>
        </div>

        <blockquote className="my-10 max-w-2xl border-l-2 border-rust pl-5 font-hand text-2xl leading-snug text-ink">
          Whether it&apos;s a case file or a codebase, the work is the same: find
          the person a stable place to stand, then build from there.
        </blockquote>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-ink">
            Skills &amp; Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Git'].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
