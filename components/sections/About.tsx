"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle } from "lucide-react";
import { FlipCard } from "@/components/ui/FlipCard";
import { AnimatedScrollHeading } from "@/components/ui/text-scroll-animation";
import { Solution3DCarousel } from "@/components/ui/Solution3DCarousel";

export default function About() {
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  const solutionCards = [
    {
      badge: "Who We Are",
      title: "Natural Extension of Your Sourcing Arm",
      oneLiners: [
        "Independent deal origination firm scouting early founders across ANZ, India & US.",
        "Founded by student founders, operating as a dedicated internal venture sourcing arm.",
        "Seamless IC integration with customizable stage and sector parameters.",
      ],
      hoverDetail: "Boots-on-the-ground across Go8 Australia, IITs/IIMs India & Ivy League US tech hubs.",
    },
    {
      badge: "What We Do",
      title: "Pre-Market Diligence & Referral",
      oneLiners: [
        "Discover startups 3-6 months before deck circulation across campus labs & incubators.",
        "Filter out weak cap tables, unscalable stacks, and unverified metrics upfront.",
        "Refer only pre-vetted deals matching your thesis, cheque size, and target stage.",
      ],
      hoverDetail: "Rigorous 4-stage verification screen: true GMV audit & off-deck customer reference calls.",
    },
    {
      badge: "How We Earn",
      title: "100% Aligned Outcome Economics",
      oneLiners: [
        "0% equity taken from founders and 0 advisory fees. Referred founders pay nothing.",
        "Zero upfront retainers for funds. Paid strictly on closed transaction results.",
        "Flexible success models: 2-3% Finder's Fee or 5-8% Carry on referred rounds.",
      ],
      hoverDetail: "Fully aligned scout upside tied strictly to your fund's investment returns.",
    },
    {
      badge: "Why We Win",
      title: "Embedded Inside Founder Rooms",
      oneLiners: [
        "Positioned inside the exact rooms and private groups where round formation begins.",
        "Proven track record in ANZ with signed partner agreements, expanding to India & US.",
        "Built by student founders who speak the exact language of breakout builders.",
      ],
      hoverDetail: "65%+ of referrals originate from private WhatsApp founder circles and campus labs.",
    },
  ];

  // Quadruplicated set for ultra-smooth continuous marquee loop
  const marqueeSolutionCards = [
    ...solutionCards,
    ...solutionCards,
    ...solutionCards,
    ...solutionCards,
  ];

  return (
    <>
      {/* 1. Who We Are Section */}
      <section className="py-24 px-6 bg-white/40 backdrop-blur-xs border-t border-slate-200/80" id="about">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
              [ Who We Are ]
            </div>
            <AnimatedScrollHeading
              text="An Independent Deal Origination Firm for Tomorrow's Breakout Teams"
              className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4"
            />
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              VRaise operates as a natural extension of your fund&apos;s sourcing arm, scouting early-stage startups across India, ANZ, and the US.
            </p>
          </div>

          {/* Grid Layout for Who We Are */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Live Animation Graph Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="lg:col-span-7 bg-white/95 backdrop-blur-xl border-2 border-slate-900 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-mono font-bold text-slate-950 uppercase tracking-wider bg-slate-100 border border-slate-900 px-3 py-1 rounded-md">
                    LIVE PIPELINE TRACTION
                  </div>
                  <span className="text-[11px] font-mono text-slate-950 font-bold bg-slate-200 px-2.5 py-1 rounded border border-slate-900">
                    Proprietary Signal
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-3 tracking-tight">
                  Origination Velocity Across ANZ, India &amp; US
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  Tracking early founder signals across university labs, GitHub repositories, and private WhatsApp communities.
                </p>

                {/* Animated Line Chart */}
                <div className="w-full bg-slate-50 border border-slate-900 rounded-2xl p-4 mb-6 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-950 font-bold mb-3">
                    <span>Verified Deal Referrals (Cumulative)</span>
                    <span className="text-slate-950 font-bold">Q1 2026 Target: 120+</span>
                  </div>
                  <svg className="w-full h-36 overflow-visible" viewBox="0 0 500 140" fill="none">
                    <defs>
                      <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#09090b" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
                      </linearGradient>

                      {/* Animated Mask for 100% Glitch-Free Synchronized Reveal */}
                      <mask id="graphRevealMask">
                        <motion.rect
                          x="0"
                          y="0"
                          height="140"
                          fill="#ffffff"
                          animate={{ width: ["0px", "520px", "520px", "0px"] }}
                          transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.7, 0.85, 1],
                          }}
                        />
                      </mask>
                    </defs>

                    {/* Background Grid Lines (Always Visible) */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#e2e8f0" strokeDasharray="4 4" />
                    <line x1="0" y1="70" x2="500" y2="70" stroke="#e2e8f0" strokeDasharray="4 4" />
                    <line x1="0" y1="110" x2="500" y2="110" stroke="#e2e8f0" strokeDasharray="4 4" />

                    {/* Masked Group: Both Line and Area Reveal in Perfect Sync */}
                    <g mask="url(#graphRevealMask)">
                      {/* Gradient Area Fill */}
                      <polygon points="0,120 0,110 120,95 240,75 360,40 480,15 480,120" fill="url(#areaGrad)" />

                      {/* Smooth Growth Curve Line */}
                      <path
                        d="M 0 110 Q 120 95, 240 75 T 480 15"
                        fill="none"
                        stroke="#09090b"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Data Points */}
                      <circle cx="120" cy="95" r="4" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="240" cy="75" r="4" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="360" cy="40" r="4" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
                      
                      {/* Active Tip Circle */}
                      <circle cx="480" cy="15" r="5" fill="#09090b" stroke="#ffffff" strokeWidth="2" />
                    </g>

                    {/* Always Pulsing Active Tip Point */}
                    <motion.circle
                      cx="480"
                      cy="15"
                      r="6"
                      fill="#09090b"
                      stroke="#ffffff"
                      strokeWidth="2"
                      animate={{ r: [5, 8, 5] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* Axis Labels */}
                    <text x="20" y="135" fill="#475569" fontSize="10" fontWeight="600" fontFamily="monospace">2024 (Q1)</text>
                    <text x="160" y="135" fill="#475569" fontSize="10" fontWeight="600" fontFamily="monospace">2025 (Q2)</text>
                    <text x="330" y="135" fill="#475569" fontSize="10" fontWeight="600" fontFamily="monospace">2025 (Q4)</text>
                    <text x="440" y="135" fill="#09090b" fontSize="10" fontWeight="700" fontFamily="monospace">2026 (H1)</text>
                  </svg>
                </div>
              </div>

              {/* Stats Bar at Base (Black Outline, Monochrome & Hover Zoom) */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <motion.div
                  whileHover={{ scale: 1.07, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3 bg-slate-50 border border-slate-900 rounded-xl shadow-2xs cursor-pointer"
                >
                  <span className="font-extrabold text-slate-950 text-sm sm:text-base block leading-none">$478M</span>
                  <span className="text-[10px] text-slate-700 font-mono font-bold uppercase block mt-1">Seed Volume</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.07, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3 bg-slate-50 border border-slate-900 rounded-xl shadow-2xs cursor-pointer"
                >
                  <span className="font-extrabold text-slate-950 text-sm sm:text-base block leading-none">0%</span>
                  <span className="text-[10px] text-slate-700 font-mono font-bold uppercase block mt-1">Equity Drag</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.07, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-3 bg-slate-50 border border-slate-900 rounded-xl shadow-2xs cursor-pointer"
                >
                  <span className="font-extrabold text-slate-950 text-sm sm:text-base block leading-none">100%</span>
                  <span className="text-[10px] text-slate-700 font-mono font-bold uppercase block mt-1">Vetted Memos</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Metric Flip Cards Side */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              
              {/* Flip Card 1: Seed Funding YoY */}
              <FlipCard
                frontBg="bg-white border-2 border-slate-900"
                backBg="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-2 border-slate-900 shadow-xl"
                front={
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl font-extrabold text-slate-950 tracking-tight">+18%</span>
                      <div className="p-2.5 bg-slate-100 text-slate-950 rounded-xl border border-slate-900 shadow-2xs font-mono font-bold text-xs">
                        YoY
                      </div>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono mb-2">SEED FUNDING YOY</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Seed funding grew 18% YoY to $478M in H1 2026. Capital is rotating to the earliest stage.
                    </p>
                  </div>
                }
                back={
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase font-extrabold text-slate-300">
                      Market Drivers Deep Dive
                    </div>
                    <h4 className="font-extrabold text-white text-base">Capital Rotation to Seed Stage</h4>
                    <ul className="text-xs text-slate-300 space-y-2 leading-relaxed font-medium">
                      <li>• Pre-seed &amp; Seed deal volume expanded 7% YoY across ANZ &amp; India corridors.</li>
                      <li>• Institutional seed round sizes reached an average of $1.2M.</li>
                    </ul>
                    <div className="text-[10px] text-slate-400 font-mono font-semibold pt-1">
                      Data Source: Inc42 Venture Report (2026)
                    </div>
                  </div>
                }
              />

              {/* Flip Card 2: Active Investor Collapse */}
              <FlipCard
                frontBg="bg-white border-2 border-slate-900"
                backBg="bg-gradient-to-br from-slate-900 to-slate-950 text-white border-2 border-slate-900 shadow-xl"
                front={
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl font-extrabold text-slate-950 tracking-tight">53%</span>
                      <div className="p-2.5 bg-slate-100 text-slate-950 rounded-xl border border-slate-900 shadow-2xs font-mono font-bold text-xs">
                        Signal
                      </div>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono mb-2">ACTIVE INVESTOR COLLAPSE</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Active investors in Indian rounds collapsed 53% in a single year, making proprietary signal essential.
                    </p>
                  </div>
                }
                back={
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase font-extrabold text-slate-300">
                      Ecosystem Impact
                    </div>
                    <h4 className="font-extrabold text-white text-base">Shrinking Syndicate Coverage</h4>
                    <ul className="text-xs text-slate-300 space-y-2 leading-relaxed font-medium">
                      <li>• Active investor count dropped from ~6,800 to ~3,170 in 12 months.</li>
                      <li>• Deploying funds face an over-fished, multi-syndicated pipeline.</li>
                    </ul>
                    <div className="text-[10px] text-slate-400 font-mono font-semibold pt-1">
                      Data Source: Tracxn Insights (2025)
                    </div>
                  </div>
                }
              />

            </div>
          </div>
        </div>
      </section>

      {/* 2. The Sourcing Problem Section */}
      <section className="py-24 px-6 bg-slate-50/40 backdrop-blur-xs border-t border-slate-200/80" id="problem">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
              [ The Sourcing Problem ]
            </div>
            <AnimatedScrollHeading
              text="Sourcing Early-Stage Deals is Harder Than Ever"
              className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4"
            />
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              A shrinking active investor pool and network-closed rounds mean standard inbox deal flow is no longer enough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problem Card 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="p-8 bg-white border-2 border-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-white bg-slate-950 border border-slate-900 px-3 py-1 rounded-md inline-block mb-4">
                  01 • Seed Funding Rotation
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3">+18% Seed Funding Growth YoY</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Seed funding grew 18% YoY to $478M in H1 2026, with deal volume up 7%. Capital is rotating to the earliest stage, exactly where fund coverage is thinnest. <span className="text-xs text-slate-400 font-mono">(Inc42, 2026)</span>
                </p>
              </div>
            </motion.div>

            {/* Problem Card 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="p-8 bg-white border-2 border-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-white bg-slate-950 border border-slate-900 px-3 py-1 rounded-md inline-block mb-4">
                  02 • Contested Deal Volumes
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3">Deal Count Fell Nearly 39%</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deal count fell to 1,518 rounds in 2025, while total funding slipped just 17% to $10.5B. Fewer, bigger, more contested deals mean sourcing early matters more than ever. <span className="text-xs text-slate-400 font-mono">(Tracxn, 2025)</span>
                </p>
              </div>
            </motion.div>

            {/* Problem Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="p-8 bg-white border-2 border-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-white bg-slate-950 border border-slate-900 px-3 py-1 rounded-md inline-block mb-4">
                  03 • Off-Market Networks
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3">The Best Deals Never Reach Your Inbox</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Campus founders and Tier-2 city startups close seed rounds through founder networks before they ever hit an institutional pipeline. Fund associates cannot be everywhere at once.
                </p>
              </div>
            </motion.div>

            {/* Problem Card 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.04, y: -6 }}
              className="p-8 bg-white border-2 border-slate-900 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-white bg-slate-950 border border-slate-900 px-3 py-1 rounded-md inline-block mb-4">
                  04 • Investor Contraction
                </span>
                <h3 className="text-xl font-extrabold text-slate-950 mb-3">53% Active Investor Collapse</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Active investors in Indian rounds collapsed 53%, from ~6,800 to ~3,170 in a single year. The funds still deploying face the same shrinking pipeline, making proprietary signal vital. <span className="text-xs text-slate-400 font-mono">(Tracxn, 2025)</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. The Sourcing Solution Section (Ultra Smooth Marquee Loop with Black Outlines) */}
      <section className="py-24 bg-white/40 backdrop-blur-xs border-t border-slate-200/80 overflow-hidden" id="solution">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
              [ The Sourcing Solution ]
            </div>
            <AnimatedScrollHeading
              text="How Do We Fix The Problem?"
              className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4"
            />
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              We operate as a natural extension of your fund&apos;s sourcing arm, identifying deals months before they hit the open market.
            </p>
          </div>
        </div>

        {/* 3D Rotary Carousel Container */}
        <Solution3DCarousel cards={solutionCards} />
      </section>
    </>
  );
}
