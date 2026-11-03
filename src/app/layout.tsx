import type { Metadata, Viewport } from "next";
import "@fontsource-variable/instrument-sans";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource-variable/geist-mono";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: "Deslopper · Your app was vibecoded. Nobody has to know",
  description: site.description,
  openGraph: {
    title: "Deslopper",
    description: site.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deslopper",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
