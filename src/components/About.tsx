import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">The designer</p>
          <h2 className="section-title mt-4">
            A person behind every decision.
          </h2>
          <a
            href={site.designer.url}
            className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-pencil text-base"
          >
            {site.designer.name} <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-3 text-sm text-ink-3">Explore my portfolio</p>
        </div>
        <div className="max-w-[620px]">
          <p className="font-serif text-[28px] leading-[1.3] sm:text-[34px]">
            A habit tracker should feel different from a budgeting app. Your
            product deserves its own point of view.
          </p>
          <p className="mt-5 text-base leading-7 text-ink-2">
            That starts with what people come to do. Every pass considers the
            order of information, the next action, the language and the small
            details that make a screen easier to use.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-2">
            AI can help with variants and implementation. The design decisions
            still need an explanation. You get those explanations alongside the
            files.
          </p>
          <a
            href={site.bookingUrl}
            className="mt-6 inline-block py-3 text-sm underline decoration-pencil underline-offset-4"
          >
            Tell us what you’re building →
          </a>
        </div>
      </div>
    </section>
  );
}
