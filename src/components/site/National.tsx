"use client";

import { Reveal } from "./Reveal";
import { RevealImage } from "./RevealImage";
import { ParallaxImage } from "./ParallaxImage";

export function National() {
  return (
    <section id="national" className="bg-white py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 min-w-0">
            <Reveal variant="left">
              <h2
                className="font-display uppercase text-black"
                style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
              >
                National Capabilities. Local Project Accountability.
              </h2>
              <div
                className="space-y-5 text-black/80 mt-6"
                style={{ fontSize: "var(--type-body)", lineHeight: 1.6 }}
              >
                <p>
                  5K Specialty Systems supports complex projects and multi-site
                  programs nationwide.
                </p>
                <p>
                  Our delivery approach combines centralized technical
                  capabilities with project-level coordination and field
                  execution. For larger programs and specialized requirements,
                  we can also coordinate resources across 5K Holdings,
                  including sister company Hays Electrical Services, as
                  appropriate for the project.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={100} variant="clip" className="relative border-2 border-black/10 p-2 group transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <ParallaxImage className="relative aspect-video">
                <RevealImage
                  src="/images/access-control.jpg"
                  alt="Access card being presented at a commercial facility reader"
                  pixelSize={12}
                  duration={1.2}
                />
              </ParallaxImage>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
