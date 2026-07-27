"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Real partner logos & venture funds
  const sampleLogos = [
    { name: "TEN13", image: "/assets/ten13.png", isText: false },
    { name: "Pinery", image: "/assets/pinery.png", isText: false },
    { name: "Boardy", image: null, isText: true },
    { name: "Level Up Ventures", image: null, isText: true },
    { name: "and many more...", image: null, isMore: true },
  ];

  // Quadruplicated set for seamless, continuous marquee loop
  const marqueeItems = [
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
    ...sampleLogos,
  ];

  return (
    <div className="w-full bg-white/40 backdrop-blur-xs border-y border-slate-200/80 py-12 overflow-hidden relative z-20 font-sans select-none">
      <div className="max-w-6xl mx-auto text-center mb-8 px-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-orange-500 mb-2 block">
          PARTNER NETWORK
        </span>
        <h3
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-2xl sm:text-3xl md:text-4xl text-slate-950 font-normal tracking-tight"
        >
          Some of Our Partner Funds &amp; Syndicates
        </h3>
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
          className="flex items-center gap-14 sm:gap-20 w-max"
          animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 45,
          }}
        >
          {marqueeItems.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}`}
              whileHover={{ scale: 1.12, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center cursor-pointer shrink-0 py-2 px-3 group"
            >
              {item.isMore ? (
                /* "and many more..." pill badge */
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-slate-500 bg-slate-100/90 border border-slate-300 rounded-full px-5 py-2.5 shadow-xs group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-colors">
                  {item.name}
                </span>
              ) : item.isText ? (
                /* Text Partner Brand Badges (Boardy & Level Up Ventures) */
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs group-hover:bg-white group-hover:shadow-md group-hover:border-slate-300 transition-all">
                  <span className="font-extrabold text-lg sm:text-xl text-slate-700 group-hover:text-slate-950 tracking-tight font-sans">
                    {item.name}
                  </span>
                </div>
              ) : (
                /* Image Partner Logos (TEN13 & Pinery with grey-to-color hover) */
                <img
                  src={item.image!}
                  alt={item.name}
                  className="h-14 sm:h-18 max-h-18 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
