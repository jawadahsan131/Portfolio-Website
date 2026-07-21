import { ArrowUpRight, Github, Monitor } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="card group grid gap-6 p-6 transition hover:border-primary-container/50 md:grid-cols-[88px_1fr_auto]">
      <div className="font-mono text-headline-md text-primary">{String(index + 1).padStart(2, "0")}</div>
      <div>
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2">
          <h2 className="font-heading text-headline-md text-on-surface">{project.title}</h2>
          <ArrowUpRight className="h-4 w-4 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <p className="mt-3 max-w-3xl text-body-md text-on-surface-variant">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-surface-mid px-3 py-1 text-label-md text-on-surface-variant">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2">
        <a aria-label={`${project.title} GitHub`} href={project.github} className="rounded-lg border border-outline-variant p-3 text-on-surface-variant hover:text-primary">
          <Github className="h-4 w-4" />
        </a>
        <a aria-label={`${project.title} demo`} href={project.demo} className="rounded-lg border border-outline-variant p-3 text-on-surface-variant hover:text-primary">
          <Monitor className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
