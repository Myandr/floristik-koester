"use client";

import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AnlassSection } from "./components/AnlassSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SocialSection } from "./components/SocialSection";
import { ContactSection } from "./components/ContactSection";
import { SiteFooter } from "./components/SiteFooter";
import { FadeIn } from "./components/FadeIn";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)" }}>
      <HeroSection menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <FadeIn><AnlassSection /></FadeIn>
      <FadeIn delay={50}><WhyUsSection /></FadeIn>
      <FadeIn delay={50}><ReviewsSection /></FadeIn>
      <FadeIn delay={50}><SocialSection /></FadeIn>
      <FadeIn delay={50}><ContactSection /></FadeIn>
      <FadeIn delay={50}><SiteFooter /></FadeIn>
    </main>
  );
}
