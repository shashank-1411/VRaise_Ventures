"use client";

import React from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
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

        {/* Center Brand Logo (Significantly Bigger Logo Image) */}
        <div className="flex justify-center col-span-3 md:col-span-1">
          <Link href="/" className="inline-block group py-1">
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-16 sm:h-24 md:h-28 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Right Action Button */}
        <div className="hidden md:flex justify-end">
          <button
            onClick={onOpenModal}
            className="px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-xs cursor-pointer"
          >
            Pitch Us
          </button>
        </div>
      </div>
    </header>
  );
}
