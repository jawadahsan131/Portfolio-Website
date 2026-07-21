import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost } from "@/types/blog";
import type { Project, ProjectFrontmatter } from "@/types/project";

const contentRoot = path.join(process.cwd(), "content");

function readMdxFiles<TFrontmatter>(directory: string): Array<TFrontmatter & { content: string }> {
  const dir = path.join(contentRoot, directory);

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(source);
      return { ...(data as TFrontmatter), content };
    });
}

export function getAllBlogs(): BlogPost[] {
  return readMdxFiles<BlogFrontmatter>("blog").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogs().find((post) => post.slug === slug);
}

export function getAllProjects(filters?: { query?: string; category?: string }): Project[] {
  const projects = readMdxFiles<ProjectFrontmatter>("projects").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (!filters) {
    return projects;
  }

  const query = filters.query?.toLowerCase().trim();
  const category = filters.category?.toLowerCase();

  return projects.filter((project) => {
    const matchesQuery =
      !query ||
      [project.title, project.description, project.category, ...project.tags]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesCategory = !category || category === "all" || project.tags.join(" ").toLowerCase().includes(category);
    return matchesQuery && matchesCategory;
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
