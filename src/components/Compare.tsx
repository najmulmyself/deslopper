"use client";

import { useId, useState, type ReactNode } from "react";
import { Phone } from "./Phone";

export function Compare({
  before,
  after,
  label,
}: {
  before: ReactNode;
  after: ReactNode;
  label: string;
}) {
  const [original, setOriginal] = useState(false);
  const id = useId();
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex gap-1 rounded-full border border-line-strong p-1"
        aria-label={`${label} comparison`}
      >
        {[false, true].map((value) => (
          <button
            key={String(value)}
            type="button"
            aria-pressed={original === value}
            aria-controls={id}
            onClick={() => setOriginal(value)}
            className={`min-h-11 rounded-full px-5 text-sm transition-colors ${original === value ? "bg-ink text-paper" : "text-ink-2 hover:bg-raised"}`}
          >
            {value ? "View original" : "Redesigned"}
          </button>
        ))}
      </div>
      <div
        id={id}
        aria-label={`${label}, ${original ? "original" : "redesigned"}`}
      >
        <Phone>{original ? before : after}</Phone>
      </div>
    </div>
  );
}
