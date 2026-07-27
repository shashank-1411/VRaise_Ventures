"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 bg-slate-950 text-white overflow-hidden font-sans select-none">
      
      {/* Background Image (z-0 layer) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80">
        <img
          src="/assets/herohero.jpeg"
          alt="VRaise Scouting Network Background"
          className="w-full h-full object-cover object-center brightness-95 contrast-105"
        />
      </div>

      {/* Navy Blue Translucent Overlay Film (z-1 layer) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#070e24]/75 via-[#091535]/65 to-[#0b1328]/85 pointer-events-none z-1" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Main Headline in PT Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] text-white font-normal tracking-tight max-w-5xl mb-4 drop-shadow-md"
        >
          World&apos;s first student led scouting firm
        </motion.h1>

        {/* Blinking Sub-Headline Line Directly Below Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-extrabold text-blue-400 animate-pulse drop-shadow-sm">
            we scout • we build • we raise
          </p>
        </motion.div>

        {/* Sub-Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-slate-200/90 font-sans font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10"
        >
          We source high-quality deal flow for venture funds across every sector and every stage, and we prepare founders properly before they meet an investor.
        </motion.p>

        {/* Action Buttons: 3D Capsule CTAs (Pitch Us & Partner With Us) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-10 sm:mb-14"
        >
          {/* Blue Colored Shadow CTA "PITCH US" Button */}
          <motion.button
            onClick={() => window.open("https://calendly.com", "_blank")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 sm:px-9 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-extrabold tracking-wider rounded-full border border-blue-400/40 shadow-[0_8px_25px_-4px_rgba(37,99,235,0.55)] hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.7)] flex items-center gap-2.5 sm:gap-3 cursor-pointer transition-all duration-300 group"
          >
            <Mail size={16} className="text-white group-hover:rotate-12 transition-transform shrink-0" />
            <span>PITCH US</span>
          </motion.button>

          {/* Light Grey Colored Shadow CTA "PARTNER WITH US" Button */}
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 sm:px-9 py-3 sm:py-3.5 bg-slate-100 hover:bg-white text-slate-900 font-mono text-xs uppercase font-extrabold tracking-wider rounded-full border border-slate-200/90 shadow-[0_8px_20px_-4px_rgba(148,163,184,0.45)] hover:shadow-[0_12px_25px_-4px_rgba(148,163,184,0.65)] transition-all duration-300 cursor-pointer flex items-center justify-center"
          >
            <span>Partner With Us</span>
          </motion.button>
        </motion.div>

        {/* Clean Single-Row Aligned Hero Metrics Badges (No Icons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs uppercase font-extrabold text-white">
            
            {/* Badge 1: 100+ Campus Scouts */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center hover:bg-slate-800/80 hover:border-white/30 transition-all cursor-default text-white shrink-0">
              <span>100+ Campus Scouts</span>
            </div>

            {/* Badge 2: Go8 · Ivy League · Russell Group · IITs · IIMs */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center hover:bg-slate-800/80 hover:border-white/30 transition-all cursor-default text-white shrink-0">
              <span>Go8 · Ivy League · Russell Group · IITs · IIMs</span>
            </div>

            {/* Badge 3: Operating in 5 Continents */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center hover:bg-slate-800/80 hover:border-white/30 transition-all cursor-default text-white shrink-0">
              <span>Operating in 5 Continents</span>
            </div>

            {/* Badge 4: Pre-Seed to Series A */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center hover:bg-slate-800/80 hover:border-white/30 transition-all cursor-default text-white shrink-0">
              <span>Pre-Seed to Series A</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
