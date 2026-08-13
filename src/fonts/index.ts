import localFont from "next/font/local";

export const dmSans = localFont({
  src: [
    {
      path: "./DMSans-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./DMSans-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const orbitron = localFont({
  src: [
    {
      path: "./Orbitron-VariableFont_wght.ttf",
      weight: "400 900",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
  display: "swap",
});
