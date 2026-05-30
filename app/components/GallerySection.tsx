"use client";

import { useEffect, useRef } from "react";

const images = [
  "/images/blume1.jpg",
  "/images/blume2.jpg",
  "/images/blume3.jpg",
  "/images/blume4.jpg",
  "/images/flower1.jpeg",
  "/images/flower3.jpeg",
  "/images/picture-2600.jpeg",
];

const duplicatedImages = [...images, ...images];

export function GallerySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf: number;

    function tick() {
      posRef.current += 0.6;
      const halfWidth = track!.scrollWidth / 2;
      if (posRef.current >= halfWidth) posRef.current = 0;

      track!.style.transform = `translateX(-${posRef.current}px)`;

      const viewCenter = window.innerWidth / 2;
      const items = track!.querySelectorAll<HTMLElement>(".g-item");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenter - viewCenter);
        const t = Math.min(dist / (viewCenter * 0.9), 1);
        const scale = 0.72 + t * 0.46;
        item.style.transform = `scale(${scale})`;
      });

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: "#1B2B7A" }}>
      <style>{`
        .g-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="text-center px-6 mb-16">
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          unsere Momente
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
          Blicke in unser Atelier
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.55, fontSize: "1.05rem", lineHeight: 1.8, marginTop: "0.8rem" }}>
          Frisch, handgefertigt und mit Liebe zum Detail — täglich in Dorsten.
        </p>
      </div>

      <div className="g-mask w-full overflow-hidden" style={{ paddingBlock: "2rem" }}>
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          style={{ willChange: "transform" }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="g-item flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                width: "clamp(180px, 18vw, 300px)",
                height: "clamp(180px, 18vw, 300px)",
                transformOrigin: "center center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Galerie ${(index % images.length) + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <a
          href="#kontakt"
          className="transition-all hover:bg-[#FAF4EE] hover:text-[#1B2B7A]"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#1B2B7A",
            background: "#F4C2C9",
            fontSize: "0.9rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0.75rem 2.2rem",
            borderRadius: "999px",
            display: "inline-block",
          }}
        >
          Strauß bestellen
        </a>
      </div>
    </section>
  );
}
