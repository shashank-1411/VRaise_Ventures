"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake, Compass, ShieldCheck, Sliders, TrendingUp, Users } from "lucide-react";

interface PartnerWithUsProps {
  onOpenModal: () => void;
}

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
    <section className="w-full py-24 px-4 bg-slate-50/80 border-t border-slate-200/80 select-none font-sans" id="partner-with-us">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Main Partnership Icon Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg mb-6 cursor-pointer"
          >
            <Handshake size={32} className="text-white" />
          </motion.div>

          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3 block">
            Partner With Us
          </span>
          
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            How We Generate High-Quality Deal Flow
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-2xl mx-auto">
            A dedicated origination engine built inside top university ecosystems worldwide, delivering curated, off-market opportunities directly to venture funds and syndicates.
          </p>
        </div>

        {/* 4 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                
                <h3
                  style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                  className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                >
                  {pillar.title}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Partner CTA Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-sm text-center sm:text-left max-w-4xl mx-auto">
          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl text-slate-950 font-extrabold mb-1 tracking-tight">
              Ready to expand your fund's deal origination?
            </h4>
            <p className="text-slate-600 text-sm font-sans font-normal">
              Connect with our team to set up custom thesis parameters and receive curated founder pipelines.
            </p>
          </div>

          <motion.button
            onClick={onOpenModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-full shadow-md flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Users size={16} />
            <span>Partner With Us</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
