"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealVariant = "up" | "left" | "right" | "fade" | "scale" | "clip";

const FROM: Record<RevealVariant, gsap.TweenVars> = {
  up: { opacity: 0, y: 36, filter: "blur(4px)" },
  left: { opacity: 0, x: -40, filter: "blur(4px)" },
  right: { opacity: 0, x: 40, filter: "blur(4px)" },
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
  clip: { opacity: 0, clipPath: "inset(12% 0% 12% 0%)", y: 20 },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  duration = 0.9,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set(el, { clearProps: "all", opacity: 1 });
        return;
      }

      gsap.fromTo(
        el,
        { ...FROM[variant], willChange: "transform, opacity, filter, clip-path" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          delay: delay / 1000,
          ease: "power3.out",
          clearProps: "willChange,filter,clipPath",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { dependencies: [delay, variant, duration] }
  );

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

/** Staggers direct children on scroll into view. */
export function RevealStagger({
  children,
  className = "",
  stagger = 0.08,
  variant = "up",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  variant?: RevealVariant;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const items = root.children;
      if (!items.length) return;

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set(items, { clearProps: "all", opacity: 1 });
        return;
      }

      gsap.fromTo(
        items,
        { ...FROM[variant], willChange: "transform, opacity, filter" },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.75,
          delay: delay / 1000,
          stagger,
          ease: "power3.out",
          clearProps: "willChange,filter",
          scrollTrigger: {
            trigger: root,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { dependencies: [stagger, variant, delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
