import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { site } from "@/lib/site";

export const navLinks = [
  ["Work", "#work"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <nav className="relative mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-8">
        <Logo />
        <div className="flex items-center gap-1">
          <ul className="mr-3 hidden items-center gap-1 md:flex">
            {navLinks.map(([label, href]) => (
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
            className="flex h-9 items-center rounded-[10px] bg-ink px-4 text-[14px] font-medium text-paper transition-colors duration-150 hover:bg-ink-hover"
          >
            Send your screens
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </nav>
    </header>
  );
}
