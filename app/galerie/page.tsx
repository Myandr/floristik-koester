"use client";

import { useState } from "react";
import Image from "next/image";
import { SubPageNav } from "../components/SubPageNav";

const images = [
  { src: "/images/blume1.jpg", alt: "Blumenstrauss" },
  { src: "/images/blume2.jpg", alt: "Floristik Koester" },
  { src: "/images/blume3.jpg", alt: "Frische Blumen" },
  { src: "/images/blume4.jpg", alt: "Handgefertigter Strauss" },
  { src: "/images/flower1.jpeg", alt: "Blumenarrangement" },
  { src: "/images/flower3.jpeg", alt: "Hochzeitsfloristik" },
  { src: "/images/picture-2600.jpeg", alt: "Kreatives Arrangement" },
  { src: "/images/picture-2600-2.jpeg", alt: "Saisonblumen" },
  { src: "/images/picture-2600-3.jpeg", alt: "Werkstuck" },
  { src: "/images/picture-2600-4.jpeg", alt: "Tischdekoration" },
  { src: "/images/picture-2600-5.jpeg", alt: "Blumengruss" },
  { src: "/images/IMG_20240806_140551.jpg", alt: "Floristik Atelier" },
  { src: "/images/IMG_20240807_125230.jpg", alt: "Frische Saisonblumen" },
  { src: "/images/IMG_20240220_120016_879.jpg", alt: "Handarbeit" },
];

export default function Galerie() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SubPageNav />

      {/* Hero */}
      <div
        className="px-6 md:px-10 lg:px-16 py-20 md:py-28 text-center"
        style={{ background: "linear-gradient(135deg, #1B2B7A 0%, #2a3d9e 100%)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-great-vibes)",
            color: "#F4C2C9",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.2,
            marginBottom: "0.4rem",
          }}
        >
          unsere Momente
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#FAF4EE",
            fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          Galerie
        </h1>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#FAF4EE",
            opacity: 0.55,
            fontSize: "1.05rem",
            lineHeight: 1.8,
            marginTop: "1rem",
            maxWidth: "440px",
            margin: "1rem auto 0",
          }}
        >
          Einblicke in unser Atelier &mdash; frisch, handgefertigt und mit Liebe zum Detail.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20" style={{ background: "#FAF4EE" }}>
        <div
          className="max-w-6xl mx-auto"
          style={{
            columns: "2",
            columnGap: "1rem",
          }}
        >
          <style>{`
            @media (min-width: 768px) { .gallery-grid { columns: 3 !important; } }
            @media (min-width: 1024px) { .gallery-grid { columns: 4 !important; } }
          `}</style>
          <div
            className="gallery-grid"
            style={{ columns: 2, columnGap: "0.75rem" }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl mb-3 cursor-pointer group"
                style={{ breakInside: "avoid" }}
                onClick={() => setLightbox(img.src)}
              >
                <div style={{ position: "relative", width: "100%", paddingBottom: i % 3 === 0 ? "130%" : i % 3 === 1 ? "100%" : "75%" }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(27,43,122,0.35)" }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        color: "#FAF4EE",
                        fontSize: "0.7rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                      }}
                    >
                      Vergrossern
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              color: "#FAF4EE",
              background: "none",
              border: "none",
              fontSize: "2rem",
              cursor: "pointer",
              fontFamily: "var(--font-cormorant)",
              lineHeight: 1,
            }}
          >
            &times;
          </button>
          <div
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", width: "800px", height: "600px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={lightbox} alt="" fill className="object-contain" />
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#1B2B7A" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Gefallt Ihnen was Sie sehen?
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, marginBottom: "2rem" }}>
          Bestellen Sie Ihren eigenen Strauss
        </h2>
        <a
          href="https://wa.me/491774878890"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            background: "#F4C2C9",
            fontSize: "0.85rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0.9rem 2.5rem",
            borderRadius: "999px",
            fontWeight: 700,
            display: "inline-block",
          }}
        >
          WhatsApp schreiben
        </a>
      </div>

      <footer className="py-6 px-6 md:px-10 text-center" style={{ borderTop: "1px solid rgba(27,43,122,0.08)" }}>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.35, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
          {new Date().getFullYear()} Floristik Koester &middot; Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
