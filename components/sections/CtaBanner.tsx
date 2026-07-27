"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  const handlePitchUs = () => {
    window.location.href = "mailto:pitch@vraiseventures.com?subject=Pitch%20Us%20-%20VRaise%20Ventures";
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
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 p-10 sm:p-16 flex flex-col items-center text-center justify-center gap-6 min-h-[380px] bg-slate-950"
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

          {/* Dark Overlay for Ultra Crisp White Contrast */}
          <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[2px] z-10" />

          {/* Headline & Sub Headline */}
          <div className="space-y-4 max-w-2xl z-20 flex flex-col items-center relative">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-400 font-bold">
              Ready to Partner?
            </span>
            <h2
              style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-white"
            >
              Ready to access off-market deal flow?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-xl mx-auto font-normal">
              Get in touch with our origination team to discuss fundraising or explore partnership opportunities.
            </p>
          </div>

          {/* Dual Action Buttons: Pitch Us (Highlight) & Partner With Us */}
          <div className="z-20 pt-2 flex flex-wrap items-center justify-center gap-4">
            
            {/* Attention-grabbing Highlight "Pitch Us" Button (mailto link) */}
            <motion.button
              onClick={handlePitchUs}
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-sans text-xs uppercase font-extrabold tracking-widest rounded-full shadow-[0_20px_35px_-8px_rgba(249,115,22,0.65)] border border-orange-400/50 flex items-center gap-3 cursor-pointer transition-all duration-300 group"
            >
              <Mail size={16} className="text-white group-hover:rotate-12 transition-transform" />
              <span>PITCH US</span>
            </motion.button>

            {/* Secondary "Partner With Us" Button */}
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-mono text-xs uppercase font-bold tracking-wider rounded-full border border-white shadow-xs transition-colors cursor-pointer flex items-center gap-2"
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
