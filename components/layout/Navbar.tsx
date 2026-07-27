"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Users, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePitchUs = () => {
    window.location.href = "mailto:pitch@vraiseventures.com?subject=Pitch%20Us%20-%20VRaise%20Ventures";
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Left Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="inline-block group py-1">
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-14 sm:h-24 md:h-28 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
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

        {/* Right Action CTA Buttons & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Attention-grabbing Highlight "Pitch Us" Button */}
          <button
            onClick={handlePitchUs}
            className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-mono text-[11px] sm:text-xs uppercase font-extrabold tracking-wider shadow-[0_8px_20px_-4px_rgba(249,115,22,0.5)] border border-orange-400/50 hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5 sm:gap-2"
          >
            <Mail size={13} className="text-white shrink-0" />
            <span>Pitch Us</span>
          </button>

          {/* Secondary "Partner With Us" Button (Desktop/Tablet) */}
          <button
            onClick={onOpenModal}
            className="hidden sm:flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-900 font-mono text-[11px] sm:text-xs uppercase font-bold tracking-wider transition-all shadow-xs cursor-pointer items-center gap-1.5"
          >
            <Users size={13} className="text-slate-700 shrink-0" />
            <span>Partner With Us</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider font-semibold text-slate-700 animate-in slide-in-from-top duration-200">
          <a
            href="#about-vraise"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-orange-600 border-b border-slate-100"
          >
            About Us
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-orange-600 border-b border-slate-100"
          >
            Process
          </a>
          <a
            href="#network"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-orange-600 border-b border-slate-100"
          >
            Network
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-orange-600 border-b border-slate-100"
          >
            FAQ
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="mt-2 w-full py-3 rounded-full border border-slate-300 bg-slate-900 text-white font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2"
          >
            <Users size={14} />
            <span>Partner With Us</span>
          </button>
        </div>
      )}
    </header>
  );
}
