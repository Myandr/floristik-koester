import Image from "next/image";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";

const values = [
  {
    script: "Leidenschaft",
    title: "Floristik als Berufung",
    desc: "Fuer uns sind Blumen mehr als ein Produkt. Jeder Strauss entsteht mit echter Freude am Handwerk und echtem Interesse am Menschen, fuer den er gedacht ist.",
  },
  {
    script: "Erfahrung",
    title: "Verwurzelt in Dorsten",
    desc: "Ueber 25 Jahre floristisches Handwerk. In dieser Zeit haben wir tausende Straeusse gebunden, Hochzeiten begleitet und Menschen eine Freude gemacht.",
  },
  {
    script: "Naehe",
    title: "Persoenliche Beratung",
    desc: "Wir nehmen uns Zeit fuer Sie. Kein Online-Formular ersetzt das persoenliche Gespraech, in dem wir gemeinsam den perfekten Strauss fuer Ihren Anlass finden.",
  },
];

const facts = [
  { value: "25+", label: "Jahre vor Ort" },
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "5★", label: "Google-Bewertung" },
  { value: "100%", label: "Handarbeit" },
];

export default function UnserTeam() {
  return (
    <main style={{ fontFamily: "var(--font-cormorant, serif)", minHeight: "100svh", background: "#ffffff" }}>
      <SiteNav />

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        <Image
          src="/images/blume2.jpg"
          alt="Unser Team Floristik Koester"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(27,43,122,0.6) 0%, rgba(27,43,122,0.75) 100%)", zIndex: 1 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#F4C2C9",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.4rem",
            }}
          >
            mit Herzblut dabei
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#FAF4EE",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.08,
              maxWidth: "600px",
            }}
          >
            Unser Team
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
            Leidenschaftliche Floristen, die Ihnen mit Herz und Erfahrung zur Seite stehen.
          </p>
        </div>
      </div>

      {/* Facts */}
      <div style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((f) => (
            <div key={f.label} className="text-center">
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, lineHeight: 1 }}>
                {f.value}
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.5, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.4rem" }}>
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dorine portrait */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ height: "500px", position: "relative" }}>
            <Image
              src="/images/Dorine KÃ¶ster.jpg"
              alt="Dorine Koester"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2.2rem", lineHeight: 1.2, marginBottom: "0.2rem" }}>
                Dorine Koester
              </p>
              <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.45, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Inhaberin &amp; Floristmeisterin
              </p>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.9 }}>
              Mit Leidenschaft und Herzblut fuehre ich Floristik Koester. Was als kleiner Blumenladen begann, ist heute ein fester Bestandteil Dorstens geworden. Ich liebe es, fuer Menschen Freude zu schaffen, durch Farben, Duft und die Schoenheit der Natur.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.7, fontSize: "1.1rem", lineHeight: 1.9 }}>
              Jeder Strauss, den wir binden, erzaehlt eine Geschichte. Ich freue mich darauf, auch Ihre Geschichte zu erzaehlen.
            </p>
            <a
              href="/kontakt"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "#FAF4EE",
                background: "#1B2B7A",
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                fontWeight: 600,
                display: "inline-block",
                alignSelf: "flex-start",
                marginTop: "0.5rem",
              }}
            >
              Uns besuchen
            </a>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
              was uns ausmacht
            </p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
              Unsere Werte
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 rounded-2xl p-8" style={{ background: "#ffffff" }}>
                <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.8rem", lineHeight: 1.2 }}>
                  {v.script}
                </p>
                <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.2 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1rem", lineHeight: 1.85 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Google Review */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-28" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2 }}>
            Ihre Meinung zählt
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 600, lineHeight: 1.2 }}>
            Wir freuen uns sehr über Ihre Google-Bewertung – teilen Sie Ihre Blumenfreude mit uns!
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.65, fontSize: "1.05rem", lineHeight: 1.85, maxWidth: "560px" }}>
            Ihre Zufriedenheit liegt uns am Herzen. Wenn Sie mit unserem Service glücklich sind, freuen wir uns sehr über eine positive Google-Bewertung. Ihre Rückmeldungen helfen uns, immer besser zu werden – und geben anderen Kunden einen Eindruck von der Qualität und Leidenschaft, die in unseren Blumenarrangements steckt.
          </p>
          <a
            href="https://www.google.com/maps/search/Floristik+Köster+Dorsten"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", background: "#C4545A", fontSize: "0.85rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", padding: "1rem 2.6rem", borderRadius: "999px", fontWeight: 700, display: "inline-block", marginTop: "0.5rem" }}
          >
            Jetzt auf Google bewerten
          </a>
          <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.35, fontSize: "0.8rem", letterSpacing: "0.1em", fontStyle: "italic" }}>
            Danke, dass Sie uns helfen, noch besser zu werden.
          </p>
        </div>
      </div>

      {/* Image strip */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ height: "280px" }}>
        {["/images/blume1.jpg", "/images/blume3.jpg", "/images/picture-2600.jpeg", "/images/blume4.jpg"].map((src, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }}>
            <Image src={src} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-10 lg:px-16 py-16 text-center" style={{ background: "#ffffff" }}>
        <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.2, marginBottom: "0.3rem" }}>
          Kommen Sie vorbei
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 600, marginBottom: "2rem" }}>
          Wir freuen uns auf Sie
        </h2>
        <a
          href="/kontakt"
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
          Oeffnungszeiten &amp; Kontakt
        </a>
      </div>

      <SiteFooter />
    </main>
  );
}
