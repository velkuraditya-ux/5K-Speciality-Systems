"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ParallaxImage({
  children,
  className = "",
  strength = 12,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const inner = innerRef.current;
      if (!wrap || !inner) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;

      gsap.fromTo(
        inner,
        { yPercent: -strength / 2 },
        {
          yPercent: strength / 2,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { dependencies: [strength] }
  );

  return (
    <div ref={wrapRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="h-[115%] w-full -mt-[7.5%]">
        {children}
      </div>
    </div>
  );
}
