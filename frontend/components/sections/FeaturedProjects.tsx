import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllProjects } from "@/lib/mdx";

export function FeaturedProjects() {
  const projects = getAllProjects().filter((project) => project.featured).slice(0, 3);

  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Featured Projects">
        <p>Selected systems where model behavior, API reliability, and interface design all had to meet in production-like conditions.</p>
      </SectionHeader>
      <div className="space-y-5">
        {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
      </div>
    </section>
  );
}
