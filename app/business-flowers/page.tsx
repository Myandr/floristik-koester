import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const packages = [
  {
    script: "Starter",
    title: "Woechentliche Tischdeko",
    desc: "Ein frischer Strauss pro Woche fuer Ihren Empfang oder Besprechungsraum, stimmig zur Jahreszeit, puenktlich geliefert.",
    detail: "Ab Vereinbarung",
    highlight: false,
  },
  {
    script: "Business",
    title: "Mehrere Standorte",
    desc: "Floristik fuer Bueros, Filialen oder Unternehmensgebaeude, regelmaessig, zuverlaessig und immer frisch.",
    detail: "Pauschalpreis auf Anfrage",
    highlight: true,
  },
  {
    script: "Event",
    title: "Veranstaltungsfloristik",
    desc: "Tischdekoration, Buehnendekoration, Empfangsbereich. Wir gestalten Ihr Business-Event von Anfang bis Ende.",
    detail: "Projektbasis",
    highlight: false,
  },
];

const benefits = [
  { title: "Zuverlaessige Lieferung", desc: "Puenktlich zu Ihrem vereinbarten Termin, ohne Aufwand fuer Sie." },
  { title: "Persoenliche Beratung", desc: "Wir besprechen Ihren Bedarf individuell und passen uns Ihrem Budget an." },
  { title: "Saisonale Auswahl", desc: "Immer frische, saisonale Blumen, kein Plastikmaterial, keine Kunstblumen." },
  { title: "Langfristige Partnerschaft", desc: "Viele unserer Geschaeftskunden arbeiten seit Jahren mit uns zusammen." },
];

export default function BusinessFlowers() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/flower1.jpeg"
          alt="Business Flowers Dorsten"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.88) 0%, rgba(27,43,122,0.25) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-28 md:py-36 max-w-6xl mx-auto">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            fuer Ihr Unternehmen
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "620px",
            }}
          >
            Business Flowers fuer Unternehmen
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.7,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginTop: "1.2rem",
              maxWidth: "480px",
            }}
          >
            Frische Blumen im Buero schaffen Atmosphaere, hinterlassen Eindruck und zeigen Wertschaetzung.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="https://floristik-koester.lokalerflorist.de"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#1B2B7A",
                background: "#F4C2C9",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                fontWeight: 700,
              }}
            >
              Angebot anfragen
            </a>
            <a
              href="tel:023629993954"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(250,244,238,0.35)",
                fontSize: "0.82rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
              }}
            >
              Anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Packages */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              unser Angebot
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Leistungen fuer Geschaeftskunden
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: p.highlight ? "#1B2B7A" : "#FAF4EE",
                  border: p.highlight ? "none" : "1.5px solid rgba(27,43,122,0.08)",
                }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: p.highlight ? "#F4C2C9" : "#C4545A", fontSize: "1.8rem", lineHeight: 1.2 }}>
                  {p.script}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#FAF4EE" : "#1B2B7A", fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#FAF4EE" : "#1B2B7A", opacity: 0.65, fontSize: "1rem", lineHeight: 1.8, flexGrow: 1 }}>
                  {p.desc}
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#F4C2C9" : "#C4545A", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {p.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                Ihre Vorteile
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
                Warum Unternehmen auf Floristik Koester vertrauen
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex flex-col gap-2" style={{ borderTop: "2px solid rgba(196,84,90,0.25)", paddingTop: "1rem" }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.1rem", fontWeight: 600 }}>
                    {b.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "0.95rem", lineHeight: 1.8 }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: "420px", position: "relative" }}>
            <Image src="/images/blume4.jpg" alt="Business Floristik" fill className="object-cover object-center" />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#ffffff" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Lassen Sie uns sprechen
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "0.8rem" }}>
          Jetzt unverbindliches Angebot anfragen
        </h2>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "1rem", lineHeight: 1.8, maxWidth: "440px", margin: "0 auto 2rem" }}>
          Wir erstellen Ihnen ein individuelles Angebot, kostenlos und ohne Verpflichtung.
        </p>
        <a
          href="https://floristik-koester.lokalerflorist.de"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-cormorant)",
            color: "#FAF4EE",
            background: "#C4545A",
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
          info@floristik-koester.de
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
