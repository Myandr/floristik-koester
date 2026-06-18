import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const standorte = [
  {
    badge: "In Planung",
    name: "Blumenautomat in Wulfen",
    address: "Maredo Beef & Beer am Brauturm 12, 46286 Wulfen",
    hours: "24/7 geöffnet",
    payment: "Bargeld, Kartenzahlung möglich",
    sortiment: "Sträuße, dekorierte Pflanzen",
    images: [] as string[],
    imagesPortrait: [] as string[],
    mapsUrl: null,
  },
  {
    badge: null,
    name: "Blumenautomat in Voerde",
    address: "Senioren-Park carpe diem, Bahnhofstraße 97, 46562 Voerde",
    hours: "24/7 geöffnet",
    payment: "Bargeld, Kartenzahlung möglich",
    sortiment: "Sträuße, dekorierte Pflanzen",
    images: ["/images/blume1.jpg", "/images/blume2.jpg"] as string[],
    imagesPortrait: ["/images/automat.png", "/images/automat3.png"] as string[],
    mapsUrl: "https://maps.google.com/?q=Bahnhofstraße+97,+46562+Voerde",
  },
];

const gruende = [
  { emoji: "🌿", text: "Frische Blumen vom Floristen, 24/7 (auch Sonntags)" },
  { emoji: "💐", text: "Handgebundene Sträuße mit Liebe" },
  { emoji: "🌸", text: "Regionale Qualität" },
  { emoji: "⭐", text: "Zuverlässig & jederzeit verfügbar" },
];

const anlaesse = [
  "Geburtstag",
  "Jahrestag",
  "kleine Aufmerksamkeit",
  "spontane Überraschung",
];

export default function BlumenautomatenPage() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/blume3.jpg"
          alt="Blumenautomaten in Dorsten – frische Blumen 24/7"
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
            immer für Sie da
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "680px",
            }}
          >
            Blumenautomaten in Dorsten – frische Blumen 24/7
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              opacity: 0.75,
              fontSize: "1.1rem",
              lineHeight: 1.8,
              marginTop: "1.2rem",
              maxWidth: "520px",
            }}
          >
            Frische Blumen jederzeit kaufen – 24/7 an unseren Blumenautomaten in Dorsten. Egal ob früh am Morgen, spät am Abend oder an Sonn- und Feiertagen – bei uns bekommen Sie jederzeit frische Blumen aus regionaler Floristik.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="tel:023629993954"
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
              Standort erfragen
            </a>
            <a
              href="https://wa.me/491774878890"
              target="_blank"
              rel="noopener noreferrer"
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
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="px-6 md:px-10 lg:px-16 py-20" style={{ background: "#FAF4EE" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.15rem", lineHeight: 1.9, opacity: 0.8 }}>
            Floristik Köster bringt frische Blumen direkt zu Ihnen: Unsere modernen Blumenautomaten stehen an mehreren Standorten in Dorsten und versorgen Sie rund um die Uhr mit liebevoll gebundenen Blumensträußen.
          </p>
        </div>
      </div>

      {/* Standorte */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              jederzeit erreichbar
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Unsere Blumenautomaten in Dorsten und Umgebung
            </h2>
          </div>

          <div className="flex flex-col gap-12">
            {standorte.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(27,43,122,0.07)" }}
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 600, lineHeight: 1.2 }}>
                      {s.name}
                    </h3>
                    {s.badge && (
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          background: "#F4C2C9",
                          color: "#1B2B7A",
                          fontSize: "0.75rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                          padding: "0.3rem 0.9rem",
                          borderRadius: "999px",
                        }}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.4rem" }}>
                    {s.address}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Öffnungszeiten", value: s.hours },
                      { label: "Zahlungsmethoden", value: s.payment },
                      { label: "Sortiment", value: s.sortiment },
                    ].map((item) => (
                      <div key={item.label} className="flex flex-col gap-1">
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>
                          {item.label}
                        </span>
                        <span style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1rem", lineHeight: 1.6 }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.4rem" }}>
                    Unsere Automaten werden täglich frisch von unserer Floristik bestückt.
                  </p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1rem", fontWeight: 600 }}>
                    Kaufe Blumen jederzeit – 24 Stunden am Tag, 7 Tage die Woche.
                  </p>
                  {s.mapsUrl && (
                    <div className="mt-6">
                      <a
                        href={s.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          color: "#FAF4EE",
                          background: "#C4545A",
                          fontSize: "0.82rem",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          padding: "0.75rem 1.8rem",
                          borderRadius: "999px",
                          fontWeight: 700,
                          display: "inline-block",
                        }}
                      >
                        Routenplaner
                      </a>
                    </div>
                  )}
                </div>
                {s.images.length > 0 && (
                  <div>
                    <div className="grid grid-cols-2 gap-1">
                      {s.images.map((img, i) => (
                        <div key={i} className="relative" style={{ height: "220px" }}>
                          <Image src={img} alt={`${s.name} Bild ${i + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    {s.imagesPortrait.length > 0 && (
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {s.imagesPortrait.map((img, i) => (
                          <div key={i} className="relative" style={{ height: "380px" }}>
                            <Image src={img} alt={`${s.name} Automat ${i + 1}`} fill className="object-cover object-center" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frische-Info */}
      <div className="px-6 md:px-10 lg:px-16 py-16" style={{ background: "#FAF4EE" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.1rem", lineHeight: 1.9, opacity: 0.8 }}>
            Unsere Blumenautomaten sorgen durch moderne Kühlung und Frischluftsysteme für dauerhaft frische Blumen – wie im Fachgeschäft.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.05rem", lineHeight: 1.7, marginTop: "1rem", fontWeight: 600 }}>
            Finde jetzt deinen Blumenautomaten in der Nähe von Dorsten und hole dir frische Blumen – jederzeit verfügbar.
          </p>
        </div>
      </div>

      {/* Warum Floristik Köster */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              echte Floristik
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Warum Floristik Köster?
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "1.05rem", lineHeight: 1.8, marginTop: "0.8rem" }}>
              Bei uns bekommst du keine Massenware, sondern:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {gruende.map((g) => (
              <div
                key={g.text}
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(27,43,122,0.06)" }}
              >
                <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>{g.emoji}</span>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.05rem", lineHeight: 1.75 }}>
                  {g.text}
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1rem", lineHeight: 1.8, marginTop: "1.6rem", textAlign: "center" }}>
            Unsere Blumenautomaten stehen für Qualität, Frische und Vertrauen – genau das, was du von echter Floristik erwartest.
          </p>
        </div>
      </div>

      {/* Anlässe */}
      <div className="px-6 md:px-10 lg:px-16 py-20" style={{ background: "#FAF4EE" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
            für jeden Moment
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "1.4rem" }}>
            Blumen für jeden Anlass – jederzeit
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.55, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.6rem" }}>
            Ob:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {anlaesse.map((a) => (
              <span
                key={a}
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  background: "#ffffff",
                  border: "1.5px solid rgba(27,43,122,0.15)",
                  fontSize: "1rem",
                  padding: "0.55rem 1.4rem",
                  borderRadius: "999px",
                }}
              >
                {a}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "1.1rem", fontWeight: 600 }}>
            👉 Mit unseren Blumenautomaten bist du immer vorbereitet.
          </p>
          <div className="flex gap-4 flex-wrap justify-center mt-10">
            <a
              href="tel:023629993954"
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
              02362 9993954
            </a>
            <a
              href="https://wa.me/491774878890"
              target="_blank"
              rel="noopener noreferrer"
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
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
