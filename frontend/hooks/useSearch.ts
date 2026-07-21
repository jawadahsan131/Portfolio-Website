"use client";

import { useMemo, useState } from "react";

export function useSearch<T>(items: T[], matcher: (item: T, query: string, filter: string) => boolean) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => items.filter((item) => matcher(item, query, filter)), [filter, items, matcher, query]);

  return { query, setQuery, filter, setFilter, results };
}
