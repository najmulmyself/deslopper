"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronsLeftRight } from "lucide-react";

type Props = {
  before: ReactNode;
  after: ReactNode;
  label: string;
  /** Where the red line settles after the opening wipe, in percent */
  settle?: number;
  className?: string;
};

const ease = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * A phone with two screens stacked. The red pencil line wipes the slop away:
 * left of the line is what we hand back, right of it is what the client sent.
 */
export function Compare({ before, after, label, settle = 64, className = "" }: Props) {
  const [pos, setPos] = useState(0);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const played = useRef(false);
  const raf = useRef(0);

  // Opening move: the pencil sweeps left to right, cleaning as it goes, then eases back so both sides show
  const play = useCallback((settleAt: number) => {
    cancelAnimationFrame(raf.current);
    const legs = [
      { from: 0, to: 100, ms: 1100, wait: 0 },
      { from: 100, to: settleAt, ms: 700, wait: 600 },
    ];
    let leg = 0;
    let start = performance.now();
    const step = (now: number) => {
      if (dragging.current) return;
      const l = legs[leg];
      const t = Math.max(0, Math.min(1, (now - start - l.wait) / l.ms));
      setPos(l.from + (l.to - l.from) * ease(t));
      if (t === 1) {
        leg += 1;
        start = now;
        if (leg === legs.length) return;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true;
          if (reduce) setPos(settle);
          else window.setTimeout(() => play(settle), 250);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf.current);
    };
  }, [settle, play]);

  const fromPointer = (clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex w-[300px] justify-between font-mono text-[12px] leading-4 text-ink-3">
        <span>After</span>
        <span>Before</span>
      </div>
      <div
        ref={frame}
        className="relative h-[612px] w-[300px] touch-pan-y select-none rounded-[48px] bg-ink p-[10px] shadow-phone"
        onPointerDown={(e) => {
          dragging.current = true;
          cancelAnimationFrame(raf.current);
          e.currentTarget.setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && fromPointer(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white">
          <div className="absolute inset-0" aria-hidden={pos > 98}>
            {before}
          </div>
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            aria-hidden={pos < 2}
          >
            {after}
          </div>
          <div className="pointer-events-none absolute left-1/2 top-[10px] z-20 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-black" />
        </div>

        {/* the red pencil */}
        <div
          className="pointer-events-none absolute inset-y-[-12px] z-30 w-0"
          style={{ left: `calc(10px + (100% - 20px) * ${pos / 100})` }}
        >
          <div className="absolute inset-y-0 -left-px w-[2px] rounded-full bg-pencil" />
          <button
            type="button"
            role="slider"
            aria-label={`${label}: drag to compare before and after`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            className="pointer-events-auto absolute top-1/2 left-0 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-pencil text-white shadow-pencil transition-transform duration-150 ease-out active:scale-[0.96]"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
              if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
            }}
          >
            <ChevronsLeftRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
