import { ArrowRight } from "lucide-react";
import { Compare } from "./Compare";
import { TallyClean, TallySlop } from "./screens/Tally";
import { site } from "@/lib/site";

const notes = [
  { top: 92, text: "Greeting → the date" },
  { top: 206, text: "Glow card → real streak" },
  { top: 372, text: "Emoji → one icon set" },
  { top: 548, text: "Tab bar, quieter" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1200px] px-4 pt-12 pb-20 sm:px-8 md:pt-16 lg:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_520px] lg:gap-8">
        <div className="max-w-[560px]">
          <p className="rise font-mono text-[12px] leading-4 text-ink-3">For founders who shipped with Cursor, Claude Code and friends</p>
          <h1
            className="rise mt-5 font-serif text-[44px] leading-[1.02] tracking-[-0.01em] text-balance text-ink sm:text-[64px] lg:text-[60px] xl:text-[76px]"
            style={{ ["--d" as string]: "60ms" }}
          >
            Your app was vibecoded. Nobody has to know
          </h1>
          <p
            className="rise mt-6 max-w-[34rem] text-[18px] leading-[28px] text-ink-2 sm:text-[19px] sm:leading-[30px]"
            style={{ ["--d" as string]: "120ms" }}
          >
            We redline every AI tell and hand back Figma and SwiftUI
          </p>
          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "180ms" }}>
            <a
              href={site.bookingUrl}
              className="group flex h-12 items-center gap-2 rounded-[10px] bg-ink px-5 text-[15px] font-medium text-paper transition-colors duration-150 hover:bg-ink-hover"
            >
              Send your screens
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="flex h-12 items-center rounded-[10px] border border-line-strong bg-card px-5 text-[15px] font-medium text-ink transition-colors duration-150 hover:bg-raised"
            >
              See pricing
            </a>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:justify-self-start">
          <Compare label="Habit tracker" before={<TallySlop />} after={<TallyClean />} />
          {/* margin notes, the way an editor marks a proof */}
          <ul className="pointer-events-none absolute top-[28px] left-full ml-6 hidden w-[180px] lg:block" aria-hidden="true">
            {notes.map((n) => (
              <li key={n.text} className="absolute left-0 flex items-center gap-2" style={{ top: n.top }}>
                <span className="h-px w-5 bg-pencil" />
                <span className="font-mono text-[12px] leading-4 whitespace-nowrap text-pencil">{n.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
