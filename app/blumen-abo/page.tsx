import Image from "next/image";
import { SubPageNav } from "../components/SubPageNav";

const plans = [
  {
    script: "Klassisch",
    title: "Woechentliches Abo",
    freq: "Jede Woche",
    desc: "Jeden Montag ein frischer Saisonstrauss, zum Abholen oder auf Wunsch geliefert.",
    highlight: false,
  },
  {
    script: "Beliebt",
    title: "Zweiwochiges Abo",
    freq: "Alle 2 Wochen",
    desc: "Der perfekte Rhythmus fuer alle, die regelmaessig Freude an frischen Blumen haben moechten.",
    highlight: true,
  },
  {
    script: "Entspannt",
    title: "Monatliches Abo",
    freq: "Einmal im Monat",
    desc: "Ein besonderes Arrangement pro Monat, stimmungsvoll und individuell gebunden.",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Kann ich das Abo jederzeit pausieren?",
    a: "Ja. Urlaub, Krankheit oder einfach eine Pause, informieren Sie uns kurz und wir passen uns an.",
  },
  {
    q: "Wo kann ich die Blumen abholen?",
    a: "In unserem Laden an der Lippestrasse in Dorsten, waehrend der regulaeren Oeffnungszeiten.",
  },
  {
    q: "Gibt es auch Lieferung?",
    a: "Auf Anfrage liefern wir im Stadtgebiet Dorsten. Bitte sprechen Sie uns direkt an.",
  },
  {
    q: "Kann ich bestimmte Blumen wuenschen?",
    a: "Gerne! Wir beruecksichtigen Farbwuensche, Allergien oder besondere Vorlieben, einfach beim Beratungsgespraech mitteilen.",
  },
];

export default function BlumenAbo() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SubPageNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/flower1.jpeg"
          alt="Blumen Abo Dorsten"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.88) 0%, rgba(27,43,122,0.2) 100%)", zIndex: 1 }}
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
            regelmaessige Freude
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
            Blumen-Abo fuer Haus &amp; Familie
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
            Frische Saisonblumen regelmaessig, ohne Aufwand, immer ueberraschend, immer handgemacht. Das perfekte Geschenk an sich selbst oder an jemanden Besonderen.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="https://wa.me/491774878890"
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
              Abo starten
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
              Beraten lassen
            </a>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              Ihr Rhythmus
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Waehlen Sie Ihren Abo-Rhythmus
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.5, fontSize: "1rem", lineHeight: 1.8, marginTop: "0.8rem" }}>
              Alle Preise nach persoenlicher Absprache, wir passen uns Ihrem Budget an.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
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
                <div>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#FAF4EE" : "#1B2B7A", opacity: 0.5, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                    {p.freq}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#FAF4EE" : "#1B2B7A", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "var(--font-cormorant)", color: p.highlight ? "#FAF4EE" : "#1B2B7A", opacity: 0.65, fontSize: "1rem", lineHeight: 1.8, flexGrow: 1 }}>
                  {p.desc}
                </p>
                <a
                  href="https://wa.me/491774878890"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: p.highlight ? "#1B2B7A" : "#FAF4EE",
                    background: p.highlight ? "#F4C2C9" : "#1B2B7A",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    padding: "0.7rem 1.5rem",
                    borderRadius: "999px",
                    fontWeight: 700,
                    display: "inline-block",
                    alignSelf: "flex-start",
                    marginTop: "0.5rem",
                  }}
                >
                  Jetzt anfragen
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gift section */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-20" style={{ background: "#FDF0F2" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5 py-8">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              auch als Geschenk
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Das Blumen-Abo als Geschenkidee
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Schenken Sie Freude, die immer wieder kommt, fuer Mutter, Oma, die beste Freundin oder einen lieben Menschen, dem Sie Gutes tun moechten.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir gestalten auf Wunsch eine persoenliche Geschenkkarte und kuemmern uns um alles Weitere.
            </p>
            <a
              href="https://wa.me/491774878890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#C4545A",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.8rem 1.8rem",
                borderRadius: "999px",
                fontWeight: 700,
                display: "inline-block",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Als Geschenk bestellen
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ height: "380px", position: "relative" }}>
            <Image src="/images/flower3.jpeg" alt="Blumen Abo Geschenk" fill className="object-cover object-center" />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              Ihre Fragen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}>
              Haeufige Fragen
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {faqs.map((f) => (
              <div key={f.q} style={{ borderBottom: "1px solid rgba(27,43,122,0.08)", paddingBottom: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.7rem" }}>
                  {f.q}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#1B2B7A" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          bereit fuer Ihr Abo?
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "2rem" }}>
          Jetzt einfach anfragen
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
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
              padding: "0.9rem 2.2rem",
              borderRadius: "999px",
              fontWeight: 700,
            }}
          >
            WhatsApp schreiben
          </a>
          <a
            href="tel:023629993954"
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              border: "1.5px solid rgba(250,244,238,0.3)",
              fontSize: "0.85rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.9rem 2.2rem",
              borderRadius: "999px",
            }}
          >
            02362 9993954
          </a>
        </div>
      </div>

      <footer className="py-6 px-6 md:px-10 text-center" style={{ borderTop: "1px solid rgba(27,43,122,0.08)" }}>
        <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.35, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
          {new Date().getFullYear()} Floristik Koester &middot; Alle Rechte vorbehalten
        </p>
      </footer>
    </main>
  );
}
