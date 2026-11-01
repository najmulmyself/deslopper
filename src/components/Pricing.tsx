import { Check } from "lucide-react";
import { plans, site } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
      <div className="max-w-[640px]">
        <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[48px]">Pricing</h2>
        <p className="mt-5 text-[16px] leading-[26px] text-ink-2">
          Fixed prices, no hourly billing. Start with a redline if you&apos;d rather make the fixes yourself.
        </p>
      </div>
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-[16px] border p-6 ${
              p.featured ? "border-ink bg-ink text-paper" : "border-line bg-card"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-[17px] font-medium">{p.name}</h3>
              <span className={`font-mono text-[12px] ${p.featured ? "text-[#c9c0b3]" : "text-ink-3"}`}>
                {p.turnaround}
              </span>
            </div>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-[40px] leading-none font-medium tracking-[-0.02em] tabular-nums">{p.price}</span>
              {p.cadence && (
                <span className={`text-[15px] ${p.featured ? "text-[#c9c0b3]" : "text-ink-2"}`}>{p.cadence}</span>
              )}
            </p>
            <p className={`mt-3 text-[15px] leading-[22px] ${p.featured ? "text-[#ddd5c9]" : "text-ink-2"}`}>
              {p.summary}
            </p>
            <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 ${p.featured ? "border-white/10" : "border-line"}`}>
              {p.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[14px] leading-[20px]">
                  <Check
                    size={16}
                    strokeWidth={1.75}
                    className={`mt-0.5 shrink-0 ${p.featured ? "text-[#e88a7f]" : "text-pencil"}`}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={site.bookingUrl}
              className={`mt-8 flex h-11 items-center justify-center rounded-[10px] text-[15px] font-medium transition-colors duration-150 ${
                p.featured
                  ? "bg-paper text-ink hover:bg-white"
                  : "border border-line-strong bg-paper text-ink hover:bg-raised"
              }`}
            >
              {p.cta}
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[14px] leading-[20px] text-ink-3">
        Building for Android or the web too? The same pass works for Jetpack Compose, React Native and landing pages.{" "}
        <a href={site.bookingUrl} className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink">
          Ask for a quote
        </a>
      </p>
    </section>
  );
}
