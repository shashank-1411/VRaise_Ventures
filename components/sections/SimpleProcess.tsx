"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, FileCheck, Send, TrendingUp } from "lucide-react";

export default function SimpleProcess() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Scout",
      description: "Campus scouts surface founders at the idea and pre-incubation stage.",
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "Validate",
      description: "We test the team, the market and the traction before anything moves forward.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Prepare",
      description: "Narrative, deck, model and data room built to investment-committee standard.",
    },
    {
      number: "04",
      icon: Send,
      title: "Connect",
      description: "Matched and introduced to the funds and angels who actually invest in that thesis.",
    },
    {
      number: "05",
      icon: TrendingUp,
      title: "Raise",
      description: "Support through diligence, negotiation and close.",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-white select-none font-sans" id="process">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-orange-500 font-bold mb-3 block">
            Simple Process
          </span>
          <h2
            style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
            className="text-4xl sm:text-5xl md:text-6xl text-slate-950 leading-[1.15] mb-6 font-normal tracking-tight"
          >
            A simple venture journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal max-w-xl mx-auto">
            Five steps, applied the same way to every company we take on, in any sector and at any stage.
          </p>
        </div>

        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 text-center mb-14">
          {steps.slice(0, 3).map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Floating Black Circle Icon with Drop Shadow */}
                <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-[0_14px_28px_-4px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Step Title in PT Serif */}
                <h3
                  style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                  className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                >
                  {step.number}. {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xs font-sans font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2: 2 Centered Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 text-center max-w-4xl mx-auto">
          {steps.slice(3, 5).map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx + 3) * 0.15 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* Floating Black Circle Icon with Drop Shadow */}
                <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-[0_14px_28px_-4px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={22} className="text-white" />
                </div>

                {/* Step Title in PT Serif */}
                <h3
                  style={{ fontFamily: 'var(--font-pt-serif), "PT Serif", serif' }}
                  className="text-2xl text-slate-950 font-normal mb-3 tracking-tight"
                >
                  {step.number}. {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xs font-sans font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
