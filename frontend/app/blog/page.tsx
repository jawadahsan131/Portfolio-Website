import type { Metadata } from "next";
import { BlogFilters } from "@/components/ui/ContentFilters";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllBlogs } from "@/lib/mdx";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Insights & Research",
  description: "Articles on AI, machine learning, FastAPI, Next.js, tutorials, and engineering career notes.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Insights & Research">
        <p>Field notes on building faster APIs, evaluating model behavior, and keeping full stack AI systems readable.</p>
      </SectionHeader>
      <BlogFilters posts={getAllBlogs()} />
    </section>
  );
}
