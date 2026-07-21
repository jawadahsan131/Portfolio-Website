import { ButtonLink } from "@/components/ui/Button";

export function ResumeViewer() {
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant p-4">
        <h2 className="font-heading text-headline-md">Resume Preview</h2>
        <div className="flex gap-2">
          <ButtonLink href="/resume.pdf" variant="secondary">Download Resume</ButtonLink>
          <ButtonLink href="/resume.pdf">Download CV</ButtonLink>
        </div>
      </div>
      <iframe title="Resume PDF" src="/resume.pdf" className="h-[720px] w-full bg-white" />
    </div>
  );
}
