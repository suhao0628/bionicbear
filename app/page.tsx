"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const texts = ["世间无我 方见真我", "Flee as a bird to your mountain."];
    const currentText = texts[textIndex];

    if (charIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // pause before next loop
      const pause = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">
        {displayed}
        <span className="animate-pulse text-purple-500">|</span>
      </h1>
      <p className="text-lg text-muted-foreground">
        This is the custom homepage. Check out the blog for more!
      </p>
    </div>
  );
}
