"use client";

import React, { useState } from "react";
import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";
import { Mail, Copy, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "contact@vraiseventures.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const columns = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "About Us", href: "#about-vraise" },
        { label: "What We Do", href: "#what-we-do" },
        { label: "Venture Journey", href: "#process" },
        { label: "Network", href: "#network" },
      ],
    },
    {
      title: "Deal Pipeline",
      links: [
        { label: "01 • Campus Discovery", href: "#process" },
        { label: "02 • Traction & Team", href: "#process" },
        { label: "03 • IC Readiness", href: "#process" },
        { label: "04 • Investor Matching", href: "#process" },
        { label: "05 • Close & Support", href: "#process" },
      ],
    },
    {
      title: "Scout Networks",
      links: [
        { label: "Group of Eight (Go8)", href: "#network" },
        { label: "Ivy League", href: "#network" },
        { label: "Russell Group", href: "#network" },
        { label: "IITs & IIMs", href: "#network" },
        { label: "Campus Incubators", href: "#process" },
      ],
    },
    {
      title: "Legal & Terms",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Partner Agreements", href: "#" },
        { label: "Discreet Sourcing Policy", href: "#about-vraise" },
        { label: "Security & Audit", href: "#" },
      ],
    },
  ];

  return (
    <RuixenGradientFooter gradientHeight="45vh" minReveal={0} className="relative z-10 bg-white border-t-2 border-slate-900 font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-6" id="footer">
        <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-6 items-start">
          
          {/* Brand Info & Email Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-extrabold text-2xl text-slate-950 tracking-tight block">
                VRaise Ventures
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs font-normal">
              Bilateral early-stage deal origination firm discovering breakout teams across India, ANZ, and US corridors.
            </p>

            {/* Email Contact Box */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-950 block mb-2">
                Direct Email Contact
              </span>
              
              <div className="flex flex-col gap-2 max-w-xs">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-mono font-bold text-slate-950 transition-colors"
                >
                  <Mail size={15} className="text-blue-600 shrink-0" />
                  <span className="truncate">{contactEmail}</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="self-start text-[11px] font-mono font-bold text-slate-500 hover:text-slate-950 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-600" />
                      <span className="text-emerald-600">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Footer Navigation Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950">
                {col.title}
              </h4>
              <ul className="space-y-2 text-xs font-normal text-slate-600">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="hover:text-slate-950 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} VRaise Ventures. All rights reserved.</p>
          <p className="font-mono text-[11px]">Discreet University Deal Origination Engine</p>
        </div>
      </div>
    </RuixenGradientFooter>
  );
}
