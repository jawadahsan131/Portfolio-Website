import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogs, getBlogBySlug } from "@/lib/mdx";
import { pageMetadata } from "@/lib/metadata";
import { formatDate, siteUrl } from "@/lib/utils";

interface BlogDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogs().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogDetailProps): Metadata {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    return {};
  }
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.thumbnail });
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const post = getBlogBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    url: siteUrl(`/blog/${post.slug}`)
  };

  return (
    <section className="mx-auto grid max-w-container gap-10 px-margin-mobile py-16 md:px-margin-desktop lg:grid-cols-[260px_1fr]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card p-5">
          <p className="font-mono text-label-md text-secondary">{post.category}</p>
          <h1 className="mt-3 font-heading text-headline-lg">{post.title}</h1>
          <p className="mt-4 text-label-md text-on-surface-variant">{formatDate(post.date)} · {post.readingTime}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => <span key={tag} className="rounded-full bg-surface-mid px-3 py-1 text-label-md text-on-surface-variant">{tag}</span>)}
          </div>
          <div className="mt-6 space-y-2 text-label-md text-on-surface-variant">
            <p>Share</p>
            <a className="block text-primary" href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl(`/blog/${post.slug}`)}`}>LinkedIn</a>
            <a className="block text-primary" href={`https://twitter.com/intent/tweet?url=${siteUrl(`/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}>X</a>
          </div>
        </div>
      </aside>
      <article className="prose-obsidian max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </section>
  );
}
