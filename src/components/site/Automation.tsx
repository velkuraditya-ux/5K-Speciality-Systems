"use client";

import { Reveal, RevealStagger } from "./Reveal";
import { RevealImage } from "./RevealImage";
import { ParallaxImage } from "./ParallaxImage";

const AUTOMATION = [
  "Building Automation Systems (BAS)",
  "Building Management Systems (BMS)",
  "Energy Management Systems (EMS)",
  "HVAC controls",
  "Lighting controls",
  "Equipment and device integration",
  "Smart building IoT",
  "Energy and asset monitoring",
  "Metering and sub-metering",
  "Controls system design and engineering",
  "Controls device installation and programming",
  "System commissioning and retro-commissioning",
  "Remote monitoring and technical support",
  "Data analytics and performance reporting",
  "Multi-site and national program deployment",
];

export function Automation() {
  return (
    <section id="automation" className="bg-gunmetal py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brushed-silver/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="font-display uppercase text-mist max-w-3xl"
            style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
          >
            Connected Systems. Better Visibility.
          </h2>
          <p
            className="text-mist/70 mt-5 max-w-2xl"
            style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
          >
            Building automation, controls, and energy management for individual
            facilities and multi-site portfolios.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mt-14 items-start">
          <div className="lg:col-span-5">
            <Reveal delay={100} variant="clip" className="relative border border-brushed-silver/30 p-2 group">
              <ParallaxImage className="relative aspect-4/3">
                <RevealImage
                  src="/images/control-panel.jpg"
                  alt="Technician working at a building automation control panel"
                  pixelSize={12}
                  duration={1.2}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </ParallaxImage>
              <span className="absolute -top-1 -left-1 size-3 border-t-2 border-l-2 border-blue transition-transform duration-500 group-hover:scale-125" />
              <span className="absolute -top-1 -right-1 size-3 border-t-2 border-r-2 border-blue transition-transform duration-500 group-hover:scale-125" />
              <span className="absolute -bottom-1 -left-1 size-3 border-b-2 border-l-2 border-blue transition-transform duration-500 group-hover:scale-125" />
              <span className="absolute -bottom-1 -right-1 size-3 border-b-2 border-r-2 border-blue transition-transform duration-500 group-hover:scale-125" />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140} variant="right">
              <div
                className="space-y-5 text-mist/80 mb-8"
                style={{ fontSize: "var(--type-body)", lineHeight: 1.6 }}
              >
                <p>
                  Building automation can bring HVAC, lighting, refrigeration,
                  generators, pumps, metering, sensors, and other connected
                  equipment into a common controls environment.
                </p>
                <p>
                  That gives facility teams better visibility into system
                  conditions, equipment performance, energy use, alarms,
                  schedules, and operating trends. For customers with multiple
                  locations, systems can also be managed through a centralized
                  platform.
                </p>
              </div>
            </Reveal>
            <h3
              className="font-display uppercase text-blue mb-4 border-b-2 border-blue/60 pb-3"
              style={{ fontSize: "var(--type-h3)" }}
            >
              Building Automation, Controls &amp; Energy Management
            </h3>
            <RevealStagger className="grid sm:grid-cols-2 gap-x-8 gap-y-3" stagger={0.04} delay={80}>
              {AUTOMATION.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-mist/85 transition-transform duration-300 hover:translate-x-1"
                  style={{ fontSize: "var(--type-small)", opacity: 0 }}
                >
                  <span className="mt-2 size-1.5 bg-gold shrink-0" />
                  {item}
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
