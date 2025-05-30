"use client";

import { useEffect, useState } from "react";

type ClickChar = {
  id: number;
  x: number;
  y: number;
  char: string;
};

let nextId = 0;

export default function ClickEffect() {
  const [chars, setChars] = useState<ClickChar[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isInteractive = (e.target as HTMLElement)?.closest(
        "button, a, input, textarea, select"
      );
      if (isInteractive) return;

      const newChar = {
        id: nextId++,
        x: e.clientX,
        y: e.clientY,
        char: nextId % 2 === 0 ? "T" : "U",
      };

      setChars((prev) => [...prev, newChar]);

      setTimeout(() => {
        setChars((prev) => prev.filter((c) => c.id !== newChar.id));
      }, 800);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {chars.map((item) => (
        <span
          key={item.id}
          className="absolute text-3xl font-bold text-purple-500 animate-floatUp select-none"
          style={{
            left: item.x,
            top: item.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}
