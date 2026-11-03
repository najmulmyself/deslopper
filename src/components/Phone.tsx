import type { ReactNode } from "react";

export function Phone({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[592px] w-[264px] sm:w-[280px] shrink-0 rounded-[42px] bg-ink p-2 shadow-phone">
      <div className="relative h-full overflow-hidden rounded-[34px] bg-white">
        {children}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-black"
        />
      </div>
    </div>
  );
}
