"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutVRaise() {
  return (
    <section className="w-full py-24 px-4 bg-white select-none overflow-hidden font-sans" id="about-vraise">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative">
        
        {/* Section Tagline */}
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold block">
            About VRaise
          </span>
        </div>

        {/* Floating 3D Heart GIFs */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-15, -8, -15] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
          className="absolute left-[5%] top-[18%] w-14 h-14 z-0 pointer-events-none hidden sm:flex items-center justify-center"
        >
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXIwZ3h5ZjQ3NnpqMDRwY3hncWxyN3MzNm9iNmJjNzh4czd0NnQ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BCuhVJrGxNNsSCHglI/giphy.gif"
            alt="3D Heart GIF"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [15, 8, 15] }}
          transition={{ repeat: Infinity, duration: 4.2, delay: 1.5, ease: "easeInOut" }}
          className="absolute right-[5%] bottom-[22%] w-14 h-14 z-0 pointer-events-none hidden sm:flex items-center justify-center"
        >
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXIwZ3h5ZjQ3NnpqMDRwY3hncWxyN3MzNm9iNmJjNzh4czd0NnQ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BCuhVJrGxNNsSCHglI/giphy.gif"
            alt="3D Heart GIF"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Center Brand Header with Enlarged Logo & Soft Glowing Blue Aura */}
        <div className="relative mb-12 flex items-center justify-center">
          
          {/* Glowing Animated Pulsing Blue Aura Ring */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-600/20 via-sky-500/25 to-blue-600/20 blur-2xl animate-pulse pointer-events-none z-0" />

          {/* Enlarged Center Logo Pill Badge */}
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
