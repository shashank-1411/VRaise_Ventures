"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Trust() {
  const [hoveredTrust, setHoveredTrust] = useState<string | null>(null);

  return (
    <section className="trust-section" id="trust">
      <div className="section-header-compact">
        <span className="badge">Founder Relations</span>
        <h2>Why Founders Trust Us</h2>
        <p>We align our incentives with the builders, offering clean intros and zero advisory fees.</p>
      </div>

      <div className="trust-layout grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="trust-col flex flex-col gap-6">
          <motion.div
            className={`trust-card p-6 bg-white border-2 border-outlineDark rounded-2xl shadow-[4px_4px_0px_#1a0513] relative cursor-pointer ${hoveredTrust === "01" ? "border-magentaBrand shadow-[8px_8px_0px_#1a0513] -translate-y-1" : ""}`}
            onMouseEnter={() => setHoveredTrust("01")}
            onMouseLeave={() => setHoveredTrust(null)}
          >
            <div className="w-full h-1.5 bg-blue-500 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold mb-2">We open the right doors</h3>
            <p className="text-sm text-text-muted">No spray and pray. Intros only to funds whose thesis, stage, and cheque size genuinely fit.</p>
          </motion.div>

          <motion.div
            className={`trust-card p-6 bg-white border-2 border-outlineDark rounded-2xl shadow-[4px_4px_0px_#1a0513] relative cursor-pointer ${hoveredTrust === "04" ? "border-magentaBrand shadow-[8px_8px_0px_#1a0513] -translate-y-1" : ""}`}
            onMouseEnter={() => setHoveredTrust("04")}
            onMouseLeave={() => setHoveredTrust(null)}
          >
            <div className="w-full h-1.5 bg-orange-500 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold mb-2">We speak their language</h3>
            <p className="text-sm text-text-muted">Student founders ourselves. We&apos;ve built where they&apos;re building, so founders open up to us.</p>
          </motion.div>
        </div>

        {/* Center Badge Circle */}
        <div className="trust-center flex items-center justify-center relative my-8 md:my-0">
          <div className="w-48 h-48 rounded-full border-4 border-outlineDark bg-white shadow-[8px_8px_0px_#1a0513] flex items-center justify-center text-center p-6 z-10">
            <h3 className="text-xl font-black leading-tight text-outlineDark">
              Why<br />Founder&apos;s<br />Trust us?
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="trust-col flex flex-col gap-6">
          <motion.div
            className={`trust-card p-6 bg-white border-2 border-outlineDark rounded-2xl shadow-[4px_4px_0px_#1a0513] relative cursor-pointer ${hoveredTrust === "02" ? "border-magentaBrand shadow-[8px_8px_0px_#1a0513] -translate-y-1" : ""}`}
            onMouseEnter={() => setHoveredTrust("02")}
            onMouseLeave={() => setHoveredTrust(null)}
          >
            <div className="w-full h-1.5 bg-purple-500 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold mb-2">We take nothing</h3>
            <p className="text-sm text-text-muted">0% equity, no fees, no advisory shares. A VRaise referral costs founders exactly zero.</p>
          </motion.div>

          <motion.div
            className={`trust-card p-6 bg-white border-2 border-outlineDark rounded-2xl shadow-[4px_4px_0px_#1a0513] relative cursor-pointer ${hoveredTrust === "03" ? "border-magentaBrand shadow-[8px_8px_0px_#1a0513] -translate-y-1" : ""}`}
            onMouseEnter={() => setHoveredTrust("03")}
            onMouseLeave={() => setHoveredTrust(null)}
          >
            <div className="w-full h-1.5 bg-pink-500 rounded-full mb-4"></div>
            <h3 className="text-lg font-bold mb-2">We stay until it closes</h3>
            <p className="text-sm text-text-muted">We prep founders for every meeting and stay in their corner until the round is done. Our upside is tied to their success, never their pocket.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
