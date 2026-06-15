import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const steps = [
  {
    num: "01",
    title: "Wunsch mitteilen",
    desc: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp. Anlass, Farbe, Budget. Kein Formular, kein Warten.",
  },
  {
    num: "02",
    title: "Wir binden Ihren Strauss",
    desc: "Frisch, handgefertigt, stimmig. Wir arbeiten mit saisonalen Blumen und legen größten Wert auf Qualität.",
  },
  {
    num: "03",
    title: "Abholen oder liefern lassen",
    desc: "Abholung in Dorsten jederzeit während der Öffnungszeiten. Lieferung auf Anfrage im Stadtgebiet.",
  },
];

const occasions = [
  { script: "Geburtstag", title: "Geburtstagssträusse" },
  { script: "Danke sagen", title: "Dankeschön & Aufmerksamkeit" },
  { script: "Genesung", title: "Genesungswünsche" },
  { script: "Willkommen", title: "Willkommen & Glückwunsch" },
  { script: "Liebe", title: "Romantische Sträusse" },
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
            schnell &amp; persönlich
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
      <div className="px-6 md:px-10 lg:px-16 py-12" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ height: "380px", position: "relative" }}>
            <Image src="/images/blume2.jpg" alt="Handgefertigte Sträusse" fill className="object-cover object-center" />
          </div>
          <div className="flex flex-col gap-6 py-8">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2 }}>
              handgemacht mit Herz
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Jeder Strauss ist ein Unikat
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
              Wir verwenden ausschließlich frische Saisonblumen, sorgfältig ausgewählt und liebevoll gebunden. Kein Massenprodukt, sondern ein persönliches Geschenk.
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
              für jeden Anlass
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600 }}>
              Wann wir für Sie da sind
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

      {/* Liefergebiete */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#FAF4EE" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              direkt zu Ihnen
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.2rem" }}>
              Unsere Liefergebiete
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "640px", margin: "0 auto" }}>
              Bei Floristik Köster bringen wir Blumenfreude und besondere Momente direkt zu Ihnen – frisch von Hand gebunden, kreativ gestaltet und zuverlässig geliefert. Egal, wo Sie sich in unserer Region befinden, wir sorgen dafür, dass Ihre Blumensträuße und Dekorationen pünktlich, frisch und liebevoll gebunden bei Ihnen ankommen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                script: "Dorsten",
                title: "Dorstener Altstadt, Hardt & Östrich",
                desc: "Wir versorgen die historische Altstadt von Dorsten sowie die Stadtteile Hardt und Östrich mit frischen Blumen und stilvollen Arrangements. Ob für Ihr Zuhause, Ihr Geschäft oder besondere Anlässe – wir sind für Sie da.",
              },
              {
                script: "Hervest",
                title: "Hervest & Holsterhausen",
                desc: "Auch in den Stadtteilen Hervest und Holsterhausen liefern wir unsere Blumensträuße direkt zu Ihnen nach Hause. Freuen Sie sich auf kreative Dekorationen, handgebunden und mit viel Liebe zum Detail.",
              },
              {
                script: "Region",
                title: "Wulfen, Deuten, Lembeck, Rhade & Reken",
                desc: "Unsere Liefergebiete umfassen auch Wulfen, Deuten, Lembeck, Rhade sowie die nahegelegene Stadt Reken. Wir bringen frische Blumen direkt zu Ihnen und sorgen dafür, dass Ihre besonderen Momente noch schöner werden.",
              },
              {
                script: "Schermbeck",
                title: "Schermbeck, Gahlen & Kirchhellen",
                desc: "In den Gemeinden Schermbeck, Gahlen und Kirchhellen sind wir ebenfalls unterwegs. Ob für private Feierlichkeiten, geschäftliche Veranstaltungen oder einfach nur, um jemandem eine Freude zu machen – wir liefern pünktlich, zuverlässig und frisch.",
              },
              {
                script: "Marl & Bottrop",
                title: "Marl Brassert, Alt Marl, Bottrop & Gladbeck",
                desc: "Unser Lieferservice erstreckt sich auch auf die Stadtteile Brassert und Alt Marl in Marl sowie die Städte Bottrop und Gladbeck. Vertrauen Sie auf unsere Expertise und genießen Sie den Komfort unseres sorgfältigen Online-Lieferservices.",
              },
              {
                script: "Haltern",
                title: "Haltern am See",
                desc: "Auch in Haltern am See sind wir für Sie da. Ob für Hochzeiten, Geburtstage oder andere festliche Anlässe – unsere wunderschönen Blumenarrangements erreichen Sie immer frisch und pünktlich.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-2xl p-8 flex flex-col gap-3"
                style={{ background: "#ffffff", border: "1.5px solid rgba(196,84,90,0.1)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.6rem", lineHeight: 1.2 }}>
                  {area.script}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {area.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "0.97rem", lineHeight: 1.8 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ihr Vorteil */}
          <div
            className="rounded-2xl p-10 md:p-14 text-center"
            style={{ background: "#1B2B7A" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Ihr Vorteil
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, marginBottom: "1.2rem" }}>
              Ihr Vorteil mit Floristik Köster
            </h3>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.9, maxWidth: "660px", margin: "0 auto" }}>
              Egal, wo Sie sich in unseren Liefergebieten befinden: Wir sorgen für Blumen, die Freude machen. Unsere Sträuße werden mit Liebe von Hand gebunden, sorgfältig ausgewählt und termingerecht geliefert – für unvergessliche Momente. Bestellen Sie noch heute und erleben Sie, wie Frische, Qualität und persönlicher Service Ihre Blumenfreude zu etwas ganz Besonderem machen.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#ffffff" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Wir freuen uns auf Sie
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "2rem" }}>
          Jetzt Strauss bestellen
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
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
              color: "#1B2B7A",
              border: "1.5px solid rgba(27,43,122,0.25)",
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

      <SiteFooter />
    </main>
  );
}
