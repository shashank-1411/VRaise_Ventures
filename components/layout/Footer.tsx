"use client";

import React, { useState } from "react";
import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.75 },
      colors: ["#09090b", "#3f3f46", "#71717a", "#0284c7"],
    });

    setIsJoined(true);
  };

  const columns = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "Who We Are", href: "#about" },
        { label: "Sourcing Problem", href: "#problem" },
        { label: "Sourcing Solution", href: "#solution" },
        { label: "Deal Process", href: "#process" },
      ],
    },
    {
      title: "Deal Pipeline",
      links: [
        { label: "01 • Founder Discovery", href: "#process" },
        { label: "02 • Rigorous Screen", href: "#process" },
        { label: "03 • Raw Data Audit", href: "#process" },
        { label: "04 • Investment Memo", href: "#process" },
        { label: "05 • Mandate Match", href: "#process" },
      ],
    },
    {
      title: "Scout Corridors",
      links: [
        { label: "Australia & ANZ", href: "#about" },
        { label: "India Tech Hubs", href: "#about" },
        { label: "United States", href: "#about" },
        { label: "Campus Incubators", href: "#process" },
        { label: "Private Founder Labs", href: "#solution" },
      ],
    },
    {
      title: "Legal & Terms",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Partner Agreements", href: "#" },
        { label: "0% Equity Drag Policy", href: "#about" },
        { label: "Security & Audit", href: "#" },
      ],
    },
  ];

  return (
    <RuixenGradientFooter gradientHeight="45vh" minReveal={0} className="relative z-10 bg-white border-t-2 border-slate-900 font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-6" id="footer">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-6 items-start">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-extrabold text-2xl text-slate-950 tracking-tight block">
                VRaise Ventures
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs font-normal">
              Bilateral early-stage deal origination firm discovering breakout teams across India, ANZ, and US corridors.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 block mb-2">
                Subscribe to Newsletter
              </span>
              {!isJoined ? (
                <form onSubmit={handleJoin} className="flex max-w-xs gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="h-10 w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 text-xs text-slate-950 placeholder:text-slate-400 focus:border-slate-950 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="h-10 shrink-0 rounded-xl bg-slate-950 px-4 font-mono text-xs uppercase font-bold text-white transition-all hover:bg-slate-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Join</span>
                    <ArrowRight size={13} />
                  </button>
                </form>
              ) : (
                <div className="p-3 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-950 font-mono font-bold flex items-center gap-2 max-w-xs">
                  <CheckCircle2 size={16} className="text-slate-950" />
                  <span>Subscribed to Newsletter! 🎉</span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links Grid (Occupies Full Horizontal Width) */}
          <nav className="grid grid-cols-2 gap-8 sm:gap-10 font-mono text-xs uppercase sm:grid-cols-4 lg:col-span-4 w-full">
            {columns.map((col) => (
              <div key={col.title} className="space-y-3">
                <h3 className="text-slate-950 font-bold tracking-wider border-b border-slate-900 pb-2 text-xs">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-2.5 text-[11px] font-medium">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-600 transition-colors hover:text-slate-950 hover:font-bold block py-0.5"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 pb-4 font-mono text-xs uppercase tracking-wider text-slate-600 sm:flex-row">
          <span>&copy; 2026 VRaise Ventures. All rights reserved.</span>
          <span className="flex items-center gap-2 text-slate-950 font-bold">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
            Live Pipeline Stream Active
          </span>
          <span>ANZ · INDIA · US</span>
        </div>
      </div>
    </RuixenGradientFooter>
  );
}
