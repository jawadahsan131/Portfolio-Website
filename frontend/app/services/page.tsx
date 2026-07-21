import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceProcess, services } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "AI/ML engineering, FastAPI development, full stack delivery, LLM integration, MLOps, and technical consulting services.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
        <SectionHeader eyebrow="" title="Services">
          <p>Professional engineering support for teams that need pragmatic AI systems, resilient APIs, and polished product interfaces.</p>
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => <ServiceCard key={service.title} service={service} />)}
        </div>
      </section>
      <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
        <SectionHeader eyebrow="// DELIVERY_PROTOCOL" title="Process" />
        <div className="grid gap-5 md:grid-cols-4">
          {serviceProcess.map((item) => (
            <article key={item.step} className="card p-5">
              <p className="font-mono text-headline-md text-primary">{item.step}</p>
              <h2 className="mt-4 font-heading text-headline-md text-on-surface">{item.title}</h2>
              <p className="mt-3 text-body-md text-on-surface-variant">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-container px-margin-mobile py-16 md:px-margin-desktop">
        <CTASection />
      </section>
    </>
  );
}
