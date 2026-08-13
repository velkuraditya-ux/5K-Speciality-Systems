"use client";

import {
  Waypoints,
  HardHat,
  ClipboardCheck,
  Layers,
  MapPinned,
} from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";

const CALLOUTS = [
  { icon: Waypoints, label: "Early Coordination" },
  { icon: HardHat, label: "Field Execution" },
  { icon: ClipboardCheck, label: "Continuous Validation" },
  { icon: Layers, label: "Integrated Delivery" },
  { icon: MapPinned, label: "National Support" },
];

export function About() {
  return (
    <section id="about" className="bg-paper py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 min-w-0">
            <Reveal variant="left">
              <h2
                className="font-display uppercase text-black"
                style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", lineHeight: 1.1 }}
              >
                A Systems Partner for Complex Facilities
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120} variant="right">
              <div
                className="space-y-5 text-black/80"
                style={{ fontSize: "var(--type-body)", lineHeight: 1.6 }}
              >
                <p>
                  Critical building systems can&apos;t be treated as isolated
                  scopes. Fire alarm, security, communications, controls, and
                  supporting infrastructure all depend on coordination with the
                  electrical, mechanical, technology, and construction teams
                  around them.
                </p>
                <p>
                  5K Specialty Systems brings those scopes together under one
                  team. We provide early planning, field execution, continuous
                  validation, and coordinated delivery to reduce gaps between
                  trades and protect the project schedule.
                </p>
                <p>
                  As a sister company to Hays Electrical Services under 5K
                  Holdings, 5K Specialty Systems can also work alongside
                  broader electrical construction resources when a
                  project&apos;s needs call for it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <RevealStagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-steel/25 mt-16 border border-steel/25"
          stagger={0.07}
          delay={80}
        >
          {CALLOUTS.map((item) => (
            <div
              key={item.label}
              className="group bg-paper h-full p-5 flex flex-col gap-3 hover:bg-white transition-all duration-300 ease-out hover:-translate-y-0.5"
              style={{ opacity: 0 }}
            >
              <item.icon
                className="size-5 text-blue transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.75}
              />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-black/80 leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
