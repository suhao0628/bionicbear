'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { SiGithub, SiWechat, SiLinkedin } from "react-icons/si"
import { MdEmail, MdContentCopy,MdCheck } from "react-icons/md"
import * as Dialog from "@radix-ui/react-dialog"
export default function AboutPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText("tails@example.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
const groups = [
    {
      title: "- Languages",
      skills: [
        { class: "devicon-csharp-plain", label: "C#" },
        { class: "devicon-go-plain", label: "Go" },
        { class: "devicon-cplusplus-plain", label: "C++" },
        { class: "devicon-python-plain", label: "Python" },
        { class: "devicon-javascript-plain", label: "JavaScript" },
        { class: "devicon-typescript-plain", label: "TypeScript" },
      ],
    },
    {
      title: "- Frameworks",
      skills: [
        { class: "devicon-dotnetcore-plain", label: "ASP.NET Core" }, 
        { class: "devicon-go-plain", label: "Gin" },
        { class: "devicon-vuejs-plain", label: "Vue.js" },
        { class: "devicon-react-original", label: "React.js" },
      ],
    },
    {
      title: "- Dev Tools",
      skills: [
        { class: "devicon-visualstudio-plain", label: "Visual Studio" },
        { class: "devicon-vscode-plain", label: "VS Code" },
        { class: "devicon-git-plain", label: "Git" },
        { class: "devicon-postman-plain", label: "Postman" },
      ],
    },
  ]
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10">
      <div className="flex flex-col items-center text-center md:w-1/3">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={180}
          height={180}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">Bionic Bear</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Software Engineer<br />
          Tomsk State University
        </p>
        <div className="flex gap-4 mt-4 text-[1.5rem]">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <MdEmail className="hover:text-pink-500" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-slate-800 p-6 shadow-lg space-y-4">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-mono text-blue-600 break-all flex-1">
                            suhaoxb@gmail.com
                        </p>
                        <button
                            onClick={handleCopy}
                            title="点击复制"
                            className="text-gray-500 hover:text-blue-600 transition text-xl"
                        >
                            {copied ? <MdCheck /> : <MdContentCopy />}
                        </button>
                    </div>
                    
                </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <Link href="https://github.com/suhao0628" target="_blank">
            <SiGithub className="hover:text-black" />
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <SiWechat className="hover:text-green-600" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 
                            rounded-xl bg-white dark:bg-slate-800 p-6 shadow-xl text-center"
                >
                    <Image
                    src="/wechat.jpg"
                    alt="WeChat QR"
                    width={500}
                    height={500}
                    className="mx-auto rounded"
                    />
                </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <a
          href="/CV.pdf"
          download
          className="mt-4 text-sm text-purple-600 hover:underline hover:text-purple-700 transition inline-flex items-center gap-1"
        >
          Link to CV
        </a>
      </div>

     
     <div className="md:w-2/3 text-[16px] leading-7 space-y-6">
        <h1 className="text-lg font-bold mb-2 flex items-center gap-2">
             About Me
        </h1>
        <div className="space-y-3">
            <p>
              Hi 👋, I'm <strong className="text-sky-600 font-semibold">bionic bear</strong>
            </p>
            <p>
              A software engineering student graduate from TSU.
            </p>
            <p>
              A full-stack developer with a passion for building tools that connect real-world needs with data-driven,elegant code. 
            </p>
            <p>
              Currently on a quest to change the system.Dreaming of becoming an intellectual and a poet.
            </p>
        </div>
        <div>
            <h1 className="text-lg font-bold mb-2 flex items-center gap-2">
             Tech Stack
            </h1>
             <div className="space-y-6">
                {groups.map((group, i) => (
                    <div key={i}>
                    <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                        <span>{group.title}</span>
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {group.skills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center gap-2 bg-slate-800 text-white px-3 py-1.5 rounded-md text-sm shadow-sm"
                        >
                            <i className={`${skill.class} colored text-xl`} />
                            <span>{skill.label}</span>
                        </span>
                        ))}
                    </div>
              </div>
          ))}
        </div>
        </div>
            <div className="border-t pt-4 border-gray-300 text-[15px] space-y-1">
              <h1 className="text-lg font-bold mb-2 flex items-center gap-2">
             Reach Me
            </h1>
                <p>
                Email: <span className="text-purple-500 font-mono">suhaoxb@gmail.com</span>
                </p>
                <p>
                Wechat: <span className="text-purple-500 font-mono">bionic_bear</span>
                </p>
            </div>
        </div>


    </div>
  )
}
