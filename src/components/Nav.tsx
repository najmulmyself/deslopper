import { Logo } from "./Logo";
import { site } from "@/lib/site";

const links = [
  ["Work", "#work"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <Logo />
        <div className="flex items-center gap-1">
          <ul className="mr-3 hidden items-center gap-1 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-[14px] text-ink-2 transition-colors duration-150 hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.bookingUrl}
            className="flex h-9 items-center rounded-[10px] bg-ink px-4 text-[14px] font-medium text-paper transition-colors duration-150 hover:bg-[#35302a]"
          >
            Send your screens
          </a>
        </div>
      </nav>
    </header>
  );
}
