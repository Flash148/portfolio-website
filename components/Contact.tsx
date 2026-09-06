export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          Section 04
        </p>
        <h2 className="text-4xl font-bold text-ink sm:text-5xl">Get in Touch</h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
          Open to new projects and opportunities, or just a conversation about
          tech, housing work, or where the two meet. Email is best:
        </p>

        <p className="mt-6 text-lg">
          <a
            href="mailto:maragonrobbins@gmail.com"
            className="text-rust underline underline-offset-4 hover:text-ink"
          >
            maragonrobbins@gmail.com
          </a>
        </p>

        <p className="mt-4 text-sm text-ink/70">
          Also on{' '}
          <a
            href="https://github.com/Flash148"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust underline underline-offset-4 hover:text-ink"
          >
            GitHub
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/in/michaelaragonrobbins/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rust underline underline-offset-4 hover:text-ink"
          >
            LinkedIn
          </a>
          .
        </p>

        <div className="mt-16 border-t border-line pt-6 text-sm text-ink/60">
          © 2026 Mike Robbins. Built with Next.js &amp; TypeScript.
        </div>
      </div>
    </section>
  );
}
