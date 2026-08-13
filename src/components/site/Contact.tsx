"use client";

import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-b from-charcoal to-black py-24 sm:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #0057B8 0%, transparent 45%), radial-gradient(circle at 80% 80%, #d9e1e8 0%, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 min-w-0">
            <Reveal variant="left">
              <h2
                className="font-display uppercase text-mist"
                style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", lineHeight: 1.1 }}
              >
                One Team for the Systems Your Facility Depends On
              </h2>
              <p
                className="text-mist/70 mt-6"
                style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
              >
                Complex facilities require systems that are properly planned,
                coordinated, installed, and supported. 5K Specialty Systems
                brings those responsibilities together under one accountable
                partner.
              </p>
              <p
                className="text-mist/70 mt-4"
                style={{ fontSize: "var(--type-body)", lineHeight: 1.55 }}
              >
                Talk with our team about your next project, facility, or
                multi-site program.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120} variant="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
