import { ArrowRight } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-4 pt-20 sm:px-8 lg:pt-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[560px] font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-balance sm:text-[56px]">
            Send us the screen you&apos;re least proud of
          </h2>
          <a
            href={site.bookingUrl}
            className="group flex h-12 w-fit shrink-0 items-center gap-2 rounded-[10px] bg-ink px-5 text-[15px] font-medium text-paper transition-colors duration-150 hover:bg-[#35302a]"
          >
            Send your screens
            <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-20 overflow-hidden pt-4 pb-10 lg:mt-28">
          <Wordmark />
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-[13px] leading-5 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Deslopper. Design for things that were built fast</p>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="transition-colors duration-150 hover:text-ink">
              {site.email}
            </a>
            <a href="#top" className="transition-colors duration-150 hover:text-ink">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
