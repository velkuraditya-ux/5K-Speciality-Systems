"use client";

import PixelReveal from "@/components/originkit/PixelReveal";

export function RevealImage({
  src,
  alt,
  pixelSize = 14,
  duration = 1.4,
  startAlign = "center",
  className = "",
}: {
  src: string;
  alt: string;
  pixelSize?: number;
  duration?: number;
  startAlign?: "top" | "center" | "bottom";
  className?: string;
}) {
  return (
    <div role="img" aria-label={alt} className={`relative w-full h-full ${className}`}>
      <PixelReveal
        imageSrc={src}
        pixelSize={pixelSize}
        duration={duration}
        startAlign={startAlign}
        replay={false}
      />
    </div>
  );
}
