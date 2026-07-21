"use client";

import { useReducedMotion } from "framer-motion";

export function useScrollAnimation() {
  const reduceMotion = useReducedMotion();

  return {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" }
  };
}
