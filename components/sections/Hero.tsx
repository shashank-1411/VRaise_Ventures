"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Compass, Globe2, Layers, Mail, Users } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative w-full pt-32 sm:pt-40 pb-16 px-4 bg-white text-slate-900 overflow-hidden font-sans select-none">
      
      {/* Background Subtle Gradient Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Category Text Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-extrabold text-blue-600">
            Campus-First Deal Origination
          </span>
        </motion.div>

        {/* Main Headline in PT Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] text-slate-950 font-normal tracking-tight max-w-5xl mb-4"
        >
          World&apos;s first student led council
        </motion.h1>

        {/* Blinking Line Directly Below Headline (Pure Text) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-extrabold text-blue-600 animate-pulse">
            we scout • we build • we raise
          </p>
        </motion.div>

        {/* Sub-Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 font-sans font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10"
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
          {/* 3D Blue Tactile Capsule "PITCH US" Button */}
          <motion.button
            onClick={() => window.open("https://calendly.com", "_blank")}
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-sans text-xs uppercase font-extrabold tracking-widest rounded-full shadow-[0_14px_28px_-4px_rgba(37,99,235,0.6),inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_0_0_#1d4ed8] border-t border-blue-300/60 hover:brightness-110 active:translate-y-1 flex items-center gap-2.5 sm:gap-3 cursor-pointer transition-all duration-300 group"
          >
            <Mail size={16} className="text-white group-hover:rotate-12 transition-transform shrink-0" />
            <span>PITCH US</span>
          </motion.button>

          {/* 3D White Tactile Capsule "Partner With Us" Button */}
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 font-mono text-xs uppercase font-bold tracking-wider rounded-full border border-slate-300/90 shadow-[0_10px_20px_-4px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9),0_4px_0_0_#cbd5e1] hover:bg-slate-100 active:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
          >
            <Users size={16} className="text-slate-800 shrink-0" />
            <span>Partner With Us</span>
          </motion.button>
        </motion.div>

        {/* Clean Aligned Hero Metrics & Network Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-full max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-[11px] sm:text-xs uppercase font-extrabold text-slate-900">
            
            {/* Badge 1: 100+ Campus Scouts */}
            <div className="bg-white border border-slate-200/90 shadow-sm rounded-full px-5 py-3 flex items-center gap-2.5 hover:shadow-md hover:border-slate-300 transition-all cursor-default">
              <GraduationCap size={16} className="text-slate-800 shrink-0" />
              <span>100+ Campus Scouts</span>
            </div>

            {/* Badge 2: Go8 · Ivy League · Russell Group · IITs · IIMs */}
            <div className="bg-white border border-slate-200/90 shadow-sm rounded-full px-5 py-3 flex items-center gap-2.5 hover:shadow-md hover:border-slate-300 transition-all cursor-default">
              <Compass size={16} className="text-blue-600 shrink-0" />
              <span>Go8 · Ivy League · Russell Group · IITs · IIMs</span>
            </div>

            {/* Badge 3: Operating in 5 Continents */}
            <div className="bg-white border border-slate-200/90 shadow-sm rounded-full px-5 py-3 flex items-center gap-2.5 hover:shadow-md hover:border-slate-300 transition-all cursor-default">
              <Globe2 size={16} className="text-blue-600 shrink-0" />
              <span>Operating in 5 Continents</span>
            </div>

            {/* Badge 4: Pre-Seed to Series A */}
            <div className="bg-white border border-slate-200/90 shadow-sm rounded-full px-5 py-3 flex items-center gap-2.5 hover:shadow-md hover:border-slate-300 transition-all cursor-default">
              <Layers size={16} className="text-emerald-600 shrink-0" />
              <span>Pre-Seed to Series A</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
