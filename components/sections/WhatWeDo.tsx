"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Rocket, Network, FileText, Lightbulb } from "lucide-react";

export default function WhatWeDo() {
  const cards = [
    {
      icon: Compass,
      title: "Venture Scouting",
      description:
        "Student scouts embedded across Go8, Ivy League, Russell Group, IITs, and IIMs campuses identify strong founders across every sector, often before they appear in any deal pipeline.",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      icon: Rocket,
      title: "Venture Readiness",
      description:
        "We work with founders on narrative, metrics and materials until the company is genuinely ready to sit in front of an investment committee.",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      icon: Network,
      title: "Investor Access",
      description:
        "Filtered introductions to our partner funds, angels and syndicates across India, Australia and the United States, matched to the right stage and thesis.",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      icon: FileText,
      title: "Pitch & Diligence Support",
      description:
        "Deck rewrites, financial models, data rooms and diligence packs — prepared to the standard funds expect, not the standard first-time founders guess at.",
      colSpan: "col-span-1 md:col-span-3 lg:col-span-1.5",
    },
    {
      icon: Lightbulb,
      title: "Strategic Advisory",
      description:
        "Ongoing guidance through the raise: round structure, investor sequencing, and the judgement calls between first meeting and close.",
      colSpan: "col-span-1 md:col-span-3 lg:col-span-1.5",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-white font-sans select-none" id="what-we-do">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3 block">
            What We Do
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            What VRaise does for founders and funds
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            We cover the work between a promising company and a completed round: sourcing, preparation, introductions and support through the raise.
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Row 1: 3 Equal Columns */}
          {cards.slice(0, 3).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-slate-50/80 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/80 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Upper Left Dot Matrix Stipple Effect */}
                <div
                  className="absolute top-0 left-0 w-32 h-32 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: `8px 8px`,
                  }}
                />

                {/* Floating Navy Blue Circle Icon */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#091535] text-white flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(9,21,53,0.4)] group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                    className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Row 2: 2 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {cards.slice(3, 5).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-slate-50/80 border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-xs hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300/80 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Upper Left Dot Matrix Stipple Effect */}
                <div
                  className="absolute top-0 left-0 w-36 h-36 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: `8px 8px`,
                  }}
                />

                {/* Floating Navy Blue Circle Icon */}
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#091535] text-white flex items-center justify-center shadow-[0_12px_24px_-4px_rgba(9,21,53,0.4)] group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                    className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                    {card.description}
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
