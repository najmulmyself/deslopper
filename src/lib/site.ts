// Everything a non-developer may want to change lives here.
// Prices and turnaround are placeholders until confirmed.

export const site = {
  name: "Deslopper",
  domain: "deslopper.com",
  email: "hello@deslopper.com",
  // Swap for a Cal.com or Calendly link when you have one.
  bookingUrl: "mailto:hello@deslopper.com?subject=Deslop%20my%20app",
  description:
    "Deslopper redesigns vibecoded iOS apps and websites so they stop looking AI-made. Screens in Figma and SwiftUI, App Store screenshots, in a week.",
};

export type Plan = {
  name: string;
  price: string;
  cadence?: string;
  summary: string;
  turnaround: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Redline",
    price: "$390",
    summary: "Every screen marked up, so you or your agent can fix it",
    turnaround: "48 hours",
    features: [
      "Up to 12 screens audited",
      "Annotated PDF, one note per tell",
      "Exact values for spacing, type and color",
      "A prompt file your coding agent can follow",
    ],
    cta: "Get a redline",
  },
  {
    name: "Screen pack",
    price: "$1,900",
    summary: "Your key screens redesigned and handed back as code",
    turnaround: "7 days",
    features: [
      "Up to 8 screens redesigned",
      "Figma file with components and tokens",
      "SwiftUI views as a pull request",
      "App Store screenshots for 6.9″ and 6.5″",
      "Two rounds of revisions",
    ],
    cta: "Deslop my app",
    featured: true,
  },
  {
    name: "Retainer",
    price: "$4,500",
    cadence: "/ month",
    summary: "A designer on call while you keep shipping",
    turnaround: "Updates every 2 days",
    features: [
      "One request at a time, no cap",
      "Shared Slack channel",
      "Every new screen checked before release",
      "Pause or cancel any month",
    ],
    cta: "Start a retainer",
  },
];
