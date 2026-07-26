"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
  calendlyUrl?: string;
}

export default function CtaBanner({
  onOpenModal,
  calendlyUrl = "https://calendly.com",
}: CtaBannerProps) {
  const handleBookCall = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
    onOpenModal();
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
              Book a 15-minute intro call with our origination team to set up customized thesis parameters across India, ANZ, and US tech corridors.
            </p>
          </div>

          {/* Soft 3D Floating CTA Button opening Calendly */}
          <div className="z-20 pt-2">
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-9 py-3.5 bg-white text-slate-950 hover:bg-slate-100 font-sans text-xs uppercase font-bold tracking-widest rounded-full shadow-[0_20px_35px_-8px_rgba(255,255,255,0.3)] border border-white flex items-center gap-3 cursor-pointer transition-all duration-300 group"
            >
              <PhoneCall size={16} className="text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>BOOK A CALL</span>
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
