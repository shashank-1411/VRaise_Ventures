import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VRaise Ventures | Early-Stage Deal Origination Across India, ANZ & US",
  description: "VRaise is an independent deal origination firm scouting early-stage startups across India, ANZ, and the US, acting as a natural extension of VC sourcing arms.",
  keywords: ["Venture Capital", "Deal Origination", "Startup Scouting", "India VC", "ANZ Tech", "Seed Funding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ptSerif.variable}`}>
      <body className={`${inter.className} antialiased font-sans bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
