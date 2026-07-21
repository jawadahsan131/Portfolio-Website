import { getAllBlogs } from "@/lib/mdx";
import { siteUrl } from "@/lib/utils";

export function GET() {
  const items = getAllBlogs()
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${siteUrl(`/blog/${post.slug}`)}</link>
          <description>${post.excerpt}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>AI Engineering Portfolio</title>
        <link>${siteUrl("/")}</link>
        <description>AI engineering notes and project updates.</description>
        ${items}
      </channel>
    </rss>`, { headers: { "Content-Type": "application/rss+xml" } });
}
