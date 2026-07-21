import { SkillCard } from "@/components/ui/SkillCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills, stack } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Skills and Stack">
        <p>A practical toolkit for building, measuring, and shipping AI-powered web systems.</p>
      </SectionHeader>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card space-y-6 p-6">
          {skills.map((skill) => <SkillCard key={skill.name} name={skill.name} value={skill.value} />)}
        </div>
        <div className="card p-6">
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full bg-surface-mid px-4 py-2 text-label-md text-on-surface-variant">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
