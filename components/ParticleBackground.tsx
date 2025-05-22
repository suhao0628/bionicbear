'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container } from "@tsparticles/engine";
import { particleOptions } from "@/config/particle.config";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  // Initialize the engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("tsParticles container", container);
  };

  const options = useMemo(() => particleOptions, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
