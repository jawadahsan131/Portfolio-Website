import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/lib/data";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
      <div className="grid gap-8 border-y border-outline-variant py-10 lg:grid-cols-[0.8fr_1.2fr_auto] lg:items-center">
        <p className="font-mono text-label-md text-secondary">{"About"}</p>
        <p className="text-body-lg text-on-surface-variant">{profile.bio}</p>
        <ButtonLink href="/about" variant="secondary">Read More</ButtonLink>
      </div>
    </section>
  );
}
