"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function AboutVRaise() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <section className="relative w-full py-28 px-4 bg-white overflow-hidden select-none" id="about-vraise">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Floating 3D Animated GIF Badges */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-12, -8, -12] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute left-[5%] top-[15%] w-12 h-12 z-0 pointer-events-none hidden sm:flex items-center justify-center"
        >
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXIwZ3h5ZjQ3NnpqMDRwY3hncWxyN3MzNm9iNmJjNzh4czd0NnQ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BCuhVJrGxNNsSCHglI/giphy.gif"
            alt="3D Heart GIF"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute right-[6%] top-[18%] w-11 h-11 z-0 pointer-events-none hidden sm:flex items-center justify-center"
        >
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXIwZ3h5ZjQ3NnpqMDRwY3hncWxyN3MzNm9iNmJjNzh4czd0NnQ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BCuhVJrGxNNsSCHglI/giphy.gif"
            alt="3D Heart GIF"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [12, 16, 12] }}
          transition={{ repeat: Infinity, duration: 3.8, delay: 1, ease: "easeInOut" }}
          className="absolute left-[8%] bottom-[20%] w-11 h-11 z-0 pointer-events-none hidden sm:flex items-center justify-center"
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
          className="absolute right-[7%] bottom-[22%] w-12 h-12 z-0 pointer-events-none hidden sm:flex items-center justify-center"
        >
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXIwZ3h5ZjQ3NnpqMDRwY3hncWxyN3MzNm9iNmJjNzh4czd0NnQ4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/BCuhVJrGxNNsSCHglI/giphy.gif"
            alt="3D Heart GIF"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </motion.div>

        {/* Center Brand Header with Stipple Glow Pattern */}
        <div className="relative mb-8">
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 opacity-30 pointer-events-none rounded-full"
            style={{
              backgroundImage: `radial-gradient(#94a3b8 1.5px, transparent 1.5px)`,
              backgroundSize: `10px 10px`,
            }}
          />
          <div className="relative z-10 flex items-center justify-center bg-white border border-slate-200/90 shadow-md px-8 py-3 rounded-full">
            <img
              src="/assets/vraise-logo.png"
              alt="VRaise Ventures Logo"
              className="h-14 sm:h-18 w-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Main Manifesto Statement Paragraph in PT Serif */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
          className="text-2xl sm:text-3xl md:text-4xl text-slate-800 leading-relaxed max-w-4xl mx-auto font-normal tracking-tight mb-12"
        >
          Good companies are found late. By the time a fund hears about a founder, three others already have. We built a scout network inside the universities where those founders actually start — so our partners see the best of them first, and see them ready.
        </motion.p>

        {/* Bottom Scout Avatars Stack */}
        <div className="flex items-center justify-center -space-x-3 mb-6">
          {avatars.map((img, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100"
            >
              <img src={img} alt="Scout Avatar" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Bottom Sub-Tagline */}
        <span className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold">
          Capital is the start. Partnership is the work.
        </span>

      </div>
    </section>
  );
}
