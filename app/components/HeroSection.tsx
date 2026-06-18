"use client";

import Image from "next/image";
import { BlurTextEffect } from "./BlurTextEffect";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "680px" }}
    >
      <Image
        src="/images/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "18%",
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Center title */}
      <div className="absolute z-40 inset-0 flex flex-col items-center justify-center gap-4">
        <p
          className="pointer-events-none"
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#1B2B7A",
            fontSize: "clamp(4.5rem, 12vw, 10rem)",
            lineHeight: 1.15,
            textAlign: "center",
            textShadow: "0 2px 32px rgba(250,244,238,0.5)",
          }}
        >
          <BlurTextEffect>Floristik Köster</BlurTextEffect>
        </p>
        <p
          className="pointer-events-none"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            textAlign: "center",
            opacity: 0.65,
          }}
        >
          Blumen mit Herz in Dorsten
        </p>
        <div className="flex gap-3 flex-wrap justify-center" style={{ marginTop: "0.5rem" }}>
          <a
            href="/hochzeitsfloristik"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "rgba(196,84,90,0.92)",
              fontSize: "clamp(0.7rem, 1.1vw, 0.82rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.75rem 1.8rem",
              borderRadius: "999px",
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            Hochzeitsfloristik
          </a>
          <a
            href="/gedenkfloristik"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#000000",
              background: "transparent",
              border: "1.5px solid rgba(0,0,0,0.5)",
              fontSize: "clamp(0.7rem, 1.1vw, 0.82rem)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.75rem 1.8rem",
              borderRadius: "999px",
              fontWeight: 700,
              backdropFilter: "blur(8px)",
            }}
          >
            Gedenkfloristik
          </a>
        </div>
      </div>

      {/* Bottom-left tagline */}
      <div
        className="absolute z-40 max-w-[240px] sm:max-w-[280px]"
        style={{ bottom: "7%", left: "clamp(1.5rem, 4vw, 2.5rem)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#C4545A",
            fontSize: "clamp(1.2rem, 3.8vw, 2.6rem)",
            lineHeight: 1.25,
            marginBottom: "0.45rem",
          }}
        >
          Blumenautomaten — 24h
        </p>
<a
          href="/blumen-automaten"
          className="hidden sm:inline-flex items-center gap-2"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "1rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
            opacity: 0.55,
            marginTop: "0.75rem",
            display: "inline-flex",
          }}
        >
          <span style={{ color: "#C4545A", fontSize: "0.55rem" }}>●</span>
          Jetzt Standorte entdecken
        </a>
      </div>

      {/* Bottom-right round CTA — outer rotates, text stays upright */}
      <a
        href="https://floristik-koester.lokalerflorist.de"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-40 flex items-center justify-center text-center"
        style={{
          bottom: "5%",
          right: "clamp(1.5rem, 4vw, 2.5rem)",
          width: "clamp(120px, 18vw, 210px)",
          height: "clamp(120px, 18vw, 210px)",
          borderRadius: "62% 38% 54% 46% / 44% 58% 42% 56%",
          background: "#C4545A",
          color: "#FAF4EE",
          textDecoration: "none",
          animation: "hero-btn-spin 9s linear infinite",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(0.85rem, 1.3vw, 1.1rem)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            lineHeight: 1.65,
            display: "block",
            padding: "0 18px",
            animation: "hero-btn-spin-reverse 9s linear infinite",
          }}
        >
          Strauß<br />Bestellen
        </span>
      </a>
    </section>
  );
}
