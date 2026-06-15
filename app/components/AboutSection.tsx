import { BlurTextEffect } from "./BlurTextEffect";

export function AboutSection() {
  return (
    <section
      id="ueber-uns"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              lineHeight: 1.35,
            }}
          >
            <BlurTextEffect>vom Blütenglück</BlurTextEffect>
            <br />
            <BlurTextEffect delay={0.3}>zum Dekostück</BlurTextEffect>
          </p>
          <div
            style={{
              width: "44px",
              height: "1px",
              background: "rgba(27, 43, 122, 0.2)",
              marginBottom: "1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(1.4rem, 2.6vw, 1.95rem)",
              fontWeight: 300,
              lineHeight: 1.55,
              opacity: 0.75,
              fontStyle: "italic",
            }}
          >
            Floraler Ausdruck ist eine Sprache — wir übersetzen Gefühle in Blüten.
          </p>
        </div>

        <div className="space-y-5">
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.72,
              fontSize: "0.9rem",
              lineHeight: 1.85,
            }}
          >
            Wir sind ein unabhängiges Blumengeschäft in Dorsten — leidenschaftlich,
            handwerklich, persönlich. Jedes Gesteck, das unsere Werkstatt verlässt,
            ist ein Unikat: stimmig in Farbe, harmonisch in Form, ausdrucksstark in
            jedem Detail.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              opacity: 0.72,
              fontSize: "0.9rem",
              lineHeight: 1.85,
            }}
          >
            Von der spontanen Geburtstagsüberraschung bis zur aufwendigen
            Hochzeitsdekoration — wir beraten Sie persönlich, mit Erfahrung und
            Herzblut. Kurzfristige Bestellungen sind oft möglich.
          </p>
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
              marginTop: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            Strauß bestellen
          </a>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {["Frische Saisonblumen", "Handgefertigt", "5★ auf Google"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full"
                style={{
                  border: "1px solid rgba(27, 43, 122, 0.2)",
                  color: "#1B2B7A",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
