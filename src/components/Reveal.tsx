"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Adds .is-in once the block scrolls into view, which draws the red strikes inside it */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  threshold = 0.35,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`${className} ${inView ? "is-in" : ""}`}>
      {children}
    </Tag>
  );
}
