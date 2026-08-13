"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#support", label: "Support" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-steel/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal variant="fade" duration={0.7}>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div>
              <Image
                src="/logo/logo-white.png"
                alt="5K Specialty Systems"
                width={180}
                height={114}
                className="h-16 w-auto"
              />
              <p className="text-brushed-silver text-sm mt-3">A 5K Holdings Company</p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-mist/70 hover:text-blue transition-colors duration-300 text-sm font-semibold uppercase tracking-wide cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-12 pt-8 border-t border-steel/40 flex flex-col sm:flex-row justify-between gap-3 text-xs text-brushed-silver">
            <p>© {new Date().getFullYear()} 5K Holdings. All rights reserved.</p>
            <p>411 N Sam Houston Parkway E, Suite 600, Houston, TX 77060</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
