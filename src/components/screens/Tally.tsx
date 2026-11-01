import { Check, Droplet, BookOpen, Wind, Footprints, House, ChartNoAxesColumn, User, Plus } from "lucide-react";
import { StatusBar } from "./StatusBar";

/* A habit tracker, as a coding agent built it in an afternoon */
export function TallySlop() {
  const habits = [
    { e: "💧", t: "Drink Water", s: "8 glasses!!", g: "from-cyan-400 to-blue-500", done: true },
    { e: "🧘", t: "Meditate", s: "10 mins of zen ✨", g: "from-fuchsia-500 to-purple-600", done: true },
    { e: "📚", t: "Read 20 Pages", s: "Knowledge is power 💪", g: "from-amber-400 to-pink-500", done: false },
    { e: "🏃", t: "Morning Run", s: "Let's gooo 🔥", g: "from-emerald-400 to-teal-500", done: false },
  ];
  return (
    <div className="flex h-full flex-col bg-[#0b0b1a] text-white">
      <div className="bg-gradient-to-br from-[#7c3aed] via-[#6366f1] to-[#06b6d4] pb-5">
        <StatusBar tone="light" />
        <div className="px-5 pt-2">
          <p className="text-[19px] font-extrabold leading-tight">Welcome back, Alex! 👋</p>
          <p className="mt-1 text-[12px] text-white/80">Let&apos;s crush your goals today!! 🚀</p>
        </div>
      </div>
      <div className="-mt-3 mx-4 rounded-3xl border border-purple-400/40 bg-[#17173a] p-4 shadow-[0_0_30px_rgba(168,85,247,0.55)]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[0.2em] text-purple-300">CURRENT STREAK</span>
          <span className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-2 py-0.5 text-[9px] font-bold">
            NEW ✨
          </span>
        </div>
        <p className="slop-text mt-1 text-[34px] font-black leading-none">🔥 7 DAYS!!</p>
        <p className="mt-2 text-[11px] text-purple-200/80">✨ AI Insight: You&apos;re on fire! Keep it up!!</p>
      </div>
      <p className="mx-5 mt-5 text-[10px] font-bold tracking-[0.2em] text-cyan-300">TODAY&apos;S HABITS 🎯</p>
      <div className="mt-2 space-y-[9px] px-4">
        {habits.map((h) => (
          <div
            key={h.t}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-[9px] shadow-[0_0_14px_rgba(99,102,241,0.25)]"
          >
            <span className="text-[20px]">{h.e}</span>
            <div className="flex-1">
              <p className="text-[13px] font-bold">{h.t}</p>
              <p className="text-[10px] text-white/60">{h.s}</p>
            </div>
            <span
              className={`flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gradient-to-br ${h.g} text-[11px] ${h.done ? "" : "opacity-30"}`}
            >
              ✓
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto mb-3 mx-4 flex justify-around rounded-full bg-white/10 py-2.5 text-[18px] backdrop-blur">
        <span>🏠</span>
        <span>📊</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 text-[14px]">➕</span>
        <span>👤</span>
      </div>
    </div>
  );
}

/* The same screen, after a redline pass */
export function TallyClean() {
  const moss = "#3f6b43";
  // last 4 weeks, newest last; 1 = done
  const days = [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
  const habits = [
    { i: Droplet, t: "Water", s: "8 of 8 glasses", done: true },
    { i: Wind, t: "Meditate", s: "10 min", done: true },
    { i: BookOpen, t: "Read", s: "12 of 20 pages", done: false },
    { i: Footprints, t: "Run", s: "Planned for 18:30", done: false },
  ];
  return (
    <div className="flex h-full flex-col bg-[#f6f5f1] text-[#1c1c1a]">
      <StatusBar />
      <div className="px-5 pt-3">
        <p className="text-[12px] text-[#77756e]">Thursday, 30 October</p>
        <p className="mt-0.5 text-[26px] font-semibold leading-tight tracking-[-0.02em]">Today</p>
      </div>
      <div className="mx-4 mt-4 rounded-[18px] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        <div className="flex items-baseline justify-between">
          <p className="text-[13px] text-[#5d5b55]">Streak</p>
          <p className="text-[12px] text-[#77756e]">Best 11</p>
        </div>
        <p className="mt-1 text-[28px] font-semibold leading-none tabular-nums">
          7 <span className="text-[15px] font-normal text-[#5d5b55]">days</span>
        </p>
        <div className="mt-3 grid grid-cols-7 gap-[5px]">
          {days.map((d, i) => (
            <span
              key={i}
              className="aspect-square rounded-[5px]"
              style={{
                background: i === 21 ? moss : d ? "#a9c2a7" : "#ecebe6",
                outline: i === 21 ? `2px solid ${moss}` : undefined,
                outlineOffset: 1,
              }}
            />
          ))}
        </div>
      </div>
      <div className="mx-5 mt-5 flex items-baseline justify-between">
        <p className="text-[13px] font-medium">Habits</p>
        <p className="text-[12px] tabular-nums text-[#77756e]">2 of 4 done</p>
      </div>
      <div className="mx-4 mt-2 overflow-hidden rounded-[18px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
        {habits.map(({ i: Icon, t, s, done }, idx) => (
          <div
            key={t}
            className={`flex h-[52px] items-center gap-3 px-4 ${idx ? "border-t border-black/[0.06]" : ""}`}
          >
            <Icon size={18} strokeWidth={1.5} className="text-[#77756e]" />
            <div className="flex-1">
              <p className="text-[14px] leading-tight">{t}</p>
              <p className="text-[11px] leading-tight text-[#77756e]">{s}</p>
            </div>
            <span
              className="flex h-[22px] w-[22px] items-center justify-center rounded-full border"
              style={
                done
                  ? { background: moss, borderColor: moss, color: "white" }
                  : { borderColor: "rgba(0,0,0,0.18)" }
              }
            >
              {done && <Check size={13} strokeWidth={2.25} />}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex h-[64px] items-start justify-around border-t border-black/[0.06] bg-[#f6f5f1] pt-2.5 text-[#8a8880]">
        <House size={20} strokeWidth={1.5} className="text-[#1c1c1a]" />
        <ChartNoAxesColumn size={20} strokeWidth={1.5} />
        <Plus size={20} strokeWidth={1.5} />
        <User size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}
