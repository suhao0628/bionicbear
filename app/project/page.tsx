"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sonic Code",
    description:
      "A microservices-based code testing platform where users can submit code and receive real-time evaluation results. The system is powered by core services including a judge scheduler, secure sandbox, test case management, and a sleek WebApp",
    image: "/soniccode.jpg",
    href: "https://github.com/suhao0628",
  },
  {
    title: "ThesisHub",
    description:
      "A thesis management system designed to reflect real-world academic workflows—supporting topic selection, thesis progress tracking, approvals, and real-time communication.",
    image: "/thesis.png",
    href: "https://github.com/suhao0628",
  },
  {
    title: "Blogify",
    description:
      "A clean, minimal blog for sharing ideas, projects, and personal insights — with a developer-friendly design and smooth reading experience.",
    image: "/blog.jpg",
    href: "https://github.com/suhao0628/bionicbear",
  },
];

export default function ProjectPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {projects.map((proj) => (
        <div
          key={proj.title}
          className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-black/10 dark:border-white/10 transition-all duration-300 flex flex-col"
        >
          <Image
            src={proj.image}
            alt={proj.title}
            width={800}
            height={400}
            className="object-cover w-full h-52 rounded-t-2xl"
          />
          <div className="p-5 flex flex-col flex-1">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              {proj.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
              {proj.description}
            </p>
            <div className="mt-auto">
              <Link
                href={proj.href}
                target="_blank"
                className="inline-block text-sm font-medium text-pink-600 hover:text-pink-700 bg-pink-50 dark:bg-slate-800 px-3 py-1.5 rounded-md transition"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
