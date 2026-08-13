"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";

const SUPPORT = [
  "Ongoing system support",
  "Troubleshooting",
  "Remote monitoring",
  "Alarm management",
  "Maintenance coordination",
  "Training",
  "Commissioning",
  "Performance optimization",
  "Analytics",
  "On-site service coordination",
];

export function Support() {
  return (
    <section id="support" className="bg-black py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-25deg, transparent, transparent 3px, #a9adb1 3px, #a9adb1 4px)",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="font-display uppercase text-mist max-w-3xl"
            style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
          >
            Supporting the Facility After Installation
          </h2>
          <div
            className="text-mist/70 mt-5 max-w-2xl space-y-5"
            style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
          >
            <p>A system still has to perform after construction ends.</p>
            <p>
              Depending on the project and customer requirements, 5K Specialty
              Systems can provide ongoing system support, troubleshooting,
              monitoring, maintenance coordination, training, commissioning,
              and performance optimization.
            </p>
            <p>
              For building automation customers, support can include remote
              system monitoring, alarm management, technical troubleshooting,
              analytics, preventive and predictive maintenance programming, and
              on-site service coordination when required.
            </p>
          </div>
        </Reveal>

        <RevealStagger
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-steel/50 border border-steel/50 mt-14"
          stagger={0.06}
          delay={60}
        >
          {SUPPORT.map((item) => (
            <div
              key={item}
              className="group bg-black h-full p-5 flex items-start gap-3 hover:bg-graphite transition-all duration-300 ease-out"
              style={{ opacity: 0 }}
            >
              <CheckCircle2
                className="size-4 text-blue shrink-0 mt-0.5"
                strokeWidth={1.75}
              />
              <span className="text-sm text-mist/85 font-medium leading-snug">
                {item}
              </span>
            </div>
          ))}
        </RevealStagger>

        <Reveal delay={180} variant="left">
          <p
            className="text-mist/70 mt-14 max-w-2xl border-l-2 border-blue pl-5"
            style={{ fontSize: "var(--type-small)", lineHeight: 1.6 }}
          >
            The goal is straightforward: give facility teams systems they can
            operate, understand, maintain, and adapt over time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
