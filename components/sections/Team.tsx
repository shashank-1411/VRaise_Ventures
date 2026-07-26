"use client";

import React from "react";
import Image from "next/image";

export default function Team() {
  const members = [
    {
      name: "Mrinal Manaktala",
      role: "Founder & CEO",
      img: "/assets/mrinal.png",
    },
    {
      name: "Rudraksh Srivastava",
      role: "Co-Founder",
      img: "/assets/rudraksh.png",
    },
    {
      name: "Anna FitzGerald",
      role: "Advisor",
      img: "/assets/anna.png",
    },
    {
      name: "Jim Cooper",
      role: "Advisor",
      img: "/assets/jim.png",
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="section-header-compact">
        <span className="badge">Team</span>
        <h2>Meet Our Team & Advisors</h2>
        <p>Student founders, operators, and advisors bridging early-stage venture ecosystems.</p>
      </div>

      <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {members.map((m, idx) => (
          <div
            key={idx}
            className="team-card p-6 bg-white border-2 border-outlineDark rounded-2xl shadow-[4px_4px_0px_#1a0513] text-center flex flex-col items-center hover:-translate-y-1 transition-transform"
          >
            <div className="team-img-wrapper w-32 h-32 rounded-full overflow-hidden border-2 border-outlineDark mb-4 relative bg-skyBrand/20">
              <Image
                src={m.img}
                alt={m.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback avatar if local image missing
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300`;
                }}
              />
            </div>
            <h3 className="text-lg font-bold text-outlineDark mb-1">{m.name}</h3>
            <div className="team-role text-xs font-semibold text-magentaBrand uppercase tracking-wider">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
