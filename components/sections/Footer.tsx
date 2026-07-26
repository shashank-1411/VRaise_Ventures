"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t-2 border-outlineDark py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
        <div className="footer-small-left max-w-md">
          <div className="footer-logo text-2xl font-black text-outlineDark mb-2">
            <span>VRaise</span>
          </div>
          <p className="text-sm text-text-muted">
            Bilateral early-stage deal origination across India, ANZ, and the US.
          </p>
        </div>

        <div className="footer-small-links flex flex-wrap gap-6 text-sm font-bold text-outlineDark">
          <a href="#about" className="hover:text-magentaBrand">About</a>
          <a href="#companies" className="hover:text-magentaBrand">Companies</a>
          <a href="#portfolio" className="hover:text-magentaBrand">Portfolio</a>
          <a href="#advantages" className="hover:text-magentaBrand">Services</a>
          <a href="#team" className="hover:text-magentaBrand">Team</a>
          <Link href="#" className="hover:text-magentaBrand">Privacy Policy</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-xs text-text-muted font-medium">
        <span>&copy; 2026 VRaise Ventures. All rights reserved.</span>
        <span>Built with Next.js & React</span>
      </div>
    </footer>
  );
}
