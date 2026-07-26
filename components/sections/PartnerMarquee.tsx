"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Real partner logos & venture funds
  const sampleLogos = [
    { name: "TEN13", image: "/assets/ten13.png" },
    { name: "Pinery", image: "/assets/pinery.png" },
    { name: "M8 Ventures", image: "/assets/m8.png" },
  ];

  // Quadruplicated set for seamless, continuous marquee loop
  const marqueeItems = [
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
  ];

  return (
    <div className="w-full bg-white/40 backdrop-blur-xs border-y border-slate-200/80 py-10 overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto text-center mb-7">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
          PARTNER FUNDS &amp; VENTURE SYNDICATES
        </span>
      </div>

      {/* Marquee Wrapper with Fade Gradient Masks */}
      <div
        className="w-full overflow-hidden relative px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1/4 max-w-[220px] bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        
        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/4 max-w-[220px] bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Slow Marquee Track */}
        <motion.div
          className="flex items-center gap-16 sm:gap-24 w-max"
          animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 45,
          }}
        >
          {marqueeItems.map((logo, idx) => (
            <motion.div
              key={`${logo.name}-${idx}`}
              whileHover={{ scale: 1.15, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center cursor-pointer select-none group shrink-0 py-2 px-4"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-14 sm:h-20 max-h-20 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
