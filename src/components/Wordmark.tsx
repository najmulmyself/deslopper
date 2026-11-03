import { LogoMark } from "./Logo";

export function Wordmark() {
  return (
    <div
      className="flex items-baseline gap-[0.03em] text-[clamp(48px,16vw,200px)] font-medium leading-none tracking-[-0.06em] text-ink"
      aria-label="deslopper"
      role="img"
    >
      <span aria-hidden="true">deslopper</span>
      <LogoMark size={0} className="h-[0.45em] w-[0.45em] shrink-0" />
    </div>
  );
}
