import type { Metadata } from "next";
import { ResumeViewer } from "@/components/ui/ResumeViewer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { stats } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Resume",
  description: "Resume viewer, quick stats, downloads, and full experience timeline.",
  path: "/resume"
});

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Resume" />
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5">
            <p className="font-mono text-headline-md text-primary">{stat.value}</p>
            <p className="mt-2 text-label-md text-on-surface-variant">{stat.label}</p>
          </div>
        ))}
      </div>
      <ResumeViewer />
      <div className="mt-14">
        <h2 className="mb-6 font-heading text-headline-lg">Experience Timeline</h2>
        <Timeline />
      </div>
    </section>
  );
}
