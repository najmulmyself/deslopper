"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";

const ease = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * The brand moment: the name arrives as slop (gradient, glow, sparkle) and the
 * red pencil sweeps across it, leaving clean ink and the struck-out sparkle behind.
 */
export function Wordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setP(100);
          setDone(true);
          return;
        }
        const start = performance.now() + 300;
        const step = (now: number) => {
          const t = Math.max(0, Math.min(1, (now - start) / 1500));
          setP(ease(t) * 100);
          if (t < 1) raf = requestAnimationFrame(step);
          else setDone(true);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const word = "text-[clamp(64px,18.5vw,232px)] leading-[0.9] font-medium tracking-[-0.045em] whitespace-nowrap";
  const slot = "ml-[0.06em] inline-flex w-[0.62em] items-center justify-center align-[0.08em]";

  return (
    <div ref={ref} className="relative select-none" aria-label="deslopper" role="img">
      {/* the slop, underneath */}
      <div
        className={`${word} transition-opacity duration-300 ease-out`}
        aria-hidden="true"
        style={{ filter: "drop-shadow(0 0 22px rgb(168 85 247 / 0.45))", opacity: done ? 0 : 1 }}
      >
        <span className="slop-text">deslopper</span>
        <span className={`${slot} text-[0.5em]`}>✨</span>
      </div>
      {/* the ink, revealed behind the pencil */}
      <div
        className={`${word} absolute inset-0 bg-paper text-ink`}
        aria-hidden="true"
        style={{ clipPath: `inset(-10% ${100 - p}% -10% -2%)` }}
      >
        <span>deslopper</span>
        <span className={slot}>
          <LogoMark size={0} className="h-[0.55em] w-[0.55em]" />
        </span>
      </div>
      <div
        className="pointer-events-none absolute -inset-y-3 w-[3px] rounded-full bg-pencil transition-opacity duration-300 ease-out"
        style={{ left: `calc(${p}% - 1px)`, opacity: done || p === 0 ? 0 : 1 }}
        aria-hidden="true"
      />
    </div>
  );
}
