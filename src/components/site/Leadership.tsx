"use client";

import { Reveal } from "./Reveal";

const LEADERS = [
  {
    name: "Jason Loff",
    title: "Executive Vice President",
    bio: "Jason leads the strategic growth, operations, and delivery of 5K Specialty Systems. His experience includes complex fire alarm, life safety, security, and low-voltage projects across healthcare, industrial, commercial, education, high-rise, and corporate environments.",
  },
  {
    name: "Stacy Justice",
    title: "Vice President",
    bio: null,
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="bg-paper py-24 sm:py-32 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-steel/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            className="font-display uppercase text-black"
            style={{ fontSize: "var(--type-h2)", lineHeight: 1.02 }}
          >
            Leadership
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-steel/25 border border-steel/25 mt-12">
          {LEADERS.map((person, i) => (
            <Reveal key={person.name} delay={80 + i * 80} variant={i === 0 ? "left" : "right"}>
              <div className="bg-paper p-8 sm:p-10 h-full">
                <p
                  className="font-sans font-bold text-black"
                  style={{ fontSize: "1.375rem", lineHeight: 1.2 }}
                >
                  {person.name}
                </p>
                <p className="text-blue font-semibold mt-1" style={{ fontSize: "var(--type-small)" }}>
                  {person.title}
                </p>
                {person.bio ? (
                  <p
                    className="text-black/70 mt-5 max-w-prose"
                    style={{ fontSize: "var(--type-body)", lineHeight: 1.6 }}
                  >
                    {person.bio}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
