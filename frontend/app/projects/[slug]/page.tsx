import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ButtonLink } from "@/components/ui/Button";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { pageMetadata } from "@/lib/metadata";

interface ProjectDetailProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {};
  }
  return pageMetadata({ title: project.title, description: project.description, path: `/projects/${project.slug}` });
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-container gap-10 px-margin-mobile py-16 md:px-margin-desktop lg:grid-cols-[280px_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card p-5">
          <p className="font-mono text-label-md text-secondary">{"// PROJECT_FILE"}</p>
          <h1 className="mt-3 font-heading text-headline-lg text-on-surface">{project.title}</h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="rounded-full bg-surface-mid px-3 py-1 text-label-md text-on-surface-variant">{tag}</span>)}
          </div>
          <div className="mt-6 grid gap-2">
            <ButtonLink href={project.github} variant="secondary">GitHub URL</ButtonLink>
            <ButtonLink href={project.demo}>Demo URL</ButtonLink>
          </div>
        </div>
      </aside>
      <article className="prose-obsidian max-w-none">
        <MDXRemote source={project.content} />
      </article>
    </section>
  );
}
