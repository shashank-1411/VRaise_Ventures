import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
