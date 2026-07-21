import type { MetadataRoute } from "next";
import { navItems } from "@/lib/data";
import { getAllBlogs, getAllProjects } from "@/lib/mdx";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navItems.map((item) => ({ url: siteUrl(item.href), lastModified: new Date() }));
  const projectRoutes = getAllProjects().map((project) => ({ url: siteUrl(`/projects/${project.slug}`), lastModified: new Date(project.date) }));
  const blogRoutes = getAllBlogs().map((post) => ({ url: siteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date) }));
  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
