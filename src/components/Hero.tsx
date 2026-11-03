import { ArrowRight } from "lucide-react";
import { Phone } from "./Phone";
import { TallyClean } from "./screens/Tally";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1200px] px-4 pb-14 pt-12 sm:px-8 lg:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">
            An independent design studio for apps built fast
          </p>
          <h1 className="mt-6 max-w-[620px] font-serif text-[48px] leading-[1.02] tracking-[-0.025em] text-balance sm:text-[64px] xl:text-[76px]">
            Your app was vibecoded. Nobody has to know
          </h1>
          <p className="mt-6 max-w-[470px] text-lg leading-relaxed text-ink-2">
            You made it work. Let’s make it feel considered. Screen-by-screen
            design, with the Figma files and SwiftUI to ship it.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={site.bookingUrl}
              className="flex min-h-12 items-center gap-3 rounded-lg bg-ink px-5 text-sm font-medium text-paper hover:bg-ink-hover"
            >
              Send your screens <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="min-h-12 content-center text-sm underline decoration-line-strong underline-offset-4 hover:decoration-ink"
            >
              See the decisions behind the design
            </a>
          </div>
          <p className="mt-8 border-t border-line pt-4 text-sm text-ink-3">
            Redlines · Interface design · SwiftUI handoff
          </p>
        </div>
        <figure className="relative flex flex-col items-center border border-line bg-raised/50 px-2 py-8 sm:py-10">
          <div className="mb-6 flex w-full justify-between gap-4 font-mono text-[11px] text-ink-3">
            <span>STUDY 01 / TALLY</span>
            <span>Interface detail</span>
          </div>
          <div className="h-[360px] overflow-hidden border-b border-line sm:h-auto sm:border-0">
            <Phone>
              <TallyClean />
            </Phone>
          </div>
          <figcaption className="mt-6 max-w-[300px] text-sm leading-6 text-ink-2">
            <span className="text-pencil">A little less noise.</span> Your
            progress, what’s left, and a clear next step. Concept redesign.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
