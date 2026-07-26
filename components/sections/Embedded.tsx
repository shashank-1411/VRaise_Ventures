"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Embedded() {
  return (
    <section className="embedded-section" id="companies">
      <div className="section-header-compact">
        <span className="badge">Where We&apos;re Embedded</span>
        <h2>We speak the language of founders and open the right doors</h2>
        <p>We take 0% equity, no fees, and no advisory shares from founders. A VRaise referral costs founders exactly zero.</p>
      </div>

      <div className="embedded-layout">
        {/* Left Column */}
        <div className="embedded-col">
          <motion.div
            className="embedded-card"
            whileHover={{ x: -3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="embedded-num-badge badge-magenta">01</div>
            <h3>Universities & Campuses</h3>
            <p>Go8 in Australia, IITs and IIMs in India, Ivy League and top tech schools in the US. Hackathons, E-Cells, incubators, student founders seen at day zero.</p>
          </motion.div>

          <motion.div
            className="embedded-card"
            whileHover={{ x: -3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="embedded-num-badge badge-orange">02</div>
            <h3>Operator & Angel Networks</h3>
            <p>Ex-founders, early employees, and angels who see breakout teams before any institution does, feeding proprietary signal into our pipeline.</p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="embedded-col">
          <motion.div
            className="embedded-card"
            whileHover={{ x: -3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="embedded-num-badge badge-orange">03</div>
            <h3>Founder Communities</h3>
            <p>The rooms where rounds actually form: WhatsApp and Slack founder groups, demo days, pitch nights, and alumni networks across three markets.</p>
          </motion.div>

          <motion.div
            className="embedded-card"
            whileHover={{ x: -3, y: -3 }}
            transition={{ duration: 0.2 }}
          >
            <div className="embedded-num-badge badge-magenta">04</div>
            <h3>Accelerators & Programs</h3>
            <p>Cohort access through accelerator networks, anchored by our Genesis USYD roots. Founders tracked from first pitch through Demo Day and beyond.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
