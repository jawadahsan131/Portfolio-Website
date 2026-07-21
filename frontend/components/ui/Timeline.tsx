import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-outline-variant">
      {timeline.map((item) => (
        <div key={item.title} className="relative pl-10">
          <span className="absolute left-0 top-1 h-6 w-6 rounded-full border border-secondary bg-background shadow-glow" />
          <p className="font-mono text-label-md text-secondary">{item.year}</p>
          <h3 className="mt-1 font-heading text-headline-md text-on-surface">{item.title}</h3>
          <p className="mt-2 text-body-md text-on-surface-variant">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
