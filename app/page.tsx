"use client";

import { HeroSection } from "./components/HeroSection";
import { PartnerLogosSection } from "./components/PartnerLogosSection";
import { AnlassSection } from "./components/AnlassSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SocialSection } from "./components/SocialSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", overflowX: "hidden" }}>
      <SiteNav transparent />
      <HeroSection />
      <PartnerLogosSection />
      <AnlassSection />
      <WhyUsSection />
      <ReviewsSection />
      <SocialSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
