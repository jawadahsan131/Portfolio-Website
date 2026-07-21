import { BlogCard } from "@/components/ui/BlogCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllBlogs } from "@/lib/mdx";

export function LatestBlogs() {
  const posts = getAllBlogs().slice(0, 3);

  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Latest Writing" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </section>
  );
}
