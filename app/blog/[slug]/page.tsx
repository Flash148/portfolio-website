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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back to FlashBytes button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to FlashBytes</span>
        </Link>

        {/* Post header */}
        <article>
          <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
          
          {/* Meta info */}
          <div className="flex items-center gap-6 text-slate-400 mb-8 pb-8 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
          </div>

          {/* Post content */}
          <div className="prose">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </div>
  );
}