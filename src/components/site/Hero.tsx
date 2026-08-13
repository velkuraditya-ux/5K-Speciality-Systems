"use client";

import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealImage } from "@/components/site/RevealImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".hero-enter", { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".hero-enter",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          delay: 0.55,
          ease: "power3.out",
        }
      );

      if (mediaRef.current && sectionRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      gsap.fromTo(
        ".hero-path",
        { strokeDashoffset: 1200, strokeDasharray: 1200 },
        {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.out",
          delay: 0.4,
          stagger: 0.2,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-black"
    >
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <RevealImage
          src="/images/fire-alarm.jpg"
          alt="Installed fire alarm device with conduit on a commercial wall"
          pixelSize={18}
          duration={1.8}
          startAlign="center"
          className="opacity-60 scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue/30 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent, transparent 2px, #ffffff 2px, #ffffff 3px)",
            backgroundSize: "100px 100px",
          }}
        />
        <svg
          className="absolute right-[-6%] top-0 h-full w-[45%] text-blue/25 pointer-events-none hidden md:block"
          viewBox="0 0 400 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M80 0 L80 220 L260 360 L260 520 L120 680 L120 900"
            stroke="currentColor"
            strokeWidth="3"
            className="hero-path"
          />
          <path
            d="M180 0 L180 180 L320 300 L320 560 L200 720 L200 900"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
            className="hero-path"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-20 pt-40 sm:pb-24 sm:pt-48">
        <p className="hero-enter text-eyebrow mb-5 sm:mb-6 opacity-0">
          Integrated Specialty Systems
        </p>
        <h1
          className="hero-enter font-display uppercase text-mist max-w-5xl opacity-0"
          style={{ fontSize: "var(--type-hero)", lineHeight: 1.08 }}
        >
          Integrated Systems.
          <br />
          One Accountable Partner.
        </h1>
        <p
          className="hero-enter text-mist/80 mt-6 max-w-xl opacity-0"
          style={{ fontSize: "var(--type-lead)", lineHeight: 1.5 }}
        >
          5K Specialty Systems delivers integrated low-voltage, life safety,
          security, communications, infrastructure, and building automation
          solutions for complex facilities nationwide.
        </p>
        <p
          className="hero-enter text-mist/70 mt-4 max-w-xl opacity-0"
          style={{ fontSize: "var(--type-body)", lineHeight: 1.55 }}
        >
          Our teams coordinate critical systems early, execute the work in the
          field, and stay focused on how those systems need to perform once the
          facility is operational.
        </p>

        <div className="hero-enter flex flex-wrap gap-4 mt-9 opacity-0">
          <Button
            asChild
            size="lg"
            className="bg-blue hover:bg-blue/90 text-white rounded-sm font-bold uppercase tracking-wide px-7 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <a href="#contact">Contact Us</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-mist/50 text-mist hover:bg-mist hover:text-black bg-transparent rounded-sm font-bold uppercase tracking-wide px-7 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <a href="#capabilities">Explore Capabilities</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-mist/60 hover:text-mist transition-colors duration-300 cursor-pointer hero-scroll-cue"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
}
