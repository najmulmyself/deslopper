import { Compare } from "./Compare";
import { LedgerClean, LedgerSlop } from "./screens/Ledger";
import { SousClean, SousSlop } from "./screens/Sous";

const cases = [
  {
    name: "Ledgerly",
    kind: "Budgeting app",
    story:
      "Built in a weekend with a coding agent. It worked, but the home screen glowed like a slot machine, and nobody trusts a slot machine with their rent.",
    changes: [
      "Neon on navy → white, with one blue for the number that matters",
      "Six rainbow bars → this month against last, on one quiet line",
      "$212.5 and $1,850 → every amount in one format, tabular",
      "“Supercharged by AI” → removed",
    ],
    before: <LedgerSlop />,
    after: <LedgerClean />,
  },
  {
    name: "Sous",
    kind: "Recipe app",
    story:
      "The AI part was the least interesting thing about it. The redesign moves the food to the front and lets the generator disappear into the product.",
    changes: [
      "“Magical Recipe Generator” → what you're cooking tonight",
      "Emoji in a gradient tile → a drawn dish in the app's own palette",
      "Three shouting pills → time and servings, in plain text",
      "Glowing gradient button → one solid action",
    ],
    before: <SousSlop />,
    after: <SousClean />,
  },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <div className="max-w-[640px]">
        <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[48px]">Before and after</h2>
        <p className="mt-5 text-[16px] leading-[26px] text-ink-2">
          Same features, same content, same order. Drag the red line across each phone to see what changed.
        </p>
      </div>
      <div className="mt-16 space-y-24">
        {cases.map((c, i) => (
          <article
            key={c.name}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Compare label={c.name} before={c.before} after={c.after} settle={62} />
            <div className="max-w-[480px]">
              <p className="font-mono text-[12px] leading-4 text-ink-3">
                {String(i + 1).padStart(2, "0")} · {c.kind}
              </p>
              <h3 className="mt-3 text-[28px] leading-tight font-medium tracking-[-0.01em]">{c.name}</h3>
              <p className="mt-4 text-[16px] leading-[26px] text-ink-2">{c.story}</p>
              <ul className="mt-8 border-t border-line">
                {c.changes.map((ch) => (
                  <li key={ch} className="flex gap-3 border-b border-line py-3 text-[15px] leading-[22px]">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-pencil" />
                    {ch}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-16 font-mono text-[12px] leading-4 text-ink-3">
        Concept redesigns with sample data, made to show the process
      </p>
    </section>
  );
}
