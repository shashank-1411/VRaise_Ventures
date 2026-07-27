"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import WhatWeDo from "@/components/sections/WhatWeDo";
import AboutVRaise from "@/components/sections/AboutVRaise";
import SimpleProcess from "@/components/sections/SimpleProcess";
import NetworkSection from "@/components/sections/NetworkSection";
import ByTheNumbers from "@/components/sections/ByTheNumbers";
import FaqSection from "@/components/sections/FaqSection";
import PartnerWithUs from "@/components/sections/PartnerWithUs";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import ScoutingModal from "@/components/ui/ScoutingModal";
import NewsletterModal from "@/components/ui/NewsletterModal";
import VerticalFloatingDock from "@/components/ui/VerticalFloatingDock";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-screen bg-white">
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <Hero onOpenModal={() => setModalOpen(true)} />
        <PartnerMarquee />
        <WhatWeDo />
        <AboutVRaise />
        <SimpleProcess />
        <NetworkSection />
        <ByTheNumbers />
        <FaqSection />
        <PartnerWithUs onOpenModal={() => setModalOpen(true)} />
        <CtaBanner onOpenModal={() => setModalOpen(true)} />
        <Footer />
        <VerticalFloatingDock
          onOpenCallModal={() => setModalOpen(true)}
          onOpenNewsletterModal={() => setNewsletterOpen(false)}
        />
        <ScoutingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <NewsletterModal isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
      </div>
    </main>
  );
}
