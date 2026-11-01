import { Clock, Users, ChevronLeft, Bookmark } from "lucide-react";
import { StatusBar } from "./StatusBar";

/* A recipe app, vibecoded */
export function SousSlop() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#fdf2ff] to-[#e0e7ff] text-[#1e1b4b]">
      <StatusBar />
      <div className="px-5 pt-2 text-center">
        <span className="inline-block rounded-full bg-gradient-to-r from-orange-400 to-pink-500 px-2.5 py-0.5 text-[9px] font-bold text-white">
          ✨ AI-POWERED ✨
        </span>
        <p className="mt-2 text-[21px] font-black leading-tight">
          Your <span className="slop-text">Magical</span> Recipe Generator 🍳
        </p>
        <p className="mt-1 text-[11px] text-indigo-900/60">Unlock culinary greatness with the power of AI!</p>
      </div>
      <div className="mx-4 mt-4 rounded-3xl bg-white/70 p-4 shadow-[0_8px_30px_rgba(139,92,246,0.35)] backdrop-blur">
        <div className="flex h-[118px] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-200 via-pink-200 to-violet-300 text-[54px]">
          🍜
        </div>
        <p className="mt-3 text-[15px] font-extrabold">🔥 Spicy Tomato Ramen 🔥</p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] font-bold">
          <span className="rounded-full bg-pink-100 px-2 py-0.5 text-pink-600">⏱️ 25 MIN</span>
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-violet-600">👥 2 SERVINGS</span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-600">🌶️ HOT</span>
        </div>
      </div>
      <div className="mt-auto mb-5 px-4">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 py-3.5 text-center text-[14px] font-extrabold text-white shadow-[0_0_24px_rgba(217,70,239,0.6)]">
          Generate Magic Recipe 🪄✨
        </div>
        <p className="mt-2 text-center text-[10px] text-indigo-900/50">Powered by advanced AI 🤖</p>
      </div>
    </div>
  );
}

/* Flat illustration of the dish, so the card has something real to show */
function Bowl() {
  return (
    <svg viewBox="0 0 240 132" className="h-full w-full" aria-hidden="true">
      <rect width="240" height="132" fill="#e9dccb" />
      <circle cx="120" cy="72" r="56" fill="#f4efe6" />
      <circle cx="120" cy="72" r="44" fill="#c0492b" />
      <path d="M86 70c10-8 18 8 28 0s18 8 28 0 18 8 22 2" stroke="#f1d7a8" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M90 84c10-8 18 8 28 0s18 8 28 0 14 6 18 2" stroke="#f1d7a8" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="102" cy="56" r="9" fill="#f6e7b8" />
      <circle cx="102" cy="56" r="4.5" fill="#e3a21a" />
      <ellipse cx="140" cy="58" rx="9" ry="5" fill="#4f7a3a" transform="rotate(-30 140 58)" />
      <ellipse cx="132" cy="92" rx="8" ry="4.5" fill="#4f7a3a" transform="rotate(20 132 92)" />
      <rect x="172" y="20" width="5" height="96" rx="2.5" fill="#8a5a36" transform="rotate(18 172 20)" />
      <rect x="182" y="22" width="5" height="96" rx="2.5" fill="#8a5a36" transform="rotate(18 182 22)" />
    </svg>
  );
}

export function SousClean() {
  const steps = ["Simmer tomatoes with gochujang", "Cook noodles 4 min, drain", "Soft-boil the eggs, 6½ min"];
  return (
    <div className="flex h-full flex-col bg-[#fbf8f3] text-[#2a2119]">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-1 text-[#8b7d6d]">
        <ChevronLeft size={22} strokeWidth={1.5} />
        <Bookmark size={18} strokeWidth={1.5} />
      </div>
      <div className="mx-4 mt-2 h-[132px] overflow-hidden rounded-[16px]">
        <Bowl />
      </div>
      <div className="px-5 pt-4">
        <p className="text-[12px] text-[#8b7d6d]">Tonight, from what&apos;s in your fridge</p>
        <p className="mt-1 font-serif text-[26px] leading-[1.05]">Tomato ramen with a jammy egg</p>
        <div className="mt-3 flex gap-4 text-[12px] text-[#6b5e50]">
          <span className="flex items-center gap-1.5">
            <Clock size={14} strokeWidth={1.5} />
            25 min
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} strokeWidth={1.5} />
            Serves 2
          </span>
        </div>
      </div>
      <div className="mx-5 mt-4 border-t border-black/[0.07] pt-3">
        {steps.map((s, i) => (
          <div key={s} className="flex gap-3 py-1.5 text-[13px]">
            <span className="w-3 font-mono text-[12px] text-[#a08f7c]">{i + 1}</span>
            <span>{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto mb-6 px-4">
        <div className="rounded-[12px] bg-[#2a2119] py-3 text-center text-[14px] font-medium text-[#fbf8f3]">
          Start cooking
        </div>
      </div>
    </div>
  );
}
