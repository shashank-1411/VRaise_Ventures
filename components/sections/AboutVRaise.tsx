"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function AboutVRaise() {
  // Generate concentric stadium pill rings of blinking blue dots matching the logo pill container shape
  const blinkingDots = useMemo(() => {
    const dots: { cx: number; cy: number; duration: number; delay: number; maxOpacity: number }[] = [];
    const centerX = 300;
    const centerY = 200;
    const numRings = 5;

    for (let ring = 1; ring <= numRings; ring++) {
      const halfWidth = 55 + ring * 18;  // horizontal straight segment offset
      const radius = 30 + ring * 22;     // vertical semi-circle radius
      const dotsPerCap = 8 + ring * 2;   // dots on each semicircle cap
      const dotsPerSide = 10 + ring * 2; // dots on top and bottom straight sides

      // 1. Top side (left to right)
      for (let i = 0; i < dotsPerSide; i++) {
        const x = centerX - halfWidth + (i / dotsPerSide) * (2 * halfWidth);
        const y = centerY - radius;
        dots.push(createDot(x, y, dots.length));
      }

      // 2. Right semicircle cap
      for (let i = 0; i < dotsPerCap; i++) {
        const angle = -Math.PI / 2 + (i / dotsPerCap) * Math.PI;
        const x = centerX + halfWidth + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        dots.push(createDot(x, y, dots.length));
      }

      // 3. Bottom side (right to left)
      for (let i = 0; i < dotsPerSide; i++) {
        const x = centerX + halfWidth - (i / dotsPerSide) * (2 * halfWidth);
        const y = centerY + radius;
        dots.push(createDot(x, y, dots.length));
      }

      // 4. Left semicircle cap
      for (let i = 0; i < dotsPerCap; i++) {
        const angle = Math.PI / 2 + (i / dotsPerCap) * Math.PI;
        const x = centerX - halfWidth + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        dots.push(createDot(x, y, dots.length));
      }
    }

    function createDot(cx: number, cy: number, index: number) {
      const duration = 1.2 + (index % 5) * 0.35;
      const delay = (index % 8) * 0.22;
      const maxOpacity = 0.65 + (index % 4) * 0.12;
      return { cx, cy, duration, delay, maxOpacity };
    }

    return dots;
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-white select-none overflow-hidden font-sans relative" id="about-vraise">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative">
        
        {/* Section Tagline */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold block">
            About
          </span>
        </div>

        {/* Center Brand Header with Logo & Stadium Pill Blue Blinking Dots Matrix */}
        <div className="relative mb-12 flex items-center justify-center w-full max-w-[600px] h-[260px] sm:h-[320px]">
          
          {/* SVG Canvas for Stadium Pill Shaped Blinking Blue Dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 600 400"
            fill="none"
          >
            {blinkingDots.map((dot, idx) => (
              <motion.circle
                key={`about-stadium-dot-${idx}`}
                cx={dot.cx}
                cy={dot.cy}
                r={2.8}
                fill="#2563eb"
                className="drop-shadow-[0_0_8px_rgba(37,99,235,0.85)]"
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{
                  opacity: [0.25, dot.maxOpacity, 0.25],
                  scale: [0.8, 1.45, 0.8],
                }}
                transition={{
                  duration: dot.duration,
                  delay: dot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* Glowing Animated Pulsing Blue Aura Ring */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-600/20 via-sky-500/25 to-blue-600/20 blur-3xl animate-pulse pointer-events-none z-0" />

          {/* Center Logo Pill Badge (Slightly Decreased Logo Size) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 flex items-center justify-center bg-white/95 backdrop-blur-md border-2 border-slate-200/90 shadow-2xl px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full"
          >
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-[52px] sm:h-[72px] md:h-[84px] w-auto object-contain mix-blend-multiply"
            />
          </motion.div>
        </div>

        {/* Discreet Scouting Network Manifesto Paragraph in PT Serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-2xl sm:text-3xl md:text-4xl text-slate-800 leading-relaxed max-w-4xl mx-auto font-normal tracking-tight mb-12"
        >
          VRaise operates very discreetly. Our scout network works entirely behind the scenes inside leading university campuses worldwide — most people never know where our scouts are located, ensuring our partners see exceptional founders first, and see them ready.
        </motion.p>

      </div>
    </section>
  );
}
