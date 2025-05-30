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
      "A clean, minimal blog for sharing ideas, projects, and personal insights—with a developer-friendly design and smooth reading experience.",
    image: "/blog.jpg",
    href: "https://github.com/suhao0628/bionicbear",
  },
];
export default function ProjectPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      {projects.map((proj) => (
        <div
          key={proj.title}
          className="border border-black/10 dark:border-0 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md"
        >
          <Image
            src={proj.image}
            alt={proj.title}
            width={800}
            height={400}
            className="object-cover w-full h-52"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
            <p className="text-muted-foreground mb-4">{proj.description}</p>
            <Link
              href={proj.href}
              target="_blank"
              className="text-pink-600 hover:underline font-medium"
            >
              Learn more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
