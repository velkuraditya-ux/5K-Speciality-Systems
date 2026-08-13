"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { bindSmoothAnchors } from "@/lib/smooth-anchor";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#support", label: "Support" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => bindSmoothAnchors(), []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-steel/60 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-black/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 shrink-0 transition-transform duration-500 ease-out hover:opacity-90"
        >
          <Image
            src="/logo/logo-white.png"
            alt="5K Specialty Systems - A 5K Holdings Company"
            width={288}
            height={182}
            className={`w-auto transition-all duration-500 ease-out ${
              scrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"
            }`}
            priority
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-label font-semibold uppercase tracking-wider text-sm transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-blue" : "text-mist/80 hover:text-mist"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-3 right-3 -bottom-0.5 h-[2px] bg-blue origin-left transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="bg-blue hover:bg-blue/90 text-white rounded-sm font-bold uppercase tracking-wide text-sm px-5 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden text-mist p-2 -mr-2 cursor-pointer transition-opacity hover:opacity-80"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black border-steel text-mist w-[280px] p-0"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex items-center justify-between p-5 border-b border-steel/60">
              <Image
                src="/logo/logo-white.png"
                alt="5K Specialty Systems - A 5K Holdings Company"
                width={288}
                height={182}
                className="h-14 w-auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1 cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b border-steel/30 uppercase tracking-wide font-semibold text-mist/90 hover:text-blue transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-blue hover:bg-blue/90 text-white rounded-sm font-bold uppercase tracking-wide cursor-pointer"
              >
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact Us
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
