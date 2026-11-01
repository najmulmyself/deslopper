import { PenTool, GitPullRequest, Smartphone, FileText } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Send the screens",
    body: "Screenshots, a TestFlight link or the repo. A short form tells us who the app is for. No call needed unless you want one.",
  },
  {
    n: "02",
    title: "Get the redline",
    body: "Within 48 hours, every screen comes back marked up in red: what reads as AI, what changes, and the exact values.",
  },
  {
    n: "03",
    title: "Merge the redesign",
    body: "We redesign around your product, not a trend, and deliver Figma plus SwiftUI views you can merge the same day.",
  },
];

const box = [
  { i: PenTool, t: "Figma file", d: "Components, tokens, light and dark" },
  { i: GitPullRequest, t: "SwiftUI pull request", d: "Views that match the file, in your repo" },
  { i: Smartphone, t: "App Store screenshots", d: "Sized for 6.9″ and 6.5″ displays" },
  { i: FileText, t: "The redline", d: "Why each change was made, for your next screen" },
];

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-card">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-8 lg:py-28">
        <h2 className="max-w-[640px] font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[48px]">
          From screenshots to a pull request in a week
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="border-t border-line-strong pt-5">
              <p className="font-mono text-[12px] leading-4 text-pencil">{s.n}</p>
              <h3 className="mt-3 text-[20px] leading-7 font-medium">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-[24px] text-ink-2">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-16">
          <div>
            <h3 className="text-[20px] leading-7 font-medium">What you get back</h3>
            <p className="mt-2 text-[15px] leading-[24px] text-ink-2">
              Files your team, or your coding agent, can pick up without a meeting.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-2">
            {box.map(({ i: Icon, t, d }) => (
              <li key={t} className="flex gap-3 bg-paper p-5">
                <Icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-ink-3" />
                <div>
                  <p className="text-[15px] leading-[22px] font-medium">{t}</p>
                  <p className="mt-0.5 text-[14px] leading-[20px] text-ink-2">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
