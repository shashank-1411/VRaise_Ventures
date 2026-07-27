"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight, ShieldAlert, Citrus, ShieldCheck } from "lucide-react";

export default function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-layout grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
        <div className="portfolio-intro flex flex-col gap-4">
          <span className="badge">Portfolio</span>
          <h2 className="text-3xl font-extrabold text-outlineDark">Our Partners & Portfolio</h2>
          <p className="text-sm text-text-muted">We partner with syndicated platforms, GovTech specialists, and pre-seed experts across the ANZ-India corridor.</p>
          <div className="portfolio-controls flex gap-4 mt-4">
            <button
              onClick={scrollLeft}
              className="p-3 border-2 border-outlineDark rounded-full bg-white shadow-[3px_3px_0px_#1a0513] hover:bg-magentaBrand hover:text-white transition-all"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 border-2 border-outlineDark rounded-full bg-white shadow-[3px_3px_0px_#1a0513] hover:bg-magentaBrand hover:text-white transition-all"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="portfolio-carousel-wrapper lg:col-span-2 overflow-hidden">
          <div
            ref={carouselRef}
            className="portfolio-carousel flex gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory"
          >
            {/* Card 1 */}
            <div className="testimonial-card flex-none w-[360px] p-8 bg-white border-2 border-skyBrand rounded-3xl shadow-lg snap-start">
              <div className="testimonial-header mb-4">
                <div className="testimonial-logo flex items-center gap-2 text-xl font-bold text-outlineDark">
                  <ShieldAlert className="w-6 h-6 text-skyBrand" /> TEN13
                </div>
              </div>
              <p className="testimonial-text text-xs italic leading-relaxed text-outlineDark/90 mb-6">
                &quot;ANZ&apos;s largest syndicated venture platform, founded by Steve Baxter and Stew Glynn. Over $115M deployed into 50+ companies through a network of 500+ investors, founders and operators. Early backer of Go1 and Clipchamp (acquired by Microsoft). First institutional mandate under QIC&apos;s $130M Queensland VCDF.&quot;
              </p>
              <div className="testimonial-author border-t border-skyBrand/20 pt-4">
                <span className="author-name block font-bold text-sm text-outlineDark">Steve Baxter & Stew Glynn</span>
                <span className="author-title text-xs text-text-muted">Founders, TEN13</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card flex-none w-[360px] p-8 bg-white border-2 border-skyBrand rounded-3xl shadow-lg snap-start">
              <div className="testimonial-header mb-4">
                <div className="testimonial-logo flex items-center gap-2 text-xl font-bold text-outlineDark">
                  <Citrus className="w-6 h-6 text-orange-500" /> Pinery Capital
                </div>
              </div>
              <p className="testimonial-text text-xs italic leading-relaxed text-outlineDark/90 mb-6">
                &quot;Australia&apos;s first GovTech-focused investment syndicate, backing founders selling into government and complex regulated markets across the sovereign economy. 20 years of Commonwealth procurement expertise, with $7B+ in government contracts evaluated across Defence and national security.&quot;
              </p>
              <div className="testimonial-author border-t border-skyBrand/20 pt-4">
                <span className="author-name block font-bold text-sm text-outlineDark">GovTech Syndicate</span>
                <span className="author-title text-xs text-text-muted">Canberra, Australia</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card flex-none w-[360px] p-8 bg-white border-2 border-skyBrand rounded-3xl shadow-lg snap-start">
              <div className="testimonial-header mb-4">
                <div className="testimonial-logo flex items-center gap-2 text-xl font-bold text-outlineDark">
                  <ShieldCheck className="w-6 h-6 text-magentaBrand" /> M8 Ventures
                </div>
              </div>
              <p className="testimonial-text text-xs italic leading-relaxed text-outlineDark/90 mb-6">
                &quot;Pre-seed and seed specialist backing product-led ANZ startups, founded by Alan Jones (early Yahoo!, Startmate mentor) and Emily Rich (ex-Microsoft for Startups APAC). Led telehealth startup Hola Health&apos;s $4.5M pre-Series A round.&quot;
              </p>
              <div className="testimonial-author border-t border-skyBrand/20 pt-4">
                <span className="author-name block font-bold text-sm text-outlineDark">Alan Jones & Emily Rich</span>
                <span className="author-title text-xs text-text-muted">Partners, M8 Ventures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
