const faqs = [
  {
    q: "Bietet ihr Blumenlieferung in Dorsten an?",
    a: "Ja, wir liefern Blumen innerhalb von Dorsten nach Absprache zuverlässig aus.",
  },
  {
    q: "Kann ich Blumen telefonisch vorbestellen?",
    a: "Gerne! Rufen Sie uns an und wir bereiten Ihren Blumenstrauß vor.",
  },
  {
    q: "Macht ihr Hochzeits- und Trauerfloristik?",
    a: "Ja, wir gestalten individuelle Hochzeits- und Trauerfloristik mit viel Feingefühl.",
  },
  {
    q: "Wie kurzfristig sind Bestellungen möglich?",
    a: "Oft auch am selben Tag – sprechen Sie uns einfach an.",
  },
];

export function FaqSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 lg:px-16"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p
            style={{
              fontFamily: "var(--font-great-vibes)",
              color: "#C4545A",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              lineHeight: 1.2,
              marginBottom: "0.3rem",
            }}
          >
            Ihre Fragen
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#1B2B7A",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
            }}
          >
            Häufige Fragen zu unserem Blumenladen
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((f) => (
            <div
              key={f.q}
              style={{ borderBottom: "1px solid rgba(27,43,122,0.08)", paddingBottom: "2rem", marginBottom: "2rem" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {f.q}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  color: "#1B2B7A",
                  opacity: 0.6,
                  fontSize: "1.05rem",
                  lineHeight: 1.85,
                }}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="tel:023629993954"
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
            }}
          >
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
