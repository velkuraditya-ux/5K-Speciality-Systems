"use client";

import { Reveal, RevealStagger } from "./Reveal";
import { RevealImage } from "./RevealImage";
import { ParallaxImage } from "./ParallaxImage";

const CAPABILITIES = [
  {
    title: "Life Safety Systems",
    items: [
      "Fire alarm systems",
      "Area of Refuge systems",
      "Mass notification systems",
      "Design-build solutions",
    ],
    image: "/images/fire-alarm.jpg",
    alt: "Installed fire alarm device with conduit",
    caption: "Life Safety",
  },
  {
    title: "Security Systems",
    items: [
      "Access control",
      "Video surveillance",
      "Intercom systems",
      "Scalable and configurable security platforms",
    ],
    image: "/images/security-camera.jpg",
    alt: "Exterior dome security camera on a commercial facade",
    caption: "Security",
  },
  {
    title: "Telecommunications & Structured Cabling",
    items: [
      "Structured cabling",
      "Fiber optic infrastructure",
      "MDF and IDF room buildouts",
      "Telecommunications infrastructure",
      "Low-voltage pathways and connectivity",
    ],
    image: "/images/fiber-cabling.jpg",
    alt: "Organized fiber optic cabling in a network rack",
    caption: "Telecommunications",
  },
  {
    title: "Underground Infrastructure",
    items: [
      "Duct banks and trenching",
      "Conduit pathways",
      "Utility coordination",
      "Supporting underground infrastructure",
    ],
    image: "/images/cable-trays.jpg",
    alt: "Overhead conduit, cable trays, and fire suppression piping",
    caption: "Infrastructure",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="font-display uppercase text-black max-w-3xl"
            style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
          >
            Integrated Systems Capabilities
          </h2>
          <p
            className="text-black/70 mt-5 max-w-2xl"
            style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
          >
            Life safety, security, communications, underground infrastructure,
            and building automation coordinated through one organization.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={80 + i * 60} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="group border border-black/10 h-full flex flex-col">
                <div className="relative aspect-16/10 overflow-hidden">
                  <ParallaxImage className="absolute inset-0">
                    <RevealImage
                      src={cap.image}
                      alt={cap.alt}
                      pixelSize={12}
                      duration={1.2}
                    />
                  </ParallaxImage>
                  <span className="absolute bottom-3 left-3 bg-black/80 text-mist text-xs font-bold uppercase tracking-widest px-3 py-1.5">
                    {cap.caption}
                  </span>
                </div>
                <div className="p-6 sm:p-7 flex-1">
                  <h3
                    className="font-display uppercase text-blue mb-4 border-b-2 border-blue pb-3"
                    style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)" }}
                  >
                    {cap.title}
                  </h3>
                  <RevealStagger className="space-y-3" stagger={0.05} delay={80}>
                    {cap.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-black/85 transition-transform duration-300 hover:translate-x-1"
                        style={{ fontSize: "var(--type-small)", opacity: 0 }}
                      >
                        <span className="mt-2 size-1.5 bg-blue shrink-0" />
                        {item}
                      </div>
                    ))}
                  </RevealStagger>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
