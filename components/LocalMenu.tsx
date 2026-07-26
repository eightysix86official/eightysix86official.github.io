"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { localMenuItems } from "@/content/menu";

export default function LocalMenu() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);

      gsap.from(q(".menu-item"), {
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end: "bottom 40%",
          scrub: 1,
        },
        y: 20,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="the-local-menu" className="relative bg-[var(--cream)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--blue)]">The Local Menu</p>
        <h2 className="mt-4 max-w-3xl text-5xl leading-[0.95] text-[var(--navy)] md:text-7xl">
          Dessert names, local rhythm, and a future image set.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--navy)]">
          Pictures will be added later. For now, the section reads like a menu wall: simple, direct, and deliberate.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {localMenuItems.map((item) => (
            <article
              key={item}
              className="menu-item rounded-[1.5rem] border border-[#121212] bg-white/30 p-6"
            >
              <p className="text-lg leading-8 text-[var(--navy)]">{item}</p>
              <div className="mt-6 aspect-[4/3] rounded-[1rem] border border-dashed border-[#121212]/40 bg-[rgba(14,89,195,0.06)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
