import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you need access to my code?",
    a: "No. Screenshots are enough for a redline and a Figma redesign. For the SwiftUI pull request we need read access to the repo, or we send the views as files you drop in.",
  },
  {
    q: "Will you change what my app does?",
    a: "No. Features, content and the order of screens stay. We change how it looks and reads. Bigger product ideas go into the redline as suggestions, never into the build.",
  },
  {
    q: "My app has a brand already. Will you replace it?",
    a: "A real logo, colour or typeface stays and the redesign is built around it. A purple-to-blue gradient and a sparkle icon are usually not a brand, and we'll say so.",
  },
  {
    q: "Is this just another AI doing the redesign?",
    a: "We use AI where it's good, like generating variants and writing boilerplate SwiftUI. Every decision about spacing, type, colour and copy is made and checked by a designer.",
  },
  {
    q: "What if I don't like the result?",
    a: "Screen packs include two rounds of revisions. If the first direction is wrong, we stop and redo it before going further, so you never end up paying for eight screens you won't use.",
  },
  {
    q: "Who owns the work?",
    a: "You do, in full, once the invoice is paid. Figma files, code and screenshots are yours to change and ship.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-card">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-20 sm:px-8 lg:grid-cols-[360px_1fr] lg:gap-16 lg:py-28">
        <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[48px]">Questions</h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-[17px] leading-[24px] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus
                  size={18}
                  strokeWidth={1.5}
                  className="shrink-0 text-ink-3 transition-transform duration-200 ease-out group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[620px] pb-6 text-[15px] leading-[24px] text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
