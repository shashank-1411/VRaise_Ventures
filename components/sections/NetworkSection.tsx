"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function NetworkSection() {
  // Generate a field of concentric orange dots with randomized blinking animations
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
        const maxOpacity = 0.5 + (i % 4) * 0.12;
        dots.push({ cx, cy, duration, delay, maxOpacity });
      }
    }
    return dots;
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-white overflow-hidden select-none font-sans" id="network">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3 block">
            Network
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            The VRaise Scouting &amp; Capital Network
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-xl mx-auto">
            Connecting campus founders directly to tier-1 venture funds, accelerators, mentors, and angel syndicates.
          </p>
        </div>

        {/* Interactive SVG Network Canvas */}
        <div className="relative w-full max-w-5xl h-[420px] sm:h-[480px] flex items-center justify-center">
          
          {/* SVG Connection Lines & Animated Blue Dots */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 480" fill="none">
            
            {/* Left Paths to Center (500, 240) */}
            <path id="path-left-1" d="M 160 80 C 300 80, 380 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />
            <path id="path-left-2" d="M 120 240 C 260 240, 380 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />
            <path id="path-left-3" d="M 160 400 C 300 400, 380 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Right Paths to Center (500, 240) */}
            <path id="path-right-1" d="M 840 80 C 700 80, 620 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />
            <path id="path-right-2" d="M 880 240 C 740 240, 620 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />
            <path id="path-right-3" d="M 840 400 C 700 400, 620 240, 500 240" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* ANIMATED BLINKING BLUE DOTS MATRIX AROUND CENTER HUB */}
            {blinkingDots.map((dot, idx) => (
              <motion.circle
                key={`blue-dot-${idx}`}
                cx={dot.cx}
                cy={dot.cy}
                r={1.8}
                fill="#2563eb"
                initial={{ opacity: 0.15, scale: 0.8 }}
                animate={{
                  opacity: [0.15, dot.maxOpacity, 0.15],
                  scale: [0.8, 1.4, 0.8],
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
            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="2.8s" repeatCount="indefinite" path="M 160 80 C 300 80, 380 240, 500 240" />
            </circle>
            
            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="3.2s" repeatCount="indefinite" path="M 120 240 C 260 240, 380 240, 500 240" />
            </circle>
            
            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 160 400 C 300 400, 380 240, 500 240" />
            </circle>

            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="3.0s" repeatCount="indefinite" path="M 840 80 C 700 80, 620 240, 500 240" />
            </circle>

            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="3.4s" repeatCount="indefinite" path="M 880 240 C 740 240, 620 240, 500 240" />
            </circle>

            <circle r="4" fill="#3b82f6" className="shadow-[0_0_12px_#3b82f6]">
              <animateMotion dur="2.6s" repeatCount="indefinite" path="M 840 400 C 700 400, 620 240, 500 240" />
            </circle>

          </svg>

          {/* LEFT OUTER NODES (Clean typography, no icons/emojis) */}
          {/* Node 1: Founder (Top Left) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[3%] sm:left-[8%] top-[12%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-extrabold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>Founder</span>
          </motion.div>

          {/* Node 2: Accelerator (Mid Left) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[1%] sm:left-[4%] top-[46%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-extrabold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>Accelerator</span>
          </motion.div>

          {/* Node 3: Mentor (Bottom Left) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute left-[3%] sm:left-[8%] bottom-[12%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-extrabold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>Mentor</span>
          </motion.div>

          {/* CENTER HUB: VRAISE VENTURES */}
          <div className="relative z-20 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-slate-900 text-slate-950 flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] cursor-pointer mb-3"
            >
              <Rocket size={26} className="text-slate-950" />
            </motion.div>
            <span className="font-extrabold text-xl sm:text-2xl text-slate-950 font-sans tracking-tight">
              VRaise
            </span>
          </div>

          {/* RIGHT OUTER NODES (Clean typography, no icons/emojis) */}
          {/* Node 4: Investor (Top Right) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[3%] sm:right-[8%] top-[12%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-extrabold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>Investor</span>
          </motion.div>

          {/* Node 5: VC (Mid Right) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[1%] sm:right-[4%] top-[46%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-bold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>VC</span>
          </motion.div>

          {/* Node 6: Angel (Bottom Right) */}
          <motion.div
            whileHover={{ scale: 1.08, y: -4 }}
            className="absolute right-[3%] sm:right-[8%] bottom-[12%] z-20 bg-white border border-slate-200/90 rounded-full px-6 py-2.5 shadow-xl font-mono text-xs uppercase font-extrabold text-slate-900 cursor-pointer tracking-wider"
          >
            <span>Angel</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
