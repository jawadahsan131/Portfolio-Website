import type { Metadata } from "next";
import { AcademicRecords } from "@/components/sections/AcademicRecords";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { LatestBlogs } from "@/components/sections/LatestBlogs";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "AI Engineering Portfolio | AI/ML Engineer",
  description: "AI/ML engineering portfolio with projects, services, research notes, and production-ready full stack systems."
});

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Musa F.",
    jobTitle: "AI/ML Engineer and Full Stack Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    knowsAbout: ["Machine Learning", "FastAPI", "Next.js", "MLOps", "LLM Integration"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceTimeline />
      <AcademicRecords />
      <LatestBlogs />
      <ContactCTA />
    </>
  );
}
