import type { MetadataRoute } from "next";
import { navItems } from "@/lib/data";
import { getAllBlogs, getAllProjects } from "@/lib/mdx";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Static routes are always safe
  const staticRoutes = navItems.map((item) => ({ 
    url: siteUrl(item.href), 
    lastModified: new Date() 
  }));

  // 2. Safely map projects, ignoring empty dates
  const projectRoutes = getAllProjects().map((project) => {
    const route: any = { url: siteUrl(`/projects/${project.slug}`) };
    // Only parse and add the date if it actually exists and is not empty
    if (project.date && !isNaN(new Date(project.date).getTime())) {
      route.lastModified = new Date(project.date);
    } else {
      route.lastModified = new Date(); // Fallback to today if empty
    }
    return route;
  });

  // 3. Safely map blogs, ignoring empty dates
  const blogRoutes = getAllBlogs().map((post) => {
    const route: any = { url: siteUrl(`/blog/${post.slug}`) };
    // Only parse and add the date if it actually exists and is not empty
    if (post.date && !isNaN(new Date(post.date).getTime())) {
      route.lastModified = new Date(post.date);
    } else {
      route.lastModified = new Date(); // Fallback to today if empty
    }
    return route;
  });

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
