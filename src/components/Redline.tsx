export function Redline() {
  return (
    <section id="redline" className="bg-card border-y border-line">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">Inside the handoff</p>
          <h2 className="section-title mt-4">A note you can act on.</h2>
          <p className="mt-5 max-w-[380px] text-base leading-7 text-ink-2">
            A redline explains what to change, why it matters, and how to
            implement it. Here’s one from the Ledgerly study.
          </p>
          <a
            href="#pricing"
            className="mt-6 inline-block py-2 text-sm underline underline-offset-4"
          >
            Explore the Redline service →
          </a>
        </div>
        <div className="border border-line-strong bg-paper p-5 sm:p-8">
          <div className="flex justify-between border-b border-line pb-4 font-mono text-xs text-ink-3">
            <span>LEDGERLY / NOTE 03</span>
            <span className="text-pencil">Sample redline</span>
          </div>
          <h3 className="mt-6 text-xl font-medium">Let the amounts line up.</h3>
          <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="mb-3 text-xs text-ink-3">Original formatting</p>
              <div className="space-y-2 text-ink-2">
                <p>$1,850</p>
                <p>$212.5</p>
                <p>$89.40</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs text-pencil">Consistent precision</p>
              <div className="space-y-2 text-right tabular-nums">
                <p>$1,850.00</p>
                <p>$212.50</p>
                <p>$89.40</p>
              </div>
            </div>
          </div>
          <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-ink-2">
            Keep the decimal point in the same column. Readers can compare
            values without mentally reformatting them.
          </p>
          <details className="mt-5 group">
            <summary className="cursor-pointer py-2 text-sm font-medium text-pencil">
              Inspect the implementation note
            </summary>
            <div className="mt-3 border-l border-pencil pl-4 text-sm leading-6 text-ink-2">
              <p>
                Use the same currency formatter for every row: exactly two
                fraction digits for these USD amounts.
              </p>
              <p className="mt-2">
                Right-align the value column. Use{" "}
                <code className="text-xs">
                  font-variant-numeric: tabular-nums
                </code>{" "}
                on the web, or{" "}
                <code className="text-xs">.monospacedDigit()</code> in SwiftUI.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
