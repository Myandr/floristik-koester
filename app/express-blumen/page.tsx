import Image from "next/image";
import { SiteNav } from "../components/SiteNav";

const steps = [
  {
    num: "01",
    title: "Wunsch mitteilen",
    desc: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Anlass, Farbe, Budget. Kein Formular, kein Warten.",
  },
  {
    num: "02",
    title: "Wir binden Ihren Strauss",
    desc: "Frisch, handgefertigt, stimmig. Wir arbeiten mit saisonalen Blumen und legen groessten Wert auf Qualitaet.",
  },
  {
    num: "03",
    title: "Abholen oder liefern lassen",
    desc: "Abholung in Dorsten jederzeit waehrend der Oeffnungszeiten. Lieferung auf Anfrage im Stadtgebiet.",
  },
];

const occasions = [
  { script: "Geburtstag", title: "Geburtstagsstaerusse" },
  { script: "Danke sagen", title: "Dankeschoen & Aufmerksamkeit" },
  { script: "Genesung", title: "Genesungswuensche" },
  { script: "Willkommen", title: "Willkommen & Glueckwunsch" },
  { script: "Liebe", title: "Romantische Staerusse" },
  { script: "Spontan", title: "Einfach so" },
];

export default function ExpressBlumen() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/blume1.jpg"
          alt="Express Blumen Dorsten"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(27,43,122,0.85) 0%, rgba(27,43,122,0.25) 100%)", zIndex: 1 }}
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
            schnell &amp; persoenlich
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
            Frische Blumen per Express
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
            Kein langer Vorlauf. Einfach anrufen oder WhatsApp schreiben &mdash; wir binden Ihren Strauss noch heute.
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
              WhatsApp schreiben
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

      {/* Steps */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              so einfach
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              In 3 Schritten zum Strauss
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col gap-4" style={{ borderTop: "2px solid #F4C2C9", paddingTop: "1.8rem" }}>
                <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "2.8rem", fontWeight: 600, lineHeight: 1, opacity: 0.35 }}>
                  {s.num}
                </span>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.8 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + info */}
      <div className="px-6 md:px-10 lg:px-16 py-12" style={{ background: "#FDF0F2" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ height: "380px", position: "relative" }}>
            <Image src="/images/blume2.jpg" alt="Handgefertigte Staerusse" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6 py-8">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              handgemacht mit Herz
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Jeder Strauss ist ein Unikat
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir verwenden ausschliesslich frische Saisonblumen, sorgfaeltig ausgewaehlt und liebevoll gebunden. Kein Massenprodukt, sondern ein persoenliches Geschenk.
            </p>
            <div className="flex flex-col gap-2">
              {["Frische Saisonblumen", "Ab Lager oder Vorbestellung", "Beratung inklusive", "Preis nach Absprache"].map((item) => (
                <p key={item} style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ fontSize: "0.5rem", opacity: 0.7 }}>&#9679;</span> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Occasions */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              fuer jeden Anlass
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}>
              Wann wir fuer Sie da sind
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {occasions.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl p-7 flex flex-col gap-2"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(196,84,90,0.1)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", lineHeight: 1.2 }}>
                  {o.script}
                </p>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.3 }}>
                  {o.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#1B2B7A" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Wir freuen uns auf Sie
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "2rem" }}>
          Jetzt Strauss bestellen
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://floristik-koester.lokalerflorist.de"
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
