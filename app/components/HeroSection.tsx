"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlurTextEffect } from "./BlurTextEffect";

export function HeroSection({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOrigin, setMenuOrigin] = useState("24px 38px");
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const openMenu = () => {
    if (menuBtnRef.current) {
      const r = menuBtnRef.current.getBoundingClientRect();
      setMenuOrigin(`${r.left + r.width / 2}px ${r.top + r.height / 2}px`);
    }
    setMenuOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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

      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[76px] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(27,43,122,0.08)" : "none",
        }}
      >
        <button
          ref={menuBtnRef}
          className="flex items-center gap-3 cursor-pointer"
          onClick={openMenu}
          aria-label="Menü öffnen"
        >
          <div className="flex flex-col gap-[6px]">
            <span className="block w-9 h-[2px] bg-[#1B2B7A]" />
            <span className="block w-6 h-[2px] bg-[#1B2B7A]" />
          </div>
          <span
            className="text-[13px] tracking-[0.28em] uppercase hidden sm:inline font-semibold"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A" }}
          >
            Menü
          </span>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <p className="text-[9px] tracking-[0.55em] uppercase" style={{ color: "#C4545A" }}>
            Floristik
          </p>
          <h1
            className="text-xl md:text-2xl tracking-[0.42em] uppercase font-semibold leading-none"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A" }}
          >
            KÖSTER
          </h1>
        </div>

        <a
          href="#kontakt"
          className="hidden sm:flex items-center px-5 py-2 rounded-full border transition-all text-[#1B2B7A] hover:bg-[#1B2B7A] hover:text-white"
          style={{
            borderColor: "#1B2B7A",
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.76rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Strauß Bestellen
        </a>
      </nav>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: "18%",
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Center title */}
      <div className="absolute z-40 inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#1B2B7A",
            fontSize: "clamp(4rem, 11vw, 9rem)",
            lineHeight: 1.15,
            textAlign: "center",
            textShadow: "0 2px 32px rgba(250,244,238,0.5)",
          }}
        >
          <BlurTextEffect>Floristik Köster</BlurTextEffect>
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "clamp(0.78rem, 1.4vw, 1rem)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            textAlign: "center",
            opacity: 0.65,
          }}
        >
          Blumen mit Herz · Dorsten seit 1999
        </p>
      </div>

      {/* Bottom-left tagline — hidden on mobile */}
      <div
        className="hidden sm:block absolute z-40 max-w-[280px]"
        style={{ bottom: "7%", left: "clamp(1.5rem, 4vw, 2.5rem)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#C4545A",
            fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
            lineHeight: 1.25,
            marginBottom: "0.45rem",
          }}
        >
          Persönliche Handschrift
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            opacity: 0.6,
            fontSize: "0.92rem",
            lineHeight: 1.7,
          }}
        >
          Blumen sind mehr als ein Geschenk — sie sprechen eine Sprache der Gefühle.
        </p>
      </div>

      {/* Bottom-right round CTA — outer rotates, inner text stays upright */}
      <a
        href="#kontakt"
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

      {/* Menu overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 70,
          background: "#ffffff",
          transformOrigin: menuOrigin,
          transform: menuOpen ? "scale(1)" : "scale(0)",
          transition: "transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "clamp(1.5rem, 8vw, 6rem)",
          paddingTop: "5rem",
          overflowY: "auto",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Menü schließen"
          style={{
            position: "absolute",
            top: "1.6rem",
            right: "2rem",
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            fontSize: "2rem",
            lineHeight: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.3s 0.3s",
          }}
        >
          ×
        </button>

        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#C4545A",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            marginBottom: "2rem",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s 0.25s, transform 0.4s 0.25s",
          }}
        >
          Navigation
        </p>

        <nav className="flex flex-col gap-2">
          {[
            { label: "Startseite", href: "/" },
            { label: "Galerie", href: "/galerie" },
            { label: "Frische Blumen per Express", href: "/express-blumen" },
            { label: "Business Flowers", href: "/business-flowers" },
            { label: "Blumen-Abo", href: "/blumen-abo" },
            { label: "Unser Team", href: "/unser-team" },
            { label: "Kontakt & Öffnungszeiten", href: "/kontakt" },
          ].map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                fontSize: "clamp(1.6rem, 5vw, 3.2rem)",
                fontWeight: 600,
                textDecoration: "none",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ${0.3 + i * 0.06}s, transform 0.4s ${0.3 + i * 0.06}s`,
                display: "block",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "2.5rem",
            fontFamily: "var(--font-cormorant)",
            color: "#FAF4EE",
            background: "#1B2B7A",
            fontSize: "1rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0.85rem 2.2rem",
            borderRadius: "999px",
            display: "inline-block",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.4s 0.52s, transform 0.4s 0.52s",
          }}
        >
          Strauß bestellen
        </a>
      </div>
    </section>
  );
}
