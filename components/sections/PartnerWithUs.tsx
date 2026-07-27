"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Compass, ShieldCheck, Sliders, TrendingUp } from "lucide-react";

interface PartnerWithUsProps {
  onOpenModal: () => void;
}

import { HeadingParallax } from "@/components/ui/heading-parallax";

export default function PartnerWithUs({ onOpenModal }: PartnerWithUsProps) {
  const pillars = [
    {
      icon: Compass,
      title: "Deep Campus Embedding",
      description:
        "Student scouts embedded directly inside hackathons, incubators, and research labs to identify exceptional founders before they ever appear on public radar.",
    },
    {
      icon: ShieldCheck,
      title: "Rigor & IC Verification",
      description:
        "Every company is rigorously vetted for technical depth, founder capability, and market size to ensure investment-committee standard materials.",
    },
    {
      icon: Sliders,
      title: "Custom Thesis Alignment",
      description:
        "We filter and route deal flow matched specifically to your fund's sector preferences, stage criteria, and geographic mandates.",
    },
    {
      icon: TrendingUp,
      title: "Proprietary Off-Market Access",
      description:
        "Access high-conviction, early-stage deal flow across 5 continents, unlocking proprietary allocation before competing funds enter.",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-[#070e24] text-white border-t border-slate-800/80 select-none font-sans relative overflow-hidden" id="partner-with-us">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <HeadingParallax className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400 font-bold mb-3 block">
            Partner With Us
          </span>
          
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-white leading-[1.15] mb-6 font-normal tracking-tight"
          >
            How We Generate High-Quality Deal Flow
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            A dedicated origination engine built inside top university ecosystems worldwide, delivering curated, off-market opportunities directly to venture funds and syndicates.
          </p>
        </HeadingParallax>

        {/* 4 Value Proposition Cards (Matching WhatWeDo card aesthetics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/80 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Upper Left Dot Matrix Stipple Effect */}
                <div
                  className="absolute top-0 left-0 w-36 h-36 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: `8px 8px`,
                  }}
                />

                {/* Floating Navy Blue Circle Icon with Fast 360 Spin on Hover */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#091535] border border-blue-500/30 text-white flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(9,21,53,0.6)] group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Icon size={20} className="text-white group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3
                    style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                    className="text-2xl text-white font-normal mb-3 tracking-tight"
                  >
                    {pillar.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
