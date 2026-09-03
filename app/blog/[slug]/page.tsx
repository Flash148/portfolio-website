import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-rust underline underline-offset-4 hover:text-ink"
        >
          <ArrowLeft size={18} />
          <span>Back to FlashBytes</span>
        </Link>

        <article>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 border-b border-line pb-8 text-sm text-ink/60">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <User size={16} />
              {post.author}
            </span>
          </div>

          <div className="prose mt-8 max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  );
}
