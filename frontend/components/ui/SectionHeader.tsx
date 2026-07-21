import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, children }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 font-mono text-label-md text-secondary">{eyebrow}</p>
      <h1 className="font-heading text-display-lg-mobile text-on-surface md:text-display-lg">{title}</h1>
      {children ? <div className="mt-5 text-body-lg text-on-surface-variant">{children}</div> : null}
    </div>
  );
}
