"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.35,
      },
    });
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-[2px] pointer-events-none"
      aria-hidden
    >
      <div ref={barRef} className="h-full w-full bg-blue origin-left" />
    </div>
  );
}
