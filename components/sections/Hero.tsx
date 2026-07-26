"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Target, ShieldCheck, Building2, Minus, Square, X } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [activeFeedIndex, setActiveFeedIndex] = useState(0);

  const buttonSpringBounce = {
    hover: {
      scale: 1.04,
      y: -3,
      transition: { type: "spring", stiffness: 400, damping: 16 },
    },
    tap: {
      scale: 0.96,
      y: 0,
    },
  };

  // 4 Live News Deals switching every 4 seconds (no colored badges)
  const liveDeals = [
    {
      id: 1,
      category: "GovTech & B2B AI SaaS",
      stage: "Seed Stage",
      origin: "Genesis USYD Incubator & IIT Founder Group",
      mandate: "TEN13 & Pinery Capital Mandate Match",
      fitScore: "98% Fit",
      summary: "Founders hold 20 years of Commonwealth procurement IP. Audited cap table, raw financial verification passed, direct warm intro sent to lead partner with data room prepared.",
      status: "0% Founder Equity Drag • Signed Partner Agreement",
      corridor: "ANZ & India Corridor",
    },
    {
      id: 2,
      category: "Defense Tech & Autonomous Robotics",
      stage: "Pre-Seed Stage",
      origin: "Go8 Australia Lab & Canberra GovTech Hub",
      mandate: "M8 Ventures & Square Peg Mandate Match",
      fitScore: "99% Fit",
      summary: "Ex-ADF autonomous navigation team referred directly to lead partner. Clean cap table audited, 100% customer retention, complete data room prepared.",
      status: "Direct Lead Partner Intro • Data Room Prepared",
      corridor: "Sydney & Canberra Corridor",
    },
    {
      id: 3,
      category: "Fintech Infrastructure & Settlement",
      stage: "Seed Stage",
      origin: "IIT Delhi Innovation Lab & WhatsApp Group",
      mandate: "Peak XV & TEN13 Partner Mandate Match",
      fitScore: "96% Fit",
      summary: "Cross-border settlement engine processing $4M monthly volume. Zero equity drag, diligence memo signed and delivered directly to lead IC.",
      status: "0% Founder Advisory Fee • Verified Traction",
      corridor: "Bengaluru & Global Corridor",
    },
    {
      id: 4,
      category: "BioTech AI & Clinical Intelligence",
      stage: "Pre-Seed Stage",
      origin: "Monash Bio-Incubator & Stanford Alumni Room",
      mandate: "Blackbird & Pinery Capital Mandate Match",
      fitScore: "97% Fit",
      summary: "AI pathology diagnostic model with FDA pre-clearance. Full data room attached, warm intro scheduled directly with lead healthcare partner.",
      status: "100% Vetted IC Memo • Direct Handoff",
      corridor: "Melbourne & US Corridor",
    },
  ];

  // Automatic 4-Second News Switcher
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeedIndex((prev) => (prev + 1) % liveDeals.length);
    }, 4000); // 4000ms = 4 seconds

    return () => clearInterval(timer);
  }, [liveDeals.length]);

  const activeDeal = liveDeals[activeFeedIndex];

  return (
    <section className="relative w-full pt-36 pb-20 px-4 overflow-hidden" id="home">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-6"
        >
          Build better pipeline. <br className="hidden sm:inline" />
          Faster. With VRaise
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal"
        >
          VRaise helps VC teams, founders, and managers discover high-quality early-stage deals in seconds without missing proprietary signal.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center mb-12"
        >
          <motion.button
            onClick={onOpenModal}
            whileHover="hover"
            whileTap="tap"
            variants={buttonSpringBounce}
            className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl shadow-md flex items-center gap-2 cursor-pointer transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* CLASSIC WINDOWS XP RETRO STYLE LIVE FEED WINDOW */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          whileHover={{
            scale: 1.01,
            y: -3,
            transition: { type: "spring", stiffness: 350, damping: 17 },
          }}
          className="w-full max-w-3xl text-slate-900 rounded-t-xl rounded-b-lg shadow-xl text-left relative z-20 transition-all border-2 border-slate-400 overflow-hidden font-sans"
        >
          {/* Windows XP Classic Blue Header Bar */}
          <div className="bg-gradient-to-r from-[#0058e6] via-[#2573f9] to-[#004dc2] px-3.5 py-1.5 flex items-center justify-between text-white font-bold text-xs select-none shadow-xs border-b border-blue-900">
            <div className="flex items-center gap-2 font-mono">
              <Compass size={14} className="text-white animate-spin-slow" />
              <span>vraise-ventures-live-feed</span>
            </div>
            
            {/* Windows XP Window Control Buttons [ _ ] [ ▢ ] [ X ] */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 bg-[#0058e6] hover:bg-blue-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <Minus size={11} className="text-white" />
              </div>
              <div className="w-5 h-5 bg-[#0058e6] hover:bg-blue-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <Square size={9} className="text-white" />
              </div>
              <div className="w-5 h-5 bg-[#e81123] hover:bg-red-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <X size={12} className="text-white font-extrabold" />
              </div>
            </div>
          </div>

          {/* Windows XP Classic Light Gray Body Frame */}
          <div className="bg-[#ece9d8] p-3 sm:p-4 border-t border-white">
            
            {/* White Inset Content Card */}
            <div className="bg-white border border-slate-300 rounded-lg p-4 shadow-inner space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDeal.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  {/* Top Bar (No colored badges) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-slate-100 rounded-md border border-slate-300 text-slate-800">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        >
                          <Compass className="w-4 h-4 text-slate-700" />
                        </motion.div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-extrabold text-slate-900 text-base tracking-tight">
                            {activeDeal.category}
                          </h3>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-200 text-slate-700 border border-slate-300 rounded-xs">
                            {activeDeal.stage}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-normal">{activeDeal.origin}</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-slate-500 font-semibold">
                      Feed Item ({activeFeedIndex + 1}/{liveDeals.length})
                    </span>
                  </div>

                  {/* Summary Box */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 space-y-1 font-sans">
                    <div className="flex items-center justify-between font-bold text-slate-900">
                      <span className="flex items-center gap-1.5">
                        <Target size={13} className="text-slate-600" /> {activeDeal.mandate}
                      </span>
                      <span className="text-slate-700 font-mono text-[10px] bg-slate-200 px-2 py-0.5 rounded-xs border border-slate-300 font-bold">
                        {activeDeal.fitScore}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-normal text-xs pt-1">
                      {activeDeal.summary}
                    </p>
                  </div>

                  {/* Bottom Status Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 pt-1 font-medium gap-2 border-t border-slate-200">
                    <span className="flex items-center gap-1.5 font-bold text-slate-800">
                      <ShieldCheck size={15} className="text-slate-600" /> {activeDeal.status}
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] flex items-center gap-1">
                      <Building2 size={13} className="text-slate-600" /> {activeDeal.corridor}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 4-Second Timer Progress Bar */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden border border-slate-300">
                <motion.div
                  key={`bar-${activeFeedIndex}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-slate-700"
                />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Bottom Social Proof label */}
        <div className="text-xs font-medium text-slate-500 mt-12 tracking-wide uppercase">
          Trusted by modern investment teams across ANZ, India &amp; US
        </div>

      </div>
    </section>
  );
}
