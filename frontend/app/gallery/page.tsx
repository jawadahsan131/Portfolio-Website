import type { Metadata } from "next";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "Scrollable gallery of AI visualizations, architecture sketches, infrastructure views, research scenes, and UI systems.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeader eyebrow="" title="Gallery">
        <p>A full visual index of systems, diagrams, product surfaces, and research environments from the Obsidian portfolio.</p>
      </SectionHeader>
      <GalleryGrid />
    </section>
  );
}
