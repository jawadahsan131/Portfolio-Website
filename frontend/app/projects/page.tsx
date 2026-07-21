import type { Metadata } from "next";
import { ProjectFilters } from "@/components/ui/ContentFilters";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllProjects } from "@/lib/mdx";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Searchable AI, machine learning, FastAPI, Next.js, and full stack project index.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Projects">
        <p>Production-minded builds spanning LLMs, API platforms, model observability, and polished frontend workflows.</p>
      </SectionHeader>
      <ProjectFilters projects={getAllProjects()} />
    </section>
  );
}
