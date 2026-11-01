import { Signal, Wifi, BatteryFull } from "lucide-react";

export function StatusBar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-[#111]" : "text-white";
  return (
    <div className={`flex h-[46px] items-center justify-between px-6 pt-1 text-[13px] font-semibold ${color}`}>
      <span className="tabular-nums">9:41</span>
      <span className="flex items-center gap-1">
        <Signal size={13} strokeWidth={2.25} />
        <Wifi size={13} strokeWidth={2.25} />
        <BatteryFull size={16} strokeWidth={2} />
      </span>
    </div>
  );
}
