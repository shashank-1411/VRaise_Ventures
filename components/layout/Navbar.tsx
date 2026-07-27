"use client";

import React from "react";
import Link from "next/link";
import { Mail, Linkedin, Calendar } from "lucide-react";
import DockMorph from "@/components/ui/dock-morph";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const handlePitchUs = () => {
    window.open("https://calendly.com", "_blank");
  };

  const navDockItems = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      onClick: () => window.open("https://linkedin.com", "_blank"),
    },
    {
      icon: Calendar,
      label: "Schedule Call",
      onClick: () => window.open("https://calendly.com", "_blank"),
    },
    {
      icon: Mail,
      label: "Contact Us",
      onClick: onOpenModal,
    },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between relative min-h-[72px] sm:min-h-[88px]">
        
        {/* Left Side Horizontal Morphing Dock Bar */}
        <div className="flex items-center">
          <DockMorph position="inline" items={navDockItems} />
        </div>

        {/* Center VRaise Logo (Aligned Exactly in Middle) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
          <Link href="/" className="inline-block group py-1">
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right Blue Colored Shadow "Pitch Us" Button */}
        <div className="flex items-center">
          <button
            onClick={handlePitchUs}
            className="px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] sm:text-xs uppercase font-extrabold tracking-wider border border-blue-400/40 shadow-[0_6px_20px_-3px_rgba(37,99,235,0.55)] hover:shadow-[0_8px_24px_-3px_rgba(37,99,235,0.7)] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <Mail size={14} className="text-white shrink-0" />
            <span>Pitch Us</span>
          </button>
        </div>

      </div>
    </header>
  );
}
