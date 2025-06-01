"use client";

import { useEffect } from "react";
import clsx from "clsx";

interface TocProps {
  headings: {
    level: number;
    text: string;
    slug: string;
  }[];
  mobile?: boolean;
}

export function Toc({ headings, mobile = false }: TocProps) {
  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll(".scrollspy-link")
    ) as HTMLAnchorElement[];

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const offset = 80;
          window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      links.forEach((link) => link.removeEventListener("click", () => {}));
    };
  }, []);

  const tocContent = (
    <ul className="space-y-1 mt-2">
      {headings.map((heading) => (
        <li
          key={heading.slug}
          className={clsx(`pl-${(heading.level - 1) * 4}`)}
        >
          <a
            href={`#${heading.slug}`}
            className="block hover:underline text-gray-700 dark:text-gray-300 scrollspy-link"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {mobile ? (
        <details open className="text-sm">
          <summary className="font-bold cursor-pointer">CONTENTS</summary>
          <ul className="space-y-1 mt-2">
            {headings.map((heading) => (
              <li
                key={heading.slug}
                style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
              >
                <a
                  href={`#${heading.slug}`}
                  className="block hover:underline text-gray-700 dark:text-gray-300 scrollspy-link"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ) : (
        <nav className="text-sm sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pr-2">
          <h2 className="font-bold mb-2">CONTENTS</h2>
          <ul className="space-y-1 mt-2">
            {headings.map((heading) => (
              <li
                key={heading.slug}
                style={{ paddingLeft: `${(heading.level - 1) * 16}px` }}
              >
                <a
                  href={`#${heading.slug}`}
                  className="block hover:underline text-gray-700 dark:text-gray-300 scrollspy-link"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        html {
          scroll-padding-top: 5rem;
        }
        .scrollspy-link.active {
          color: #C084FC;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
