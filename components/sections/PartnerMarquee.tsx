"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Layers, 
  Box, 
  Boxes, 
  Hexagon, 
  Triangle, 
  Workflow, 
  Cpu, 
  Globe2, 
  Zap 
} from "lucide-react";

export default function PartnerMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  // Larger, prominent partner logos
  const sampleLogos = [
    { name: "Hom_", icon: <Box size={30} className="stroke-[2.2]" /> },
    { name: "Courto", icon: <Workflow size={30} className="stroke-[2.2]" /> },
    { name: "Vista", icon: <Layers size={30} className="stroke-[2.2]" /> },
    { name: "Rentigo", icon: <Hexagon size={30} className="stroke-[2.2]" /> },
    { name: "Carvia", icon: <Triangle size={30} className="stroke-[2.2]" /> },
    { name: "Spatium X", icon: <Cpu size={30} className="stroke-[2.2]" /> },
    { name: "Classter", icon: <Boxes size={30} className="stroke-[2.2]" /> },
    { name: "Bitazza", icon: <Sparkles size={30} className="stroke-[2.2]" /> },
    { name: "Nexus AI", icon: <Globe2 size={30} className="stroke-[2.2]" /> },
    { name: "Pulse VC", icon: <Zap size={30} className="stroke-[2.2]" /> },
  ];

  // Quadruplicated set for seamless, slow continuous loop
  const marqueeItems = [...sampleLogos, ...sampleLogos, ...sampleLogos, ...sampleLogos];

  return (
    <div className="w-full bg-white/40 backdrop-blur-xs border-y border-slate-200/80 py-10 overflow-hidden relative z-20">
      <div className="max-w-6xl mx-auto text-center mb-7">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
          TRUSTED BY 200+ GLOBAL SAAS &amp; AI BRANDS
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
            duration: 85,
          }}
        >
          {marqueeItems.map((logo, idx) => (
            <motion.div
              key={`${logo.name}-${idx}`}
              whileHover={{ scale: 1.18, y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-3 text-slate-700 hover:text-slate-950 opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer select-none group shrink-0"
            >
              <div className="text-slate-800 group-hover:scale-110 transition-transform">
                {logo.icon}
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight font-sans text-slate-900">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
