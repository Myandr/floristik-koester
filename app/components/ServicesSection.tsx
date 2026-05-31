"use client";

import { BlurTextEffect } from "./BlurTextEffect";

const SERVICES = [
  {
    script: "handgefertigt",
    title: "Blumensträuße",
    desc: "Jedes Gesteck ist ein Unikat — stimmig in Farbe, Duft und Ausdruck. Für jeden Anlass, jedes Gefühl.",
  },
  {
    script: "& Brautblumen",
    title: "Hochzeit",
    desc: "Brautsträuße, Tischdeko und florales Ambiente für Ihren besonderen Tag — mit Herz und Erfahrung.",
  },
  {
    script: "& Gedenken",
    title: "Trauer",
    desc: "Würdevolle Kränze und Gestecke, die in stiller Schönheit begleiten und Abschied halten.",
  },
  {
    script: "Flowers",
    title: "Business",
    desc: "Regelmäßige Blumenlösungen für Büros, Empfänge und Geschäftsräume — frisch und stilvoll.",
  },
  {
    script: "für Zuhause",
    title: "Abo-Service",
    desc: "Frische Saisonblumen regelmäßig geliefert — für Ihr Zuhause, Ihre Familie oder Ihr Büro.",
  },
  {
    script: "& Tischdeko",
    title: "Events",
    desc: "Florale Raumgestaltung und Installationen für Feste, Jubiläen und unvergessliche Momente.",
  },
];

function ServiceCard({ script, title, desc }: { script: string; title: string; desc: string }) {
  return (
    <div
      className="p-8 md:p-10 transition-colors duration-200 cursor-default"
      style={{ background: "#ffffff" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#F5D5DA"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "#FAF4EE"; }}
    >
      <span
        className="block mb-1"
        style={{
          fontFamily: "var(--font-great-vibes)",
          color: "#C4545A",
          fontSize: "1.42rem",
          opacity: 0.88,
        }}
      >
        {script}
      </span>
      <h3
        className="mb-3"
        style={{
          fontFamily: "var(--font-cormorant)",
          color: "#1B2B7A",
          fontSize: "clamp(1.55rem, 2.8vw, 2.1rem)",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: 1.15,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: "#1B2B7A",
          opacity: 0.6,
          fontSize: "0.86rem",
          lineHeight: 1.72,
          fontFamily: "var(--font-cormorant)",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="leistungen"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20 text-center">
          <p
            className="mb-3"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#C4545A",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Was wir für Sie tun
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
            }}
          >
            <BlurTextEffect>Unsere Leistungen</BlurTextEffect>
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(27, 43, 122, 0.1)" }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://floristik-koester.lokalerflorist.de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              background: "#1B2B7A",
              fontSize: "1rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.8rem",
              borderRadius: "999px",
              display: "inline-block",
            }}
          >
            Strauß bestellen
          </a>
        </div>
      </div>
    </section>
  );
}
