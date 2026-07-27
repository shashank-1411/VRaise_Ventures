"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Compass, Globe2, Layers, Mail, Users } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const founders = [
    {
      name: "Alex_Travis",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      bg: "from-indigo-600 to-purple-800",
      rotate: "-rotate-6",
    },
    {
      name: "Liam Carter",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop",
      bg: "from-sky-600 to-blue-800",
      rotate: "rotate-3",
    },
    {
      name: "John Clerk",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      bg: "from-amber-200 to-orange-300",
      rotate: "rotate-6",
    },
    {
      name: "Crish Paul",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      bg: "from-emerald-600 to-teal-800",
      rotate: "-rotate-6",
    },
    {
      name: "James Foster",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
      bg: "from-sky-700 to-slate-900",
      rotate: "rotate-3",
    },
  ];

  return (
    <section className="relative w-full pt-32 sm:pt-44 pb-20 px-4 bg-white text-slate-900 overflow-hidden font-sans select-none">
      
      {/* Background Subtle Gradient Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-slate-50 via-white to-white pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Category Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] uppercase tracking-wider font-semibold mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>Campus-First Deal Origination</span>
        </motion.div>

        {/* Main Headline in PT Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.08] text-slate-950 font-normal tracking-tight max-w-5xl mb-6"
        >
          The world's first university deal origination engine.
        </motion.h1>

        {/* Sub-Headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 font-sans font-normal max-w-2xl leading-relaxed mb-8 sm:mb-10"
        >
          We source high-quality deal flow for venture funds across every sector and every stage, and we prepare founders properly before they meet an investor.
        </motion.p>

        {/* Action Buttons: Pitch Us (Attention-grabbing) & Partner With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16"
        >
          {/* Attention-grabbing Pitch Us Button */}
          <motion.a
            href="mailto:pitch@vraiseventures.com?subject=Pitch%20Us%20-%20VRaise%20Ventures"
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-sans text-xs uppercase font-extrabold tracking-widest rounded-full shadow-[0_15px_30px_-5px_rgba(249,115,22,0.6)] border border-orange-400/50 flex items-center gap-2.5 sm:gap-3 cursor-pointer transition-all duration-300 group"
          >
            <Mail size={16} className="text-white group-hover:rotate-12 transition-transform shrink-0" />
            <span>PITCH US</span>
          </motion.a>

          {/* Partner With Us Button */}
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-mono text-xs uppercase font-bold tracking-wider rounded-full border border-slate-300 shadow-xs transition-colors cursor-pointer flex items-center gap-2"
          >
            <Users size={16} className="text-slate-800 shrink-0" />
            <span>Partner With Us</span>
          </motion.button>
        </motion.div>

        {/* DESKTOP CONSTELLATION GRAPH SHOWCASE (Hidden on small mobile screens) */}
        <div className="hidden md:block relative w-full max-w-5xl h-[580px] mt-2 select-none">
          
          {/* Organic Curved SVG Dashed Wave Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 550" fill="none">
            <path
              d="M 20 320 C 140 180, 240 110, 350 150 C 450 190, 540 80, 640 150 C 740 220, 840 140, 980 300"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* 1. ALEX_TRAVIS ✔ */}
          <motion.div
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[6%] top-[12%] w-[205px] h-[260px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-10 -rotate-6 group cursor-pointer bg-gradient-to-br from-indigo-600 to-purple-800"
          >
            <img
              src={founders[0].image}
              alt={founders[0].name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                {founders[0].name}
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">✓</div>
              </span>
            </div>
          </motion.div>

          {/* 2. LIAM CARTER ✔ */}
          <motion.div
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[24%] bottom-[4%] w-[200px] h-[250px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-15 rotate-3 group cursor-pointer bg-gradient-to-br from-sky-600 to-blue-800"
          >
            <img
              src={founders[1].image}
              alt={founders[1].name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                {founders[1].name}
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">✓</div>
              </span>
            </div>
          </motion.div>

          {/* 3. JOHN CLERK ✔ */}
          <motion.div
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[45%] top-[22%] w-[195px] h-[245px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-20 rotate-6 group cursor-pointer bg-gradient-to-br from-amber-200 to-orange-300"
          >
            <img
              src={founders[2].image}
              alt={founders[2].name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                {founders[2].name}
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">✓</div>
              </span>
            </div>
          </motion.div>

          {/* 4. CRISH PAUL ✔ */}
          <motion.div
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute right-[14%] top-[4%] w-[215px] h-[270px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-10 -rotate-6 group cursor-pointer bg-gradient-to-br from-emerald-600 to-teal-800"
          >
            <img
              src={founders[3].image}
              alt={founders[3].name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                {founders[3].name}
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">✓</div>
              </span>
            </div>
          </motion.div>

          {/* 5. JAMES FOSTER ✔ */}
          <motion.div
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute right-[7%] bottom-[8%] w-[205px] h-[255px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-15 rotate-3 group cursor-pointer bg-gradient-to-br from-sky-700 to-slate-900"
          >
            <img
              src={founders[4].image}
              alt={founders[4].name}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                {founders[4].name}
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">✓</div>
              </span>
            </div>
          </motion.div>

          {/* Floating Badge Pills */}
          <div className="absolute left-[1%] bottom-[28%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900">
            <GraduationCap size={14} className="text-slate-800" />
            <span>100+ Campus Scouts</span>
          </div>

          <div className="absolute left-[30%] top-[14%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900">
            <Compass size={14} className="text-blue-600" />
            <span>Go8 · Ivy League · Russell Group · IITs · IIMs</span>
          </div>

          <div className="absolute left-[39%] bottom-[12%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900">
            <Globe2 size={14} className="text-orange-500" />
            <span>Operating in 5 Continents</span>
          </div>

          <div className="absolute right-[11%] top-[56%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900">
            <Layers size={14} className="text-emerald-600" />
            <span>Pre-Seed to Series A</span>
          </div>

        </div>

        {/* MOBILE SHOWCASE GRID (Visible only on mobile devices) */}
        <div className="md:hidden w-full flex flex-col items-center gap-6 mt-4">
          
          {/* 3D Founders horizontal scroll container */}
          <div className="w-full flex items-center gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory scrollbar-none">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className={`shrink-0 w-[170px] h-[220px] rounded-3xl overflow-hidden shadow-xl border-2 border-slate-900 relative snap-center ${founder.bg}`}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded-full border border-white/20">
                    {founder.name}
                    <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">✓</div>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Mobile Badge Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-[11px] uppercase font-bold text-slate-900">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2.5 justify-center">
              <GraduationCap size={15} className="text-slate-800 shrink-0" />
              <span>100+ Campus Scouts</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2.5 justify-center text-center">
              <Compass size={15} className="text-blue-600 shrink-0" />
              <span>Go8 · Ivy League · Russell Group · IITs · IIMs</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2.5 justify-center">
              <Globe2 size={15} className="text-orange-500 shrink-0" />
              <span>Operating in 5 Continents</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2.5 justify-center">
              <Layers size={15} className="text-emerald-600 shrink-0" />
              <span>Pre-Seed to Series A</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
