import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Radio, Terminal } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { ButtonLink } from "@/components/ui/Button";

export function Footer() {
  const primaryLinks = navItems.slice(0, 4);
  const resourceLinks = navItems.slice(4);

  return (
    <footer className="border-t border-outline-variant bg-surface/80">
      <div className="mx-auto max-w-container px-margin-mobile py-12 md:px-margin-desktop">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <Link href="/" className="font-mono text-headline-md text-on-surface">
              AI eng.dev
            </Link>
            <p className="mt-4 max-w-sm text-body-md text-on-surface-variant">{profile.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant px-4 py-2 text-label-md text-on-surface-variant transition hover:border-primary hover:text-primary"
                >
                  {social.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterGroup title="Navigate" items={primaryLinks} />
          <FooterGroup title="Explore" items={resourceLinks} />

          <div className="rounded-lg border border-outline-variant bg-surface-low p-5 shadow-obsidian">
            <div className="flex items-center justify-between gap-4 border-b border-outline-variant pb-4">
              <span className="font-mono text-label-md text-secondary">system.status</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-caption text-secondary">
                <Radio className="h-3.5 w-3.5" /> available
              </span>
            </div>
            <div className="mt-5 space-y-3 text-body-md text-on-surface-variant">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {profile.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary" className="mt-6 w-full">
              <Terminal className="h-4 w-4" /> CONTACT
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-outline-variant pt-6 text-caption text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} {profile.name}. Built with Next.js, FastAPI, and a useful amount of restraint.</p>
          <Link href="/" className="inline-flex items-center gap-2 hover:text-primary">
            Back to top <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

interface FooterGroupProps {
  title: string;
  items: Array<{ label: string; href: string }>;
}

function FooterGroup({ title, items }: FooterGroupProps) {
  return (
    <div>
      <h2 className="font-mono text-label-md text-secondary">{title}</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-label-md text-on-surface-variant transition hover:text-primary">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
