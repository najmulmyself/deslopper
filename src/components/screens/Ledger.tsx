import {
  ShoppingBasket,
  House,
  Car,
  Coffee,
  Wallet,
  ChartNoAxesColumn,
  Settings,
  ArrowDownRight,
  Ellipsis,
} from "lucide-react";
import { StatusBar } from "./StatusBar";

/* Deliberately plausible concept: weak hierarchy, ambiguous chart and mixed precision. */
export function LedgerSlop() {
  return (
    <div className="flex h-full flex-col bg-[#f3f4f6] text-[#374151]">
      <StatusBar />
      <div className="px-5 pt-3">
        <p className="text-lg font-medium">Overview</p>
        <p className="mt-1 text-xs text-[#6b7280]">
          October · Personal account
        </p>
      </div>
      <div className="mx-4 mt-5 grid grid-cols-2 gap-3">
        {[
          ["Balance", "$12,345.67"],
          ["Spent", "$3,142.80"],
          ["Last month", "$3,455.20"],
          ["Change", "−$312.40"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-lg border border-[#d1d5db] bg-white p-3"
          >
            <p className="text-xs text-[#6b7280]">{title}</p>
            <p className="mt-2 text-sm font-medium">{value}</p>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-4 rounded-lg border border-[#d1d5db] bg-white p-3">
        <p className="text-xs">Activity</p>
        <div
          className="mt-3 flex h-16 items-end gap-3"
          aria-label="Unlabeled activity chart"
        >
          {[35, 60, 45, 80, 65, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[#94a3b8]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mx-4 mt-4 rounded-lg border border-[#d1d5db] bg-white p-3">
        <p className="mb-3 text-xs">Expenses</p>
        {[
          ["Groceries", "$642.18"],
          ["Rent", "$1,850"],
          ["Transport", "$212.5"],
          ["Coffee", "$89.40"],
          ["Other", "$348.72"],
        ].map(([t, v]) => (
          <p key={t} className="mb-2 text-xs">
            {t} — {v}
          </p>
        ))}
      </div>
      <div className="mt-auto flex justify-around border-t border-[#d1d5db] bg-white py-4 text-xs">
        <span>Overview</span>
        <span>Reports</span>
        <span>Settings</span>
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
    { i: Ellipsis, t: "Other", v: 348.72, share: 0.11 },
  ];
  const fmt = (n: number) =>
    `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  // daily cumulative spend, this month vs last
  const line =
    "M0 70 L20 66 L40 60 L60 58 L80 49 L100 46 L120 40 L140 37 L160 30 L180 27 L200 21 L216 18";
  const last =
    "M0 72 L20 69 L40 63 L60 57 L80 52 L100 44 L120 39 L140 32 L160 26 L180 20 L200 14 L216 9";
  return (
    <div className="flex h-full flex-col bg-white text-[#14161a]">
      <StatusBar />
      <div className="px-5 pt-3">
        <p className="text-[12px] text-[#6b7180]">Spent in October</p>
        <p className="mt-1 text-[30px] font-semibold leading-none tracking-[-0.02em] tabular-nums">
          $3,142.80
        </p>
        <p className="mt-2 flex items-center gap-1 text-[12px] text-[#15803d]">
          <ArrowDownRight size={14} strokeWidth={1.75} />
          <span className="tabular-nums">$312.40 less than September</span>
        </p>
      </div>
      <div className="mx-4 mt-4 rounded-[16px] border border-black/[0.07] p-3">
        <svg
          viewBox="0 0 216 80"
          className="h-[84px] w-full"
          aria-hidden="true"
        >
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" x2="216" y1={y} y2={y} stroke="#eef0f3" />
          ))}
          <path
            d={last}
            fill="none"
            stroke="#c4c9d2"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <path
            d={line}
            fill="none"
            stroke={ink}
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="216" cy="18" r="3.5" fill={ink} />
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-[#8a909c]">
          <span>
            Oct <span className="text-[#1d4ed8]">—</span> / Sep ···
          </span>
          <span>30 Oct</span>
        </div>
      </div>
      <p className="mx-5 mt-3 text-[13px] font-medium">Categories</p>
      <div className="mt-1 px-5">
        {cats.map(({ i: Icon, t, v }) => (
          <div key={t} className="py-[7px]">
            <div className="flex items-center gap-2.5">
              <Icon size={16} strokeWidth={1.5} className="text-[#6b7180]" />
              <span className="flex-1 text-[14px]">{t}</span>
              <span className="text-[14px] tabular-nums">{fmt(v)}</span>
            </div>
            <div className="mt-1.5 ml-[26px] h-[3px] rounded-full bg-[#eef0f3]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(v / 3142.8) * 100}%`,
                  background: t === "Rent" ? ink : "#9aa1ad",
                }}
              />
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
