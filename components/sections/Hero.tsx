"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Star, GraduationCap, Globe2, Compass, Layers } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative w-full pt-44 sm:pt-56 pb-24 px-4 overflow-hidden bg-white" id="home">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center z-10 relative">
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-bold">
            World&apos;s First Student-Led Scouting Firm
          </span>
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
            ))}
          </div>
        </motion.div>

        {/* Heading in PT Serif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-4xl sm:text-6xl md:text-7xl text-slate-950 leading-[1.12] mb-6 max-w-4xl tracking-tight font-normal"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>We Scout.</span>
            <span>We Build.</span>
          </div>
          <div>We Raise.</div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-8 font-sans font-normal"
        >
          We source high-quality deal flow for venture funds across every sector and every stage, and we prepare founders properly before they meet an investor.
        </motion.p>

        {/* Action Buttons: Book a Call & Explore VRaise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:mb-16"
        >
          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.07, y: -5 }}
            whileTap={{ scale: 0.96 }}
            className="px-9 py-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black text-white font-sans text-xs uppercase font-normal tracking-widest rounded-full shadow-[0_20px_35px_-8px_rgba(0,0,0,0.6),0_10px_20px_-5px_rgba(0,0,0,0.4)] border border-slate-700/80 flex items-center gap-3 cursor-pointer transition-all duration-300 group"
          >
            <PhoneCall size={16} className="text-white group-hover:rotate-12 transition-transform" />
            <span>BOOK A CALL</span>
          </motion.button>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs uppercase font-bold tracking-wider rounded-full border border-slate-200 transition-colors cursor-pointer"
          >
            Explore VRaise
          </motion.a>
        </motion.div>

        {/* EXACT TEMPLATE CONSTELLATION GRAPH & FLOATING FOUNDER CARDS SHOWCASE */}
        <div className="relative w-full max-w-5xl h-[520px] sm:h-[600px] mt-2 select-none">
          
          {/* Organic Curved SVG Dashed Wave Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 550" fill="none">
            <path
              d="M 20 320 C 140 180, 240 110, 350 150 C 450 190, 540 80, 640 150 C 740 220, 840 140, 980 300"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* 1. ALEX_TRAVIS ✔ (Top Left - Tilted Left - B&W Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[2%] sm:left-[6%] top-[14%] sm:top-[12%] w-[160px] sm:w-[210px] h-[210px] sm:h-[265px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-10 -rotate-6 group cursor-pointer bg-gradient-to-br from-indigo-600 to-purple-800"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
              alt="Alex Travis"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                Alex_Travis
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">
                  ✓
                </div>
              </span>
            </div>
          </motion.div>

          {/* 2. LIAM CARTER ✔ (Bottom Left-Center - Tilted Right - B&W Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[22%] sm:left-[24%] bottom-[2%] sm:bottom-[4%] w-[155px] sm:w-[200px] h-[200px] sm:h-[250px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-15 rotate-3 group cursor-pointer bg-gradient-to-br from-sky-600 to-blue-800"
          >
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop"
              alt="Liam Carter"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                Liam Carter
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">
                  ✓
                </div>
              </span>
            </div>
          </motion.div>

          {/* 3. JOHN CLERK ✔ (Center Card - Tilted Right - B&W Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute left-[43%] sm:left-[45%] top-[24%] sm:top-[22%] w-[155px] sm:w-[195px] h-[195px] sm:h-[245px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-20 rotate-6 group cursor-pointer bg-gradient-to-br from-amber-200 to-orange-300"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              alt="John Clerk"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                John Clerk
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">
                  ✓
                </div>
              </span>
            </div>
          </motion.div>

          {/* 4. CRISH PAUL ✔ (Top Right - Tilted Left - B&W Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute right-[12%] sm:right-[14%] top-[2%] sm:top-[4%] w-[165px] sm:w-[215px] h-[215px] sm:h-[270px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-10 -rotate-6 group cursor-pointer bg-gradient-to-br from-emerald-600 to-teal-800"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
              alt="Crish Paul"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                Crish Paul
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">
                  ✓
                </div>
              </span>
            </div>
          </motion.div>

          {/* 5. JAMES FOSTER ✔ (Bottom Right - Tilted Right - B&W Image) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -6, rotate: 0 }}
            className="absolute right-[5%] sm:right-[7%] bottom-[5%] sm:bottom-[8%] w-[160px] sm:w-[205px] h-[205px] sm:h-[255px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 z-15 rotate-3 group cursor-pointer bg-gradient-to-br from-sky-700 to-slate-900"
          >
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
              alt="James Foster"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-3.5">
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                James Foster
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white font-extrabold">
                  ✓
                </div>
              </span>
            </div>
          </motion.div>

          {/* Floating Badge Pill 1: 30+ Campus Scouts (Far Left Bottom) */}
          <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            className="absolute left-[-1%] sm:left-[1%] bottom-[24%] sm:bottom-[28%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900"
          >
            <GraduationCap size={14} className="text-slate-800" />
            <span>30+ Campus Scouts</span>
          </motion.div>

          {/* Floating Badge Pill 2: IITs · IIMs · Ivy League (Top Center) */}
          <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            className="absolute left-[37%] sm:left-[40%] top-[12%] sm:top-[14%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900"
          >
            <Compass size={14} className="text-blue-600" />
            <span>IITs · IIMs · Ivy League</span>
          </motion.div>

          {/* Floating Badge Pill 3: 3 Countries (Bottom Center) */}
          <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            className="absolute left-[40%] sm:left-[43%] bottom-[12%] sm:bottom-[14%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900"
          >
            <Globe2 size={14} className="text-orange-500" />
            <span>3 Countries</span>
          </motion.div>

          {/* Floating Badge Pill 4: All Sectors & Stages (Right Mid-Top) */}
          <motion.div
            whileHover={{ scale: 1.1, y: -3 }}
            className="absolute right-[10%] sm:right-[13%] top-[54%] sm:top-[56%] z-30 bg-white border border-slate-300 rounded-full px-4 py-2 shadow-xl flex items-center gap-2 font-mono text-[11px] uppercase font-bold text-slate-900"
          >
            <Layers size={14} className="text-emerald-600" />
            <span>All Sectors & Stages</span>
          </motion.div>

          {/* Floating Orange Circle Icon (Top Left-Center) */}
          <motion.div
            animate={{ scale: [1, 1.18, 1], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute left-[30%] sm:left-[32%] top-[4%] sm:top-[6%] w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-rose-500 text-white shadow-[0_14px_28px_-4px_rgba(249,115,22,0.85)] flex items-center justify-center z-20 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.div>

          {/* Floating Red Circle Icon (Bottom Right-Center) */}
          <motion.div
            animate={{ scale: [1, 1.18, 1], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute left-[62%] sm:left-[64%] bottom-[20%] sm:bottom-[22%] w-11 h-11 rounded-full bg-gradient-to-tr from-red-700 via-red-600 to-red-500 text-white shadow-[0_14px_28px_-4px_rgba(239,68,68,0.85)] flex items-center justify-center z-20 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </motion.div>

          {/* Floating Dark Circle Icon (Far Right) */}
          <motion.div
            animate={{ scale: [1, 1.18, 1], y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
            className="absolute right-[0%] sm:right-[1%] top-[30%] sm:top-[32%] w-11 h-11 rounded-full bg-gradient-to-tr from-slate-950 via-slate-900 to-zinc-800 text-white shadow-[0_14px_28px_-4px_rgba(15,23,42,0.85)] flex items-center justify-center z-30 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525 0h3.08c.12 1.488.746 2.87 1.8 3.924A6.793 6.793 0 0 0 21.33 5.75v3.1a9.923 9.923 0 0 1-5.725-1.777v7.577a6.837 6.837 0 1 1-6.837-6.837c.39 0 .775.034 1.15.1v3.19a3.67 3.67 0 1 0 2.607 3.547V0z"/>
            </svg>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
