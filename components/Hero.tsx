"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".hero-line", {
        y: 28,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: "power2.out",
      });
    },
    { scope: root }
  );

  return (
    <header ref={root} className="relative overflow-hidden bg-[var(--cream)] px-6 py-24 md:py-32">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end">
        <div className="max-w-4xl">
          <p className="hero-line mb-6 text-sm uppercase tracking-[0.35em] text-[var(--blue)]">
            Dessert-only private dining, Singapore
          </p>
          <h1 className="hero-line max-w-5xl text-6xl leading-[0.95] text-[var(--navy)] md:text-8xl">
            Technique-driven dessert omakase. Four seats, one kitchen.
          </h1>
          <p className="hero-line mt-8 max-w-2xl text-lg text-[var(--navy)]">
            Cream, mustard, navy, and vivid blue; Tilt Warp for headlines, Merriweather for body, and motion that stays subtle.
          </p>
        </div>
      </div>
    </header>
  );
}
