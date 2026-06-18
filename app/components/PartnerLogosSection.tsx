"use client";

import Image from "next/image";

const logos = [
  { src: "/images/logo.png",  alt: "Partner Logo 1" },
  { src: "/images/logo2.png", alt: "Partner Logo 2" },
  { src: "/images/logo3.png", alt: "Partner Logo 3" },
  { src: "/images/logo4.png", alt: "Partner Logo 4" },
  { src: "/images/logo5.png", alt: "Partner Logo 5" },
  { src: "/images/logo6.png", alt: "Partner Logo 6" },
  { src: "/images/logo7.png", alt: "Partner Logo 7" },
  { src: "/images/logo8.png", alt: "Partner Logo 8" },
  { src: "/images/logo9.png", alt: "Partner Logo 9" },
];

export function PartnerLogosSection() {
  const track = [...logos, ...logos];

  return (
    <section
      style={{
        background: "#ffffff",
        borderTop: "1px solid rgba(27,43,122,0.07)",
        borderBottom: "1px solid rgba(27,43,122,0.07)",
        overflow: "hidden",
        paddingTop: "2.8rem",
        paddingBottom: "2.8rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#1B2B7A",
          fontSize: "0.72rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          opacity: 0.45,
          textAlign: "center",
          marginBottom: "1.8rem",
        }}
      >
        Unsere Partner
      </p>

      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "10vw",
            background: "linear-gradient(to right, #ffffff, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "10vw",
            background: "linear-gradient(to left, #ffffff, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="partner-track"
          style={{
            display: "flex",
            gap: "4rem",
            width: "max-content",
            animation: "partner-scroll 28s linear infinite",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                opacity: 0.85,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.85")}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={56}
                style={{
                  height: "56px",
                  width: "auto",
                  maxWidth: "140px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partner-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partner-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
