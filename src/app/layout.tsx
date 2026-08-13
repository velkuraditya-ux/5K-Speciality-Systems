import type { Metadata } from "next";
import { dmSans, orbitron } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "5K Specialty Systems | Integrated Specialty Systems",
  description:
    "5K Specialty Systems delivers integrated low-voltage, life safety, security, communications, infrastructure, and building automation solutions for complex facilities nationwide. A 5K Holdings company.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${orbitron.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-black font-sans">
        {children}
      </body>
    </html>
  );
}
