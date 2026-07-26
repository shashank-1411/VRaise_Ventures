"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Square, X, PhoneCall } from "lucide-react";

interface CtaBannerProps {
  onOpenModal: () => void;
  calendlyUrl?: string;
}

export default function CtaBanner({
  onOpenModal,
  calendlyUrl = "https://calendly.com",
}: CtaBannerProps) {
  const buttonSpringBounce = {
    hover: {
      scale: 1.05,
      y: -3,
      transition: { type: "spring", stiffness: 400, damping: 16 },
    },
    tap: {
      scale: 0.96,
      y: 0,
    },
  };

  const handleBookCall = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
    onOpenModal();
  };

  return (
    <section className="py-16 px-6 relative z-20" id="cta-banner">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="w-full text-slate-900 rounded-3xl shadow-2xl relative z-20 border-2 border-slate-900 overflow-hidden font-sans bg-[#ece9d8]"
        >
          {/* Windows XP Classic Blue Header Bar with Rounded Top Corners */}
          <div className="bg-gradient-to-r from-[#0058e6] via-[#2573f9] to-[#004dc2] px-4 py-2.5 flex items-center justify-between text-white font-bold text-xs select-none shadow-xs border-b border-blue-900 rounded-t-3xl">
            <div className="flex items-center gap-2 font-mono">
              <PhoneCall size={14} className="text-white" />
              <span>vraise-ventures-intro-call.exe</span>
            </div>
            
            {/* Windows XP Control Buttons [ _ ] [ ▢ ] [ X ] */}
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-[#0058e6] hover:bg-blue-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <Minus size={11} className="text-white" />
              </div>
              <div className="w-5 h-5 bg-[#0058e6] hover:bg-blue-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <Square size={9} className="text-white" />
              </div>
              <div className="w-5 h-5 bg-[#e81123] hover:bg-red-600 border border-white/60 rounded-xs flex items-center justify-center cursor-pointer shadow-2xs">
                <X size={12} className="text-white font-extrabold" />
              </div>
            </div>
          </div>

          {/* Windows XP Light Gray Inset Container */}
          <div className="p-3 sm:p-4 bg-[#ece9d8] border-t border-white rounded-b-3xl">
            
            {/* White Inset Content Card with Rounded Corners and Video Background */}
            <div className="relative border-2 border-slate-700 rounded-2xl p-8 sm:p-14 shadow-inner overflow-hidden flex flex-col items-center text-center justify-center gap-6 min-h-[340px] bg-white">
              
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src="/assets/15452141_1920_1080_60fps.mp4" type="video/mp4" />
              </video>

              {/* Light Overlay for Ultra Crisp Black & Dark Grey Contrast */}
              <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] z-10" />

              {/* Perfectly Aligned Headline & Sub Headline */}
              <div className="space-y-3.5 max-w-2xl z-20 flex flex-col items-center">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-950">
                  Ready to Access Off-Market Deal Flow?
                </h2>

                <p className="text-xs sm:text-base text-slate-800 font-semibold leading-relaxed max-w-xl mx-auto">
                  Book a 15-minute intro call with our origination team to set up customized thesis parameters across India, ANZ, and US tech corridors.
                </p>
              </div>

              {/* Proper Black Interactive CTA Button opening Calendly link */}
              <div className="z-20 pt-2">
                <motion.button
                  onClick={handleBookCall}
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonSpringBounce}
                  className="px-9 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-2xl flex items-center gap-3 cursor-pointer transition-all border-2 border-slate-950"
                >
                  <span>Book a Call</span>
                  <ArrowRight size={18} className="text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
