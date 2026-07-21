"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { useMemo, useState } from "react";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { galleryItems } from "@/lib/data";

const tabs = ["All", "AI Visualizations", "Architecture", "Infra", "Research", "UI/UX"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = useMemo(
    () => galleryItems.filter((item) => filter === "All" || item.category === filter),
    [filter]
  );
  const active = activeIndex === null ? null : items[activeIndex];

  const go = (direction: number) => {
    if (activeIndex === null || items.length === 0) {
      return;
    }
    setActiveIndex((activeIndex + direction + items.length) % items.length);
  };

  return (
    <>
      <FilterTabs tabs={tabs} value={filter} onChange={(value) => { setFilter(value); setActiveIndex(null); }} />
      <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-lg border border-outline-variant bg-surface-low text-left"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={900}
              height={index % 2 === 0 ? 1080 : 720}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAzMiAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCBmaWxsPScjMjAxZjFmJyB3aWR0aD0nMzInIGhlaWdodD0nMjAnLz48L3N2Zz4="
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
              <span>
                <span className="block font-heading text-headline-md text-white">{item.title}</span>
                <span className="mt-2 inline-flex items-center gap-2 text-label-md text-primary">
                  <Eye className="h-4 w-4" /> View {item.category}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={active.title}>
          <button type="button" aria-label="Close lightbox" onClick={() => setActiveIndex(null)} className="absolute right-5 top-5 rounded-lg bg-white/10 p-3 text-white">
            <X className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Previous image" onClick={() => go(-1)} className="absolute left-5 top-1/2 rounded-lg bg-white/10 p-3 text-white">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button type="button" aria-label="Next image" onClick={() => go(1)} className="absolute right-5 top-1/2 rounded-lg bg-white/10 p-3 text-white">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
            <div className="relative min-h-[60vh]">
              <Image src={active.image} alt={active.title} fill sizes="90vw" className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <h2 className="font-heading text-headline-md text-white">{active.title}</h2>
              <p className="text-label-md text-primary">{active.category}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
