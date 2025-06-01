"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md border border-slate-300 dark:border-slate-700 w-8 h-8 flex items-center justify-center"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <Moon size={20} strokeWidth={1.5} />
      ) : (
        <Sun size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
