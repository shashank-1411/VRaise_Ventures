"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function NetworkSection() {
  // Generate a field of concentric dots with randomized blinking animations
  const blinkingDots = useMemo(() => {
    const dots: { cx: number; cy: number; duration: number; delay: number; maxOpacity: number }[] = [];
    const centerX = 500;
    const centerY = 240;
    const numRings = 7;
    const dotsPerRingBase = 12;

    for (let ring = 1; ring <= numRings; ring++) {
      const radius = ring * 22;
      const count = dotsPerRingBase + ring * 8;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const cx = centerX + radius * Math.cos(angle);
        const cy = centerY + radius * Math.sin(angle);
        const duration = 1.2 + (i % 5) * 0.3;
        const delay = (i % 7) * 0.25;
        const maxOpacity = 0.6 + (i % 4) * 0.12;
        dots.push({ cx, cy, duration, delay, maxOpacity });
      }
    }
    return dots;
  }, []);

  const scoutingPartners = ["Founders", "Accelerators", "Incubators", "Mentors"];
  const capitalPartners = ["Venture Funds", "Family Offices", "Angel Syndicates"];

  return (
    <section className="w-full py-20 sm:py-24 px-4 bg-[#070e24] text-white overflow-hidden select-none font-sans relative" id="network">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold mb-3 block">
            Network
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-3xl sm:text-5xl md:text-6xl text-white leading-[1.15] mb-6 font-normal tracking-tight"
          >
            VRaise Scouting &amp; Capital Network
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed font-sans font-normal max-w-xl mx-auto">
            Connecting campus founders directly to venture funds, family offices, accelerators, incubators, mentors, and angel syndicates.
          </p>
        </div>

        {/* MOBILE LAYOUT (< md screens, 0 overlapping nodes) */}
        <div className="flex md:hidden flex-col items-center w-full max-w-md mx-auto gap-8 z-20">
          
          {/* Center Logo Hub with Glowing Blue Aura */}
          <div className="relative flex items-center justify-center py-2">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/30 via-sky-500/35 to-blue-600/30 blur-2xl animate-pulse pointer-events-none" />
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 flex items-center justify-center bg-white border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] px-7 py-3 rounded-full cursor-pointer"
            >
              <img
                src="/assets/vraise-logo.png"
                alt="VRaise Ventures Logo"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </motion.div>
          </div>

          {/* Scouting Partners Group */}
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase font-bold text-blue-400 tracking-widest">
              Scouting Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {scoutingPartners.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 border border-blue-400/40 rounded-full px-5 py-2.5 shadow-[0_6px_18px_-2px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white tracking-wider cursor-pointer"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capital Partners Group */}
          <div className="w-full flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase font-bold text-blue-400 tracking-widest">
              Capital Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {capitalPartners.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 border border-blue-400/40 rounded-full px-5 py-2.5 shadow-[0_6px_18px_-2px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white tracking-wider cursor-pointer"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* DESKTOP & TABLET INTERACTIVE CANVAS LAYOUT (>= md screens) */}
        <div className="hidden md:flex relative w-full max-w-5xl h-[500px] items-center justify-center">
          
          {/* SVG Connection Lines & Animated Blue Dots */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 500" fill="none">
            
            {/* Left Paths to Center Hub (500, 250) */}
            <path id="path-left-1" d="M 160 70 C 300 70, 380 250, 500 250" stroke="#1e293b" strokeWidth="2" />
            <path id="path-left-2" d="M 110 190 C 250 190, 380 250, 500 250" stroke="#1e293b" strokeWidth="2" />
            <path id="path-left-3" d="M 110 310 C 250 310, 380 250, 500 250" stroke="#1e293b" strokeWidth="2" />
            <path id="path-left-4" d="M 160 430 C 300 430, 380 250, 500 250" stroke="#1e293b" strokeWidth="2" />

            {/* Right Paths to Center Hub (500, 250) */}
            <path id="path-right-1" d="M 840 90 C 700 90, 620 250, 500 250" stroke="#1e293b" strokeWidth="2" />
            <path id="path-right-2" d="M 880 250 C 740 250, 620 250, 500 250" stroke="#1e293b" strokeWidth="2" />
            <path id="path-right-3" d="M 840 410 C 700 410, 620 250, 500 250" stroke="#1e293b" strokeWidth="2" />

            {/* ANIMATED BLINKING BLUE DOTS MATRIX AROUND CENTER HUB */}
            {blinkingDots.map((dot, idx) => (
              <motion.circle
                key={`blue-dot-${idx}`}
                cx={dot.cx}
                cy={dot.cy + 10}
                r={2}
                fill="#38bdf8"
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{
                  opacity: [0.2, dot.maxOpacity, 0.2],
                  scale: [0.8, 1.5, 0.8],
                }}
                transition={{
                  duration: dot.duration,
                  delay: dot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* ANIMATED GLOWING BLUE DOTS MOVING FROM OUTER NODES TO CENTER */}
            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M 160 70 C 300 70, 380 250, 500 250" />
            </circle>
            
            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M 110 190 C 250 190, 380 250, 500 250" />
            </circle>
            
            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 110 310 C 250 310, 380 250, 500 250" />
            </circle>

            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="3.0s" repeatCount="indefinite" path="M 160 430 C 300 430, 380 250, 500 250" />
            </circle>

            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="3.1s" repeatCount="indefinite" path="M 840 90 C 700 90, 620 250, 500 250" />
            </circle>

            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M 880 250 C 740 250, 620 250, 500 250" />
            </circle>

            <circle r="4.5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]">
              <animateMotion dur="2.7s" repeatCount="indefinite" path="M 840 410 C 700 410, 620 250, 500 250" />
            </circle>

          </svg>

          {/* LEFT OUTER BLUE NODE CAPSULES WITH WHITE TEXT */}
          {/* Node 1: Founders */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[3%] sm:left-[8%] top-[8%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Founders</span>
          </motion.div>

          {/* Node 2: Accelerators */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[1%] sm:left-[4%] top-[34%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Accelerators</span>
          </motion.div>

          {/* Node 3: Incubators */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[1%] sm:left-[4%] bottom-[34%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Incubators</span>
          </motion.div>

          {/* Node 4: Mentors */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[3%] sm:left-[8%] bottom-[8%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Mentors</span>
          </motion.div>

          {/* CENTER HUB: VRAISE VENTURES LOGO PNG */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative z-20 flex items-center justify-center bg-white border-2 border-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.6)] px-7 sm:px-10 py-3 sm:py-4 rounded-full cursor-pointer"
          >
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-12 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply"
            />
          </motion.div>

          {/* RIGHT OUTER BLUE NODE CAPSULES WITH WHITE TEXT */}
          {/* Node 5: Venture Funds */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[3%] sm:right-[8%] top-[12%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Venture Funds</span>
          </motion.div>

          {/* Node 6: Family Offices */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[1%] sm:right-[4%] top-[46%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Family Offices</span>
          </motion.div>

          {/* Node 7: Angel Syndicates */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[3%] sm:right-[8%] bottom-[12%] z-20 bg-blue-600 border border-blue-400/50 rounded-full px-6 py-2.5 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] font-mono text-xs uppercase font-extrabold text-white cursor-pointer tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Angel Syndicates</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
