"use client";

export default function Header() {
  return (
    <header className="bg-slate-900/90 backdrop-blur-xl border-b border-white/10 px-8 h-20 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center overflow-hidden">
          <span className="text-white text-lg font-bold z-10">◆</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 translate-x-[-100%] animate-pulse"></div>
        </div>
        <span className="text-white text-xl font-bold">Campaign Creation</span>
      </div>

      <div className="flex items-center gap-4 text-gray-300 font-medium">
        <span>Welcome back, Alex</span>
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40">
          A
        </div>
      </div>
    </header>
  );
}
