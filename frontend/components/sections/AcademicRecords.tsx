import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/lib/data";

export function AcademicRecords() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Academic Records" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item) => (
          <article key={item.degree} className="card p-6">
            <p className="font-mono text-label-md text-secondary">{item.institution}</p>
            <h2 className="mt-3 font-heading text-headline-md text-on-surface">{item.degree}</h2>
            <p className="mt-3 text-body-md text-on-surface-variant">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
