"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Handshake, TrendingUp, Sprout } from "lucide-react";

export default function BusinessModel() {
  const [isHovered, setIsHovered] = useState(false);

  const cardsData = [
    {
      id: "scout",
      title: "Scout",
      icon: <Compass className="w-6 h-6 text-skyBrand" />,
      body: '"We find breakout startups months before they raise through campuses, accelerators, and founder networks, running real diligence."',
      footerTitle: "Early Identification",
      footerSubtitle: "Proprietary Signal",
      colorClass: "font-blue",
    },
    {
      id: "fundraise",
      title: "Fundraise",
      icon: <Handshake className="w-6 h-6 text-magentaBrand" />,
      body: '"We connect each startup only to funds that truly fit them. Founders pay nothing, and VCs never receive unmatched pitch decks."',
      footerTitle: "Mandate Matching",
      footerSubtitle: "Zero Founder Cost",
      colorClass: "font-magenta",
    },
    {
      id: "earn",
      title: "Earn",
      icon: <TrendingUp className="w-6 h-6 text-skyBrand" />,
      body: '"When a fund invests in a startup we bring, we earn a small share of upside. VCs pay only for closed results, never for looking."',
      footerTitle: "Aligned Upside",
      footerSubtitle: "Success-Based Only",
      colorClass: "font-blue",
    },
    {
      id: "grow",
      title: "Grow",
      icon: <Sprout className="w-6 h-6 text-magentaBrand" />,
      body: '"Everything we earn goes straight back into expanding our founder network across ANZ, India, and US tech hubs."',
      footerTitle: "Network Scale",
      footerSubtitle: "Ecosystem Reinvestment",
      colorClass: "font-magenta",
    },
  ];

  // Duplicated set for seamless 100% infinite marquee loop
  const marqueeCards = [...cardsData, ...cardsData];

  return (
    <section className="biz-model-section" id="advantages">
      <div className="section-header-compact">
        <span className="badge">Business Model</span>
        <h2>Creating Long-term Value and Stability</h2>
        <p>Standard economics mapped to aligned outcomes. Zero costs to founders, pay only on closes.</p>
      </div>

      <div
        className="biz-marquee-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="biz-marquee-track flex gap-8 w-max"
          animate={{ x: isHovered ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeCards.map((card, idx) => (
            <motion.div
              key={`${card.id}-${idx}`}
              className="biz-model-card"
              whileHover={{ scale: 1.06, y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="biz-card-header">
                <div className={`biz-card-icon ${card.colorClass}`}>{card.icon}</div>
                <h3>{card.title}</h3>
              </div>
              <p className="biz-card-body">{card.body}</p>
              <div className="biz-card-footer">
                <div className="biz-footer-title">{card.footerTitle}</div>
                <div className="biz-footer-subtitle">{card.footerSubtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
