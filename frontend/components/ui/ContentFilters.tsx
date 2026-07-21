"use client";

import { useCallback } from "react";
import { BlogCard } from "@/components/ui/BlogCard";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SearchInput } from "@/components/ui/SearchInput";
import { useSearch } from "@/hooks/useSearch";
import type { BlogPost } from "@/types/blog";
import type { Project } from "@/types/project";

export function ProjectFilters({ projects }: { projects: Project[] }) {
  const matcher = useCallback((project: Project, query: string, filter: string) => {
    const haystack = [project.title, project.description, project.category, ...project.tags].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase()) && (filter === "All" || haystack.includes(filter.toLowerCase()));
  }, []);
  const { query, setQuery, filter, setFilter, results } = useSearch(projects, matcher);

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <SearchInput value={query} onChange={setQuery} placeholder="Search projects" />
        <FilterTabs tabs={["All", "AI", "Machine Learning", "NLP", "FastAPI", "Next.js", "Full Stack"]} value={filter} onChange={setFilter} />
      </div>
      <div className="mt-8 space-y-5">
        {results.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </>
  );
}

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const matcher = useCallback((post: BlogPost, query: string, filter: string) => {
    const haystack = [post.title, post.excerpt, post.category, ...post.tags].join(" ").toLowerCase();
    return haystack.includes(query.toLowerCase()) && (filter === "All" || haystack.includes(filter.toLowerCase()));
  }, []);
  const { query, setQuery, filter, setFilter, results } = useSearch(posts, matcher);

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <SearchInput value={query} onChange={setQuery} placeholder="Search articles" />
        <FilterTabs tabs={["All", "AI", "Machine Learning", "FastAPI", "Next.js", "Tutorials", "Career"]} value={filter} onChange={setFilter} />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {results.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </>
  );
}
