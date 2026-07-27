"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
}

export default function CtaBanner({ onOpenModal }: CtaBannerProps) {
  const handlePitchUs = () => {
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="py-12 sm:py-16 px-4 relative z-20 select-none bg-white font-sans" id="cta-banner">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-800 p-8 sm:p-12 flex flex-col items-center text-center justify-center gap-5 min-h-[280px] sm:min-h-[320px] bg-[#070e24]"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
          >
            <source src="/assets/15452141_1920_1080_60fps.mp4" type="video/mp4" />
          </video>

          {/* Deep Navy Blue Film Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e24]/90 via-[#091535]/80 to-[#0b1328]/90 backdrop-blur-[2px] z-10" />

          {/* Headline & Sub Headline */}
          <div className="space-y-3 max-w-2xl z-20 flex flex-col items-center relative">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold">
              Ready to Partner?
            </span>
            <h2
              style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
              className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-white drop-shadow-sm"
            >
              Ready to access off-market deal flow?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl mx-auto font-normal">
              Get in touch with our origination team to discuss fundraising or explore partnership opportunities.
            </p>
          </div>

          {/* Sleek Flat Capsule CTAs */}
          <div className="z-20 pt-2 flex flex-wrap items-center justify-center gap-4">
            
            {/* Blue Colored Shadow CTA "PITCH US" Button */}
            <motion.button
              onClick={handlePitchUs}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-extrabold tracking-wider rounded-full border border-blue-400/40 shadow-[0_8px_25px_-4px_rgba(37,99,235,0.55)] hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.7)] flex items-center gap-3 cursor-pointer transition-all duration-300 group"
            >
              <Mail size={16} className="text-white group-hover:rotate-12 transition-transform shrink-0" />
              <span>PITCH US</span>
            </motion.button>

            {/* Light Grey Colored Shadow CTA "PARTNER WITH US" Button */}
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-slate-100 hover:bg-white text-slate-950 font-mono text-xs uppercase font-extrabold tracking-wider rounded-full border border-slate-200/90 shadow-[0_8px_20px_-4px_rgba(148,163,184,0.45)] hover:shadow-[0_12px_25px_-4px_rgba(148,163,184,0.65)] transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <span>PARTNER WITH US</span>
            </motion.button>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
