"use client";

import { useEffect, useRef, useState } from "react";

const ORDER_URL = "https://floristik-koester.lokalerflorist.de";

const navItems = [
  { label: "Startseite", href: "/" },
  { label: "Galerie", href: "/galerie" },
  { label: "Frische Blumen per Express", href: "/express-blumen" },
  { label: "Business Flowers", href: "/business-flowers" },
  { label: "Blumen-Abo", href: "/blumen-abo" },
  { label: "Unser Team", href: "/unser-team" },
  { label: "Kontakt & Öffnungszeiten", href: "/kontakt" },
];

export function SiteNav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOrigin, setMenuOrigin] = useState("24px 38px");
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const openMenu = () => {
    if (menuBtnRef.current) {
      const r = menuBtnRef.current.getBoundingClientRect();
      setMenuOrigin(`${r.left + r.width / 2}px ${r.top + r.height / 2}px`);
    }
    setMenuOpen(true);
  };

  const solidBg = !transparent || scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[76px] transition-all duration-300"
        style={{
          background: solidBg ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: solidBg ? "blur(16px)" : "none",
          WebkitBackdropFilter: solidBg ? "blur(16px)" : "none",
          boxShadow: solidBg ? "0 1px 0 rgba(27,43,122,0.08)" : "none",
        }}
      >
        {/* Hamburger */}
        <button
          ref={menuBtnRef}
          className="flex items-center gap-3 cursor-pointer"
          onClick={openMenu}
          aria-label="Menü öffnen"
          style={{ background: "none", border: "none", padding: 0 }}
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

        {/* Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2 text-center" style={{ textDecoration: "none" }}>
          <p className="text-[9px] tracking-[0.55em] uppercase" style={{ color: "#C4545A" }}>Floristik</p>
          <p
            className="text-xl md:text-2xl tracking-[0.42em] uppercase font-semibold leading-none"
            style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A" }}
          >
            KÖSTER
          </p>
        </a>

        {/* CTA */}
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
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
          {navItems.map((item, i) => (
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
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
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
    </>
  );
}
