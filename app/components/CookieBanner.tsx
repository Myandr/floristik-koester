"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  function accept(level: "all" | "necessary") {
    localStorage.setItem("cookie-consent", level);
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1.5rem",
        right: "1.5rem",
        maxWidth: "460px",
        background: "#1B2B7A",
        borderRadius: "18px",
        padding: "1.6rem",
        zIndex: 9999,
        boxShadow: "0 8px 40px rgba(0,0,0,0.22)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-great-vibes)",
          color: "#F4C2C9",
          fontSize: "1.7rem",
          lineHeight: 1.2,
          marginBottom: "0.6rem",
        }}
      >
        Cookies
      </p>
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#FAF4EE",
          opacity: 0.75,
          fontSize: "0.97rem",
          lineHeight: 1.8,
          marginBottom: "1.2rem",
        }}
      >
        Wir verwenden technisch notwendige Cookies. Mit Ihrer Einwilligung laden wir außerdem Google Maps (setzt
        Cookies der Google LLC). Mehr dazu in unserer{" "}
        <a href="/datenschutz" style={{ color: "#F4C2C9", textDecoration: "underline" }}>
          Datenschutzerklärung
        </a>
        .
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={() => accept("all")}
          style={{
            background: "#F4C2C9",
            color: "#1B2B7A",
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "999px",
            padding: "0.75rem 1.5rem",
            cursor: "pointer",
          }}
        >
          Alle akzeptieren
        </button>
        <button
          onClick={() => accept("necessary")}
          style={{
            background: "transparent",
            color: "#FAF4EE",
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            border: "1.5px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            padding: "0.75rem 1.5rem",
            cursor: "pointer",
          }}
        >
          Nur notwendige
        </button>
      </div>
    </div>
  );
}
