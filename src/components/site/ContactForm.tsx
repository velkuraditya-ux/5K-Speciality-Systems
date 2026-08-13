"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "contact@5kspecialtysystems.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`5K Specialty Systems inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="border border-blue/40 bg-white/5 p-8 flex flex-col items-center text-center gap-3 animate-[fade-rise_0.5s_ease-out]">
        <CheckCircle2 className="size-8 text-blue" />
        <p className="font-display uppercase text-mist text-xl">Message Ready</p>
        <p className="text-mist/70 text-sm max-w-sm">
          Your email app should open with the message drafted. If it does not,
          write us directly and we will follow up.
        </p>
        <Button
          variant="outline"
          className="mt-3 bg-transparent border-mist/40 text-mist hover:bg-mist hover:text-black rounded-sm cursor-pointer"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-mist/80 text-xs uppercase tracking-wide font-bold">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          className="bg-white/5 border-mist/25 text-mist placeholder:text-mist/40 rounded-sm focus-visible:ring-blue focus-visible:border-blue/60 transition-[border-color,box-shadow,background-color] duration-300"
          placeholder="Full name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-mist/80 text-xs uppercase tracking-wide font-bold">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="bg-white/5 border-mist/25 text-mist placeholder:text-mist/40 rounded-sm focus-visible:ring-blue focus-visible:border-blue/60 transition-[border-color,box-shadow,background-color] duration-300"
          placeholder="you@company.com"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="company" className="text-mist/80 text-xs uppercase tracking-wide font-bold">
          Company <span className="text-mist/40 font-normal normal-case">(optional)</span>
        </Label>
        <Input
          id="company"
          name="company"
          className="bg-white/5 border-mist/25 text-mist placeholder:text-mist/40 rounded-sm focus-visible:ring-blue focus-visible:border-blue/60 transition-[border-color,box-shadow,background-color] duration-300"
          placeholder="Company name"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <Label htmlFor="message" className="text-mist/80 text-xs uppercase tracking-wide font-bold">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="bg-white/5 border-mist/25 text-mist placeholder:text-mist/40 rounded-sm focus-visible:ring-blue focus-visible:border-blue/60 transition-[border-color,box-shadow,background-color] duration-300"
          placeholder="Tell us about your project or facility"
        />
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="bg-blue hover:bg-blue/90 text-white rounded-sm font-bold uppercase tracking-wide px-8 cursor-pointer"
        >
          Contact Us
        </Button>
      </div>
    </form>
  );
}
