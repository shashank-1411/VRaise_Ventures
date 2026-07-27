"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Real partner logos & venture funds
  const sampleLogos = [
    { name: "TEN13", image: "/assets/ten13.png", isText: false, isBoardy: false },
    { name: "Pinery", image: "/assets/pinery.png", isText: false, isBoardy: false },
    { name: "Boardy", image: "/assets/boardy.png", isText: false, isBoardy: true },
    { name: "Level Up Ventures", image: null, isText: true, isBoardy: false },
    { name: "and many more...", image: null, isMore: true, isBoardy: false },
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
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-2 block">
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        
        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Slow Marquee Track */}
        <motion.div
          className="flex items-center gap-6 sm:gap-8 w-max"
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
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center justify-center cursor-pointer shrink-0 py-2 group"
            >
              {item.isMore ? (
                /* "and many more..." bordered pill badge */
                <div className="flex items-center justify-center px-6 py-4 rounded-2xl bg-slate-100/90 border border-slate-300 shadow-xs group-hover:bg-slate-950 group-hover:border-slate-950 transition-all h-20 sm:h-22">
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-slate-600 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              ) : item.isBoardy ? (
                /* Boardy Logo Image + Boardy Text (Regular) */
                <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-slate-300 transition-all h-20 sm:h-22 min-w-[160px] sm:min-w-[200px]">
                  <img
                    src="/assets/boardy.png"
                    alt="Boardy Logo"
                    className="h-8 sm:h-10 w-auto object-contain rounded-full"
                  />
                  <span className="font-normal text-lg sm:text-xl text-slate-800 group-hover:text-slate-950 tracking-tight font-sans">
                    Boardy
                  </span>
                </div>
              ) : item.isText ? (
                /* Text Partner Brand Badges with Clean Card Border (Level Up Ventures) */
                <div className="flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-slate-300 transition-all h-20 sm:h-22 min-w-[150px] sm:min-w-[190px]">
                  <span className="font-extrabold text-lg sm:text-xl text-slate-700 group-hover:text-slate-950 tracking-tight font-sans">
                    {item.name}
                  </span>
                </div>
              ) : (
                /* Image Partner Logos with Clean Card Border (TEN13 & Pinery) */
                <div className="flex items-center justify-center px-7 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-slate-300 transition-all h-20 sm:h-22 min-w-[150px] sm:min-w-[190px]">
                  <img
                    src={item.image!}
                    alt={item.name}
                    className="h-10 sm:h-14 max-h-14 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
