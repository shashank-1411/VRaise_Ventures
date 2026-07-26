"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AnimatedScrollHeading } from "@/components/ui/text-scroll-animation";
import { 
  Search, 
  Filter, 
  FileCheck2, 
  FileText, 
  Target, 
  Send,
  Building2,
  Users
} from "lucide-react";

export default function DealFlowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const pointerTop = useTransform(smoothProgress, [0, 1], ["0%", "98%"]);

  const steps = [
    {
      number: "01",
      title: "Founder Discovery",
      description: "Tracking engineering hubs, campus accelerators, and developer labs across ANZ, India, and US corridors.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Search size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              Day 0 Radar
            </span>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 bg-white border border-slate-900 rounded-xl flex items-center justify-between text-slate-900">
              <span className="flex items-center gap-2 font-semibold">
                <Building2 size={14} className="text-slate-800" /> Go8 Incubators &amp; Hackathons
              </span>
              <span className="text-slate-950 font-bold text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-900">Signal Found</span>
            </div>
            <div className="p-2.5 bg-white border border-slate-900 rounded-xl flex items-center justify-between text-slate-900">
              <span className="flex items-center gap-2 font-semibold">
                <Users size={14} className="text-slate-800" /> IITs / IIMs Founder Rooms
              </span>
              <span className="text-slate-950 font-bold text-[10px] bg-slate-100 px-2 py-0.5 rounded border border-slate-900">Verified</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Rigorous Screen",
      description: "Filtering out weak structures, unscalable tech stacks, and messy cap tables before initial partner review.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Filter size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              Cap Table Screen
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-3 bg-white border border-slate-900 rounded-xl text-center">
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Unscalable Stacks</span>
              <span className="font-extrabold text-slate-950 block mt-1">Filtered Out</span>
            </div>
            <div className="p-3 bg-white border border-slate-900 rounded-xl text-center">
              <span className="block text-slate-500 text-[10px] uppercase font-bold">Cap Table Clean</span>
              <span className="font-extrabold text-slate-950 block mt-1">Passed (100%)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Due Diligence",
      description: "Verifying traction, customer references, and financial evidence directly with founders and early users.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <FileCheck2 size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              Raw Data Audit
            </span>
          </div>
          <div className="p-3 bg-white border border-slate-900 rounded-xl font-sans text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-900">
              <span className="font-semibold">True GMV Audit</span>
              <span className="text-slate-950 font-mono font-bold text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-900">Verified ($1.2M)</span>
            </div>
            <div className="flex items-center justify-between text-slate-900">
              <span className="font-semibold">User Reference Calls</span>
              <span className="text-slate-950 font-mono font-bold text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-900">Passed (5/5)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: "04",
      title: "Investment Memo",
      description: "Clean documentation of risks, growth trajectories, unit economics, and market expansion opportunities.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <FileText size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              IC Documentation
            </span>
          </div>
          <div className="p-3 bg-white border border-slate-900 rounded-xl font-mono text-xs text-slate-900 space-y-1">
            <div className="font-extrabold text-slate-950 block">
              Executive Summary &amp; Risk Matrix
            </div>
            <p className="text-[11px] text-slate-600 font-sans">Prepared for Lead Partner Investment Committee review.</p>
          </div>
        </div>
      ),
    },
    {
      number: "05",
      title: "Thesis Mapping",
      description: "Matching each deal to signed partner mandates by stage, sector, geographic corridor, and cheque size.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Target size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              Mandate Match
            </span>
          </div>
          <div className="p-3 bg-white border border-slate-900 rounded-xl text-xs space-y-1 font-mono">
            <div className="flex items-center justify-between text-slate-950 font-bold">
              <span>Partner Mandate Match</span>
              <span className="bg-slate-950 text-white px-2 py-0.5 rounded text-[10px]">98% Fit</span>
            </div>
            <div className="text-[11px] text-slate-600 font-sans pt-1">Sector: AI Agent Fintech • Cheque: $500k</div>
          </div>
        </div>
      ),
    },
    {
      number: "06",
      title: "Warm Intro",
      description: "Direct warm handoff to lead partners with a fully audited data room and founder introduction prepared.",
      vectorIllustration: (
        <div className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-slate-950 text-white rounded-xl shadow-xs">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
                <Send size={20} />
              </motion.div>
            </div>
            <span className="text-xs font-mono font-bold text-slate-950 bg-slate-200 border border-slate-900 px-2.5 py-1 rounded-md">
              Partner Calendar
            </span>
          </div>
          <div className="p-3 bg-white border border-slate-900 rounded-xl text-xs font-sans space-y-1">
            <span className="font-extrabold text-slate-950 block">Lead Partner Introduction Sent</span>
            <span className="text-[11px] text-slate-700 font-semibold block">
              Full Data Room Attached &amp; Referral Signed
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-white/40 backdrop-blur-xs border-t border-slate-200/80 relative" id="process">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
            [ Deal Origination Process ]
          </div>
          <AnimatedScrollHeading
            text="How We Generate High Quality Deal Flow"
            className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4"
          />
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A structured 6-stage pipeline moving early campus signals into verified, institutional-ready investment referrals.
          </p>
        </div>

        {/* Parallax Timeline Container */}
        <div className="relative pl-6 sm:pl-16">
          
          {/* Base Background Timeline Track Line */}
          <div className="absolute left-2 sm:left-6 top-3 bottom-8 w-1 bg-slate-200 rounded-full" />

          {/* Animated Blue Progress Fill Line */}
          <motion.div
            className="absolute left-2 sm:left-6 top-3 w-1 bg-sky-600 rounded-full z-10 origin-top"
            style={{ height: timelineHeight }}
          />

          {/* Active Glowing Pointer Circle (Perfectly Centered on Blue Timeline) */}
          <motion.div
            className="absolute left-[10px] sm:left-[26px] z-20 w-4 h-4 rounded-full bg-sky-600 border-2 border-white shadow-[0_0_12px_rgba(2,132,199,0.8)] -translate-x-1/2 -translate-y-1/2"
            style={{ top: pointerTop }}
          />

          {/* Steps List */}
          <div className="space-y-16 sm:space-y-24">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                {/* Text Side */}
                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-extrabold text-white bg-slate-950 border border-slate-900 px-3 py-1 rounded-md">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-1">
                    {step.description}
                  </p>
                </div>

                {/* Vector Illustration Side (Hover Zoom Enabled) */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="lg:col-span-6 cursor-pointer"
                >
                  {step.vectorIllustration}
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
