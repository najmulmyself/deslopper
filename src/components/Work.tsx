import { Compare } from "./Compare";
import { LedgerClean, LedgerSlop } from "./screens/Ledger";
import { SousClean } from "./screens/Sous";

const notes = [
  [
    "01",
    "Answer the first question",
    "How much have I spent? Put the monthly total first, with the previous month alongside it. A balance alone doesn’t answer that question.",
  ],
  [
    "02",
    "Give the chart a reference",
    "Label the period and compare two months on the same scale. Colour identifies the current month; the dashed line supplies context.",
  ],
  [
    "03",
    "Make amounts easy to scan",
    "Align amounts on the right, use tabular figures and keep two decimal places. The largest category appears first.",
  ],
];

export function Work() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-8 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Selected studies / 02–03</p>
            <h2 className="section-title mt-4">The work. And the why.</h2>
          </div>
          <p className="max-w-[300px] text-sm leading-6 text-ink-3">
            Self-initiated concepts with sample data. A look at the decisions,
            not client results.
          </p>
        </div>
        <article className="mt-10 grid overflow-hidden border border-line lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[#e9edf1] px-2 py-8 sm:py-12">
            <Compare
              label="Ledgerly"
              before={<LedgerSlop />}
              after={<LedgerClean />}
            />
          </div>
          <div className="bg-card p-6 sm:p-10">
            <p className="eyebrow">02 / Finance · Concept redesign</p>
            <h3 className="mt-4 font-serif text-[40px] leading-tight">
              Ledgerly
            </h3>
            <p className="mt-3 text-lg leading-7 text-ink-2">
              A spending screen you can read before your coffee gets cold.
            </p>
            <p className="mt-5 text-sm leading-6 text-ink-2">
              The original has no neon or gradients. Its problem is quieter:
              every number gets the same urgency. This study reorganises the
              screen around one task: understanding this month’s spending.
            </p>
            <ol className="mt-7 border-t border-line">
              {notes.map(([n, title, text]) => (
                <li key={n} className="flex gap-4 border-b border-line py-5">
                  <span className="pt-1 font-mono text-xs text-pencil">
                    {n}
                  </span>
                  <div>
                    <details>
                      <summary className="cursor-pointer py-1 font-medium">
                        {title}
                      </summary>
                      <p className="mt-2 text-sm leading-6 text-ink-2">
                        {text}
                      </p>
                    </details>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href="#redline"
              className="mt-6 inline-block py-2 text-sm text-pencil underline underline-offset-4"
            >
              Open the sample redline ↓
            </a>
          </div>
        </article>
        <article className="mt-8 grid items-center gap-8 border-b border-line pb-10 md:grid-cols-2 md:gap-16">
          <div
            className="relative h-[330px] overflow-hidden bg-[#e9dccb] px-5 pt-8 sm:h-[380px]"
            aria-label="Detail of the redesigned Sous recipe screen"
          >
            <div className="mx-auto h-[592px] w-[280px] overflow-hidden rounded-t-[28px] border border-[#bfa88c] bg-paper shadow-phone">
              <SousClean />
            </div>
          </div>
          <div className="max-w-[430px]">
            <p className="eyebrow">03 / Food · Concept redesign</p>
            <h3 className="mt-4 font-serif text-[40px]">Sous</h3>
            <p className="mt-3 text-lg leading-7">
              Dinner comes first. The generator can wait.
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-2">
              A warm palette, a dish illustration and recipe-like typography
              give this app its own character. Time and servings sit together so
              you can decide whether it fits your evening.
            </p>
            <p className="mt-5 border-l-2 border-pencil pl-4 text-sm leading-6 text-ink-2">
              The point isn’t to remove personality. It’s to make the
              personality belong to the product.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
