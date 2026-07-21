import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="card p-6 transition hover:border-secondary/50">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/15 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="font-heading text-headline-md text-on-surface">{service.title}</h2>
      <p className="mt-3 text-body-md text-on-surface-variant">{service.description}</p>
      <ul className="mt-5 space-y-2 text-body-md text-on-surface-variant">
        {service.deliverables.map((deliverable) => (
          <li key={deliverable} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
            {deliverable}
          </li>
        ))}
      </ul>
      <ButtonLink href="/contact" variant="secondary" className="mt-6">
        <Mail className="h-4 w-4" /> Get in Touch
      </ButtonLink>
    </article>
  );
}
