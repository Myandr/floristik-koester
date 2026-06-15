import Image from "next/image";
import { BlurTextEffect } from "./BlurTextEffect";

export function AnlassSection() {
  return (
    <section id="anlass" className="py-24 md:py-32 px-6 md:px-10 lg:px-16" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            <BlurTextEffect>{"Floristik für jeden "}</BlurTextEffect>
            <span style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontWeight: 400, fontSize: "clamp(3rem, 6vw, 4.9rem)" }}>
              Anlass
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.6,
              fontSize: "1.25rem",
              lineHeight: 1.8,
              marginTop: "1rem",
              maxWidth: "540px",
              margin: "1rem auto 0",
            }}
          >
            Bei Floristik Köster finden Sie frische Blumen und kreative Werkstücke für die kleinen und großen Momente im Leben.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#C4545A",
              fontSize: "1.35rem",
              fontStyle: "italic",
              lineHeight: 1.7,
              marginTop: "1.2rem",
              maxWidth: "480px",
              margin: "1.2rem auto 0",
            }}
          >
            „Jeder Strauß wird individuell für Sie gebunden – keine Massenware."
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
            <a href="https://floristik-koester.lokalerflorist.de" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "1rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", border: "1.5px solid #F4C2C9", borderRadius: "999px", padding: "0.55rem 1.4rem", alignSelf: "flex-start" }}>
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
            <a href="https://floristik-koester.lokalerflorist.de" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-cormorant)", color: "#F4C2C9", fontSize: "1rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", border: "1.5px solid #F4C2C9", borderRadius: "999px", padding: "0.55rem 1.4rem", alignSelf: "flex-start" }}>
              Anfrage stellen →
            </a>
          </div>

          <div
            className="md:col-span-2 rounded-2xl p-10 md:p-14"
            style={{ background: "#FDF0F2" }}
          >

            <h3
              style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "1.8rem" }}
            >
              Und vieles mehr für Sie
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { script: "Gedenken", title: "Trauerfloristik & Kränze" },
                { script: "Tischdeko", title: "Event- & Tischdekoration" },
                { script: "Flowers", title: "Business Flowers" },
                { script: "für Zuhause", title: "Blumen-Abos" },
                { script: "& Geschenkideen", title: "Pflanzen & Geschenkideen" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <p style={{ fontFamily: "var(--font-great-vibes)", color: "#C4545A", fontSize: "2.2rem", lineHeight: 1.1 }}>{item.script}</p>
                  <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.2 }}>{item.title}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-cormorant)", color: "#1B2B7A", opacity: 0.6, fontSize: "1.25rem", marginTop: "1.8rem", fontStyle: "italic" }}>
              Individuelle Wünsche setzen wir gerne persönlich für Sie um.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
