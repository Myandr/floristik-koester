import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const automatenInfos = [
  {
    script: "rund um die Uhr",
    title: "24 Stunden verfügbar",
    desc: "Unsere Blumenautomaten sind auch außerhalb der Öffnungszeiten für Sie erreichbar – für alle spontanen Momente, an denen ein Strauß Blumen genau das Richtige ist.",
  },
  {
    script: "frisch & handgebunden",
    title: "Qualität wie aus dem Laden",
    desc: "Die Sträuße im Automaten werden von uns frisch gebunden und regelmäßig aufgefüllt – dieselbe Qualität, die Sie auch aus unserem Geschäft kennen.",
  },
  {
    script: "einfach & schnell",
    title: "Bequeme Zahlung",
    desc: "Zahlen Sie bequem per Karte oder kontaktlos direkt am Automaten – kein Bargeld, kein Wartezeit.",
  },
];

export default function BlumenautomatenPage() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/blume3.jpg"
          alt="Meine Blumenautomaten Dorsten"
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
              maxWidth: "620px",
            }}
          >
            Meine Blumenautomaten
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
            Frische Blumensträuße von Floristik Köster – rund um die Uhr, auch außerhalb unserer Öffnungszeiten. Handgebunden, frisch und mit Liebe zum Detail.
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

      {/* Info Cards */}
      <div className="px-6 md:px-10 lg:px-16 py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              jederzeit erreichbar
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Blumen rund um die Uhr
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.5, fontSize: "1.05rem", lineHeight: 1.8, marginTop: "0.8rem", maxWidth: "520px", margin: "0.8rem auto 0" }}>
              Unsere Blumenautomaten bieten Ihnen die Möglichkeit, auch spontan und außerhalb der Ladenöffnungszeiten frische Blumen von Floristik Köster zu erwerben.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automatenInfos.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ background: "#FAF4EE", border: "1.5px solid rgba(27,43,122,0.06)" }}
              >
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.8rem", lineHeight: 1.2 }}>
                  {info.script}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.2 }}>
                  {info.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1rem", lineHeight: 1.85 }}>
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Standort CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Standort & Info
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 600, lineHeight: 1.2 }}>
            Wo finden Sie unsere Blumenautomaten?
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85 }}>
            Für aktuelle Standorte und Verfügbarkeit kontaktieren Sie uns gerne direkt. Wir informieren Sie über die nächstgelegenen Automaten in Dorsten.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
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
