import type { ISourceOptions } from "@tsparticles/engine";
import { MoveDirection, OutMode } from "@tsparticles/engine";

export const particleOptions: ISourceOptions = {
  background: {
    color: { value: "#ffffff" },
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#1f2937", // 深灰色
    },
    links: {
      enable: true,
      distance: 150,
      color: "#1f2937",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: MoveDirection.none,
      outModes: {
        default: OutMode.out,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
    },
    opacity: {
      value: 0.5,
    },
  },
  detectRetina: true,
  interactivity: {
    events: {
      onClick: {
        enable: false, // ❌ 禁用默认 push 事件，改为手动添加
      },
    },
  },
};
