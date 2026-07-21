import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact form for AI/ML engineering, full stack development, LLM integration, and consulting projects.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-container gap-10 px-margin-mobile py-16 md:px-margin-desktop lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionHeader eyebrow="" title="Contact">
          <p>Send a project brief, technical question, or collaboration idea. Direct email: {profile.email}</p>
        </SectionHeader>
      </div>
      <ContactForm />
    </section>
  );
}
