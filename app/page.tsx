"use client";

import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AnlassSection } from "./components/AnlassSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SocialSection } from "./components/SocialSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)" }}>
      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnlassSection />
      <WhyUsSection />
      <ReviewsSection />
      <SocialSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
