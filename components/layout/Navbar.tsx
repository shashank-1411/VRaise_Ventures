"use client";

import React from "react";
import Link from "next/link";
import { Mail, Users } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const handlePitchUs = () => {
    window.location.href = "mailto:pitch@vraiseventures.com?subject=Pitch%20Us%20-%20VRaise%20Ventures";
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">
        
        {/* Left Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold justify-start">
          <a href="#about-vraise" className="hover:text-slate-950 transition-colors">
            About Us
          </a>
          <a href="#process" className="hover:text-slate-950 transition-colors">
            Process
          </a>
          <a href="#network" className="hover:text-slate-950 transition-colors">
            Network
          </a>
          <a href="#faq" className="hover:text-slate-950 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Center Brand Logo (Substantially Larger Logo Image) */}
        <div className="flex justify-center col-span-3 md:col-span-1">
          <Link href="/" className="inline-block group py-1">
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-20 sm:h-28 md:h-36 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right Action CTA Buttons */}
        <div className="hidden md:flex items-center justify-end gap-3">
          
          {/* Attention-grabbing Highlight "Pitch Us" Button (mailto link) */}
          <button
            onClick={handlePitchUs}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-mono text-xs uppercase font-extrabold tracking-wider shadow-[0_10px_25px_-5px_rgba(249,115,22,0.55)] border border-orange-400/50 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
          >
            <Mail size={14} className="text-white" />
            <span>Pitch Us</span>
          </button>

          {/* Secondary "Partner With Us" Button */}
          <button
            onClick={onOpenModal}
            className="px-5 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <Users size={14} className="text-slate-700" />
            <span>Partner With Us</span>
          </button>

        </div>
      </div>
    </header>
  );
}
