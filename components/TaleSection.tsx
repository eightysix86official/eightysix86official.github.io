"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  id: string;
  title: string;
  copy: string;
  kicker: string;
  index: number;
};

export default function TaleSection({ id, title, copy, kicker, index }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 72%",
          end: "bottom 35%",
          scrub: 1,
        },
      });

      tl.from(q(".kicker"), { y: 18, autoAlpha: 0, duration: 0.35 })
        .from(q(".title"), { y: 28, autoAlpha: 0, duration: 0.5 }, "<0.08")
        .from(q(".copy"), { y: 16, autoAlpha: 0, duration: 0.4 }, "<0.08")
        .from(q(".cta"), { y: 12, autoAlpha: 0, duration: 0.35 }, "<0.08");

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: root, dependencies: [id] }
  );

  const tone =
    index % 2 === 0
      ? "bg-[var(--cream)] text-[var(--navy)]"
      : "bg-[var(--navy)] text-[var(--cream)]";

  const accent = index % 2 === 0 ? "text-[var(--blue)]" : "text-[var(--mustard)]";

  return (
    <section ref={root} id={id} className={`relative min-h-screen overflow-hidden px-6 py-24 md:py-32 ${tone}`}>
      {index % 2 === 0 ? <div className="noise absolute inset-0" aria-hidden="true" /> : null}

      <div className="relative mx-auto grid min-h-[70vh] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className={`kicker text-sm uppercase tracking-[0.35em] ${accent}`}>
            {kicker}
          </p>
          <h2 className="title mt-4 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            {title}
          </h2>
          <p className="copy mt-6 max-w-xl text-lg leading-8">
            {copy}
          </p>
          <div className="cta mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-[0.25em]">
            <a href="#the-local-menu" className="underline decoration-current decoration-1 underline-offset-8">
              Shop online
            </a>
            <a href="#" className="underline decoration-current decoration-1 underline-offset-8">
              Request info
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-current/15 bg-white/20">
            <div className="flex h-full w-full items-center justify-center">
              <span className={`display text-4xl ${accent}`}>Visual placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
