"use client";

export function SubPageNav() {
  return (
    <nav
      className="flex items-center justify-between px-6 md:px-10 h-[76px] sticky top-0 z-50"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(27,43,122,0.08)",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#1B2B7A",
          fontSize: "0.7rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          textDecoration: "none",
          opacity: 0.6,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
      >
        ← Zurück
      </a>

      <a href="/" style={{ textDecoration: "none", textAlign: "center" }}>
        <p
          className="text-[9px] tracking-[0.55em] uppercase"
          style={{ color: "#C4545A", fontFamily: "var(--font-cormorant)" }}
        >
          Floristik
        </p>
        <p
          className="text-xl tracking-[0.42em] uppercase font-semibold leading-none"
          style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A" }}
        >
          KÖSTER
        </p>
      </a>

      <a
        href="https://floristik-koester.lokalerflorist.de"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#FAF4EE",
          background: "#C4545A",
          fontSize: "0.72rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "0.55rem 1.4rem",
          borderRadius: "999px",
          display: "inline-block",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1B2B7A")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#C4545A")}
      >
        Bestellen
      </a>
    </nav>
  );
}
