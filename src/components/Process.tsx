const steps = [
  {
    n: "01",
    title: "Send the screens",
    body: "Email screenshots or a TestFlight link. Tell us who the app is for and what feels unfinished.",
  },
  {
    n: "02",
    title: "Agree on the changes",
    body: "Get a redline explaining the decisions. For a redesign, review the direction before it’s applied to every screen.",
  },
  {
    n: "03",
    title: "Pick up the files",
    body: "Your agreed deliverables, ready to use: annotations, Figma components, or SwiftUI views. The reasoning comes with them.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-card">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-8 lg:py-20">
        <p className="eyebrow">How we work</p>
        <h2 className="section-title mt-4 max-w-[600px]">
          From your first screenshot to the final handoff.
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-line-strong pt-4">
              <p className="font-mono text-xs text-pencil">{step.n}</p>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
