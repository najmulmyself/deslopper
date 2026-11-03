import { plans, site } from "@/lib/site";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-[1200px] px-4 py-10 sm:px-8 lg:py-20"
    >
      <div className="max-w-[640px]">
        <p className="eyebrow">Choose the help you need</p>
        <h2 className="section-title mt-4">A clear scope. A fixed price.</h2>
        <p className="mt-5 text-base leading-7 text-ink-2">
          A second pair of eyes, a finished redesign, or an ongoing design
          partner.
        </p>
      </div>
      <div className="mt-8 border-t border-line-strong">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`grid gap-5 border-b border-line-strong px-4 py-6 sm:px-6 md:grid-cols-[1fr_1.3fr_0.8fr] md:gap-8 ${plan.featured ? "bg-ink text-paper" : ""}`}
          >
            <div>
              <h3 className="text-xl font-medium">{plan.name}</h3>
              <p
                className={`mt-2 font-mono text-xs ${plan.featured ? "text-on-ink-3" : "text-ink-3"}`}
              >
                {plan.turnaround}
              </p>
            </div>
            <div>
              <p
                className={`text-sm leading-6 ${plan.featured ? "text-on-ink-2" : "text-ink-2"}`}
              >
                {plan.summary}
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer py-2 text-sm underline underline-offset-4">
                  What’s included
                </summary>
                <ul
                  className={`mt-2 space-y-2 pb-2 text-sm leading-6 ${plan.featured ? "text-on-ink-2" : "text-ink-2"}`}
                >
                  {plan.features.map((f) => (
                    <li key={f}>— {f}</li>
                  ))}
                </ul>
              </details>
            </div>
            <div className="flex items-center justify-between gap-3 md:block md:text-right">
              <p className="text-[28px] leading-tight tabular-nums">
                {plan.price}
                <span className="text-xs">{plan.cadence}</span>
              </p>
              <a
                href={site.bookingUrl}
                className={`inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm md:mt-4 ${plan.featured ? "bg-paper text-ink hover:bg-white" : "border border-line-strong hover:bg-raised"}`}
              >
                {plan.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-6 text-ink-3">
        Building for Android or the web?{" "}
        <a
          href={site.bookingUrl}
          className="text-ink underline underline-offset-4"
        >
          Ask about your project.
        </a>
      </p>
    </section>
  );
}
