import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/lib/data";

export function CTASection() {
  return (
    <section className="rounded-lg border border-outline-variant bg-surface-low px-6 py-10 shadow-obsidian md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-label-md text-secondary">{""}</p>
          <h2 className="mt-3 font-heading text-headline-lg text-on-surface">Ready to collaborate?</h2>
          <p className="mt-3 text-body-md text-on-surface-variant">Bring a product goal, a messy system, or a model idea. I will help turn it into something shippable.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
            <Mail className="h-4 w-4" /> {profile.email}
          </ButtonLink>
          <ButtonLink href="/contact">Hire Me</ButtonLink>
        </div>
      </div>
    </section>
  );
}
