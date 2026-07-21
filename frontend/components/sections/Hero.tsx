"use client";

import { ArrowDownToLine, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { featuredSignals, profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dot-grid bg-[length:28px_28px]">
      <div className="mx-auto grid max-w-container gap-12 px-margin-mobile py-20 md:px-margin-desktop lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mb-4 font-mono text-label-md text-secondary"></p>
          <h1 className="font-heading text-display-lg-mobile text-on-surface md:text-display-lg">
            {profile.name}
            <span className="block text-primary">AI Systems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-on-surface-variant">
            {profile.role}. {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects">
              <FolderGit2 className="h-4 w-4" /> View Projects
            </ButtonLink>
            <ButtonLink href="/resume.pdf" variant="secondary">
              <ArrowDownToLine className="h-4 w-4" /> Download Resume
            </ButtonLink>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="glass rounded-lg p-5 shadow-obsidian"
        >
          <div className="mb-5 flex items-center justify-between border-b border-outline-variant pb-4">
            <span className="font-mono text-label-md text-secondary"></span>
            <span className="rounded-full bg-secondary/15 px-3 py-1 text-caption text-secondary">ONLINE</span>
          </div>
          <div className="space-y-4">
            {featuredSignals.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-surface-mid p-4">
                  <span className="flex items-center gap-3 text-body-md text-on-surface-variant">
                    <Icon className="h-4 w-4 text-primary" /> {item.label}
                  </span>
                  <span className="font-mono text-on-surface">{item.value}</span>
                </div>
              );
            })}
            <div className="rounded-lg bg-surface-mid p-4">
              <div className="mb-2 flex items-center justify-between text-label-md">
                <span className="text-on-surface-variant">training progress</span>
                <span className="font-mono text-secondary">87%</span>
              </div>
              <motion.div className="h-2 overflow-hidden rounded-full bg-surface-high">
                <motion.span
                  className="block h-full rounded-full bg-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </div>
            <pre className="overflow-hidden rounded-lg border border-outline-variant bg-surface-mid p-4 font-mono text-caption text-on-surface-variant">
              {""}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
