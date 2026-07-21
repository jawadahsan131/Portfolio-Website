import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/ui/SkillCard";
import { Timeline } from "@/components/ui/Timeline";
import { certifications, education, interests, profile, skills } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Personal story, education, experience, skills, certifications, and interests.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="About">
        <p>{profile.bio} The through-line is simple: turn technical uncertainty into systems people can trust and maintain.</p>
      </SectionHeader>
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6">
          <h2 className="font-heading text-headline-md">Personal Story</h2>
          <p className="mt-4 text-body-md text-on-surface-variant">
            I started by building automation scripts and backend tools, then moved deeper into model evaluation, retrieval systems, and deployment workflows. Today my work sits where machine learning, product engineering, and operational clarity overlap.
          </p>
        </div>
        <div className="grid gap-5">
          {education.map((item) => (
            <article key={item.degree} className="card p-5">
              <p className="font-mono text-label-md text-secondary">{item.institution}</p>
              <h2 className="mt-2 font-heading text-headline-md">{item.degree}</h2>
              <p className="mt-2 text-body-md text-on-surface-variant">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 font-heading text-headline-lg">Experience</h2>
          <Timeline />
        </div>
        <div className="card space-y-6 p-6">
          <h2 className="font-heading text-headline-lg">Skills Breakdown</h2>
          {skills.map((skill) => <SkillCard key={skill.name} name={skill.name} value={skill.value} />)}
        </div>
      </div>
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-heading text-headline-md">Certifications</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {certifications.map((item) => <span key={item} className="rounded-full bg-surface-mid px-3 py-1 text-label-md text-on-surface-variant">{item}</span>)}
          </div>
        </div>
        <div className="card p-6">
          <h2 className="font-heading text-headline-md">Interests</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {interests.map((item) => <span key={item} className="rounded-full bg-surface-mid px-3 py-1 text-label-md text-on-surface-variant">{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
