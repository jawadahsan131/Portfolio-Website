"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  tabs: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ tabs, value, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Content filters">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={value === tab}
          onClick={() => onChange(tab)}
          className={cn(
            "rounded-full px-4 py-2 text-label-md transition",
            value === tab
              ? "bg-primary-container text-white"
              : "bg-surface-mid text-on-surface-variant hover:bg-surface-high"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
