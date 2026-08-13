"use client";

import { useRef, useState } from "react";
import { Waypoints, HardHat, ClipboardCheck, Layers } from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const STEPS = [
  {
    label: "Early Coordination",
    verb: "Coordinate",
    icon: Waypoints,
    copy: "Our team gets involved early to identify infrastructure requirements, system interfaces, pathways, equipment needs, and potential conflicts before they become field problems.",
  },
  {
    label: "Self-Performed Execution",
    verb: "Execute",
    icon: HardHat,
    copy: "5K Specialty Systems self-performs its core specialty systems work, giving the project team greater control over quality, field coordination, and schedule.",
  },
  {
    label: "Continuous Field Validation",
    verb: "Validate",
    icon: ClipboardCheck,
    copy: "Conditions change during construction. Our teams stay engaged in the field to verify installations, coordinate interfaces, and address issues as the work progresses.",
  },
  {
    label: "Integrated Delivery",
    verb: "Integrate",
    icon: Layers,
    copy: "We coordinate our systems with the electrical, mechanical, technology, and construction teams around us so individual scopes support the larger facility.",
  },
];

export function Approach() {
  const lineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const line = lineRef.current;
      const fill = fillRef.current;
      if (!line || !fill) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(fill, { scaleX: 1 });
        return;
      }

      gsap.fromTo(
        fill,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: line,
            start: "top 70%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        }
      );
    },
    { dependencies: [] }
  );

  return (
    <section id="approach" className="bg-paper py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="font-display uppercase text-black max-w-3xl"
            style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
          >
            Coordinated Around the Entire Project
          </h2>
          <p
            className="text-black/70 mt-5 max-w-2xl"
            style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
          >
            The value of an integrated systems partner comes down to how the
            work is planned and executed.
          </p>
        </Reveal>

        <div ref={lineRef} className="relative mt-16">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-steel/20 overflow-hidden">
            <div
              ref={fillRef}
              className="h-full w-full bg-blue origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <RevealStagger
            className="grid lg:grid-cols-4 gap-8 lg:gap-6"
            stagger={0.09}
            delay={40}
          >
            {STEPS.map((step, i) => (
              <button
                key={step.label}
                type="button"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group flex lg:flex-col items-start lg:items-center lg:text-center gap-4 w-full text-left cursor-pointer"
                style={{ opacity: 0 }}
              >
                <div
                  className={`relative z-10 flex items-center justify-center size-14 shrink-0 border-2 transition-all duration-300 ease-out ${
                    active === i
                      ? "bg-blue border-blue scale-110 shadow-[0_8px_24px_rgba(0,87,184,0.35)]"
                      : "bg-paper border-black/20 group-hover:border-blue"
                  }`}
                >
                  <step.icon
                    className={`size-6 transition-colors duration-300 ${
                      active === i ? "text-white" : "text-black/70 group-hover:text-blue"
                    }`}
                    strokeWidth={1.75}
                  />
                  <span className="absolute -top-2 -right-2 size-5 bg-black text-mist text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="lg:mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue mb-1">
                    {step.verb}
                  </p>
                  <span
                    className={`text-xs sm:text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
                      active === i ? "text-blue" : "text-black/80"
                    }`}
                  >
                    {step.label}
                  </span>
                  <p
                    className="text-black/65 mt-3 hidden lg:block"
                    style={{ fontSize: "0.9rem", lineHeight: 1.5 }}
                  >
                    {step.copy}
                  </p>
                </div>
              </button>
            ))}
          </RevealStagger>
        </div>

        <div className="lg:hidden mt-10 space-y-5">
          {STEPS.map((step) => (
            <p
              key={step.label}
              className="text-black/70 border-l-2 border-blue pl-5"
              style={{ fontSize: "var(--type-small)", lineHeight: 1.6 }}
            >
              <strong className="text-black">{step.label}. </strong>
              {step.copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
