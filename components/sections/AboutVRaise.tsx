"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function AboutVRaise() {
  // Generate concentric circular rings of blinking blue dots centered behind the logo
  const blinkingDots = useMemo(() => {
    const dots: { cx: number; cy: number; duration: number; delay: number; maxOpacity: number }[] = [];
    const centerX = 300;
    const centerY = 300;
    const numRings = 5;
    const dotsPerRingBase = 12;

    for (let ring = 1; ring <= numRings; ring++) {
      const radius = ring * 35 + 40; // Radii: 75, 110, 145, 180, 215
      const count = dotsPerRingBase + ring * 8;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * 2 * Math.PI;
        const cx = centerX + radius * Math.cos(angle);
        const cy = centerY + radius * Math.sin(angle);
        const duration = 1.4 + (i % 5) * 0.35;
        const delay = (i % 7) * 0.25;
        const maxOpacity = 0.5 + (i % 4) * 0.12;
        dots.push({ cx, cy, duration, delay, maxOpacity });
      }
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

        {/* Center Brand Header with Logo & Concentric Blue Blinking Dots Matrix */}
        <div className="relative mb-12 flex items-center justify-center min-w-[320px] sm:min-w-[500px] h-[220px] sm:h-[300px]">
          
          {/* SVG Canvas for Concentric Circular Blinking Blue Dots */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 600 600"
            fill="none"
          >
            {blinkingDots.map((dot, idx) => (
              <motion.circle
                key={`about-dot-${idx}`}
                cx={dot.cx}
                cy={dot.cy}
                r={2.2}
                fill="#2563eb"
                className="drop-shadow-[0_0_6px_rgba(37,99,235,0.7)]"
                initial={{ opacity: 0.1, scale: 0.7 }}
                animate={{
                  opacity: [0.15, dot.maxOpacity, 0.15],
                  scale: [0.7, 1.4, 0.7],
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
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600/20 via-sky-500/25 to-blue-600/20 blur-3xl animate-pulse pointer-events-none z-0" />

          {/* Center Logo Pill Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative z-10 flex items-center justify-center bg-white/95 backdrop-blur-md border-2 border-slate-200/90 shadow-2xl px-10 sm:px-14 py-4 sm:py-5 rounded-full"
          >
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-20 sm:h-28 md:h-32 w-auto object-contain mix-blend-multiply"
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
