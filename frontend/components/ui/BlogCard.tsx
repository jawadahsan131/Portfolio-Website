import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card overflow-hidden transition hover:border-primary-container/50">
      <div className="relative aspect-[16/10] bg-surface-high">
        <Image src={post.thumbnail} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="mb-4 flex items-center gap-3 text-caption text-on-surface-variant">
          <span className="rounded-full bg-surface-mid px-3 py-1 text-secondary">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <h2 className="font-heading text-headline-md text-on-surface">{post.title}</h2>
        <p className="mt-3 text-body-md text-on-surface-variant">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-label-md text-primary">
          Read <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
