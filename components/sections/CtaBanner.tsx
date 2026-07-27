"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  const handlePitchUs = () => {
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="py-20 px-4 relative z-20 select-none bg-white font-sans" id="cta-banner">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-blue-300/40 p-10 sm:p-16 flex flex-col items-center text-center justify-center gap-6 min-h-[380px] bg-blue-950"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          >
            <source src="/assets/15452141_1920_1080_60fps.mp4" type="video/mp4" />
          </video>

          {/* Light Blue Film Overlay (Replaced Black Film) */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-600/45 to-blue-900/70 backdrop-blur-[2px] z-10" />

          {/* Headline & Sub Headline */}
          <div className="space-y-4 max-w-2xl z-20 flex flex-col items-center relative">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-200 font-bold">
              Ready to Partner?
            </span>
            <h2
              style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-white drop-shadow-sm"
            >
              Ready to access off-market deal flow?
            </h2>

            <p className="text-sm sm:text-base text-blue-50 font-sans leading-relaxed max-w-xl mx-auto font-normal">
              Get in touch with our origination team to discuss fundraising or explore partnership opportunities.
            </p>
          </div>

          {/* Dual 3D Tactile Capsule CTAs */}
          <div className="z-20 pt-2 flex flex-wrap items-center justify-center gap-4">
            
            {/* 3D Blue Tactile Capsule "PITCH US" Button */}
            <motion.button
              onClick={handlePitchUs}
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-3.5 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-sans text-xs uppercase font-extrabold tracking-widest rounded-full shadow-[0_16px_32px_-6px_rgba(37,99,235,0.65),inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_0_0_#1d4ed8] border-t border-blue-300/60 hover:brightness-110 active:translate-y-1 flex items-center gap-3 cursor-pointer transition-all duration-300 group"
            >
              <Mail size={16} className="text-white group-hover:rotate-12 transition-transform" />
              <span>PITCH US</span>
            </motion.button>

            {/* 3D White Tactile Capsule "PARTNER WITH US" Button */}
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-950 font-mono text-xs uppercase font-bold tracking-wider rounded-full border border-white shadow-[0_12px_24px_-4px_rgba(255,255,255,0.35),inset_0_2px_4px_rgba(255,255,255,0.9),0_4px_0_0_#cbd5e1] hover:bg-slate-100 active:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
            >
              <Users size={16} className="text-slate-950" />
              <span>PARTNER WITH US</span>
            </motion.button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
