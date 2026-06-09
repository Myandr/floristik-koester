import Image from "next/image";
import { BlurTextEffect } from "./BlurTextEffect";

export function AnlassSection() {
  return (
    <section id="anlass" className="py-24 md:py-32 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
              marginBottom: "0.3rem",
            }}
          >
            für jeden Anlass
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            <BlurTextEffect>Floristik für jeden Anlass</BlurTextEffect>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.6,
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginTop: "1rem",
              maxWidth: "540px",
              margin: "1rem auto 0",
            }}
          >
            Bei Floristik Köster finden Sie frische Blumen und kreative Werkstücke für die kleinen und großen Momente im Leben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-6"
            style={{ background: "#1B2B7A", minHeight: "420px" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "2rem", lineHeight: 1.2 }}>
              handgefertigt
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(2rem, 3.2vw, 2.9rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Blumensträuße & Blumengrüße
            </h3>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.15rem", lineHeight: 1.8 }}>
              Jeder Strauß ist ein Unikat — sorgfältig gebunden, stimmig in Farbe und Duft. Für jeden Anlass, jedes Gefühl.
            </p>
            <a href="https://floristik-koester.lokalerflorist.de" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
              Jetzt bestellen →
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ minHeight: "380px", position: "relative" }}>
            <Image src="/images/blume1.jpg" alt="Blumensträuße" fill className="object-cover object-center" />
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ minHeight: "380px", position: "relative" }}>
            <Image src="/images/blume2.jpg" alt="Hochzeitsfloristik" fill className="object-cover object-center" />
          </div>

          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col justify-center gap-6"
            style={{ background: "#1B2B7A", minHeight: "420px" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#F4C2C9", fontSize: "2rem", lineHeight: 1.2 }}>
              & Brautblumen
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", fontSize: "clamp(2rem, 3.2vw, 2.9rem)", fontWeight: 600, lineHeight: 1.15 }}>
              Hochzeitsfloristik & Brautsträuße
            </h3>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#FAF4EE", opacity: 0.8, fontSize: "1.15rem", lineHeight: 1.8 }}>
              Für den schönsten Tag Ihres Lebens gestalten wir atemberaubende Hochzeitsarrangements — Brautstrauß, Tischdekoration und florales Ambiente mit Herz und persönlicher Beratung.
            </p>
            <a href="https://floristik-koester.lokalerflorist.de" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
              Anfrage stellen →
            </a>
          </div>

          <div
            className="md:col-span-2 rounded-2xl p-10 md:p-14"
            style={{ background: "#FDF0F2" }}
          >
            <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2rem", lineHeight: 1.2, marginBottom: "0.4rem" }}>
              & vieles mehr
            </p>
            <h3
              style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "1.8rem" }}
            >
              Und vieles mehr für Sie
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { script: "& Gedenken", title: "Trauerfloristik & Kränze" },
                { script: "& Tischdeko", title: "Event- & Tischdekoration" },
                { script: "Flowers", title: "Business Flowers" },
                { script: "für Zuhause", title: "Blumen-Abos & Pflanzen" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-1.5">
                  <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "1.4rem" }}>{item.script}</p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.2rem", fontWeight: 600 }}>{item.title}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.05rem", marginTop: "1.8rem", fontStyle: "italic" }}>
              Individuelle Wünsche setzen wir gerne persönlich für Sie um.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
