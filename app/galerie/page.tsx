"use client";

import { useState } from "react";
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
      <div className="px-4 md:px-8 lg:px-12 py-12 md:py-16" style={{ background: "#FAF4EE" }}>
        <style>{`
          .masonry {
            columns: 2;
            column-gap: 0.75rem;
          }
          @media (min-width: 768px) {
            .masonry { columns: 3; column-gap: 1rem; }
          }
          @media (min-width: 1200px) {
            .masonry { columns: 4; column-gap: 1rem; }
          }
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 0.75rem;
            display: block;
          }
          @media (min-width: 768px) {
            .masonry-item { margin-bottom: 1rem; }
          }
        `}</style>

        <div className="masonry max-w-7xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="masonry-item group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setLightbox(img.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                className="group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(27,43,122,0.4)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "#FAF4EE",
                    fontSize: "0.72rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                  }}
                >
                  &#x2B1C; ansehen
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
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
              fontSize: "2.5rem",
              cursor: "pointer",
              fontFamily: "var(--font-cormorant)",
              lineHeight: 1,
              opacity: 0.8,
            }}
          >
            &times;
          </button>
          {/* prev / next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = images.findIndex((img) => img.src === lightbox);
              setLightbox(images[(idx - 1 + images.length) % images.length].src);
            }}
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#FAF4EE",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.4rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#8592;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = images.findIndex((img) => img.src === lightbox);
              setLightbox(images[(idx + 1) % images.length].src);
            }}
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#FAF4EE",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.4rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            &#8594;
          </button>

          <div
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt=""
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "12px",
                display: "block",
              }}
            />
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
