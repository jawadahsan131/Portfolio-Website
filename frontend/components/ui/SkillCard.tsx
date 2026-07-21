"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  value: number;
}

export function SkillCard({ name, value }: SkillCardProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-label-md">
        <span className="text-on-surface">{name}</span>
        <span className="text-on-surface-variant">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-high">
        <motion.div
          className="h-full rounded-full bg-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
