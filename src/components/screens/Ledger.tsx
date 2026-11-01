import { ShoppingBasket, House, Car, Coffee, Wallet, ChartNoAxesColumn, Settings, ArrowDownRight } from "lucide-react";
import { StatusBar } from "./StatusBar";

/* A budgeting app, vibecoded */
export function LedgerSlop() {
  const bars = [
    ["#f43f5e", 70],
    ["#f59e0b", 45],
    ["#22c55e", 85],
    ["#06b6d4", 55],
    ["#a855f7", 95],
    ["#ec4899", 62],
  ] as const;
  const cats = [
    ["🛒", "Groceries", "$642.18", "text-emerald-400"],
    ["🏠", "Rent", "$1,850", "text-pink-400"],
    ["🚗", "Transport", "$212.5", "text-cyan-400"],
    ["☕", "Coffee ☕☕", "$89.40", "text-amber-400"],
  ] as const;
  return (
    <div className="flex h-full flex-col bg-[#050816] text-white">
      <StatusBar tone="light" />
      <div className="px-5 pt-1">
        <p className="text-[18px] font-extrabold">💰 Money Dashboard 💸</p>
        <p className="text-[11px] text-white/60">Your finances, supercharged by AI 🤖</p>
      </div>
      <div className="mx-4 mt-4 rounded-3xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-violet-600 p-[1.5px] shadow-[0_0_36px_rgba(34,211,238,0.5)]">
        <div className="rounded-3xl bg-[#0b1024] p-4">
          <p className="text-[10px] font-bold tracking-[0.22em] text-cyan-300">TOTAL BALANCE</p>
          <p className="slop-text mt-1 text-[32px] font-black leading-none">$12,345.67</p>
          <p className="mt-2 inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
            ↑ 23.5% 🚀🚀
          </p>
        </div>
      </div>
      <div className="mx-4 mt-4 flex h-[92px] items-end gap-2 rounded-2xl bg-white/5 p-3">
        {bars.map(([c, h], i) => (
          <span
            key={i}
            className="flex-1 rounded-t-md"
            style={{ height: `${h}%`, background: c, boxShadow: `0 0 12px ${c}` }}
          />
        ))}
      </div>
      <p className="mx-5 mt-4 text-[10px] font-bold tracking-[0.22em] text-violet-300">SPENDING BREAKDOWN 📊</p>
      <div className="mt-2 space-y-2 px-4">
        {cats.map(([e, t, v, c]) => (
          <div key={t} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-[18px]">{e}</span>
            <span className="flex-1 text-[13px] font-semibold">{t}</span>
            <span className={`text-[13px] font-bold ${c}`}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LedgerClean() {
  const ink = "#1d4ed8";
  const cats = [
    { i: House, t: "Rent", v: 1850, share: 0.59 },
    { i: ShoppingBasket, t: "Groceries", v: 642.18, share: 0.2 },
    { i: Car, t: "Transport", v: 212.5, share: 0.07 },
    { i: Coffee, t: "Coffee", v: 89.4, share: 0.03 },
  ];
  const fmt = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  // daily cumulative spend, this month vs last
  const line = "M0 70 L20 66 L40 60 L60 58 L80 49 L100 46 L120 40 L140 37 L160 30 L180 27 L200 21 L216 18";
  const last = "M0 72 L20 69 L40 63 L60 57 L80 52 L100 44 L120 39 L140 32 L160 26 L180 20 L200 14 L216 9";
  return (
    <div className="flex h-full flex-col bg-white text-[#14161a]">
      <StatusBar />
      <div className="px-5 pt-3">
        <p className="text-[12px] text-[#6b7180]">Spent in October</p>
        <p className="mt-1 text-[30px] font-semibold leading-none tracking-[-0.02em] tabular-nums">$3,142.80</p>
        <p className="mt-2 flex items-center gap-1 text-[12px] text-[#15803d]">
          <ArrowDownRight size={14} strokeWidth={1.75} />
          <span className="tabular-nums">$312.40 less than September</span>
        </p>
      </div>
      <div className="mx-4 mt-4 rounded-[16px] border border-black/[0.07] p-3">
        <svg viewBox="0 0 216 80" className="h-[84px] w-full" aria-hidden="true">
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" x2="216" y1={y} y2={y} stroke="#eef0f3" />
          ))}
          <path d={last} fill="none" stroke="#c4c9d2" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d={line} fill="none" stroke={ink} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="216" cy="18" r="3.5" fill={ink} />
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-[#8a909c]">
          <span>1 Oct</span>
          <span>30 Oct</span>
        </div>
      </div>
      <p className="mx-5 mt-5 text-[13px] font-medium">Categories</p>
      <div className="mt-1 px-5">
        {cats.map(({ i: Icon, t, v, share }) => (
          <div key={t} className="py-[9px]">
            <div className="flex items-center gap-2.5">
              <Icon size={16} strokeWidth={1.5} className="text-[#6b7180]" />
              <span className="flex-1 text-[14px]">{t}</span>
              <span className="text-[14px] tabular-nums">{fmt(v)}</span>
            </div>
            <div className="mt-1.5 ml-[26px] h-[3px] rounded-full bg-[#eef0f3]">
              <div className="h-full rounded-full" style={{ width: `${share * 100}%`, background: t === "Rent" ? ink : "#9aa1ad" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex h-[60px] items-start justify-around border-t border-black/[0.06] pt-2.5 text-[#9aa1ad]">
        <Wallet size={20} strokeWidth={1.5} className="text-[#14161a]" />
        <ChartNoAxesColumn size={20} strokeWidth={1.5} />
        <Settings size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}
