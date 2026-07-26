"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import About from "@/components/sections/About";
import DealFlowTimeline from "@/components/sections/DealFlowTimeline";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/layout/Footer";
import ScoutingModal from "@/components/ui/ScoutingModal";
import NewsletterModal from "@/components/ui/NewsletterModal";
import VerticalFloatingDock from "@/components/ui/VerticalFloatingDock";
import { InfiniteGridBackground } from "@/components/ui/the-infinite-grid";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <InfiniteGridBackground>
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <Hero onOpenModal={() => setModalOpen(true)} />
        <PartnerMarquee />
        <About />
        <DealFlowTimeline />
        <CtaBanner onOpenModal={() => setModalOpen(true)} />
        <Footer />
        <VerticalFloatingDock
          onOpenCallModal={() => setModalOpen(true)}
          onOpenNewsletterModal={() => setNewsletterOpen(true)}
        />
        <ScoutingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        <NewsletterModal isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
      </InfiniteGridBackground>
    </main>
  );
}
