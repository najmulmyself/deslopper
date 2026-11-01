import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

const tells: { slop: ReactNode; fix: string }[] = [
  {
    slop: <span className="slop-text text-[17px] font-extrabold">Supercharge your workflow</span>,
    fix: "A headline that says what the app does",
  },
  {
    slop: <span className="text-[16px] font-bold">Welcome back, Alex! 👋</span>,
    fix: "A title that names the screen",
  },
  {
    slop: (
      <span className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-2.5 py-0.5 text-[11px] font-bold text-white">
        NEW ✨
      </span>
    ),
    fix: "Gone, unless something is actually new",
  },
  {
    slop: <span className="text-[12px] font-bold tracking-[0.22em] text-violet-600">CURRENT STREAK</span>,
    fix: "Sentence case, normal tracking",
  },
  {
    slop: (
      <span className="rounded-xl border border-violet-400/60 bg-white px-3 py-1 text-[13px] font-semibold shadow-[0_0_18px_rgba(168,85,247,0.55)]">
        Glowing card
      </span>
    ),
    fix: "Depth from surfaces and hairlines",
  },
  {
    slop: <span className="text-[18px] tracking-[0.15em]">🔥📊🎯💡</span>,
    fix: "One icon set, one size, one stroke",
  },
  {
    slop: <span className="text-[16px] font-bold">Let&apos;s gooo!! 🚀</span>,
    fix: "Copy with a straight face",
  },
  {
    slop: <span className="font-mono text-[13px] text-ink-2">p-[13px] mt-[11px] gap-[17px]</span>,
    fix: "Every gap on a 4px grid",
  },
];

export function Tells() {
  return (
    <section className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[360px_1fr] lg:gap-16 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[48px]">
            Everyone can tell. Here&apos;s how
          </h2>
          <p className="mt-5 text-[16px] leading-[26px] text-ink-2">
            AI-built apps fail in the same predictable ways. Users don&apos;t name them, they just trust the app a
            little less. We go through every screen and strike them out one by one.
          </p>
        </div>
        <Reveal as="ul" className="border-t border-line">
          {tells.map((t, i) => (
            <li
              key={t.fix}
              className="grid min-h-16 items-center gap-2 border-b border-line py-4 sm:grid-cols-[1fr_1fr] sm:gap-6"
            >
              <div>
                <span className="strike inline-flex items-center" style={{ ["--d" as string]: `${i * 70}ms` }}>
                  {t.slop}
                </span>
              </div>
              <p className="text-[15px] leading-[22px] text-ink">{t.fix}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
