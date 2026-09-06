import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-rust underline underline-offset-4 hover:text-ink"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-moss">
          Field Notes
        </p>
        <h1 className="text-4xl font-bold text-ink sm:text-5xl">FlashBytes</h1>
        <p className="mt-3 text-ink/70">
          Quick programming insights at lightning speed.
        </p>

        {posts.length === 0 ? (
          <div className="py-20 text-ink/60">
            <p className="text-lg">No posts yet. Stay tuned.</p>
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className={`group relative ${index % 2 === 1 ? 'md:mt-12' : ''}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-6 h-3 w-24 rounded-t-md border border-b-0 border-line bg-surface"
                />
                <Link
                  href={`/blog/${post.slug}`}
                  className="block border border-line bg-surface transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-[7px_9px_0_rgba(43,58,68,0.13)]"
                >
                  <div className="relative h-44 overflow-hidden border-b border-line bg-paper">
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-hand text-3xl text-moss">
                        FlashBytes
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-ink group-hover:text-rust">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-ink/75">
                      {post.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-ink/60">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
